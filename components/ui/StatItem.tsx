"use client";

import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatItem({
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
