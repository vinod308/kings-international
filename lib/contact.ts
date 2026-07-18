import { readContentFile } from "./content";

export type Office = {
  label: string;
  address: string;
  phones: string[];
  emails: string[];
  hours: string;
};

export type ContactContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  recipientEmail: string;
  offices: { india: Office; uk: Office };
  quickLinks: { label: string; href: string; icon: string }[];
  steps: { num: string; title: string; body: string }[];
  interests: string[];
};

export const CONTACT_CONTENT = readContentFile<ContactContent>("settings/contact.json");
export const CONTACT = CONTACT_CONTENT.offices;
