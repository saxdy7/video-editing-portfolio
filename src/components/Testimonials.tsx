"use client";

import { MessageSquareQuote, Sparkles, Clock } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Reputation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Client Feedback
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Honest feedback from recent video editing collaborations, creator projects, and brand showcases.
          </p>
        </div>

        {/* Clean CMS-ready Placeholder / Feedback Status Card */}
        <div className="p-10 md:p-14 rounded-3xl border border-dashed border-white/[0.12] bg-[#090d14] text-center max-w-3xl mx-auto relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 mx-auto mb-6">
            <Clock className="w-5 h-5" />
          </div>

          <h3 className="text-xl md:text-2xl font-light text-white mb-3 tracking-tight">
            Client feedback coming soon.
          </h3>

          <p className="text-xs md:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed mb-8">
            I prioritize genuine client work and strictly avoid fake reviews or fabricated testimonials. Verifiable reviews and case study interviews will be published here upon client clearance.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.04] hover:bg-emerald-400 hover:text-black border border-white/[0.1] hover:border-emerald-400 text-white transition-all"
          >
            <span>Be Among The First Reviews</span>
          </a>
        </div>

      </div>
    </section>
  );
}
