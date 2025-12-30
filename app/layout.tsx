import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
