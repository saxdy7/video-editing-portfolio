"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Sliders, Sparkles, Wand2, Eye, Volume2, Film } from "lucide-react";

interface ComparisonScenario {
  id: string;
  title: string;
  labelBefore: string;
  labelAfter: string;
  description: string;
  detailsBefore: string[];
  detailsAfter: string[];
  beforeImage: string;
  afterImage: string;
  beforeStyle?: React.CSSProperties;
  afterStyle?: React.CSSProperties;
}

const SCENARIOS: ComparisonScenario[] = [
  {
    id: "color-grading",
    title: "Color Grading: LOG vs Cinematic Grade",
    labelBefore: "Raw Flat LOG",
    labelAfter: "Graded Cinematic Rec.709",
    description: "LOG profiles preserve dynamic range but look flat, desaturated, and washed out. Through custom curve adjustments, skin-tone isolation, and film contrast curves, the image gains depth, rich atmosphere, and cinematic prestige.",
    detailsBefore: ["Flat contrast & muddy shadows", "Uncorrected highlights", "Washed out skin tones", "No film look"],
    detailsAfter: ["Rich cinematic blacks", "Highlight rolloff protection", "Natural healthy skin tones", "Emulated 35mm grain & depth"],
    beforeImage: "/images/project-claude.jpg",
    afterImage: "/images/project-claude.jpg",
    beforeStyle: {
      filter: "contrast(65%) saturate(30%) brightness(115%)",
    },
    afterStyle: {
      filter: "contrast(115%) saturate(120%) brightness(95%)",
    }
  },
  {
    id: "motion-composite",
    title: "SaaS Workflow: Static Capture vs Animated UI",
    labelBefore: "Static Screen Capture",
    labelAfter: "Kinetic Motion & 3D Zooms",
    description: "Raw screen recordings lose viewer interest within seconds. We apply smooth velocity curve zooms, cursor smoothing, dynamic HUD callouts, and background dimension to make complex software feel effortless to understand.",
    detailsBefore: ["Jerky mouse movements", "Unreadable tiny fonts", "Static unmoving viewport", "Zero visual hierarchy"],
    detailsAfter: ["Curved 3D camera sweeps", "Auto-focused UI callouts", "Kinetic motion graphics", "Clear product narrative"],
    beforeImage: "/images/project-saas.jpg",
    afterImage: "/images/project-saas.jpg",
    beforeStyle: {
      filter: "contrast(90%) brightness(85%) blur(0.5px)",
    },
    afterStyle: {
      filter: "contrast(110%) brightness(105%) saturate(110%)",
    }
  },
  {
    id: "cinematic-reel",
    title: "Reel Retention: Basic Cuts vs Rhythm Edit",
    labelBefore: "Basic Cut Clips",
    labelAfter: "Sound-Designed Rhythm",
    description: "Standard cuts create viewer drop-off. By cutting to micro-beats, adding impact SFX, speed ramping, and seamless match cuts, every second commands attention.",
    detailsBefore: ["Standard straight cuts", "Static linear pacing", "In-camera hollow audio", "Low retention rate"],
    detailsAfter: ["Speed ramp transitions", "Multi-track spatial SFX", "Beat-matched velocity", "High average watch time"],
    beforeImage: "/images/project-longform.jpg",
    afterImage: "/images/project-longform.jpg",
    beforeStyle: {
      filter: "contrast(80%) saturate(70%)",
    },
    afterStyle: {
      filter: "contrast(120%) saturate(125%)",
    }
  }
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenario = SCENARIOS[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="comparison" className="py-24 md:py-32 border-b border-white/[0.06] bg-[#06090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            See The Difference
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light">
            Slide horizontally to inspect how professional color grading, pacing, and motion design transform raw captures into high-converting edits.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          {SCENARIOS.map((sc, index) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === index
                  ? "bg-white text-zinc-950 border-white font-semibold shadow-lg shadow-white/10"
                  : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.2]"
              }`}
            >
              {sc.title.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Drag Slider Box */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.12] bg-black select-none cursor-ew-resize shadow-2xl shadow-black/80 group"
            >
              {/* After Layer (Full width behind) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={scenario.afterImage}
                  alt={scenario.labelAfter}
                  style={scenario.afterStyle}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* After Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-xs font-mono uppercase tracking-wider font-medium">
                  {scenario.labelAfter}
                </div>
              </div>

              {/* Before Layer (Clipped to slider position) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="relative h-full"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : "100%",
                  }}
                >
                  <img
                    src={scenario.beforeImage}
                    alt={scenario.labelBefore}
                    style={scenario.beforeStyle}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Before Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-zinc-300 text-xs font-mono uppercase tracking-wider font-medium">
                    {scenario.labelBefore}
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-xl border-2 border-emerald-400 font-bold text-xs">
                  <Sliders className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* Bottom Helper Hint */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  Drag slider left or right to compare
                </span>
              </div>
            </div>
          </div>

          {/* Details & Explanation Breakdown */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl border border-white/[0.08] bg-[#0a0e14]">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                Transformation Analysis
              </span>

              <h3 className="text-xl font-light text-white tracking-tight mb-3">
                {scenario.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                {scenario.description}
              </p>

              {/* Comparison Checkpoints */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Before (Raw Footage)
                  </span>
                  <ul className="space-y-1.5">
                    {scenario.detailsBefore.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-2">
                    After (Sandeep&apos;s Master Edit)
                  </span>
                  <ul className="space-y-1.5">
                    {scenario.detailsAfter.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-200 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-emerald-400 hover:text-black border border-white/[0.1] hover:border-emerald-400 text-white transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Upgrade Your Footage</span>
                <Wand2 className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
