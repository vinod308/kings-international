import { readContentFile } from "./content";

export type Certification = { num: string; title: string; body: string };
export type CertificationSlide = { src: string; alt: string; label: string };

type CertificationsData = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  certificationsSection: { eyebrow: string; heading: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
  certifications: Certification[];
  whyCertified: { title: string; body: string }[];
  certificationBadges: string[];
  certificationSlides: CertificationSlide[];
};

const DATA = readContentFile<CertificationsData>("certifications.json");

export const CERTIFICATIONS_HERO = DATA.hero;
export const CERTIFICATIONS_SECTION = DATA.certificationsSection;
export const CERTIFICATIONS_CTA = DATA.cta;
export const CERTIFICATIONS = DATA.certifications;
export const WHY_CERTIFIED = DATA.whyCertified;
export const CERTIFICATION_BADGES = DATA.certificationBadges;
export const CERTIFICATION_SLIDES = DATA.certificationSlides;
