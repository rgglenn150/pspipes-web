"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface BlogDropdownProps {
  categories: Category[];
}

export default function BlogDropdown({ categories }: BlogDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
      >
        Blog
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden shadow-xl">
          <Link
            href="/blog"
            className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
            onClick={() => setIsOpen(false)}
          >
            All Posts
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/blog/${category.slug}`}
              className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {category.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
