"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Stats from "./Stats";
import Approach from "./Approach";
import HeroHeader from "@/components/ui/Hero";

type AboutSection = {
  img: string;
  title: string;
  text: string;
  reverse?: boolean;
};

const sections: AboutSection[] = [
  {
    img: "/images/sample.png",
    title: "Our Mission",
    text: "We aim to build meaningful digital experiences that empower users worldwide.",
  },
  {
    img: "/images/sample.png",
    title: "Our Vision",
    text: "To become a global platform delivering innovation and trust.",
    reverse: true,
  },
  {
    img: "/images/sample.png",
    title: "Our Values",
    text: "Transparency, integrity, and technology-driven solutions.",
  },
];

export default function AboutPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-16",
              "md:translate-x-24",
              "md:-translate-x-24"
            );
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (

    <>

    <main>

      <HeroHeader title={'About Proxima'} desc={"Creating impactful conferences that connect academia, industry, and global leaders for knowledge sharing and innovation."} image={"/images/sample.png"} alt={"About Proxima"} />


    </main>
    
    <section className="px-[10%] py-28 space-y-32 bg-white">
      {sections.map((item, index) => (
        <div
          key={index}
          ref={(el) => {(sectionRefs.current[index] = el)}}
          className={`flex flex-col md:flex-row items-center gap-16
          transition-all duration-1000 ease-out
          opacity-0 translate-y-16
          ${
            item.reverse
              ? "md:flex-row-reverse md:-translate-x-24"
              : "md:translate-x-24"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </section>
    <Stats />
    <Approach />
    </>
  );
}
