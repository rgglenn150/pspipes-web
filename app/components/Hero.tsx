export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for New Projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Custom Mobile & Web Apps That Drive{' '}
          <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-orange-400 text-transparent bg-clip-text">
            Real Business Results
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From MVP to enterprise-scale, I build tailored solutions using React, Angular, Node.js, and modern frameworks. Fast, reliable, and built to scale.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-white/10 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-slate-400">Apps Launched</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">6 Weeks</div>
            <div className="text-sm text-slate-400">Average MVP</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:officialpspipes@gmail.com"
            className="px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 text-center"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center backdrop-blur-sm"
          >
            View My Work
          </a>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          {['Node.js', 'Angular', 'React', 'Ionic', 'Next.js', 'MongoDB'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}