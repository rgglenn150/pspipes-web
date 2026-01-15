import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pspipes.net'),
  title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
  description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ['/og-image.jpg'], // You'll add this later for SEO
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PSPIPES',
  url: 'https://www.pspipes.net',
  description: 'Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.',
  author: {
    '@type': 'Person',
    name: 'Patrick Pipes',
    url: 'https://www.pspipes.net',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.pspipes.net/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-[#0a0a0a] text-slate-200`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}