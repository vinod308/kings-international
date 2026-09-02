import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_LEATHERS, FOOTER_COMPANY, FOOTER_B2B } from "@/lib/nav";
import { CONTACT } from "@/lib/contact";

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4A22 22 0 0 0 14 3.25c-2.35 0-3.96 1.44-3.96 4.06v2.54H7.31v3.15h2.73V21h3.46Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61594086324427", label: "Facebook" },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/kings_international_ltd?utm_source=qr&igsi=MTU1cnAwaXIzaWR4bw==",
    label: "Instagram",
  },
];

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
        <span className="flex flex-col">
          {office.emails.map((email) => (
            <span key={email} className="break-all">
              {email}
            </span>
          ))}
        </span>
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
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-3">
          <Image
            src="/images/kings/logo/kings-international-logo.png"
            alt="Kings International"
            width={121}
            height={154}
            className="h-14 w-auto mb-5"
          />
          <p className="text-[13px] leading-relaxed text-cream/70 max-w-xs">
            Excellence in hand-crafted leather goods, manufactured and exported worldwide since 1977.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-cream/10 hover:text-cream transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title="Our Leathers" links={FOOTER_LEATHERS} />
        </div>
        <div className="lg:col-span-2">
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
        </div>
        <div className="lg:col-span-2">
          <FooterColumn title="B2B Hub" links={FOOTER_B2B} />
        </div>
        <div className="lg:col-span-3">
          <OfficeBlock office={CONTACT.india} />
        </div>
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
