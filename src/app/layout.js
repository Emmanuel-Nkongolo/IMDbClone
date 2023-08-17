import Header from "@components/Header"
import { headers } from "../../next.config"
import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Clone of IMDb",
  description: "Work practice on next js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  )
}
