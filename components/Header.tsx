"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Active-section tracking via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = ["services", "portfolio", "about", "process", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry;
          }
        }
        if (best) setActiveSection(best.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observerRef.current!.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/[.06] shadow-[0_1px_12px_rgba(0,0,0,.3)]"
            : ""
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5" aria-label="Flowdesk home">
            <span className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-extrabold bg-white text-gray-900 transition-colors duration-300">
              F
            </span>
            <span className="text-lg font-bold tracking-tight text-white transition-colors duration-300">
              Flowdesk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-medium px-3.5 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[.07]"
                      : "text-white/70 hover:text-white hover:bg-white/[.05]"
                  }`}
                >
                  {item.label}
                  {/* Active indicator dot */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-blue-400 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="mailto:contact@flowdesk.tech"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2 rounded-md bg-white text-gray-900 hover:bg-gray-200 transition-all duration-200 shadow-sm"
          >
            Get in Touch
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 rounded bg-white transition-colors duration-300"
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Nav — rendered outside <header> so fixed positioning isn't broken by backdrop-filter */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] z-[60] bg-gray-950 px-6 pt-6 pb-8 overflow-y-auto animate-slideDown">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-[15px] font-medium px-4 py-3.5 rounded-lg border-b border-white/5 transition-colors ${
                    isActive
                      ? "text-white bg-white/[.06]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="mailto:contact@flowdesk.tech"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
