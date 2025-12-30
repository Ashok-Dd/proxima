"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroHeader = ({ title, desc, image, alt }: any) => {
  return (
    <section className="relative w-full h-[55vh] overflow-hidden">
      
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Title - from LEFT */}
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4"
        >
          {title}
        </motion.h1>

        {/* Description - from RIGHT */}
        <motion.p
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/90 max-w-3xl text-base md:text-lg leading-relaxed"
        >
          {desc}
        </motion.p>

      </div>
    </section>
  );
};

export default HeroHeader;
