'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { i18n } from '@/next-i18next.config';

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLanguageChange = (newLocale: string) => {
    // Get the path without the locale prefix
    if (!pathname) return;
    
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '';
    
    // Navigate to the same page but with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      {i18n.locales.map((locale) => (
        <Button
          key={locale}
          variant="ghost"
          size="sm"
          className={`text-white ${currentLocale === locale ? 'bg-white/20' : 'hover:bg-white/10'}`}
          onClick={() => handleLanguageChange(locale)}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
