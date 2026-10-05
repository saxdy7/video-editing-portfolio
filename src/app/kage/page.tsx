"use client";

import { KageLandingPage } from "@/effects/kage-landing-page/KageLandingPage";
import "@/effects/kage-landing-page/styles.css";

export default function KagePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#05070a]">
      <div className="shader-frame absolute inset-0 w-full h-full">
        <KageLandingPage
          headingFont="onest"
          bodyFont="onest"
          headingWeight="400"
          bodyWeight="300"
          primaryColor="#e0231c"
          headingSize={46}
          bodySize={17}
          headingLetterSpacing={-0.012}
        />
      </div>
    </main>
  );
}
