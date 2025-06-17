import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import {getMessages} from 'next-intl/server';

// Optimized font loading with preload
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

// Separate viewport export for Next.js 15
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#722F37", // Wine burgundy
};

// Root metadata will be overridden by page-specific metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://wineimportthailand.com'),
  title: {
    template: '%s | Wine Import Thailand',
    default: 'Wine Import Thailand',
  },
  
  // Favicon and app icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    shortcut: '/favicon.ico',
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Basic robots for root
  robots: {
    index: true,
    follow: true,
  },
  
  // Verification tags for search engines
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical hero images */}
        <link rel="preload" as="image" href="/images/hero-wine-vineyard.webp" />
        <link rel="preload" as="image" href="/images/hero-winery.webp" />
        <link rel="preload" as="image" href="/images/hero-container-ship.webp" />
        <link rel="preload" as="image" href="/images/hero-bangkok-skyline.webp" />
      </head>
      <body className="font-montserrat antialiased" suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
} 