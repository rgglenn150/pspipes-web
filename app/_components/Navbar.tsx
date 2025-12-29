export default function Navbar() {
  return (
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
  );
}
