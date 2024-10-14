import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>
        Property Management Tool for STR - Streamline Web Check-Ins, Amenity Reservations, and More
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <meta name="keywords" content="property management, STR, short-term rentals, web check-in, amenity reservations, document management" />
        <meta name="description" content="A comprehensive property management tool for Short-Term Rentals (STR), offering seamless web check-ins, admin assignment, parking rentals, amenity reservations, document management, guest tracking, and notifications." />

        {/* Schema.org for Google */}
        <meta itemProp="name" content="Property Management Tool for STR" />
        <meta itemProp="description" content="A tool that streamlines property management for STR, featuring web check-ins, admin assignments, parking rentals, and more." />
        <meta itemProp="image" content="https://your-website.com/img/seo-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Property Management Tool for STR - Streamline Web Check-Ins" />
        <meta name="twitter:description" content="Manage STR properties with ease using web check-ins, amenity reservations, parking rentals, and more." />
        <meta name="twitter:image" content="https://your-website.com/img/twitter-image.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Property Management Tool for STR - Web Check-Ins, Admin Assignments, and More" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com" />
        <meta property="og:image" content="https://your-website.com/img/og-image.png" />
        <meta property="og:description" content="A robust property management tool for STRs, with web check-ins, amenity reservations, document management, and more." />
        <meta property="og:site_name" content="Property Management Tool for STR" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://your-website.com" />
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body id="root" className="loading bg-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <SupabaseProvider>
            <main id="skip">{children}</main>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
