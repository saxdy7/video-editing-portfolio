"use client";

import Image from "next/image";
import { User, Film, Camera, Sparkles, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/[0.06] bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Cinematic Frame HUD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0a0f16] shadow-2xl shadow-black p-3 group">
              
              {/* Image Container with Film Frame Aspect */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950">
                <img
                  src="/images/sandeep-mamidala.jpg"
                  alt="Sandeep M — Cinematic Video Editor"
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Film Viewfinder Overlay elements */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    DIRECTOR OF EDIT
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div>
                    <div className="text-sm font-medium tracking-tight">Sandeep M</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      Cinematic Editor & Creator
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              {/* Bottom Quick Fact Bar */}
              <div className="pt-3 px-2 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
                <span>EST. WORKFLOW: 2026</span>
                <span className="text-emerald-400">STATUS: OPEN FOR WORK</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Behind The Edits
            </h2>

            <div className="space-y-4 text-zinc-300 font-light text-base md:text-lg leading-relaxed mb-8">
              <p>
                I&apos;m Sandeep, a video editor focused on cinematic storytelling, social media content and modern product videos.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                I enjoy taking raw footage and turning it into something that feels intentional, engaging and visually polished.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                My work combines editing, motion graphics, sound design and color to create content that doesn&apos;t just look good but communicates clearly.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-1">
                  Creative Stack
                </div>
                <div className="text-sm text-zinc-200">
                  Premiere Pro • After Effects • Photoshop • DaVinci
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-1">
                  Primary Focus
                </div>
                <div className="text-sm text-zinc-200">
                  Short-form retention, cinematic color, SaaS product demos
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
