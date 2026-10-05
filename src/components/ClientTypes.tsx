"use client";

import { Users, Video, Briefcase, Rocket, Laptop, Building2, GraduationCap, UserCheck } from "lucide-react";

export default function ClientTypes() {
  const clients = [
    {
      title: "Content Creators",
      icon: <Video className="w-5 h-5 text-emerald-400" />,
      desc: "YouTubers, TikTokers, and streamers looking to boost retention, increase CTR with high-energy edits, and publish consistently.",
    },
    {
      title: "Brands & Products",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      desc: "Consumer brands requiring high-polish commercial edits, promo videos, and ad creatives tailored to drive conversions.",
    },
    {
      title: "SaaS & AI Startups",
      icon: <Laptop className="w-5 h-5 text-emerald-400" />,
      desc: "Tech companies needing crisp walkthroughs, launch videos, product teasers, and UI-driven motion graphics.",
    },
    {
      title: "Creative Agencies",
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      desc: "Production teams and marketing agencies needing reliable editing bandwidth for client campaigns with tight turnarounds.",
    },
    {
      title: "Student Organizations",
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      desc: "University events, hackathons, and youth communities needing dynamic event recaps, reels, and community promos.",
    },
    {
      title: "Personal Brands",
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      desc: "Founders, coaches, and professionals aiming to scale their authority on LinkedIn and Instagram with cinematic reels.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.06] bg-[#070b10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Who I Work With
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Whether you&apos;re building a personal brand, launching a product or consistently publishing content, I can help turn your footage into polished content.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.title}
              className="p-7 rounded-2xl border border-white/[0.08] bg-[#0a0f16] hover:border-emerald-500/40 hover:bg-[#0c121d] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {client.icon}
                </div>

                <h3 className="text-lg font-light text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {client.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {client.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active Collaboration</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
