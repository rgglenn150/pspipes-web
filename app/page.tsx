import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSPIPES | Software Engineer | Tech Enthusiast | Traveler",
  description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect and BadgeHero.",
  alternates: {
    canonical: 'https://www.pspipes.net',
  },
  openGraph: {
    title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
    description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect and BadgeHero.",
    url: 'https://www.pspipes.net',
    siteName: 'pspipes',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "pspipes | Software Engineer | Tech Enthusiast | Traveler",
    description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect and BadgeHero.",
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsSection />
    </div>
  );
}
