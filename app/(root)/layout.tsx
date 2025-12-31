import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/sections/Footer"
import { SanityLive } from "@/sanity/lib/live";

export default function Layout({ children } : any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <SanityLive />
    </>
  );
}
