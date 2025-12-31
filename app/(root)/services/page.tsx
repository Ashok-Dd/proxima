"use client";
import HeroHeader from "@/components/ui/Hero";
import Image from "next/image";
import { useEffect, useRef } from "react";

type ServicesSection = {
  img: string;
  title: string;
  text: string;
  reverse?: boolean;
  listPoints?: string[];
};

const sections: ServicesSection[] = [
  {
    img: "/images/sample.png",
    title: "In-Person Conferences",
    text: "Our face-to-face conferences foster powerful human connections. We create engaging congresses that keep audiences inspired, promote collaboration, and deliver memorable experiences.",
    listPoints: [
      "Top-notch scientific programs with global speakers.",
      "Multiple formats: oral, e-poster, poster presentations.",
      "Opportunities for young researchers to stand alongside experts.",
      "No parallel tracks – everyone shares the same stage.",
      "Focused networking with like-minded professionals.",
    ],
  },
  {
    img: "/images/sample.png",
    title: "Hybrid Events",
    text: "Hybrid events combine the energy of live conferences with the reach of digital. Whether in person or online, participants enjoy equal access to knowledge, interaction, and collaboration opportunities.",
    reverse: true,
    listPoints: [
      "Seamless blend of on-site and online engagement.",
      "Wider reach for sponsors and attendees worldwide.",
      "Adaptable to fully virtual if required.",
      "Interactive cross-platform participation.",
      "Hosted on secure, GDPR-compliant platforms.",
    ],
  },
  {
    img: "/images/sample.png",
    title: "Virtual Experiences",
    text: "Our virtual conferences erase geographical barriers. We provide interactive platforms that connect participants globally, ensuring every session is engaging and impactful.",
    listPoints: [
      "Plenary sessions, e-posters, and breakout rooms.",
      "1:1 networking across continents.",
      "Immersive sponsor and exhibitor booths.",
      "Gamified features for higher engagement.",
      "Cost-effective and highly scalable.",
    ],
  },
];

const Services = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "md:translate-x-0");
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-16",
              "md:translate-x-24",
              "md:-translate-x-24"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <HeroHeader title={'Our Services'} desc={"Proxima delivers impactful conferences across multiple formats – In-Person, Hybrid, and Virtual – each designed to connect people and ideas worldwide."} image={"/images/sample.png"} alt={"About Proxima"} />


      {/* SECTIONS */}
      <section className="px-[10%] py-28 space-y-32 bg-white">
        {sections.map((item, index) => (
          <div
            key={index}
            ref={(el) => {(sectionRefs.current[index] = el)}}
            className={`flex flex-col md:flex-row items-center gap-16
              transition-all duration-1000 ease-out
              opacity-0 translate-y-16
              ${item.reverse ? "md:flex-row-reverse md:-translate-x-24" : "md:translate-x-24"}`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{item.text}</p>

              {item.listPoints && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {item.listPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;
