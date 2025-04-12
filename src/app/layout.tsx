import '@styles/globals.css';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import AppProviders from 'AppProvider';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Ranvijay Portfolio!',
  description: 'Portfolio of Ranvijay Kumar Singh',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AppProviders>
            <Header />
            <div className="min-h-screen mt-14">{children}</div>
            <Footer />
          </AppProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
