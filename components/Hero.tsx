const stats = [
  { value: "30+", label: "Apps Shipped" },
  { value: "Global", label: "Clients" },
  { value: "AI-First", label: "Workflows" },
  { value: "<24h", label: "Response" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden pt-[120px] pb-24" id="hero">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.12)_0%,transparent_60%)] -top-[20%] left-[10%]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.08)_0%,transparent_60%)] top-[20%] -right-[10%]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.06)_0%,transparent_60%)] -bottom-[10%] left-[30%]" />
      </div>
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 w-full">
        <div className="max-w-[820px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/[.06] border border-white/[.08] text-white/60 text-[13px] font-medium px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new projects
          </div>

          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-[-0.04em] mb-7">
            Software engineering
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              powered by AI.
            </span>
          </h1>

          <p className="text-[clamp(1rem,1.8vw,1.1875rem)] text-white/45 max-w-[560px] mx-auto mb-12 leading-relaxed">
            Senior full stack engineer shipping production applications for clients worldwide.
            Delivering faster and better with AI-powered development workflows.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap mb-20">
            <a
              href="mailto:contact@flowdesk.tech"
              className="group inline-flex items-center gap-2.5 text-[15px] font-semibold px-8 py-4 rounded-full bg-white text-gray-900 shadow-[0_0_0_1px_rgba(255,255,255,.1),0_4px_20px_rgba(0,0,0,.3)] hover:shadow-[0_0_0_1px_rgba(255,255,255,.2),0_8px_40px_rgba(0,0,0,.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-[15px] font-medium px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[.04] transition-all duration-300"
            >
              View Work
            </a>
          </div>

          {/* Stats row - minimal */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-white/90 leading-none mb-1">{s.value}</div>
                <div className="text-[11px] text-white/30 font-medium uppercase tracking-[1.5px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
