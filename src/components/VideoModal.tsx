"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "@/data/portfolioData";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  ArrowUpRight,
  Layers,
  Clock,
  Film
} from "lucide-react";

interface VideoModalProps {
  project: Project | null;
  customVideoUrl?: string | null;
  customTitle?: string | null;
  onClose: () => void;
  onSelectProjectForQuote?: (projectTitle: string) => void;
}

export default function VideoModal({
  project,
  customVideoUrl,
  customTitle,
  onClose,
  onSelectProjectForQuote,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoSrc = project ? project.videoUrl : customVideoUrl || "/videos/hero-reel.mp4";
  const title = project ? project.title : customTitle || "Cinematic Showcase";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleQuoteClick = () => {
    onClose();
    if (onSelectProjectForQuote) {
      onSelectProjectForQuote(title);
    }
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-2xl animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/[0.12] bg-[#080c12] shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#0a0f16]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
              {project ? project.categoryLabel : "Showcase Reel"}
            </span>
            <span className="text-xs text-zinc-600">•</span>
            <h3 className="text-sm font-medium text-white truncate max-w-md">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Video + Details */}
        <div className="overflow-y-auto flex-1 flex flex-col lg:grid lg:grid-cols-12">
          
          {/* Left / Top: Video Player Canvas */}
          <div className="lg:col-span-8 bg-black relative flex flex-col justify-center items-center overflow-hidden min-h-[320px] md:min-h-[460px]">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className={`w-full max-h-[65vh] object-contain cursor-pointer ${
                project?.aspectRatio === "9:16" ? "max-w-[340px]" : "max-w-full"
              }`}
            />

            {/* Custom Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex flex-col gap-2">
              {/* Scrubber Timeline */}
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex items-center justify-between text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-zinc-400">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    4K MASTER
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Project Breakdown & Editorial Notes */}
          <div className="lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#090d14]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {project?.projectType || "Showcase Reel"}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {project?.duration || "1080p / 4K"}
                </span>
              </div>

              <h2 className="text-xl font-light text-white tracking-tight mb-3">
                {title}
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                {project?.description ||
                  "A showcase of modern video editing techniques blending kinetic typography, precise cuts, rhythmic sound design, and custom color grading."}
              </p>

              {/* Editorial / Technical Breakdown */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                {project?.editorialNotes && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Editorial Approach
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      &ldquo;{project.editorialNotes}&rdquo;
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {project?.highlights && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Key Techniques Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Software Stack */}
                {project?.tools && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Software Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Project CTA */}
            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <button
                onClick={handleQuoteClick}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20"
              >
                <span>Request Similar Edit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
