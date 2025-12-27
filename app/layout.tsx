import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* Modern Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-bold tracking-tighter text-xl text-white">PSPIPES<span className="text-rose-500">.</span></span>
            <div className="space-x-8 text-sm font-medium text-slate-400">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#blog" className="hover:text-white transition-colors">Blog</a>
              <a href="https://moto.pspipes.net" className="px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-500 transition-all">Launch Moto App</a>
            </div>
          </div>
        </nav>

        <main className="pt-16">{children}</main>

        <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} pspipes. Built with Next.js & Passion.
        </footer>
      </body>
    </html>
  );
}