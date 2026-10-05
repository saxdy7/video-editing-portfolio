"use client";

import { SOFTWARE_TOOLS } from "@/data/portfolioData";
import { Cpu } from "lucide-react";

export default function Software() {
  return (
    <section id="tools" className="py-24 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Production Pipeline</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              Tools I Work With
            </h2>
          </div>

          <p className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-wider max-w-sm">
            Industry-standard toolchain configured for speed, color fidelity, and dynamic motion graphics.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOFTWARE_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090d14] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Monogram Box & Role Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${tool.color}15`,
                      borderColor: `${tool.color}40`,
                      color: tool.color,
                    }}
                  >
                    {tool.icon}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                    {tool.role}
                  </span>
                </div>

                <h3 className="text-lg font-light text-white mb-2 tracking-tight">
                  {tool.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Spec */}
              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>NATIVE WORKFLOW</span>
                <span className="text-emerald-400">PRO GRADE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
