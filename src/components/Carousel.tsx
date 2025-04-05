"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import Chips from "../assets/chips.png"
import Shoes from "../assets/shoes.png"
import Sticker from "../assets/sticker.png"
import LegoShadow from "../assets/logo-with-shadow.png"
import Juice1 from "../assets/Juice3.png"
import CarouselNavigation from "./carousel-navigation"




export const carouselContent = [
  {
    image: { src: Chips, alt: "Chips" },
    title1: "BRAND",
    title2: "VOICE",
    subtitle1: "STANDOUT",
    subtitle2: "DESIGNS",
    buttonText: "TEAMS",
    buttonLink: "#",
  },
  {
    image: { src: Shoes, alt: "Shoes" },
    title1: "TRENDING",
    title2: "VISUALS",
    subtitle1: "BRAND",
    subtitle2: "STORIES",
    buttonText: "SERVICES",
    buttonLink: "/services",
  },
  {
    image: { src: Sticker, alt: "Sticker" },
    title1: "DIGITAL",
    title2: "PRESENCE",
    subtitle1: "BRAND",
    subtitle2: "OWNERSHIP",
    buttonText: "CONTACT",
    buttonLink: "#",
  },
  {
    image: { src: LegoShadow, alt: "Lego" },
    title1: "ALL",
    title2: "INCLUSIVE",
    subtitle1: "TECH",
    subtitle2: "SOLUTIONS",
    buttonText: "WORK",
    buttonLink: "#",
  },
  {
    image: { src: Juice1, alt: "Juice" },
    title1: "BRAND",
    title2: "VOICE",
    subtitle1: "STANDOUT",
    subtitle2: "DESIGNS",
    buttonText: "TEAMS",
    buttonLink: "#",
  },
]

interface CarouselProps {
  onIndexChange?: (index: number) => void
}

export default function Carousel({ onIndexChange }: CarouselProps) {
  //positions for each item
  const positions = [
    { transform: "translate(-50%, -50%) scale(5)", zIndex: 5, filter: "blur(0px)" },
    { transform: "translate(calc(-50% - 15vw), calc(-50% - 5vh)) scale(1.5)", zIndex: 4, filter: "blur(0.45px)" },
    { transform: "translate(calc(-50% + 21vw), calc(-50% + 5vh)) scale(2.5)", zIndex: 3, filter: "blur(0px)" },
    { transform: "translate(calc(-50% - 23vw), calc(-50% + 5vh)) scale(2.5)", zIndex: 2, filter: "blur(0px)" },
    { transform: "translate(calc(-50% + 15vw), calc(-50% - 5vh)) scale(1.5)", zIndex: 1, filter: "blur(0.45px)" },
  ]

  // Position for LegoShadow when in front
  const LegoShadowFrontPosition = "translate(-50%, -50%) scale(3.2)"

  const LegoShadowBackPosition = [
    { transform: "translate(calc(-50% - 15vw), calc(-50% - 5vh)) scale(1)", zIndex: 4, filter: "blur(0.45px)" },
    { transform: "translate(calc(-50% + 24vw), calc(-50% + 5vh)) scale(1.65)", zIndex: 3, filter: "blur(0.45px)" },
    { transform: "translate(calc(-50% - 25vw), calc(-50% + 5vh)) scale(1.65)", zIndex: 2, filter: "blur(0.45px)" },
    { transform: "translate(calc(-50% + 15vw), calc(-50% - 5vh)) scale(1)", zIndex: 1, filter: "blur(0.45px)" },
  ]

  // Index of the front position
  const FRONT_POSITION_INDEX = 0

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex)
    }
  }, [currentIndex, onIndexChange])

  const updateCarousel = () => {
    itemRefs.current.forEach((item, index) => {
      if (item) {
       
        const positionIndex = (index - currentIndex + carouselContent.length) % carouselContent.length
        const imageData = carouselContent[index].image

        
        if (imageData.alt === "Lego") {
          item.style.transform =
            positionIndex === FRONT_POSITION_INDEX
              ? LegoShadowFrontPosition // Large when in front
              : LegoShadowBackPosition[positionIndex - 1]?.transform
        } else {
          item.style.transform = positions[positionIndex].transform //  scaling for other images
        }

        item.style.zIndex = positions[positionIndex].zIndex.toString()
        item.style.filter = positions[positionIndex].filter
      }
    })
  }


  useEffect(() => {
    updateCarousel()
  }, [currentIndex])


  const handleLeftClick = () => {
    const rightImageIndex = (currentIndex - 2) % carouselContent.length
    setCurrentIndex(rightImageIndex)
  }

  const handleRightClick = () => {
    const leftImageIndex = (currentIndex + 2) % carouselContent.length
    setCurrentIndex(leftImageIndex)
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        id="carousel"
        className="rotation-container relative w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[50vh] sm:h-[60vh] max-w-[1000px] max-h-[800px]"
      >
        {carouselContent.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className="item-container absolute"
            style={{
              transition: "transform 0.9s cubic-bezier(0.42, 0, 0.58, 1), filter 0.9s cubic-bezier(0.42, 0, 0.58, 1)",
              top: "50%",
              left: "50%",
            }}
          >
            <Image
              alt={item.image.alt}
              width={300}
              height={300}
              className="item w-auto h-auto max-w-[30vw] sm:max-w-[25vw] md:max-w-[20vw] max-h-[30vh] sm:max-h-[25vh] md:max-h-[20vh]"
              src={item.image.src}
            />
          </div>
        ))}
      </div>

      <CarouselNavigation onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
    </div>
  )
}

