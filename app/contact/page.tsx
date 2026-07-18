import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import { CONTACT_CONTENT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kings International's Kanpur export desk or UK subsidiary - product enquiries, OEM briefs, and press requests answered personally.",
};

export default function ContactPage() {
  const { hero, recipientEmail, offices, quickLinks, steps, interests } = CONTACT_CONTENT;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <ContactForm
          recipientEmail={recipientEmail}
          offices={offices}
          quickLinks={quickLinks}
          steps={steps}
          interests={interests}
        />
      </section>
    </>
  );
}
