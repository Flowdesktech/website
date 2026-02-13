import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Full Stack Development",
    desc: "End-to-end web and mobile applications using React, Next.js, Node.js, and cloud-native architectures.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Apps",
    desc: "Native iOS & Android with Swift and Kotlin, plus cross-platform with React Native and Flutter.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: "AI & ML Integration",
    desc: "LLM-powered features, computer vision, predictive analytics, and intelligent automation for your products.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Blockchain & Web3",
    desc: "Smart contracts, DeFi, NFT platforms, and Web3 integration with Ethereum, Solana, and more.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Firebase, Docker, Kubernetes. Scalable infra, CI/CD pipelines, and production deployments.",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "Maintenance & Support",
    desc: "Ongoing support, performance tuning, security patches, and feature updates. 24/7 for critical issues.",
    gradient: "from-rose-500 to-pink-400",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-gray-950 border-t border-white/[.05] overflow-hidden" id="services">
      <div className="relative max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] font-semibold text-blue-400 mb-3 tracking-wide">SERVICES</p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-5 text-white">
            Everything you need to go
            <br />
            from idea to production.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            End-to-end development services with a focus on quality, speed, and real business impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ScrollReveal key={s.title}>
              <div className="group relative h-full rounded-2xl bg-white/[.03] border border-white/[.07] hover:border-white/[.12] p-7 transition-all duration-300 hover:-translate-y-0.5">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/20`}>
                  {s.icon}
                </div>

                <h3 className="text-[17px] font-bold text-white mb-2.5 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-[14px] text-gray-400 leading-[1.7]">{s.desc}</p>

                {/* Arrow on hover */}
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-white/20 group-hover:text-white/50 transition-colors">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
