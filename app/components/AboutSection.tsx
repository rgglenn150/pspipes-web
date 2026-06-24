const skills = [
  "Angular", "Node.js", "JavaScript", "Next.js",
  "React Native", "MongoDB", "Express.js", "Ionic",
  "Smart Contracts", "AI & Automation", "Web Development", "Mobile Development",
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "CoDev",
    period: "Feb 2019 – Present",
    summary:
      "Built a badge & social platform with AI badge generation, NFT/smart contract features, and gift cards. Migrated Angular codebase to Next.js and built a reusable component library.",
    tech: ["Next.js", "Angular", "Node.js", "MongoDB", "Smart Contracts", "AI"],
  },
  {
    role: "Software Engineer",
    company: "StackTrek",
    period: "Oct 2018 – Feb 2019",
    summary:
      "Full-stack mobile development on a fitness social media app. Refactored legacy code and built custom reusable components.",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    role: "Web Developer",
    company: "Utomedia Technologies",
    period: "Nov 2017 – Jul 2018",
    summary:
      "Delivery tracking site, WordPress projects, and an online exam web app with payment gateway integration.",
    tech: ["CodeIgniter", "PHP", "JavaScript"],
  },
  {
    role: "Web Developer",
    company: "Xilium Professional Services",
    period: "May 2017 – Nov 2017",
    summary:
      "Online HR and payroll system with RESTful API and third-party service integrations.",
    tech: ["CodeIgniter", "PHP", "WordPress"],
  },
  {
    role: "Software Engineer",
    company: "Virtuoso Master",
    period: "Sep 2016 – May 2017",
    summary:
      "Online POS system for a pharmaceutical company plus custom WordPress plugins and shortcodes.",
    tech: ["CodeIgniter", "MySQL", "PHP", "WordPress"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Me</h2>
          <p className="text-slate-400 max-w-xl mx-auto">The engineer behind the projects.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Bio + Contact + Skills */}
          <div className="lg:col-span-1 space-y-8">

            {/* Bio card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white">Ruben Glenn Madredano</h3>
                <p className="text-rose-400 text-sm font-medium mt-1">Senior Software Engineer</p>
                <p className="text-slate-400 text-sm mt-1">Iloilo City, Philippines</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Senior Full Stack Engineer with 10+ years of experience designing, developing, and deploying
                scalable web and mobile applications. Expert in the MEAN stack and Ionic framework, currently
                leveraging AI-powered automation and smart contract development to build next-generation solutions.
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/ruben-glenn-madredano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#60a8f7] text-sm font-medium hover:bg-[#0A66C2]/30 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
                <a
                  href="mailto:officialpspipes@gmail.com"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-white font-semibold mb-4">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Experience Timeline */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-lg">Experience</h4>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10" />

              <div className="space-y-8">
                {experience.map((job, i) => (
                  <div key={i} className="relative pl-10">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-2 border-black shadow-lg shadow-rose-500/20" />

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-white font-semibold">{job.role}</span>
                          <span className="text-slate-400 text-sm"> · {job.company}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium shrink-0">{job.period}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{job.summary}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
