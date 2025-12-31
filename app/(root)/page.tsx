import Hero from "@/components/sections/Hero"
import Intro from "@/components/sections/Intro"
import Stats from "@/components/sections/Stats"
import AboutUs from "@/components/sections/AboutUs"
import SignatureConferences from "@/components/sections/SignatureConferences"
import SustainableSection from "@/components/sections/SustainableSection"
import TestimonialSlider from "@/components/sections/TestimonialSlider"

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
