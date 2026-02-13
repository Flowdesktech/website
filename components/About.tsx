import ScrollReveal from "./ScrollReveal";

const techCategories = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"] },
  { label: "Backend", items: ["Node.js", "Python", "GraphQL", "REST APIs", "Firebase"] },
  { label: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { label: "Data & AI", items: ["OpenAI / LLMs", "LangChain", "TensorFlow", "PostgreSQL", "MongoDB", "Redis"] },
  { label: "Infrastructure", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"] },
  { label: "Web3", items: ["Solidity", "Ethereum", "Web3.js"] },
];

const metrics = [
  { value: "30+", label: "Production apps shipped" },
  { value: "10+", label: "Years of experience" },
  { value: "3x", label: "Faster with AI workflows" },
  { value: "24h", label: "Average response time" },
];

export default function About() {
  return (
    <section className="relative py-32 bg-gray-950 border-t border-white/[.05] overflow-hidden" id="about">
      <div className="relative max-w-[1180px] mx-auto px-6">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <ScrollReveal>
            <p className="text-[13px] font-semibold text-emerald-400 mb-3 tracking-wide">ABOUT</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.15] mb-6 text-white">
              A senior engineer who ships
              <span className="block text-emerald-400">production-grade software.</span>
            </h2>
            <div className="space-y-4 text-[15px] text-gray-400 leading-[1.8]">
              <p>
                I&apos;ve built and shipped dozens of real-world business applications for clients worldwide
                — from early-stage startups to established enterprises across fintech, healthcare, e-commerce,
                and education.
              </p>
              <p>
                Today, I leverage AI to deliver results faster and better. Whether it&apos;s integrating LLMs
                into existing products, building AI-first applications, or using AI-powered workflows to ship
                3x faster — I bring modern engineering practices to every project.
              </p>
            </div>
          </ScrollReveal>

          {/* Metrics grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 lg:mt-12">
              {metrics.map((m) => (
                <div key={m.label} className="relative p-6 rounded-2xl bg-white/[.03] border border-white/[.07]">
                  <div className="text-3xl font-bold text-white tracking-tight mb-1">{m.value}</div>
                  <div className="text-[13px] text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Tech stack */}
        <ScrollReveal>
          <div className="rounded-2xl bg-white/[.03] border border-white/[.07] p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <h3 className="text-lg font-bold text-white">Technology Stack</h3>
              <span className="text-[13px] text-white/25">+ many more frameworks &amp; tools</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techCategories.map((cat) => (
                <div key={cat.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/30 mb-3">{cat.label}</p>
                  <div className="space-y-1.5">
                    {cat.items.map((t) => (
                      <span key={t} className="block text-[13px] text-gray-400 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
