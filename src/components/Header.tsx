"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import StockroomLogo from "../assets/StockroomLogo.png"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const pathname = usePathname()

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  const navLinks = [
    { id: 1, href: "/", label: "home" },
    { id: 2, href: "#", label: "about us" },
    { id: 3, href: "/services", label: "services" },
    { id: 4, href: "#", label: "work" },
    { id: 5, href: "#", label: "teams" },
    { id: 6, href: "#", label: "contact" },
  ]

  return (
    <header className="w-full flex justify-between items-center px-4 sm:px-5 md:px-8 lg:px-10 py-0 sm:py-5">
      <div className="relative max-w-[150px] w-full">
        <div className="cursor-pointer z-50 flex items-center" onClick={toggleNav}>
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          </div>
        </div>
        <nav
          id="navbar"
          className={`flex -ml-[1rem] mt-[0.5rem] transition-all duration-700 overflow-hidden p-3 flex-col absolute w-[200px] sm:w-full pt-1 tracking-wider z-[1000]  ${
            isNavOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-5"
          }`}
        >
          {navLinks.map((link) => {
            if (
              pathname === link.href ||
              (pathname === "/" && link.href === "/") ||
              (pathname.startsWith(link.href) && link.href !== "/")
            ) {
              return null
            }

            return (
              <Link
                key={link.id}
                className="text-sm sm:text-md py-0.5 md:py-0 overflow-hidden font-semibold text-black hover:text-orange-500 hover:underline uppercase"
                href={link.href}
                onClick={closeNav} 
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Show the logo on mobile devices even on the home page */}
      {(pathname !== "/" || pathname === "/") && (
        <Link href="/" className="flex items-center">
          <Image
          alt="Stockroom-pitch"
          width={95}
          height={40}
          quality={100}
          className={`object-contain ${
            pathname === "/" ? "max-sm:block sm:hidden" : "block"
          }`}
          src={StockroomLogo}
          priority
        />
        </Link>
      )}
    </header>
  )
}
