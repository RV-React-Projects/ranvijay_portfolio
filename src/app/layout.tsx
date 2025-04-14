import '@styles/globals.css';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { roboto } from '@configs/Fonts';
import AppProviders from 'AppProvider';

export const metadata: Metadata = {
  title: 'Ranvijay Portfolio!',
  description: 'Portfolio of Ranvijay Kumar Singh',
  icons: { icon: 'favicon.svg' },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="en" className={roboto.variable}>
      <body>
        <AppProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </ThemeProvider>
        </AppProviders>
      </body>
    </html>
  );
}
