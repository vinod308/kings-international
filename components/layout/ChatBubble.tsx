"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Plus, X, ArrowRight } from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function ChatBubble({
  whatsappHref,
  emails,
  phones,
}: {
  whatsappHref: string;
  emails: string[];
  phones: string[];
}) {
  const [open, setOpen] = useState(false);

  const OPTIONS = [
    {
      label: "WhatsApp",
      sub: "Usually replies in minutes",
      href: whatsappHref,
      icon: MessageCircle,
      external: true,
      iconClass: "bg-[#25D366] text-white",
    },
    ...emails.map((email) => ({
      label: "Email",
      sub: email,
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
      iconClass: "bg-gold text-white",
    })),
    ...phones.map((phone) => ({
      label: "Call",
      sub: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
      icon: Phone,
      external: false,
      iconClass: "bg-cream text-green-deep",
    })),
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-[64px] right-0 w-[300px] rounded-[22px] bg-[var(--green-deep)] shadow-2xl shadow-black/30 p-4 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
                </span>
                Online now
              </span>
              <span className="text-[11px] text-cream/40">IST</span>
            </div>

            <p className="text-[17px] font-semibold text-white leading-snug">{getGreeting()} 👋</p>
            <p className="text-[12.5px] text-cream/55 mt-0.5 mb-3">How would you like to reach us?</p>

            <div className="flex flex-col">
              {OPTIONS.map(({ label, sub, href, icon: Icon, external, iconClass }, i) => (
                <motion.a
                  key={`${label}-${sub}`}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.2 }}
                  className="group flex items-center gap-3 rounded-2xl px-2.5 py-2.5 hover:bg-white/[0.06] active:bg-white/[0.1] transition-colors"
                >
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconClass}`}>
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] font-semibold text-white">{label}</span>
                    <span className="block text-[11.5px] text-cream/50 truncate">{sub}</span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-cream/40 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact us"
        className="group flex items-center gap-2.5 pl-2 pr-3 py-2 rounded-full bg-white shadow-lg shadow-black/15 border border-[var(--line)] hover:shadow-xl transition-shadow"
      >
        <span className="relative w-9 h-9 rounded-full bg-green flex items-center justify-center text-white shrink-0">
          <MessageCircle size={17} />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
        </span>
        <span className="text-[13px] font-semibold text-ink">Let&apos;s talk</span>
        <span className="w-6 h-6 rounded-full bg-cream-deep flex items-center justify-center text-ink shrink-0">
          {open ? <X size={13} /> : <Plus size={13} />}
        </span>
      </button>
    </div>
  );
}
