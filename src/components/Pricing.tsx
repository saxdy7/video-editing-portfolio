"use client";

import { ArrowUpRight, Calculator, MessageCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 border-b border-white/[0.06] bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="rounded-3xl border border-white/[0.1] bg-[#0a0f16] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
              <Calculator className="w-3.5 h-3.5" />
              <span>Tailored Estimates</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-4">
              Have a project in mind?
            </h2>

            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-6">
              Every project is different — varying by raw footage volume, motion graphics complexity, sound design needs, and delivery timeline. Send me your requirements and I&apos;ll recommend the right editing approach and quote.
            </p>

            {/* Quick Pricing Factors */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                • Fixed per-project rates
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                • Monthly retainer packages
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                • Batch reel discounts
              </span>
            </div>
          </div>

          {/* Right Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:sandeepmamidala77@gmail.com?subject=Discuss%20Video%20Editing%20Project"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Your Project</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
