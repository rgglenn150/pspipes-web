import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pspipes.net'),
  title: "Ruben Glenn Madredano | Senior Software Engineer",
  description: "Senior Full Stack Engineer with 10+ years of experience. Creator of MotoClub Connect and BadgeHero. Expert in Node.js, Angular, Next.js, and Ionic.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ruben Glenn Madredano | Senior Software Engineer",
    description: "Senior Full Stack Engineer with 10+ years of experience. Creator of MotoClub Connect and BadgeHero.",
    url: 'https://www.pspipes.net',
    siteName: 'pspipes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ruben Glenn Madredano | Senior Software Engineer",
    description: "Senior Full Stack Engineer with 10+ years of experience. Creator of MotoClub Connect and BadgeHero.",
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PSPIPES',
    url: 'https://www.pspipes.net',
    description: 'Senior Full Stack Engineer with 10+ years of experience. Creator of MotoClub Connect and BadgeHero.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.pspipes.net/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ruben Glenn Madredano',
    url: 'https://www.pspipes.net',
    jobTitle: 'Senior Software Engineer',
    description: 'Senior Full Stack Engineer with 10+ years of experience in web and mobile application development.',
    sameAs: [
      'https://www.linkedin.com/in/ruben-glenn-madredano/',
    ],
    knowsAbout: ['Angular', 'Node.js', 'Next.js', 'MongoDB', 'Ionic', 'Smart Contracts', 'AI Automation'],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-[#0a0a0a] text-slate-200`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}