import { HeroSection } from '@/components/HeroSection';
import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { getDictionary } from '@/lib/dictionary';

// Server Component - no need for 'use client'
export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const dict = await getDictionary(locale);
  
  return (
    <>
      <HeroSection locale={locale} initialData={dict} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white text-shadow-md">{dict.home.features.title}</h2>
            <p className="text-xl text-white max-w-2xl mx-auto text-shadow-sm">
              {dict.home.features.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.home.features.items.map((feature: any, index: number) => (
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
