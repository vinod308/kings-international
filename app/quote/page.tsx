"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const RECIPIENT = "works@kings-international.net";

const PRODUCT_CATEGORIES = [
  "Kingston (Saddlery & Harness)",
  "Equitel (Premium Equestrian)",
  "Ryder Belts",
  "Target (Hunting Accessories)",
  "Pets' Pal (Pet Accessories)",
  "Not sure / general enquiry",
];
const BUYER_TYPES = ["Brand", "Wholesaler", "Retailer", "Sourcing agent", "Importer", "Other"];

const WHY = [
  { num: "01", title: "Straight to the export desk", body: "No call centre, no reseller - your enquiry reaches the people who actually run production in Kanpur." },
  { num: "02", title: "One factory, every stage", body: "Tannery, cutting, stitching and finishing under one roof, so the quote you get reflects real capacity, not a guess." },
  { num: "03", title: "Reply within a business day", body: "Mon-Sat IST. Specific enquiries get specific answers - quantities, materials, and lead times, not templates." },
];

const inputClass =
  "w-full bg-white border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-ink outline-none focus:border-green transition-colors";
const labelClass = "block text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-soft/60 mb-2";

export default function QuotePage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [spec, setSpec] = useState("");
  const [quantity, setQuantity] = useState("");
  const [destination, setDestination] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);

  const canSubmit = fullName.trim() && company.trim() && email.trim() && agree;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const lines = [
      `Full name: ${fullName}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      `Product category: ${category || "-"}`,
      `Buyer type: ${buyerType || "-"}`,
      spec ? `Specification / notes: ${spec}` : null,
      "",
      `Target quantity: ${quantity || "-"}`,
      `Destination country: ${destination || "-"}`,
    ].filter((l): l is string => l !== null);

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      `[Quote request] ${fullName} - ${company}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="B2B Hub · Request a Quote"
        title="Tell us what you need to source."
        intro="The more specific the enquiry - quantities, materials, destination market - the more specific the answer. Everything goes straight to the export desk in Kanpur."
        image="/images/kings/manufacturing/handcraft-stitching.jpg"
        imageAlt="Hand-stitching a leather harness at Kings International"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site max-w-4xl mx-auto">
          <RevealGroup className="grid sm:grid-cols-3 gap-5 mb-16">
            {WHY.map((w) => (
              <RevealItem key={w.num} type="up">
                <div className="h-full rounded-2xl bg-cream-deep p-6">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-gold mb-3">{w.num}</p>
                  <h3 className="text-[15px] font-semibold text-ink mb-1.5">{w.title}</h3>
                  <p className="text-[13px] leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal type="up">
            <div className="rounded-2xl bg-white border border-[var(--line)] p-8 sm:p-12">
              {done ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-soft flex items-center justify-center text-green mx-auto mb-6">
                    <Send size={22} />
                  </div>
                  <h3 className="font-display text-[26px] font-semibold text-ink mb-2">Your mail client just opened.</h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    Hit send and we&apos;ll reply within one business day, Mon-Sat IST.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <fieldset className="mb-10">
                    <p className="text-[11px] font-bold tracking-[0.22em] text-ink-soft/45 mb-5">01 / WHO YOU ARE</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelClass}>Full name *</label>
                        <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company *</label>
                        <input required value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone (with country code)</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="mb-10">
                    <p className="text-[11px] font-bold tracking-[0.22em] text-ink-soft/45 mb-5">02 / WHAT YOU NEED</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelClass}>Product category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
                          <option value="">Select…</option>
                          {PRODUCT_CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>You are a…</label>
                        <select value={buyerType} onChange={(e) => setBuyerType(e.target.value)} className={inputClass}>
                          <option value="">Select…</option>
                          {BUYER_TYPES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Specification, materials, or anything else</label>
                      <textarea value={spec} onChange={(e) => setSpec(e.target.value)} rows={4} className={`${inputClass} resize-y`} />
                    </div>
                  </fieldset>

                  <fieldset className="mb-8">
                    <p className="text-[11px] font-bold tracking-[0.22em] text-ink-soft/45 mb-5">03 / LOGISTICS</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Target quantity</label>
                        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Destination country</label>
                        <input value={destination} onChange={(e) => setDestination(e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white disabled:bg-ink/15 disabled:text-ink-soft/40 disabled:cursor-not-allowed hover:bg-green transition-colors mb-4"
                  >
                    Send Enquiry
                    <Send size={15} />
                  </button>

                  <label className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ink-soft cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 accent-green"
                    />
                    I agree that Kings International may use these details to respond to my enquiry (see the{" "}
                    <Link href="/privacy" className="text-green underline">
                      privacy policy
                    </Link>
                    ). *
                  </label>
                  <p className="text-[12px] text-ink-soft/60 mt-4 flex items-center gap-1.5">
                    <Mail size={13} /> Prefer email? {RECIPIENT}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
