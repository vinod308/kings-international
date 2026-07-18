import { readContentFile } from "./content";

export type Certification = { num: string; title: string; body: string };
export type CertificationSlide = { src: string; alt: string; label: string };

type CertificationsData = {
  certifications: Certification[];
  whyCertified: { title: string; body: string }[];
  certificationBadges: string[];
  certificationSlides: CertificationSlide[];
};

const DATA = readContentFile<CertificationsData>("certifications.json");

export const CERTIFICATIONS = DATA.certifications;
export const WHY_CERTIFIED = DATA.whyCertified;
export const CERTIFICATION_BADGES = DATA.certificationBadges;
export const CERTIFICATION_SLIDES = DATA.certificationSlides;
