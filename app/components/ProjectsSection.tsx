import Image from 'next/image';

const projects = [
  {
    name: "Motoclub Connect",
    tagline: "PWA for Motorcycle Clubs",
    description:
      "A mobile-first platform for motorcycle enthusiasts to create clubs, organize rides, and connect with fellow riders. Features real-time notifications, event management, and social authentication.",
    tech: ["Ionic", "Angular", "Node.js", "MongoDB"],
    url: "https://moto.pspipes.net",
    image: "/images/hero/hero.webp",
    imageAlt: "Motoclub Connect app screenshot",
    imageFit: "object-cover object-top" as const,
    imageBg: "",
    badge: "Live in Production",
  },
  {
    name: "BadgeHero",
    tagline: "Digital Badge Platform",
    description:
      "A comprehensive platform for creating, distributing, and managing digital badges and achievements. Gamify recognition for teams, communities, and organizations.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    url: "https://app.badgehero.com/",
    image: "/images/hero/badgehero.png",
    imageAlt: "BadgeHero — Unlock Your Achievements",
    imageFit: "object-contain" as const,
    imageBg: "bg-[#1a4fd6]",
    badge: "Live in Production",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of live apps built and shipped — from concept to production.
          </p>
        </div>

        {/* Project Grid — scales automatically as projects are added */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300"
            >
              {/* Image area — fixed aspect ratio so all cards align */}
              <div className={`relative overflow-hidden aspect-[4/3] ${project.imageBg}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${project.imageFit}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Live badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-rose-600 rounded-full text-white text-xs font-semibold shadow-lg">
                  {project.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-rose-400 text-sm font-medium mb-3">{project.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Launch CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-semibold text-sm text-center transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20"
                >
                  Launch {project.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
