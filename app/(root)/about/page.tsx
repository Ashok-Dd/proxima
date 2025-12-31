import Image from "next/image";
import Approach from "./Approach";
import HeroHeader from "@/components/ui/Hero";
import Stats from "@/components/sections/Stats";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
  return (
    <>
      <HeroHeader
        title="About Us"
        image="/images/sample.png"
        alt='About Us'
        desc="Learn more about our journey, values, and vision."
      />

      <div className="container py-24 max-w-7xl mx-auto space-y-32">
        {sections.map((item, index) => (
          <AnimatedSection
            key={index}
            reverse={item.reverse}
            delay={index * 0.2}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={item.img}
                width={600}
                height={400}
                alt={item.title}
                className="rounded-lg shadow-lg object-cover w-full h-100"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6"> 
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="text-lg text-muted-foreground">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Stats />
      <Approach />
    </>
  );
}