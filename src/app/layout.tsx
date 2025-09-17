import '@styles/globals.css';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Footer from '@components/layout/Footer';
import GlassyBubbles from '@components/motion-primitives/glassy-bubbles';
import NavBar from '@components/navbar/navbar';
import { Toaster } from '@components/ui/sonner';
import { roboto } from '@configs/Fonts';
import AppProviders from 'AppProvider';

export const metadata: Metadata = {
  title: 'Ranvijay Portfolio!',
  description: 'Portfolio of Ranvijay Kumar Singh',
  icons: { icon: 'favicon.svg' },
  metadataBase: new URL(
    'https://rv-react-projects.github.io/ranvijay_portfolio',
  ),
  alternates: {
    canonical: 'https://rv-react-projects.github.io/ranvijay_portfolio/',
  },
  openGraph: {
    title: 'Ranvijay Portfolio',
    description: 'Professional portfolio of Ranvijay Kumar Singh',
    type: 'website',
    url: 'https://rv-react-projects.github.io/ranvijay_portfolio/',
    images: [
      {
        url: '/project.png',
        width: 1200,
        height: 630,
        alt: 'Ranvijay Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranvijay Portfolio',
    description: 'Professional portfolio of Ranvijay Kumar Singh',
    images: ['/project.png'],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${roboto.variable} scroll-smooth `}>
      <body>
        <AppProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <NavBar />
            <GlassyBubbles count={12} />
            {/* <Header /> */}
            <div className="min-h-screen">{children}</div>
            <Toaster position="top-right" richColors closeButton />
            <Footer />
          </ThemeProvider>
        </AppProviders>
      </body>
    </html>
  );
}
