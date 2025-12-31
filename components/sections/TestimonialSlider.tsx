"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "A very well-organized event. The sessions were highly engaging, and I loved the diversity of topics covered.",
    name: "Sarah Thompson",
    role: "University of Oxford",
    image: "/images/man.jpg", // replace
  },
  {
    quote:
      "Excellent speakers and great networking opportunities. Truly a world-class experience.",
    name: "James Miller",
    role: "MIT",
    image: "/images/man.jpg",
  },
  {
    quote:
      "Inspiring sessions with real-world impact. I would definitely attend again.",
    name: "Emily Carter",
    role: "Stanford University",
    image: "/images/man.jpg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
  }),
};

export default function TestimonialSlider() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
        What People Say About Us
      </h2>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="relative rounded-3xl bg-white px-10 py-14 shadow-xl">
          {/* Slider */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="h-20 w-20 rounded-full border-4 border-blue-600 object-cover"
                />
              </div>

              {/* Quote */}
              <p className="mx-auto max-w-2xl text-lg italic text-gray-700 leading-relaxed">
                “{testimonials[index].quote}”
              </p>

              {/* Name */}
              <h4 className="mt-8 text-xl font-semibold text-gray-900">
                {testimonials[index].name}
              </h4>
              <p className="text-gray-500">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full p-2 text-blue-600 hover:bg-blue-50"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full p-2 text-blue-600 hover:bg-blue-50"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
