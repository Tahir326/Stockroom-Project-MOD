"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { carouselContent } from "./Carousel"
import Chips2 from "../assets/chips2.png"

interface MobileCarouselProps {
  onIndexChange?: (index: number) => void
}

export default function MobileCarousel({ onIndexChange }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // fixed positions for each item 
  const positions = [
    { transform: "translate(-50%, -50%) scale(2)", zIndex: 5, filter: "blur(0px)", opacity: 1 },
    {
      transform: "translate(calc(-50% - 35vw), calc(-50% + 0vh)) scale(0.7)",
      zIndex: 4,
      filter: "blur(0.75px)",
      opacity: 0.9,
    },
    {
      transform: "translate(calc(-50% + 35vw), calc(-50% + 0vh)) scale(0.7)",
      zIndex: 3,
      filter: "blur(0.75px)",
      opacity: 0.9,
    },
    {
      transform: "translate(calc(-50% - 60vw), calc(-50% + 0vh)) scale(0.7)",
      zIndex: 2,
      filter: "blur(0.75px)",
      opacity: 0,
    },
    {
      transform: "translate(calc(-50% + 60vw), calc(-50% + 0vh)) scale(0.7)",
      zIndex: 1,
      filter: "blur(0.75px)",
      opacity: 0,
    },
  ]


  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex)
    }
  }, [currentIndex, onIndexChange])


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)  
    }
    
    handleResize()  
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const updateCarousel = () => {
    itemRefs.current.forEach((item, index) => {
      if (item) {
        const positionIndex = (index - currentIndex + carouselContent.length) % carouselContent.length;
        const imageData = carouselContent[index].image;
  
        //For "Lego"
        if (imageData.alt === "Lego") {
          item.style.transform =
            positionIndex === 0
              ? "translate(-50%, -50%) scale(1.5)" // Large in front
              : positions[positionIndex].transform; 
        } else {
          item.style.transform = positions[positionIndex].transform; // scaling for other images
        }
  
        item.style.zIndex = positions[positionIndex].zIndex.toString();
        item.style.filter = positions[positionIndex].filter;
        item.style.opacity = positions[positionIndex].opacity.toString();
      }
    });
  };
  
  
  useEffect(() => {
    updateCarousel()
  }, [currentIndex])

  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="mobile-carousel-container">
        <div className="mobile-rotation-container">
          {carouselContent.map((item, index) => {
            
            const imageSrc = isMobile && item.image.alt === "Chips" ? Chips2 : item.image.src;


            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="mobile-item-container"
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  alt={item.image.alt}
                  width={300}
                  height={300}
                  className="mobile-item"
                  src={imageSrc}
                  priority={index === 0}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="fixed-nav-dots">
        {carouselContent.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
