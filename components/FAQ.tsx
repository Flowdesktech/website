import ScrollReveal from "./ScrollReveal";

type FaqItem = {
  q: string;
  /** Paragraphs rendered in order. Use a string array for multi-paragraph answers. */
  a: string[];
};

export const faqs: FaqItem[] = [
  {
    q: "How quickly can you start on a new project?",
    a: [
      "As soon as possible — typically within 1–2 days of our first call, including scoping and setup. I keep capacity reserved for new engagements so you're never stuck waiting weeks to start.",
    ],
  },
  {
    q: "What tech stacks do you work with?",
    a: [
      "Full stack across web and mobile — React, Next.js, TypeScript, Node.js, Python, Swift, Kotlin, React Native, and Flutter — plus cloud (AWS, Google Cloud, Firebase) and databases (PostgreSQL, MongoDB, Redis).",
      "I also specialise in AI orchestration and automation: LLMs, RAG pipelines, multi-agent systems, vector databases, and production-grade LLM integrations.",
    ],
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: [
      "Both. I've shipped products for pre-seed founders with nothing but a Figma, and for established companies who needed a senior hand on a focused initiative. The engineering rigor doesn't change — only the pace and scope.",
    ],
  },
  {
    q: "Do you build privacy-first or zero-knowledge applications?",
    a: [
      "Yes — it's a specialty. I've shipped end-to-end encrypted products where the server is deliberately blind to user data, including Flowvault, an open-source zero-knowledge encrypted notepad with plausible deniability, drand-backed time-locked notes, self-destructing Encrypted Send links, and a dead-man's switch.",
      "In practice that means browser-side cryptography (Argon2id for password-to-key derivation, AES-256-GCM for authenticated encryption, WebCrypto throughout), hidden-volume formats, auditable Firestore security rules, and a clear, published threat model. If you're building something where user data must never be readable by your own servers — password managers, encrypted notes, secure messaging, health or legal tools — I can take it from threat model through production.",
    ],
  },
  {
    q: "How do you use AI in your workflow?",
    a: [
      "Two ways. First, as a daily tool — I use it constantly to scaffold code, rewrite things, and sanity-check my thinking. It makes me faster, but I don't trust its output blindly, especially on anything security-sensitive.",
      "Second, and more interesting, I build AI into the products themselves — RAG systems, agents, LLM features shipped to real users. The hard part there is almost never picking a model. It's the boring stuff around it: keeping costs sane, catching hallucinations, handling failures, and making sure the thing doesn't fall over at 3am.",
      "That's where most LLM prototypes die on the way to production — so that's where I spend my time.",
    ],
  },
  {
    q: "What's your typical project timeline?",
    a: [
      "Depends on scope. Most full-build engagements run 3–6 months end-to-end. Smaller integrations, MVPs, and focused feature work can ship in weeks.",
    ],
  },
  {
    q: "Do you sign NDAs?",
    a: [
      "Yes — happy to sign an NDA before any detailed scoping discussion. Just send your template and I'll review and return it the same day.",
    ],
  },
  {
    q: "How does pricing work — hourly or fixed?",
    a: [
      "Both work. Hourly is $40–$80 depending on scope and technical depth. Fixed-price is quoted after a short discovery so the number reflects the actual work, not a guess.",
    ],
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: [
      "Yes. Launch is rarely the end — I offer ongoing maintenance and enhancement retainers so production issues, feature requests, and upgrades are handled by someone who already knows the codebase.",
    ],
  },
];

function Chevron() {
  return (
    <svg
      className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-[transform,color] duration-300 shrink-0 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section
      className="relative py-28 lg:py-32 bg-gray-950 border-t border-white/[.05] overflow-hidden"
      id="faq"
    >
      {/* Soft backdrop glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.06)_0%,transparent_60%)] top-[-15%] right-[-10%]" />
      </div>

      <div className="relative max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">
          {/* Left: heading */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-[13px] font-semibold text-violet-400 mb-3 tracking-wide flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                FAQ
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-[1.1] mb-5 text-white">
                Questions,
                <span className="block text-white/40">answered.</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-8">
                The things clients most often ask before we kick off a project.
              </p>
              <a
                href="mailto:contact@flowdesk.tech?subject=Question%20about%20Flowdesk"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/[.04] px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                Still have a question?
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Right: accordion */}
          <ScrollReveal>
            <div className="rounded-2xl bg-white/[.02] border border-white/[.07] divide-y divide-white/[.05] overflow-hidden">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className="group"
                  open={i === 0}
                >
                  <summary className="list-none cursor-pointer flex items-center justify-between gap-6 px-6 lg:px-8 py-5 lg:py-6 hover:bg-white/[.02] transition-colors duration-200 select-none">
                    <span className="text-[15px] lg:text-base font-semibold text-white pr-2 leading-snug">
                      {f.q}
                    </span>
                    <Chevron />
                  </summary>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-7 -mt-1 space-y-3 text-[14px] lg:text-[15px] text-gray-400 leading-[1.75]">
                    {f.a.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
