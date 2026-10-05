"use client";

import { CLIENT_TYPES } from "@/data/portfolioData";
import { Scissors, Sparkles, Clock, Wrench } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-24 border-b border-white/[0.06] bg-[#070b10] relative overflow-hidden">
      {/* Background ambient line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Philosophy Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              <Scissors className="w-3.5 h-3.5" />
              <span>Editorial Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight leading-snug mb-5 text-balance">
              Editing isn&apos;t just about cutting clips.{" "}
              <span className="text-emerald-400 font-normal">
                It&apos;s about knowing what to keep.
              </span>
            </h2>

            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              I focus on pacing, storytelling, sound design, visual rhythm and clean motion to make every piece of content feel intentional and impactful.
            </p>
          </div>

          {/* 3 Real Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-light text-white font-mono">50+</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">
                Reels Edited
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-light text-white font-mono">6–8 hrs</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">
                Daily Availability
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-light text-white font-mono">4+</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-wider">
                Editing Tools
              </div>
            </div>

          </div>

        </div>

        {/* Client Types Strip / Ticker */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500">
            Tailored For:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {CLIENT_TYPES.map((type) => (
              <span
                key={type}
                className="text-xs text-zinc-400 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] hover:text-white hover:border-white/[0.2] transition-colors"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
