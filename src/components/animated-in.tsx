"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { TRANSITIONS, VARIANTS } from "@/lib/motion";

export function AnimatedIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={VARIANTS.section}
      transition={TRANSITIONS.section}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHero({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={VARIANTS.hero}
      transition={{ ...TRANSITIONS.hero, delay: 0.1 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedProduct({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={VARIANTS.product}
      transition={TRANSITIONS.soft}
      style={{ perspective: 1400 }}
      className={cn("transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}
