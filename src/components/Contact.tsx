"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

interface ContactProps {
  initialProjectType?: string;
}

export default function Contact({ initialProjectType }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: initialProjectType || "Cinematic Reel",
    duration: "",
    budget: "$100–$250",
    deadline: "",
    details: "",
    referenceLink: "",
    agreeContact: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#a3e635", "#ffffff"],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  const projectTypes = [
    "Cinematic Reel",
    "Social Media Video",
    "Long-form Video",
    "SaaS Product Video",
    "YouTube Video",
    "Promotional Video",
    "Motion Graphics",
    "Other",
  ];

  const budgetOptions = [
    "Under $50",
    "$50–$100",
    "$100–$250",
    "$250–$500",
    "$500+",
  ];

  // Direct WhatsApp formatted message
  const whatsappText = encodeURIComponent(
    `Hi Sandeep! I saw your video editing portfolio and I'm interested in working together on a ${formData.projectType || "video editing"} project.`
  );

  return (
    <section id="contact" className="py-24 md:py-32 relative border-b border-white/[0.06] bg-[#05070a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <Send className="w-3.5 h-3.5" />
            <span>Project Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
            Have footage? <br className="hidden sm:inline" />
            <span className="italic font-serif text-white/95">Let&apos;s turn it into</span>{" "}
            something people remember.
          </h2>

          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Tell me what you&apos;re working on, what you need edited and the style you&apos;re going for. I respond within 24 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-3xl border border-white/[0.1] bg-[#090d14] shadow-2xl shadow-black relative overflow-hidden">
              
              {isSubmitted ? (
                /* Success State */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                    Inquiry Received!
                  </h3>

                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
                    Thanks for reaching out, <span className="text-white font-medium">{formData.name}</span>. I&apos;ll review your requirements for the {formData.projectType} and get back to you with timeline & next steps.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.1] transition-colors"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Project Type & Estimated Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e141e] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Estimated Duration
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 30–60s Reel, 8–10m YouTube"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Budget & Deadline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Budget Range *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e141e] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Target Deadline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Within 1 week, End of month"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Reference Link */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Reference Link / Footage Link (Google Drive, YouTube, Instagram)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or https://youtube.com/..."
                      value={formData.referenceLink}
                      onChange={(e) => setFormData({ ...formData, referenceLink: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Row 5: Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Project Details & Creative Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your footage, pacing, style preference, music mood, or any specific instructions..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agreeContact}
                      onChange={(e) => setFormData({ ...formData, agreeContact: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 bg-black/40 text-emerald-400 focus:ring-emerald-400"
                    />
                    <label htmlFor="agree" className="text-xs text-zinc-400 select-none">
                      I agree to be contacted regarding my project.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-400 text-zinc-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Start My Project</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact & Availability */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            
            {/* Quick Conversation Box */}
            <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090d14] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                  Direct Channels
                </span>
                <h3 className="text-xl font-light text-white tracking-tight">
                  Prefer a quick conversation?
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                  Reach out directly on any channel below for quick questions, reel audits, or urgent edits.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="mailto:sandeepmamidala77@gmail.com"
                  className="w-full p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-emerald-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono">Email</span>
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-emerald-300">sandeepmamidala77@gmail.com</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-emerald-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="text-xs font-mono">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-emerald-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono">WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                  Current Bandwidth
                </span>
              </div>
              <h4 className="text-base font-light text-white mb-2">
                Taking On Projects for 2026
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                6–8 hours daily editing capacity. Typical short-form turnaround is 24–48 hours upon brief approval.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
