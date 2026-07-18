"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--line)]" : ""
      }`}
    >
      <div className="container-site flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpenDesktop(null)}>
          <Image
            src="/images/kings/logo/kings-international-logo.png"
            alt="Kings International"
            width={121}
            height={154}
            priority
            className="h-11 w-auto object-contain rounded-md bg-white p-1"
          />
          <span className="hidden sm:block font-display leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight text-ink">Kings International</span>
            <span className="block text-[10px] tracking-[0.18em] uppercase text-ink-soft/70">Est. 1977 · Kanpur</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenDesktop(null)}>
          {NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpenDesktop(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2.5 text-[13px] font-medium tracking-wide text-ink/80 transition-colors hover:text-green"
              >
                {item.label}
                {item.children && <ChevronDown size={13} strokeWidth={2.5} className="opacity-50" />}
              </Link>

              <AnimatePresence>
                {item.children && openDesktop === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 min-w-[240px]"
                  >
                    <div className="rounded-xl border border-[var(--line)] bg-white shadow-xl shadow-black/[0.06] py-2 overflow-hidden">
                      {item.children.map((c) => {
                        const external = c.href.startsWith("http");
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2.5 text-[13px] text-ink-soft hover:bg-green-soft hover:text-green transition-colors"
                          >
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-white hover:bg-green-deep transition-colors"
          >
            Request Quote
          </Link>
        </div>

        <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="lg:hidden p-2 -mr-2 text-ink">
          <Menu size={24} />
        </button>
      </div>
    </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--line)]">
                <Image src="/images/kings/logo/kings-international-logo.png" alt="Kings International" width={121} height={154} className="h-10 w-auto" />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-ink">
                  <X size={22} />
                </button>
              </div>
              <nav className="p-5 flex flex-col gap-1">
                {NAV.map((item) => (
                  <div key={item.label} className="border-b border-[var(--line)] last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-3.5 text-left text-[15px] font-medium text-ink"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={mobileSub === item.label}
                          onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                          className="p-2.5 -mr-2.5 text-ink"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.children && mobileSub === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 pb-2"
                        >
                          {item.children.map((c) => {
                            const external = c.href.startsWith("http");
                            return (
                              <Link
                                key={c.href}
                                href={c.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-[13px] text-ink-soft"
                              >
                                {c.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="mt-5 text-center rounded-full bg-green px-5 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-white"
                >
                  Request Quote
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
