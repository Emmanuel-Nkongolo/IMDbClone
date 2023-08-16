import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Clone of IMDb",
  description: "Work practice on next js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
