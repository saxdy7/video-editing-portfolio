"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Film } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Why Me", href: "#why-me" },
    { name: "Comparison", href: "#comparison" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#05070a]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-base tracking-tight text-white flex items-center gap-1.5">
                Sandeep M
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              </div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                Cinematic Video Editor
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider text-zinc-300 hover:text-emerald-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/kage"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-red-500/40 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] animate-pulse"></span>
              <span>3D Cinematic Portfolio</span>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-white text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 transition-all duration-200 shadow-lg shadow-white/5 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070a]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 pt-28 border-b border-white/[0.08]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-zinc-200 hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="/kage"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.04] border border-white/[0.1] text-white hover:border-red-500/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#e0231c] animate-pulse"></span>
              <span>3D Cinematic Portfolio</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
