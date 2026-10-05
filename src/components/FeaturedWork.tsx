"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import { Play, ArrowUpRight, Film, Sparkles, Filter } from "lucide-react";

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cinematic Reels",
    "SaaS & Product Videos",
    "Long-form Content",
    "Promotional Videos",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 relative border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-lg font-light">
              A few projects that show how I approach different styles of editing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-wider font-mono px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-400 text-zinc-950 border-emerald-400 font-semibold shadow-md shadow-emerald-400/20"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/[0.2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090d13] hover:border-white/[0.25] transition-all duration-300 flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-emerald-950/20"
    >
      {/* Thumbnail / Video Container */}
      <div
        className={`relative w-full overflow-hidden bg-black ${
          project.aspectRatio === "9:16" ? "aspect-[9/14]" : "aspect-[16/10]"
        }`}
      >
        {/* Static Image Thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video Preview On Hover */}
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 border border-white/10 text-zinc-300 backdrop-blur-md">
            {project.categoryLabel}
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
            {project.projectType}
          </span>
        </div>

        {/* Center Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black group-hover:border-emerald-400">
            <Play className="w-4 h-4 ml-0.5 fill-current" />
          </div>
        </div>

        {/* Bottom Timecode & Ratio HUD */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
            {project.duration} • {project.aspectRatio}
          </span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-light text-white group-hover:text-emerald-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>

          <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Software Badges & Action */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
              >
                {tool}
              </span>
            ))}
          </div>

          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium group-hover:underline">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
}
