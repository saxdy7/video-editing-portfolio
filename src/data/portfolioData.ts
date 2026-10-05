export interface Project {
  id: string;
  title: string;
  category: "Cinematic Reels" | "SaaS & Product Videos" | "Social Media Content" | "Long-form Content" | "Motion Graphics" | "Promotional Videos";
  categoryLabel: string;
  description: string;
  tools: string[];
  projectType: "Personal / Concept Project" | "Client Project";
  aspectRatio: "16:9" | "9:16";
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: string;
  highlights: string[];
  editorialNotes: string;
}

export const PROJECTS: Project[] = [
  {
    id: "claude-ai-cinematic",
    title: "Claude AI — Cinematic Product Edit",
    category: "SaaS & Product Videos",
    categoryLabel: "SaaS / AI Product Video",
    description: "A cinematic promotional edit focused on modern pacing, clean visual transitions, motion graphics and product-focused storytelling.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    projectType: "Personal / Concept Project",
    aspectRatio: "16:9",
    thumbnail: "/images/project-claude.jpg",
    videoUrl: "/videos/hero-reel.mp4",
    duration: "0:45",
    year: "2026",
    highlights: ["Kinetic Typography", "Seamless Screen UI Zooms", "Spatial Sound Design", "3D Camera Tracking"],
    editorialNotes: "Crafted around micro-beats and sound accents. Focused on communicating complex model intelligence in under 45 seconds with razor-sharp editorial rhythm."
  },
  {
    id: "cinematic-social-reel",
    title: "Cinematic Social Reel",
    category: "Cinematic Reels",
    categoryLabel: "Instagram Reel",
    description: "A short-form cinematic edit built around rhythm, transitions, sound design and visual storytelling.",
    tools: ["Premiere Pro", "After Effects"],
    projectType: "Personal / Concept Project",
    aspectRatio: "9:16",
    thumbnail: "/images/project-reel.jpg",
    videoUrl: "/videos/work/gradglobe-07.mp4",
    duration: "0:28",
    year: "2026",
    highlights: ["Speed Ramping", "Custom SFX Foley", "Anamorphic Color Grade", "Hook Retention Cut"],
    editorialNotes: "Engineered specifically for mobile 9:16 feed retention. Uses contrast-driven frame cuts in the first 1.2 seconds to eliminate drop-off."
  },
  {
    id: "gradglobe-student-journey",
    title: "GradGlobe — Global Student Journey",
    category: "Cinematic Reels",
    categoryLabel: "Cinematic Reel",
    description: "High-impact short-form reel structured for attention retention, kinetic typography, dynamic transitions and sound accents.",
    tools: ["Premiere Pro", "After Effects"],
    projectType: "Personal / Concept Project",
    aspectRatio: "9:16",
    thumbnail: "/images/project-saas.jpg",
    videoUrl: "/videos/work/gradglobe-01.mp4",
    duration: "0:34",
    year: "2026",
    highlights: ["Motion Match Cuts", "Subtle Glitch Transitions", "Multi-layered Sound Design", "Dynamic Subtitles"],
    editorialNotes: "Combines fast-paced pacing with emotional storytelling to showcase student aspirations with international energy."
  },
  {
    id: "saas-product-showcase",
    title: "SaaS Product Showcase",
    category: "SaaS & Product Videos",
    categoryLabel: "Product Video",
    description: "A clean product-focused edit combining screen recordings, UI callouts, motion graphics and engaging pacing.",
    tools: ["Premiere Pro", "After Effects"],
    projectType: "Personal / Concept Project",
    aspectRatio: "16:9",
    thumbnail: "/images/project-saas.jpg",
    videoUrl: "/videos/hero-reel.mp4",
    duration: "1:02",
    year: "2026",
    highlights: ["Clean Screen Recordings", "Curved UI Zooms", "Feature Callouts", "Brand Identity Match"],
    editorialNotes: "Transforms dry static application UI workflows into an exciting, high-tempo product story with fluid motion curves."
  },
  {
    id: "longform-cinematic-edit",
    title: "Long-form Cinematic Edit",
    category: "Long-form Content",
    categoryLabel: "YouTube / Long-form",
    description: "A longer-form edit focused on storytelling, pacing, cinematic color and engaging visual structure.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    projectType: "Personal / Concept Project",
    aspectRatio: "16:9",
    thumbnail: "/images/project-longform.jpg",
    videoUrl: "/videos/hero-reel.mp4",
    duration: "4:15",
    year: "2025",
    highlights: ["Story-driven Pacing", "B-roll Weaving", "DaVinci Color Correction", "Dynamic Audio Balancing"],
    editorialNotes: "Balances talking head clarity with cinematic B-roll interludes, maintaining viewer momentum across minutes without visual fatigue."
  },
  {
    id: "pulsecrafts-brand-promo",
    title: "PulseCrafts Brand Concept",
    category: "Promotional Videos",
    categoryLabel: "Promotional Video",
    description: "Cinematic promotional content for products and creative brands featuring sound design and sleek color correction.",
    tools: ["Premiere Pro", "After Effects"],
    projectType: "Personal / Concept Project",
    aspectRatio: "16:9",
    thumbnail: "/images/project-claude.jpg",
    videoUrl: "/videos/hero-reel.mp4",
    duration: "0:52",
    year: "2025",
    highlights: ["High-impact Audio Design", "Cinematic Atmosphere", "Editorial Typography", "Mood Lighting Grade"],
    editorialNotes: "A high-concept studio promo showcasing bold typography, textured grain, and tactile audio designed for brand credibility."
  }
];

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  includes: string[];
  tag: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "cinematic-reels",
    num: "01",
    title: "Cinematic Reels",
    description: "High-impact short-form edits designed for Instagram, TikTok and other social platforms.",
    includes: [
      "Dynamic cuts & pacing",
      "Cinematic transitions",
      "Sound design & audio layers",
      "Color grading (LUTs / balance)",
      "Captions & kinetic subtitles",
      "Motion graphics accents"
    ],
    tag: "High Engagement"
  },
  {
    id: "long-form-content",
    num: "02",
    title: "Long-form Content",
    description: "Engaging edits for YouTube, podcasts, interviews, documentaries and other longer content.",
    includes: [
      "Story-driven narrative arc",
      "Clean retention-based pacing",
      "Contextual B-roll integration",
      "Multi-track sound design",
      "DaVinci color correction",
      "Chapter transitions & lower thirds"
    ],
    tag: "Story & Retention"
  },
  {
    id: "saas-product-videos",
    num: "03",
    title: "SaaS & Product Videos",
    description: "Modern product videos that make software and digital products easier to understand and more engaging.",
    includes: [
      "Fluid screen recordings",
      "UI animations & 3D mockups",
      "Product feature callouts",
      "Clean kinetic typography",
      "Micro-interaction sound effects",
      "Conversion-focused structure"
    ],
    tag: "Product & Growth"
  },
  {
    id: "social-media-content",
    num: "04",
    title: "Social Media Content",
    description: "Consistent social content designed around attention, retention and platform-native editing.",
    includes: [
      "Thumb-stopping 3-second hooks",
      "Platform-native aspect ratios",
      "Trending pacing & audio sync",
      "Fast turnarounds & batch cuts",
      "Engaging graphic overlays"
    ],
    tag: "Platform-Native"
  },
  {
    id: "motion-graphics",
    num: "05",
    title: "Motion Graphics",
    description: "Clean animated titles, transitions, typography, UI elements and visual effects.",
    includes: [
      "After Effects title sequences",
      "Custom vector transitions",
      "HUD / UI kinetic overlays",
      "Logo reveals & stingers",
      "Sound-synced animation curves"
    ],
    tag: "After Effects"
  },
  {
    id: "promotional-videos",
    num: "06",
    title: "Promotional Videos",
    description: "Cinematic promotional content for products, brands, creators and marketing campaigns.",
    includes: [
      "Commercial grade color grade",
      "Rhythmic sound mastering",
      "Cinematic widescreen framing",
      "Voiceover & music mastering",
      "Multi-platform export presets"
    ],
    tag: "Commercial"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief",
    description: "You send the footage, references, brand guidelines, and project requirements."
  },
  {
    step: "02",
    title: "Plan",
    description: "I understand the goal, target audience, style, music mood, and pacing before cutting."
  },
  {
    step: "03",
    title: "Edit",
    description: "I build the first cut assembling story, pacing, visual transitions, and multi-track audio."
  },
  {
    step: "04",
    title: "Refine",
    description: "Your feedback is applied, fine-tuning cuts, color grade, subtitles, and audio mix."
  },
  {
    step: "05",
    title: "Deliver",
    description: "You receive the final export in the required formats (4K, 1080p, 9:16 vertical) ready to publish."
  }
];

export const SOFTWARE_TOOLS = [
  {
    name: "Adobe Premiere Pro",
    role: "Editing",
    description: "Primary NLE for multi-track timeline assembly, sound sync, pacing, and master delivery.",
    icon: "Pr",
    color: "#9999FF"
  },
  {
    name: "Adobe After Effects",
    role: "Motion",
    description: "Advanced motion graphics, 3D camera tracking, custom transitions, and kinetic typography.",
    icon: "Ae",
    color: "#D291FF"
  },
  {
    name: "Adobe Photoshop",
    role: "Design",
    description: "Thumbnail design, custom texture generation, asset preparation, and visual composite assets.",
    icon: "Ps",
    color: "#31A8FF"
  },
  {
    name: "DaVinci Resolve",
    role: "Color",
    description: "Professional color grading, LOG-to-Rec.709 transforms, skin-tone isolation, and cinematic look development.",
    icon: "Dv",
    color: "#FF6B4A"
  }
];

export const CLIENT_TYPES = [
  "Creators",
  "Brands",
  "Startups",
  "SaaS Companies",
  "Agencies",
  "Student Organizations",
  "Personal Brands"
];
