"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, BookOpen, Globe } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Intro() {
  return (
    <section className="bg-gradient-to-br from-[#f5f7ff] via-white to-[#fdf7ff] py-20">
      <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Welcome to <span className="text-blue-600">Proxima</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Proxima creates forums for sharing best practices and exchanging
            ideas; it contributes to the growth of professional skills in an
            educational and academic environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Trusted by researchers, professors, and institutions worldwide,
            our goal is to empower scientific communities with high-quality
            knowledge-sharing platforms.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<ShieldCheck />}
            title="True Exchange of Knowledge"
            desc="Professional event planning with networking & cultural experiences."
          />

          <FeatureCard
            icon={<Briefcase />}
            title="Professional Conference Organizer"
            desc="Organizing high-quality conferences, workshops, and academic events."
          />

          <FeatureCard
            icon={<BookOpen />}
            title="Publishing Opportunities"
            desc="Partnering with publishers to bring scholars' work to a wider audience."
          />

          <FeatureCard
            icon={<Globe />}
            title="Worldwide Platform"
            desc="A global platform for academics to share and showcase research."
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={cardVariants as any}
      whileHover={{ y: -6 }}
      className="
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      {/* Icon */}
      <div className="
        w-12 h-12
        flex items-center justify-center
        rounded-xl
        bg-blue-50
        text-blue-600
        mb-4
      ">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
