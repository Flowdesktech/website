export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white/40 pt-16 pb-8 border-t border-white/[.05]">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="Flowdesk home">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold bg-white text-gray-900">F</span>
              <span className="text-lg font-bold tracking-tight text-white">Flowdesk</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[280px]">
              AI-driven development studio building production-ready software for businesses worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/50 mb-5">Services</h4>
            <a href="#services" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Full Stack Development</a>
            <a href="#services" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Mobile Apps</a>
            <a href="#services" className="block text-sm py-1.5 hover:text-white/70 transition-colors">AI &amp; ML Integration</a>
            <a href="#services" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Cloud &amp; DevOps</a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/50 mb-5">Products</h4>
            <a href="https://firestudio.flowdesk.tech/" target="_blank" rel="noopener noreferrer" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Firestudio</a>
            <a href="https://invoice.flowdesk.tech/" target="_blank" rel="noopener noreferrer" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Flowdesk Invoice</a>
            <a href="https://new.flowdesk.tech/" target="_blank" rel="noopener noreferrer" className="block text-sm py-1.5 hover:text-white/70 transition-colors">Flowdesk HN</a>
            <a href="https://github.com/flowdesktech" target="_blank" rel="noopener noreferrer" className="block text-sm py-1.5 hover:text-white/70 transition-colors">GitHub</a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/50 mb-5">Contact</h4>
            <a href="mailto:contact@flowdesk.tech" className="block text-sm py-1.5 hover:text-white/70 transition-colors">contact@flowdesk.tech</a>
            <a href="https://github.com/flowdesktech" target="_blank" rel="noopener noreferrer" className="block text-sm py-1.5 hover:text-white/70 transition-colors">GitHub</a>
            <a href="https://flowdesk.tech" className="block text-sm py-1.5 hover:text-white/70 transition-colors">flowdesk.tech</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/30">&copy; {year} Flowdesk. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="https://github.com/flowdesktech" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-white/[.04] border border-white/[.06] flex items-center justify-center text-white/30 hover:bg-white/[.08] hover:text-white/60 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:contact@flowdesk.tech" aria-label="Email"
              className="w-9 h-9 rounded-lg bg-white/[.04] border border-white/[.06] flex items-center justify-center text-white/30 hover:bg-white/[.08] hover:text-white/60 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
