"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent
              ? Array.from(parent.querySelectorAll("[data-reveal]"))
              : [entry.target];
            const idx = siblings.indexOf(entry.target);
            (entry.target as HTMLElement).style.transitionDelay = `${idx * 80}ms`;
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal className={`opacity-0 translate-y-6 transition-reveal ${className}`}>
      {children}
    </div>
  );
}
