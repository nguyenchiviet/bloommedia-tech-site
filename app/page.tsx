'use client';

import { HeroSection } from '@/components/HeroSection';
import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [locale, setLocale] = useState('en');
  const [dict, setDict] = useState<any>({});
  const router = useRouter();
  
  useEffect(() => {
    // Get locale from URL or use default
    const pathSegments = window.location.pathname.split('/');
    const localeFromPath = pathSegments[1];
    
    // Check if it's a valid locale
    if (localeFromPath && ['en', 'vi'].includes(localeFromPath)) {
      setLocale(localeFromPath);
      
      // Load translations
      import(`@/public/locales/${localeFromPath}/home.json`)
        .then((module) => {
          setDict({ home: module.default });
        })
        .catch(() => {
          // Fallback to English
          import('@/public/locales/en/home.json')
            .then((module) => {
              setDict({ home: module.default });
            });
        });
    } else {
      // Redirect to default locale if no locale in URL
      router.push('/en');
    }
  }, [router]);
  
  if (!dict.home) return <div>Loading...</div>;
  
  return (
    <>
      <HeroSection locale={locale} initialData={dict} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white text-shadow-md">
              {dict.home.features?.title || ''}
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto text-shadow-sm">
              {dict.home.features?.subtitle || ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(dict.home.features?.items || []).map((feature: any, index: number) => (
              <GlassmorphicCard 
                key={index} 
                highlightTop={true}
                className="p-8"
              >
                <h3 className="text-xl font-semibold mb-4 text-white text-shadow-sm">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
