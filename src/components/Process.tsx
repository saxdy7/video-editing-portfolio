"use client";

import { PROCESS_STEPS } from "@/data/portfolioData";
import { GitBranch, ArrowRight, Check } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            How I Work
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            A frictionless, 5-step collaborative pipeline designed to turn raw media into finished masters quickly and reliably.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090d14] flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#0c121c] transition-all duration-300 group"
            >
              <div>
                {/* Step Number + Top Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STEP {step.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-zinc-600 hidden md:block group-hover:text-emerald-400 transition-colors" />
                  )}
                </div>

                <h3 className="text-xl font-light text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator dot */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Phase 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Turnaround Notice Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">
                Reliable Turnaround & Fast Feedback Loops
              </div>
              <div className="text-xs text-zinc-400">
                Direct communication, frame-by-frame review links (Frame.io / Google Drive), and iterative revisions.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 transition-colors shrink-0 text-center"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}
