import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Build something <span className="text-rose-500">extraordinary</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-lg">
            Stop wasting time on complex setups. Our platform gives you the tools to launch your project in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-rose-600 text-white rounded-full font-medium hover:bg-rose-500 transition-all text-center"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all text-center"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/hero-placeholder.png"
            alt="App Screenshot"
            width={600}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}