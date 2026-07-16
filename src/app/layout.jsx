import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SmoothScroller } from '../components/providers/smooth-scroller';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { WebVitals } from '../components/seo/web-vitals';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  metadataBase: new URL('https://chetanwebstudio.com'),
  title: 'Chetan Web Studio | Premium Web & Digital Design',
  description: 'A premium digital agency specializing in high-performance web development and bespoke digital experiences for global brands.',
  openGraph: {
    title: 'Chetan Web Studio | Premium Web & Digital Design',
    description: 'A premium digital agency specializing in high-performance web development and bespoke digital experiences for global brands.',
    url: 'https://chetanwebstudio.com',
    siteName: 'Chetan Web Studio',
    images: [
      {
        url: 'https://chetanwebstudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chetan Web Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chetan Web Studio | Premium Web & Digital Design',
    description: 'A premium digital agency specializing in high-performance web development and bespoke digital experiences for global brands.',
    images: ['https://chetanwebstudio.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0a] text-[#f5f5f5]`}>
        <WebVitals />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Chetan Web Studio",
              "image": "https://chetanwebstudio.com/images/og-image.jpg",
              "url": "https://chetanwebstudio.com",
              "priceRange": "$$$$",
              "description": "A premium digital agency specializing in bespoke, high-performance web design and development for global brands.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://twitter.com/chetanwebstudio",
                "https://linkedin.com/company/chetanwebstudio"
              ]
            })
          }}
        />
        <SmoothScroller>
          <Header />
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
