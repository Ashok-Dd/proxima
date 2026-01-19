"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignatureConferences() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-white to-pink-50 overflow-hidden">
      {/* Decorative Dot */}
      <motion.span
        className="absolute bottom-24 left-[30%] w-4 h-4 bg-purple-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-16"
        >
          Our Signature Conferences
        </motion.h2>


        <div className="w-full flex justify-evenly flex-wrap">

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-sm mx-auto  bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-t-2xl"
            >
              <Image
                src="/images/sample.png" // replace with your image
                alt="Aging & Longevity Conference"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Aging & Longevity Conference
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Aging and Longevity Conference (ALC-2026) to be held during
                APRIL 09-10, 2026 in Rome, Italy and online.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-sm mx-auto  bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-t-2xl"
            >
              <Image
                src="/images/sample.png" // replace with your image
                alt="Aging & Longevity Conference"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Aging & Longevity Conference
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Aging and Longevity Conference (ALC-2026) to be held during
                APRIL 09-10, 2026 in Rome, Italy and online.
              </p>
            </div>
          </motion.div>

        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              px-8 py-4
              rounded-xl
              shadow-md
              transition
            "
          >
            Explore Upcoming Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
