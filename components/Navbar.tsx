'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useEffect, useState } from 'react';

export function Navbar({ locale }: { locale: string }) {
  const [dictionary, setDictionary] = useState<any>({
    common: {
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        careers: 'Careers',
        culture: 'Culture',
        contact: 'Contact'
      }
    }
  });
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Fetch dictionary on the client side
    const loadDictionary = async () => {
      try {
        const dict = await import(`@/public/locales/${locale}/index`).then(module => module.default);
        setDictionary(dict);
      } catch (error) {
        console.error('Failed to load dictionary:', error);
      }
    };
    
    loadDictionary();
  }, [locale]);
  
  // Return null on first render to avoid hydration mismatch
  if (!mounted) {
    return null;
  }
  
  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-2xl font-bold text-white">
              CompanyName
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={`/${locale}`} className="text-white hover:text-white/80">
              {dictionary.common.nav.home}
            </Link>
            <Link href={`/${locale}/about`} className="text-white hover:text-white/80">
              {dictionary.common.nav.about}
            </Link>
            <Link href={`/${locale}/products`} className="text-white hover:text-white/80">
              {dictionary.common.nav.products}
            </Link>
            <Link href={`/${locale}/careers`} className="text-white hover:text-white/80">
              {dictionary.common.nav.careers}
            </Link>
            <Link href={`/${locale}/culture`} className="text-white hover:text-white/80">
              {dictionary.common.nav.culture}
            </Link>
            <Link href={`/${locale}/contact`} className="text-white hover:text-white/80">
              {dictionary.common.nav.contact}
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <Button className="bg-white text-purple-900 hover:bg-white/90">
              {dictionary.common.nav.contact}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
