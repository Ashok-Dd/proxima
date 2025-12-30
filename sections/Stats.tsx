"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function StatItem({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest).toLocaleString();
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <div>
      <span
        ref={ref}
        className="text-5xl font-bold text-blue-600"
      >
        0
      </span>
      <span className="text-4xl font-bold text-blue-600">+</span>

      <p className="mt-3 text-gray-600 font-medium">
        {label}
      </p>
    </div>
  );
}


export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <StatItem value={124} label="Success Conferences" />
        <StatItem value={200} label="Committee Members" />
        <StatItem value={5000} label="All Participants" />
        <StatItem value={19} label="Host Countries" />
      </div>
    </section>
  );
}
