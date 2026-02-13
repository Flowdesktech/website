import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Firestudio",
    tagline: "The Ultimate Firebase GUI Client",
    desc: "Open-source desktop app for managing Firebase — smart query autocomplete, tabbed interface, import/export, dark & light themes, and multi-project support across Windows, macOS, and Linux.",
    category: "Open Source",
    categoryColor: "emerald" as const,
    tags: ["TypeScript", "Electron", "React", "Firebase"],
    siteUrl: "https://firestudio.flowdesk.tech/",
    githubUrl: "https://github.com/Flowdesktech/firestudio",
    screenshot: "/images/firestudio.png",
  },
  {
    name: "Flowdesk Invoice",
    tagline: "Professional Business Management Platform",
    desc: "Free-forever invoice management with 15+ templates, multi-currency support, PDF generation, email delivery, recurring invoices, and full customer management — used by businesses worldwide.",
    category: "SaaS Product",
    categoryColor: "purple" as const,
    tags: ["React 19", "Firebase", "Material UI", "SaaS"],
    siteUrl: "https://invoice.flowdesk.tech/",
    githubUrl: "https://github.com/Flowdesktech/invoice",
    screenshot: "/images/invoice.png",
  },
  {
    name: "Flowdesk HN",
    tagline: "Modern Hacker News Reader",
    desc: "A clean, fast Hacker News client with real-time feeds, advanced filtering, search, and bookmarks — built as a PWA for instant loads and offline access.",
    category: "Web App",
    categoryColor: "amber" as const,
    tags: ["TypeScript", "React", "HN API", "PWA"],
    siteUrl: "https://new.flowdesk.tech/",
    githubUrl: "https://github.com/Flowdesktech/hackernews",
    screenshot: "/images/hackernews.png",
  },
];

const colorMap = {
  emerald: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    line: "bg-emerald-500",
  },
  purple: {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    line: "bg-purple-500",
  },
  amber: {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    line: "bg-amber-500",
  },
};

function ProjectCard({ project: p, index }: { project: (typeof projects)[number]; index: number }) {
  const isReversed = index % 2 !== 0;
  const c = colorMap[p.categoryColor];

  return (
    <ScrollReveal>
      <div className="group relative">
        {/* Card */}
        <div className="relative rounded-2xl bg-white/[.02] border border-white/[.07] hover:border-white/[.12] transition-all duration-500 overflow-hidden">
          <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

            {/* Screenshot side */}
            <div className="lg:w-[55%] relative">
              <div className="p-4 pb-0 lg:p-6 lg:pb-0">
                <div className="rounded-xl overflow-hidden border border-white/[.06] shadow-2xl shadow-black/50">
                  {/* Browser dots */}
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-white/[.03] border-b border-white/[.04]">
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="ml-3 text-[10px] text-white/15 font-mono truncate">
                      {p.siteUrl.replace("https://", "")}
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src={p.screenshot}
                      alt={`${p.name} — ${p.tagline}`}
                      width={1400}
                      height={900}
                      priority={index === 0}
                      className="w-full h-auto block transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
              {/* Bottom fade on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none lg:hidden" />
            </div>

            {/* Content side */}
            <div className="lg:w-[45%] flex flex-col justify-center p-6 pt-3 lg:p-10 lg:py-10">
              {/* Category */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-1 h-4 rounded-full ${c.line}`} />
                <span className={`text-[11px] font-semibold uppercase tracking-[1.5px] ${c.badge.split(" ")[0]}`}>
                  {p.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-tight mb-2">{p.name}</h3>
              <p className="text-[15px] text-white/50 font-medium mb-5">{p.tagline}</p>

              {/* Description */}
              <p className="text-[14px] text-gray-400 leading-[1.75] mb-7">{p.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[.05] text-white/40">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <a
                  href={p.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-900 bg-white hover:bg-gray-100 px-5 py-2.5 rounded-lg transition-all duration-200 group/btn shadow-sm"
                >
                  Visit Site
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white/70 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Portfolio() {
  return (
    <section className="py-28 lg:py-36 bg-gray-950 relative overflow-hidden" id="portfolio">

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section header - left aligned */}
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] font-semibold text-blue-400 mb-3 tracking-wide flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
            PORTFOLIO — BUILT WITH AI
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-[1.1] mb-5 text-white">
            Shipped products,
            <span className="block text-white/40">real users.</span>
          </h2>
          <p className="text-lg text-white/35 leading-relaxed">
            Production applications designed, developed, and deployed using AI-powered workflows.
          </p>
        </div>

        {/* Project showcases */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-14 border-t border-white/[.06]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-white/70 mb-1">These are just the open-source ones.</p>
              <p className="text-sm text-white/30">
                Dozens of private client projects shipped across fintech, e-commerce, healthcare, and education.
              </p>
            </div>
            <a
              href="mailto:contact@flowdesk.tech"
              className="inline-flex items-center gap-2.5 text-[14px] font-semibold px-7 py-3.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/[.05] hover:shadow-xl transition-all duration-200 shrink-0 group/cta"
            >
              Discuss Your Project
              <svg className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
