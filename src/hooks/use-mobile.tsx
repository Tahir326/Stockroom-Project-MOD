"use client"

import { useState, useEffect } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      // Initial check
      checkIfMobile()


      window.addEventListener("resize", checkIfMobile)

    
      return () => {
        window.removeEventListener("resize", checkIfMobile)
      }
    }
  }, [breakpoint])

  return isMobile
}

