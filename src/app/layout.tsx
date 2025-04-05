import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Stockroom Pitch",
  description: "Brand Voice, Standout Designs",
  icons: {
    icon: "/favicon.ico", // Favicon for all devices
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="bg-main-bg h-full w-full">
        <div className="content-wrapper w-full h-full">{children}</div>
      </body>
    </html>
  )
}
