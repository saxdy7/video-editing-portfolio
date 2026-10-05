"use client";

import { KageLandingPage as BaseKageLandingPage } from "@/shaders/landing-pages/LandingPages";
import type { LandingPageProps } from "@/shaders/landing-pages/LandingPageFrame";
import type { PageTypographyProps } from "@/shaders/landing-pages/pageTypography";

export type KageLandingPageProps = LandingPageProps & PageTypographyProps;

export function KageLandingPage(props: KageLandingPageProps) {
  return <BaseKageLandingPage {...props} />;
}

export default KageLandingPage;
