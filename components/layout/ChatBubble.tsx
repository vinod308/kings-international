"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 rounded-2xl bg-white border border-[var(--line)] shadow-xl shadow-black/10 p-5"
          >
            <p className="text-[13px] font-semibold text-ink mb-1.5">Hello 👋</p>
            <p className="text-[13px] leading-relaxed text-ink-soft">
              Full live chat is launching soon. In the meantime, tell us what you&apos;re sourcing and the export
              desk will reply directly - usually within one business day.
            </p>
            <a
              href="/quote"
              className="mt-4 inline-block w-full text-center rounded-full bg-green px-4 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase text-white hover:bg-green-deep transition-colors"
            >
              Send an enquiry
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with us"
        className="w-[52px] h-[52px] rounded-full bg-green text-white flex items-center justify-center shadow-lg shadow-black/20 hover:bg-green-deep transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
