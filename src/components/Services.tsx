"use client";

import { SERVICES } from "@/data/portfolioData";
import {
  Sparkles,
  Clapperboard,
  Tv,
  MonitorPlay,
  Share2,
  Layers,
  Megaphone,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "cinematic-reels":
        return <Clapperboard className="w-5 h-5" />;
      case "long-form-content":
        return <Tv className="w-5 h-5" />;
      case "saas-product-videos":
        return <MonitorPlay className="w-5 h-5" />;
      case "social-media-content":
        return <Share2 className="w-5 h-5" />;
      case "motion-graphics":
        return <Layers className="w-5 h-5" />;
      case "promotional-videos":
        return <Megaphone className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            What I Can Edit For You
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            From short-form attention magnets to narrative documentaries and modern software demos, every service is delivered with broadcast-grade fidelity.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl border border-white/[0.08] bg-[#090d14] hover:border-emerald-500/40 hover:bg-[#0c121c] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-zinc-500 tracking-widest">
                    {service.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                    {service.tag}
                  </span>
                </div>

                {/* Service Icon & Title */}
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300 mb-5">
                  {getIcon(service.id)}
                </div>

                <h3 className="text-xl font-light text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-6 border-t border-white/[0.06] space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                    Includes
                  </span>
                  {service.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-white bg-white/[0.02] group-hover:bg-emerald-500/10 border border-white/[0.06] group-hover:border-emerald-500/30 transition-all flex items-center justify-between"
                >
                  <span>Request This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
