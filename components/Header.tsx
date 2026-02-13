"use client";

import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,.04)]"
          : ""
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Flowdesk home">
          <span
            className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-extrabold transition-colors duration-300 ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            }`}
          >
            F
          </span>
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Flowdesk
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium px-3.5 py-2 rounded-md transition-colors duration-200 ${
                scrolled
                  ? "text-gray-500 hover:text-primary hover:bg-blue-50"
                  : "text-white/70 hover:text-white hover:bg-white/[.06]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:contact@flowdesk.tech"
          className={`hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2 rounded-md transition-all duration-200 shadow-sm ${
            scrolled
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
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
              className={`block w-5 h-0.5 rounded transition-colors duration-300 ${
                scrolled ? "bg-gray-900" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[68px] inset-x-0 bottom-0 bg-gray-950 z-50 px-6 pt-6 pb-8 overflow-y-auto animate-slideDown">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium text-white/70 hover:text-white px-4 py-3.5 rounded-lg hover:bg-white/5 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:contact@flowdesk.tech"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
