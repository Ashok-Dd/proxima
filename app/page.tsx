import Hero from "@/sections/Hero"
import Intro from "@/sections/Intro"
import Services from "@/sections/Services"
import CTA from "@/sections/CTA"
import Stats from "@/sections/Stats"
import AboutUs from "@/sections/AboutUs"
import SignatureConferences from "@/sections/SignatureConferences"
import SustainableSection from "@/sections/SustainableSection"
import TestimonialSlider from "@/sections/TestimonialSlider"

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <AboutUs />
      <SignatureConferences />
      <SustainableSection />
      <TestimonialSlider />

    </>
  )
}
