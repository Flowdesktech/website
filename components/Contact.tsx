"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const type = fd.get("type") as string;
    const message = fd.get("message") as string;

    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Flowdesk,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${message}\n`,
    );

    window.location.href = `mailto:contact@flowdesk.tech?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="relative py-32 bg-gray-950 overflow-hidden" id="contact">
      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.08)_0%,transparent_60%)] -top-[15%] -right-[10%]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.06)_0%,transparent_60%)] -bottom-[15%] -left-[10%]" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <ScrollReveal>
            <p className="text-[13px] font-semibold text-blue-400 mb-3 tracking-wide">CONTACT</p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-white tracking-tight leading-[1.15] mb-6">
              Let&apos;s build something
              <span className="block text-white/50">great together.</span>
            </h2>
            <p className="text-[15px] text-white/40 leading-[1.8] mb-10 max-w-md">
              Whether you need a new application, AI integration into an existing product, or a
              dedicated engineer to accelerate your roadmap — let&apos;s talk.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a href="mailto:contact@flowdesk.tech" className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors">
                <span className="w-11 h-11 rounded-xl bg-white/[.05] border border-white/[.08] flex items-center justify-center text-white/40 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70 group-hover:text-white transition-colors">contact@flowdesk.tech</span>
                  <span className="text-xs text-white/25">Email</span>
                </div>
              </a>
              <a href="https://github.com/flowdesktech" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors">
                <span className="w-11 h-11 rounded-xl bg-white/[.05] border border-white/[.08] flex items-center justify-center text-white/40 group-hover:bg-white/[.08] group-hover:border-white/[.15] group-hover:text-white transition-all">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70 group-hover:text-white transition-colors">github.com/flowdesktech</span>
                  <span className="text-xs text-white/25">Open Source</span>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/50">
                <span className="w-11 h-11 rounded-xl bg-white/[.05] border border-white/[.08] flex items-center justify-center text-white/40">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70">Response within 24 hours</span>
                  <span className="text-xs text-white/25">Availability</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/20">Free consultation &bull; No obligation &bull; NDA available</p>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/[.03] border border-white/[.08] p-7 sm:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6">Send a message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="form-name" className="block text-[12px] font-semibold text-white/40 mb-1.5 uppercase tracking-wider">Name</label>
                  <input id="form-name" name="name" type="text" required placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[.04] border border-white/[.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[.06] transition-all" />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-[12px] font-semibold text-white/40 mb-1.5 uppercase tracking-wider">Email</label>
                  <input id="form-email" name="email" type="email" required placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[.04] border border-white/[.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[.06] transition-all" />
                </div>

                <div>
                  <label htmlFor="form-type" className="block text-[12px] font-semibold text-white/40 mb-1.5 uppercase tracking-wider">Project Type</label>
                  <select id="form-type" name="type"
                    className="w-full px-4 py-3 rounded-xl bg-white/[.04] border border-white/[.08] text-white text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[.06] transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="Web Application" className="bg-gray-900">Web Application</option>
                    <option value="Mobile App" className="bg-gray-900">Mobile App</option>
                    <option value="AI / ML Integration" className="bg-gray-900">AI / ML Integration</option>
                    <option value="Full Stack Development" className="bg-gray-900">Full Stack Development</option>
                    <option value="Blockchain / Web3" className="bg-gray-900">Blockchain / Web3</option>
                    <option value="Consulting" className="bg-gray-900">Consulting</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[12px] font-semibold text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea id="form-message" name="message" rows={4} required placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[.04] border border-white/[.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[.06] transition-all resize-none" />
                </div>

                <button type="submit" disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200 mt-2 disabled:opacity-70">
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Opening email client&hellip;
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-white/20 text-center mt-4">Opens your email client with the message pre-filled</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
