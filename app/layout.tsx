import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pspipes.net'),
  title: "pspipes | Software Engineer & Moto Enthusiast",
  description: "Senior Software Engineer specializing in Node.js, Angular, and Next.js. Creator of MotoClub Connect.",
  openGraph: {
    images: ['/og-image.jpg'], // You'll add this later for SEO
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-[#0a0a0a] text-slate-200`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}