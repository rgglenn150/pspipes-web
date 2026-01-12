import Hero from './components/Hero';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
  description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.",
  alternates: {
    canonical: 'https://pspipes.net',
  },
  openGraph: {
    title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
    description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.",
    url: 'https://pspipes.net',
    siteName: 'pspipes',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
    description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.",
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
