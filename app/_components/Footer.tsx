export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-xs">
      © {new Date().getFullYear()} pspipes. Built with Next.js & Passion.
    </footer>
  );
}
