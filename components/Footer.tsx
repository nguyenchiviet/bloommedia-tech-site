import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';

export async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);
  
  return (
    <footer className="bg-black/30 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.common.footer.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white/80">
                  {dict.common.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="hover:text-white/80">
                  {dict.common.nav.careers}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/culture`} className="hover:text-white/80">
                  {dict.common.nav.culture}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.common.footer.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white/80">
                  {dict.common.footer.overview}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.common.footer.resources}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white/80">
                  {dict.common.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.common.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white/80">
                  {dict.common.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  {dict.common.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} CompanyName. {dict.common.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
