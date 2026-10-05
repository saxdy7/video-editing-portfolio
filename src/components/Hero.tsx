"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Volume2, VolumeX, Sparkles, Layers, Sliders } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

export default function Hero({ onOpenVideoModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero content entry animation
      gsap.from(".hero-anim-item", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Video preview scroll scale & subtle parallax
      if (videoWrapperRef.current && containerRef.current) {
        gsap.to(videoWrapperRef.current, {
          y: 60,
          scale: 1.02,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Headline subtle scroll displacement
      if (headlineRef.current && containerRef.current) {
        gsap.to(headlineRef.current, {
          y: -40,
          opacity: 0.75,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handlePlayClick = () => {
    if (onOpenVideoModal) {
      onOpenVideoModal("/videos/hero-reel.mp4", "Cinematic Showreel — Sandeep M");
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden border-b border-white/[0.06]"
    >
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Indicator */}
            <div className="hero-anim-item inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono text-emerald-300 font-medium tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Alternative smaller line */}
            <p className="hero-anim-item text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-emerald-500/60 inline-block"></span>
              Cinematic video editing for brands, creators & modern businesses
            </p>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="hero-anim-item text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6 text-balance"
            >
              I turn raw footage into content people{" "}
              <span className="italic font-serif text-white/95 relative inline-block">
                actually
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-400/80 to-emerald-500/0"></span>
              </span>{" "}
              want to watch.
            </h1>

            {/* Supporting Text */}
            <p className="hero-anim-item text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-8">
              From scroll-stopping reels to cinematic long-form content and SaaS product videos, I create edits built around strong storytelling, pacing and visual impact.
            </p>

            {/* CTA Buttons */}
            <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-all duration-200 shadow-xl shadow-emerald-500/20 active:scale-95"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 active:scale-95"
              >
                <span>View My Work</span>
              </a>
            </div>

            {/* Minimal Stats Row */}
            <div className="hero-anim-item grid grid-cols-3 gap-6 pt-10 mt-6 border-t border-white/[0.08]">
              <div>
                <div className="text-2xl md:text-3xl font-light tracking-tight text-white font-mono">50+</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Reels Edited</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-light tracking-tight text-emerald-400 font-mono">6–8 hrs</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Daily Availability</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-light tracking-tight text-white font-mono">4+</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Core Pro Tools</div>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Video Reel Preview */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Ambient behind video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-transparent to-blue-500/10 blur-2xl -z-10 rounded-2xl transform scale-95" />

            <div
              ref={videoWrapperRef}
              className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0a0e14] shadow-2xl shadow-black/80 group"
            >
              {/* Top Film Slate Bar / Minimal HUD */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-zinc-300 font-medium tracking-widest uppercase">
                    REC • 00:00:24:18
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    4K UHD • 60FPS
                  </span>
                </div>
              </div>

              {/* Video Element */}
              <div
                onClick={handlePlayClick}
                className="relative aspect-[16/10] sm:aspect-[16/10] bg-black cursor-pointer overflow-hidden"
              >
                <video
                  ref={videoRef}
                  src="/videos/hero-reel.mp4"
                  poster="/images/project-claude.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 shadow-xl shadow-black/50">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Bottom Bar: Sound Toggle & Title */}
                <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                      Showreel Preview
                    </span>
                    <span className="text-xs text-white font-medium">
                      Pacing, Transitions & Motion Showcase
                    </span>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Audio Waveform Bars (Visual Rhythm Accent) */}
              <div className="px-4 py-2 bg-[#080c12] border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Timeline Master
                </span>
                <div className="flex items-center gap-1 h-3">
                  {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40].map((height, i) => (
                    <span
                      key={i}
                      className="w-0.5 bg-emerald-500/60 rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 90}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Software Badges */}
              <div className="p-3 bg-[#0a0e14] border-t border-white/[0.06] flex items-center justify-between gap-2 flex-wrap text-zinc-400">
                <div className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#9999FF]"></span>
                  Premiere Pro
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#D291FF]"></span>
                  After Effects
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#31A8FF]"></span>
                  Photoshop
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
