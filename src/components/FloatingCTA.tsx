"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Pill (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block animate-fade-in">
        <a
          href="#contact"
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold text-xs font-mono uppercase tracking-wider shadow-2xl shadow-emerald-400/40 hover:bg-emerald-300 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-300"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse"></span>
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-4 md:hidden bg-[#05070a]/90 backdrop-blur-xl border-t border-white/[0.1] animate-fade-in">
        <a
          href="#contact"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold text-xs font-mono uppercase tracking-wider shadow-lg shadow-emerald-400/20 active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Work Together</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}
