import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_LEATHERS, FOOTER_COMPANY, FOOTER_B2B, CONTACT } from "@/lib/nav";

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4A22 22 0 0 0 14 3.25c-2.35 0-3.96 1.44-3.96 4.06v2.54H7.31v3.15h2.73V21h3.46Z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 2.5h3.3l-7.2 8.2 8.5 10.8h-6.6l-5.2-6.6-5.9 6.6H2.5l7.7-8.7L2 2.5h6.8l4.7 6.1 5.4-6.1Zm-1.15 17h1.8L7.3 4.4H5.4l12.35 15.1Z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.1-.9C15.8 4 12 4 12 4h0s-3.8 0-6.65.15c-.4.05-1.3.05-2.1.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 8.95 2.2 10.7v1.6c0 1.75.2 3.5.2 3.5s.2 1.5.85 2.15c.8.85 1.85.82 2.3.91C7.2 19 12 19 12 19s3.8 0 6.65-.15c.4-.05 1.3-.05 2.1-.9.65-.65.85-2.15.85-2.15s.2-1.75.2-3.5v-1.6c0-1.75-.2-3.5-.2-3.5ZM9.95 14.1V8.9l5 2.6-5 2.6Z" />
    </svg>
  );
}

function OfficeBlock({ office }: { office: (typeof CONTACT)["india"] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-3">{office.label}</p>
      <div className="flex gap-2.5 text-[13px] text-cream/70 mb-2">
        <MapPin size={15} className="mt-0.5 shrink-0" />
        <span>{office.address}</span>
      </div>
      <div className="flex gap-2.5 text-[13px] text-cream/70 mb-2">
        <Phone size={15} className="mt-0.5 shrink-0" />
        <span>{office.phones.join(" · ")}</span>
      </div>
      <div className="flex gap-2.5 text-[13px] text-cream/70">
        <Mail size={15} className="mt-0.5 shrink-0" />
        <span className="break-all">{office.emails.join(" · ")}</span>
      </div>
      <p className="text-[12px] text-cream/45 mt-3">{office.hours}</p>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.label + l.href}>
              <Link
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-[13px] text-cream/70 hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--green-deep)] text-cream">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
        <div className="lg:col-span-2">
          <Image
            src="/images/kings/logo/kings-international-logo.png"
            alt="Kings International"
            width={121}
            height={154}
            className="h-14 w-auto mb-5 bg-white rounded-lg p-1.5"
          />
          <p className="text-[13px] leading-relaxed text-cream/70 max-w-xs">
            Excellence in hand-crafted leather goods, manufactured and exported worldwide since 1977.
          </p>
          <div className="flex gap-3 mt-6">
            {[FacebookIcon, XIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-cream/10 hover:text-cream transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Our Leathers" links={FOOTER_LEATHERS} />
        <FooterColumn title="Company" links={FOOTER_COMPANY} />
        <FooterColumn title="B2B Hub" links={FOOTER_B2B} />
        <OfficeBlock office={CONTACT.india} />
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-cream/50">
          <p>© {new Date().getFullYear()} Kings International Ltd. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-cream transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
