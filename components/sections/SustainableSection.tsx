"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function SustainableSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp as any}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sustainable Conferences
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            The Proxima group is committed to sustainable events, working with
            global associations to achieve their sustainability goals. As a
            worldwide company, we strive to give back by creating meaningful
            conferences that positively impact society and the planet.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our Corporate Social Responsibility ensures that every event is
            future-focused, eco-friendly, and leaves a lasting impact on both
            the scientific community and the world.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp as any}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <img
            src="/images/sample.png" // replace with your image path
            alt="Sustainable Conference"
            className="w-full rounded-2xl shadow-xl"
          />

          {/* Decorative dots */}
          <span className="absolute -top-6 left-1/2 h-4 w-4 rounded-full bg-green-400" />
          <span className="absolute -bottom-6 left-1/3 h-5 w-5 rounded-full bg-purple-400" />
          <span className="absolute right-[-12px] bottom-12 h-4 w-4 rounded-full bg-yellow-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
