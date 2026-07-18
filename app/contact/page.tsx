"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MessageCircle, Sparkles, Newspaper, Wrench } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/nav";

const RECIPIENT = "works@kings-international.net";

const STEPS = [
  { num: "01", title: "You send the brief", body: "Fill in what you know - the form below or a plain email both work." },
  { num: "02", title: "We scope it", body: "The export desk in Kanpur reviews materials, quantities and timeline, and replies with real answers." },
  { num: "03", title: "We sample or quote", body: "Depending on the request, you'll get a quote directly or a counter-sample proposal to approve first." },
];

const QUICK_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/919415128471", icon: MessageCircle },
  { label: "New enquiry", href: `mailto:${RECIPIENT}?subject=New%20product%20enquiry`, icon: Sparkles },
  { label: "Press / Media", href: `mailto:${RECIPIENT}?subject=Press%20enquiry`, icon: Newspaper },
  { label: "OEM Services", href: "/oem", icon: Wrench },
];

const INTERESTS = [
  "Belts",
  "Bags & Leather Goods",
  "Equestrian & Saddlery",
  "Pet Accessories",
  "Hunting & Outdoor Accessories",
  "OEM / Private Label",
  "Not sure yet",
];

const inputClass =
  "w-full bg-white border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-ink outline-none focus:border-green transition-colors";
const labelClass = "block text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-soft/60 mb-2";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);

  const canSubmit = fullName.trim() && email.trim() && agree;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const lines = [
      `Full name: ${fullName}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      `Interested in: ${interest || "-"}`,
      "",
      message ? `Message:\n${message}` : null,
    ].filter((l): l is string => l !== null);

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      `[Contact] ${fullName}${company ? " - " + company : ""}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="B2B Hub · Contact"
        title="Let's build something."
        intro="The form below reads like a brief, not a checkout. Fill in what you know, leave the rest blank - we answer everything personally."
        image="/images/kings/manufacturing/tannery-hides.jpg"
        imageAlt="Hides in production at the Kings International tannery"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site max-w-4xl mx-auto">
          <RevealGroup className="grid sm:grid-cols-2 gap-5 mb-14">
            {[CONTACT.india, CONTACT.uk].map((o) => (
              <RevealItem key={o.label} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7 relative overflow-hidden">
                  <span className="absolute top-0 left-0 bottom-0 w-1 bg-gold" aria-hidden />
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-soft/55 mb-4">{o.label}</p>
                  <p className="text-[14px] font-medium text-ink whitespace-pre-line mb-4">{o.address}</p>
                  <div className="flex flex-col gap-1.5 mb-4">
                    {o.emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="text-[13px] text-ink-soft hover:text-green transition-colors">
                        {e}
                      </a>
                    ))}
                    {o.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-[13px] text-ink-soft hover:text-green transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-ink-soft/45">{o.hours}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal type="up" className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Faster Routes</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {QUICK_LINKS.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel={q.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl bg-white border border-[var(--line)] px-4 py-3.5 text-[13.5px] font-medium text-ink hover:border-green/30 hover:-translate-y-0.5 transition-all"
                >
                  <q.icon size={18} className="text-green shrink-0" />
                  {q.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal type="up" className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-6">What Happens Next</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <div key={s.num} className="rounded-2xl bg-cream-deep p-6">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-gold mb-3">{s.num}</p>
                  <h3 className="text-[15px] font-semibold text-ink mb-1.5">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

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
                  <fieldset className="mb-8">
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelClass}>Full name *</label>
                        <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company / brand</label>
                        <input value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
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

                  <fieldset className="mb-8">
                    <div className="mb-4">
                      <label className={labelClass}>Interested in</label>
                      <select value={interest} onChange={(e) => setInterest(e.target.value)} className={inputClass}>
                        <option value="">Select…</option>
                        {INTERESTS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="What are you looking to source, and anything else we should know?"
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white disabled:bg-ink/15 disabled:text-ink-soft/40 disabled:cursor-not-allowed hover:bg-green transition-colors mb-4"
                  >
                    Send Message
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
                  <p className="text-[12px] text-ink-soft/60 mt-4">Replies within one business day, Mon-Sat IST.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
