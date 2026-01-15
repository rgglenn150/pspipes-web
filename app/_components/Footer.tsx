import Link from "next/link";
import { getAllCategories } from "@/lib/sanity/client";

export default async function Footer() {
  const categories = await getAllCategories();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              PSPIPES<span className="text-rose-500">.</span>
            </Link>
            <p className="mt-2 text-sm text-slate-400">
              Custom Mobile & Web Applications
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://moto.pspipes.net" className="hover:text-white transition-colors">
                  Motoclub Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Blog Categories</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {categories.map((category: any) => (
                <li key={category._id}>
                  <Link
                    href={`/blog/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} PSPIPES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
