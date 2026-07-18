"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealType = "up" | "left" | "right" | "scale" | "blur";

const VARIANTS: Record<RevealType, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)", y: 16 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export default function Reveal({
  children,
  type = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={VARIANTS[type]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  type = "up",
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  type?: RevealType;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={VARIANTS[type]} transition={{ duration, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
