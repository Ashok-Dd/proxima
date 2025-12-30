"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Floating Bubbles */}
      <FloatingBubbles />

      <div className="w-full mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About Us
        </h2>

        <div className="flex flex-wrap justify-evenly gap-10">
          <AboutCard
            icon={<Briefcase size={42} className="text-blue-600" />}
            title="HOW DO WE OPERATE"
            desc="We create platforms for two- or three-day conferences, summits, virtual, and hybrid meetings where academia and industry connect. Through interactive features such as panel discussions, networking sessions, luncheons, and dinners, participants are able to form collaborations and business relations that foster both technical knowledge and operational excellence."
          />

          <AboutCard
            icon={<Users size={42} className="text-purple-600" />}
            title="PASSIONATE ABOUT OUR SERVICES"
            desc="Our attendees are carefully selected to ensure only experts and decision makers meet and exchange ideas. We strive to create summits for world changers, providing an environment for knowledge growth and secure networking. Our services combine pride, passion, and critical advice to keep your best interests in mind while maintaining scientific quality and transparency."
          />

          <AboutCard
            icon={<Leaf size={42} className="text-green-600" />}
            title="SUSTAINABLE CONFERENCES"
            desc="The Proxima Group is committed to sustainable events and works with global associations to achieve sustainability goals. Through our Corporate Social Responsibility initiatives, we aim to positively impact society and the world, ensuring that our conferences are meaningful, impactful, and future-focused."
          />
        </div>
      </div>
    </section>
  );
}


function AboutCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl w-[400px] p-8 flex flex-col items-center shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>

      <h4 className="font-semibold text-lg mb-4 text-gray-900">
        {title}
      </h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}


function FloatingBubbles() {
  const bubbles = [
    { size: 10, top: "20%", left: "10%", color: "bg-blue-400" },
    { size: 14, top: "70%", left: "50%", color: "bg-yellow-400" },
    { size: 12, top: "40%", left: "85%", color: "bg-green-400" },
    { size: 8, top: "15%", left: "70%", color: "bg-purple-400" },
  ];

  return (
    <>
      {bubbles.map((bubble, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${bubble.color}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -12, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
