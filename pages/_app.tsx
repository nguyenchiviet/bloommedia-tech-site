import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
