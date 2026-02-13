import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We define goals, requirements, and timeline. I ask the right questions to fully understand your vision and target users.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400",
    lineColor: "bg-blue-500",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "I design the technical architecture, select the optimal stack, and create a detailed plan with clear milestones.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-400",
    lineColor: "bg-violet-500",
  },
  {
    num: "03",
    title: "AI-Powered Development",
    desc: "Rapid, AI-accelerated development with regular check-ins. You see real progress via staging environments.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-400",
    lineColor: "bg-emerald-500",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Rigorous testing, production deployment, and handover — plus ongoing maintenance to keep everything running.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-400",
    lineColor: "bg-amber-500",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-gray-950 border-t border-white/[.05] overflow-hidden" id="process">
      <div className="relative max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] font-semibold text-blue-400 mb-3 tracking-wide">PROCESS</p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-5 text-white">
            How every project
            <br />
            goes from zero to launch.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            A proven, transparent workflow so you always know what&apos;s happening and when to expect results.
          </p>
        </div>

        {/* Steps - vertical timeline on mobile, horizontal on desktop */}
        <div className="space-y-0">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num}>
              <div className="group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
                {/* Left: number + icon */}
                <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-3 lg:text-right lg:pt-8">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg shadow-black/20 shrink-0`}>
                    {s.icon}
                  </div>
                  <span className="text-sm font-bold text-white/20 font-mono">{s.num}</span>
                </div>

                {/* Right: content card */}
                <div className={`relative pb-12 ${i < steps.length - 1 ? "border-l border-white/[.06] pl-8 lg:pl-10 ml-5 lg:ml-0" : "pl-8 lg:pl-10 ml-5 lg:ml-0"}`}>
                  {/* Dot on the line */}
                  <div className={`absolute left-0 top-10 w-2.5 h-2.5 rounded-full ${s.lineColor} -translate-x-[5.5px] shadow-[0_0_8px] shadow-current opacity-60`} />

                  <div className="bg-white/[.02] border border-white/[.06] hover:border-white/[.10] rounded-2xl p-7 lg:p-8 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-[15px] text-gray-400 leading-[1.75] max-w-lg">{s.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
