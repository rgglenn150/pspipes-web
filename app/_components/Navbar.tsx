import Link from "next/link";
import Image from "next/image";
import { getAllCategories } from "@/lib/sanity/client";
import BlogDropdown from "./BlogDropdown";

export default async function Navbar() {
  const categories = await getAllCategories();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tighter text-xl text-white hover:opacity-80 transition-opacity">
          <Image
            src="/images/branding/logo-192x192.png"
            alt="PSPIPES"
            width={32}
            height={32}
            className="rounded-lg"
          />
          PSPIPES<span className="text-rose-500">.</span>
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/coming-soon" className="hover:text-white transition-colors">
            Work
          </Link>
          <BlogDropdown categories={categories} />
          <a href="https://moto.pspipes.net" className="px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-500 transition-all">Launch Moto App</a>
        </div>
      </div>
    </nav>
  );
}
