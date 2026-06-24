import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruben Glenn Madredano | Senior Software Engineer",
  description: "Senior Full Stack Engineer with 10+ years of experience. Creator of MotoClub Connect and BadgeHero. Expert in Node.js, Angular, Next.js, and Ionic.",
  alternates: {
    canonical: 'https://www.pspipes.net',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
