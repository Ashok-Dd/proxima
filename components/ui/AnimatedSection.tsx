"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  reverse?: boolean;
  delay?: number;
};

export function AnimatedSection({
  children,
  reverse = false,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        x: reverse ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={`flex flex-col md:flex-row items-center gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}