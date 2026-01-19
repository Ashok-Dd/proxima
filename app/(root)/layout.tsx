import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/sections/Footer"

export default function Layout({ children } : any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
