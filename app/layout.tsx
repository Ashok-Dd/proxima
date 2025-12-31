import "./globals.css"

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
