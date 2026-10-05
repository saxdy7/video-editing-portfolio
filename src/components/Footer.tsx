"use client";

import { Film, ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040609] pt-20 pb-28 md:pb-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Film className="w-4 h-4" />
              </div>
              <span className="text-xl font-light tracking-tight text-white">
                Sandeep M
              </span>
            </div>

            <p className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
              Cinematic Video Editor & Content Creator
            </p>

            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed font-light">
              Crafting high-retention short-form reels, SaaS walkthroughs, and cinematic long-form stories with intention, rhythm, and polish.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#work" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Work / Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Services & Packages
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Before / After Showcase
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  About Sandeep
                </a>
              </li>
              <li>
                <a href="#process" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Editing Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Contact / Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Connect
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 Sandeep M. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js, GSAP & Lenis</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
