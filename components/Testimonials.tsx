import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  url: string;
  initials: string;
  /**
   * Optional profile photo. Drop the file at `public/images/testimonials/<filename>`
   * (square, ≥ 128×128, JPG/PNG/WebP). If omitted, the colored initials avatar is used.
   */
  image?: string;
  accent: "blue" | "emerald" | "violet" | "amber" | "rose" | "cyan";
};

/**
 * NOTE: Replace `quote` values with the real wording once you have each client's
 * written approval. To add a photo, drop a square image at
 * `public/images/testimonials/<file>.jpg` and uncomment the matching `image` line.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered a critical part of our encryption stack on time and with the kind of attention to detail you rarely see. Clean code, thoughtful architecture, and zero hand-holding required.",
    name: "Tom James Holub",
    role: "Founder",
    company: "FlowCrypt",
    url: "https://flowcrypt.com",
    initials: "TH",
    image: "/images/testimonials/tom-holub.png",
    accent: "emerald",
  },
  {
    quote:
      "Exceptional full-stack engineer. Took our platform from prototype to production and handled the hard parts — auth, billing, performance — without drama.",
    name: "Lee Shrimpton",
    role: "Director",
    company: "Comwire IT",
    url: "https://comwire.it",
    initials: "LS",
    image: "/images/testimonials/lee-shrimpton.jpg",
    accent: "blue",
  },
  {
    quote:
      "A true senior engineer — handled complex B2B payments work end-to-end and consistently raised the quality bar. Communicated clearly, delivered reliably, and thought several steps ahead.",
    name: "Chris Wyatt",
    role: "CTO",
    company: "Finexio",
    url: "https://finexio.com",
    initials: "CW",
    image: "/images/testimonials/chris-wyatt.png",
    accent: "violet",
  },
  {
    quote:
      "Top-tier engineering partner. Everything we asked for was built exactly as specified, and the suggestions along the way made the product measurably better.",
    name: "Stefan Hess",
    role: "CEO",
    company: "znipp.ch",
    url: "https://znipp.ch",
    initials: "SH",
    // image: "/images/testimonials/stefan-hess.jpg",
    accent: "cyan",
  },
  {
    quote:
      "Reliable, sharp, and refreshingly pragmatic. Delivered a polished product that our users actually enjoy using — which is the only metric that matters.",
    name: "Abasa Phillips",
    role: "CEO",
    company: "Zilla",
    url: "https://zla.io",
    initials: "AP",
    image: "/images/testimonials/abasa-phillips.jpg",
    accent: "amber",
  },
  {
    quote:
      "Turned a rough idea into a finished mobile app that just works. Responsive, thorough, and kept the scope honest. Speed Shopper wouldn't exist without this work.",
    name: "Ryan Mac",
    role: "CEO",
    company: "Speed Shopper App",
    url: "https://speedshopperapp.com",
    initials: "RM",
    image: "/images/testimonials/ryan-mac.jpg",
    accent: "rose",
  },
];

const accentMap: Record<Testimonial["accent"], { ring: string; text: string; bg: string }> = {
  blue:    { ring: "ring-blue-500/30",    text: "text-blue-300",    bg: "bg-blue-500/10" },
  emerald: { ring: "ring-emerald-500/30", text: "text-emerald-300", bg: "bg-emerald-500/10" },
  violet:  { ring: "ring-violet-500/30",  text: "text-violet-300",  bg: "bg-violet-500/10" },
  amber:   { ring: "ring-amber-500/30",   text: "text-amber-300",   bg: "bg-amber-500/10" },
  rose:    { ring: "ring-rose-500/30",    text: "text-rose-300",    bg: "bg-rose-500/10" },
  cyan:    { ring: "ring-cyan-500/30",    text: "text-cyan-300",    bg: "bg-cyan-500/10" },
};

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 0 0-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.067 9.384c-.784-.57-.381-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.282-3.957Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const a = accentMap[t.accent];
  const host = t.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="group relative h-full rounded-2xl bg-white/[.03] border border-white/[.07] hover:border-white/[.12] p-7 lg:p-8 transition-all duration-300 flex flex-col">
      {/* Quote mark watermark */}
      <svg
        className="absolute top-5 right-5 w-9 h-9 text-white/[.04] group-hover:text-white/[.07] transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.34A1.83 1.83 0 0 1 7.17 9.34V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-3.49A1.83 1.83 0 0 1 17.17 9.34V6Z" />
      </svg>

      <Stars />

      <p className="text-[15px] text-white/75 leading-[1.7] mb-8 flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-6 border-t border-white/[.06]">
        {t.image ? (
          <Image
            src={t.image}
            alt={`${t.name}, ${t.role} at ${t.company}`}
            width={88}
            height={88}
            className={`w-11 h-11 rounded-full object-cover ring-1 ${a.ring} shrink-0`}
          />
        ) : (
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold ${a.bg} ${a.text} ring-1 ${a.ring} shrink-0`}
            aria-hidden="true"
          >
            {t.initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="text-[14px] font-semibold text-white truncate">{t.name}</div>
          <div className="text-[12px] text-white/40 truncate">
            {t.role} · {t.company}
          </div>
        </div>
        <a
          href={t.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-white/30 hover:text-white/70 transition-colors truncate max-w-[110px] hidden sm:inline"
          aria-label={`Visit ${t.company} website`}
          title={host}
        >
          {host}
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative py-28 lg:py-32 bg-gray-950 border-t border-white/[.05] overflow-hidden"
      id="testimonials"
    >
      {/* Soft backdrop glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.07)_0%,transparent_60%)] top-[-20%] left-[-10%]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.05)_0%,transparent_60%)] bottom-[-10%] right-[-5%]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[13px] font-semibold text-amber-400 mb-3 tracking-wide flex items-center gap-2">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 0 0-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.067 9.384c-.784-.57-.381-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.282-3.957Z" />
            </svg>
            TESTIMONIALS — WHAT CLIENTS SAY
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight leading-[1.1] mb-5 text-white">
            Trusted by founders
            <span className="block text-white/40">around the world.</span>
          </h2>
          <p className="text-lg text-white/35 leading-relaxed">
            Real feedback from real teams — startups, agencies, and independent product builders
            I&apos;ve shipped for.
          </p>
        </div>

        {/* Trusted-by strip */}
        <ScrollReveal>
          <div className="mb-12 pb-10 border-b border-white/[.06]">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/25 mb-5">
              Featured clients
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {testimonials.map((t) => (
                <a
                  key={t.company}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-semibold text-white/50 hover:text-white transition-colors"
                >
                  {t.company}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <ScrollReveal key={t.company} className="h-full">
              <TestimonialCard t={t} />
            </ScrollReveal>
          ))}
        </div>

        {/* "And many more" footer */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl border border-dashed border-white/[.10] bg-white/[.015] px-7 py-8 lg:px-10 lg:py-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-4">
              {/* Stacked avatars */}
              <div className="flex -space-x-2" aria-hidden="true">
                {["+", "+", "+"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-white/[.06] border border-gray-950 ring-1 ring-white/10 flex items-center justify-center text-[12px] font-semibold text-white/50"
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white/80">
                  And dozens more reviews from tens of happy clients.
                </p>
                <p className="text-[13px] text-white/35 mt-0.5">
                  Private engagements across fintech, e-commerce, healthcare, and education — references available on request.
                </p>
              </div>
            </div>
            <a
              href="mailto:contact@flowdesk.tech?subject=Reference%20check"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/[.04] px-5 py-2.5 rounded-lg transition-all duration-200 shrink-0"
            >
              Request references
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
