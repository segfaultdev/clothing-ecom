import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/common/Navigation';

export const metadata: Metadata = {
  title: 'StyleHub - Your Fashion Destination',
  description: 'Discover quality fashion and timeless style at StyleHub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
