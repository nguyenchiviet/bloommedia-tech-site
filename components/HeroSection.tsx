'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection({ locale, initialData }: { locale: string, initialData?: any }) {
  const [dict, setDict] = useState(initialData || {});
  
  useEffect(() => {
    // Only fetch if we don't have initial data
    if (!initialData) {
      import(`@/public/locales/${locale}/home.json`)
        .then((module) => {
          setDict({ home: module.default });
        })
        .catch(() => {
          // Fallback to English if locale doesn't exist
          import('@/public/locales/en/home.json')
            .then((module) => {
              setDict({ home: module.default });
            });
        });
    }
  }, [locale, initialData]);
  
  if (!dict.home) return <div>Loading...</div>;
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-lg">
          {dict.home.hero?.title || ''}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl mx-auto text-shadow-md">
          {dict.home.hero?.subtitle || ''}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90">
            <Link href={`/${locale}/products`}>
              {dict.home.hero?.cta?.products || 'Products'}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href={`/${locale}/contact`}>
              {dict.home.hero?.cta?.contact || 'Contact Us'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
