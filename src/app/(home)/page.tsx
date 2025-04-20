"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Carousel, { carouselContent } from "../../components/Carousel"
import MobileCarousel from "../../components/MobileCarousel"
import { useIsMobile } from "../../hooks/use-mobile"



export default function Home() {
  const isMobile = useIsMobile(768)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [contentStyle, setContentStyle] = useState({
    opacity: 1,
  })
  const [displayedContent, setDisplayedContent] = useState(carouselContent[0])

  
  const safeActiveIndex = ((activeIndex % carouselContent.length) + carouselContent.length) % carouselContent.length

  
  useEffect(() => {
    const newContent = carouselContent[safeActiveIndex]

   
    if (newContent !== displayedContent) {
      setIsTransitioning(true)

   
      setContentStyle({
        opacity: 0.85,
      })

      const timeout = setTimeout(() => {
        setDisplayedContent(newContent)

        setTimeout(() => {
    
          setContentStyle({
            opacity: 1,
          })

    
          const completeTimeout = setTimeout(() => {
            setIsTransitioning(false)
          }, 500)

          return () => clearTimeout(completeTimeout)
        }, 50)
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [safeActiveIndex, displayedContent])


  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 100, 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99], 
        staggerChildren: 0.1, 
      },
    },
  }

  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div className="w-full h-screen overflow-hidden" initial="hidden" animate="visible" variants={pageVariants}>
      <div style={{ transform: "none" }}>
        <motion.div variants={itemVariants} className="py-5">
          <Header />
        </motion.div>

        <div className="h-[calc(100vh-10rem)] relative">
           {/* Text at the top right */}
          <motion.div
            variants={itemVariants}
            id="slide-data"
            className={`slide-data fixed ${
              isMobile
                ? "left-1/2 top-[12vh] -translate-x-1/2 items-center text-center"
                : "lg:right-[4vw] lg:top-[12vh] md:right-[3vw] md:top-[15vh] right-[5vw] top-[20vh] items-end text-right"
            } max-w-[300px] w-full flex flex-col gap-2 z-50`}
            style={{
              opacity: contentStyle.opacity,
              transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: isTransitioning ? "none" : "auto", 
            }}
          >
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              {displayedContent.title1}
              <br />
              {displayedContent.title2}
            </h2>
            <h2 className="text-orange text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              {displayedContent.subtitle1}
              <br />
              {displayedContent.subtitle2}
            </h2>
            <Link className="w-fit mt-2 mx-auto md:mx-0" href={displayedContent.buttonLink}>
              <button className="bg-yellow text-white py-1 sm:py-2 uppercase underline px-4 sm:px-6 text-sm sm:text-md w-fit cursor-pointer">
                {displayedContent.buttonText}
              </button>
            </Link>
          </motion.div>

          {/* Verical text + Circular carousel */}
          <motion.div
            variants={itemVariants}
            className="w-full h-full flex flex-col md:flex-row justify-center items-center"
          >
          
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
            
              <div className="max-lg:hidden vertical-text p-5">
                <p className="text-black text-md font-medium">stockroompitch</p>
              </div>

              {/* Carousel - based on screen size */}
              <div className={` flex-1 ${!isMobile ? "md:mr-[2.25rem]  " : "mt-[3vh]"}`}>
                {isMobile ? (
                  <MobileCarousel onIndexChange={setActiveIndex} />
                ) : (
                  <Carousel onIndexChange={setActiveIndex} />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}


