"use client";

import { Compass, Sparkles, Target, Zap } from "lucide-react";

export default function WhyWorkWithMe() {
  const pillars = [
    {
      num: "01",
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: "Story First",
      text: "I don't just cut clips together. Every cut should serve the story, the message or the viewer. Pacing and emotional resonance guide every trim on the timeline.",
      quote: "Every transition is earned, never decorative."
    },
    {
      num: "02",
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Attention to Detail",
      text: "From sound design and transitions to color and typography, the small details make the final edit feel premium. Micro audio foley and frame-accurate timing elevate good footage into great content.",
      quote: "Obsessed with frame pacing & audio precision."
    },
    {
      num: "03",
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: "Built for the Platform",
      text: "Whether it's a Reel, YouTube video or SaaS product video, the editing style is adapted to the platform and audience. Safe zones, first-frame retention hooks, and sound sync tailored for algorithms.",
      quote: "Engineered for algorithmic attention."
    }
  ];

  return (
    <section id="why-me" className="py-24 md:py-32 border-b border-white/[0.06] bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>The Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            More Than Just Editing
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            The difference between forgettable clips and content people watch till the end comes down to intentional decision making.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl border border-white/[0.08] bg-[#0a0f16] flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-zinc-500 tracking-widest">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {pillar.text}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <span className="text-xs font-mono italic text-emerald-400/90 block">
                  &ldquo;{pillar.quote}&rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
