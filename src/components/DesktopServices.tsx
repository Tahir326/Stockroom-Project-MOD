"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Juice1 from "../assets/juice.png";
import Chips3 from "../assets/Chips3.webp";
import Shoes from "../assets/shoe2.webp";
import Sticker from "../assets/Sticker3.webp";
import LegoShadow from "../assets/Lego2.webp";
import Shelf from "../assets/shelf.png";

const Services = () => {

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // On figma Design this title and description is available thats why i use this title and description on every image.

  const services = {
    juice: {
      title: "BRANDING & DESIGN",
      description:
        "Logo design, brand identity development, immersive graphics, package design, print designs, campaign visuals, and other design services.",
    },
    chips: {
      title: "BRANDING & DESIGN",
      description:
        "Logo design, brand identity development, immersive graphics, package design, print designs, campaign visuals, and other design services.",
    },
    sticker: {
      title: "BRANDING & DESIGN",
      description:
        "Logo design, brand identity development, immersive graphics, package design, print designs, campaign visuals, and other design services.",
    },
    lego: {
      title: "BRANDING & DESIGN",
      description:
        "Logo design, brand identity development, immersive graphics, package design, print designs, campaign visuals, and other design services.",
    },
    shoes: {
      title: "BRANDING & DESIGN",
      description:
        "Logo design, brand identity development, immersive graphics, package design, print designs, campaign visuals, and other design services.",
    },
  };

  // Animation  for the service cards
  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animation for page load
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start from 100px below
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
  };
  return (
    <motion.div
      className="h-full w-full relative"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >

<div className="w-full h-[calc(100vh-80px)] flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <motion.div
          className="max-lg:hidden  absolute left-0 top-0 h-full flex items-center z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black text-md font-medium p-5  mb-[8rem] vertical-text">
            www.stockroompitch.com
          </p>
        </motion.div>

        <div className="flex-1 flex justify-center items-center w-full h-full">
          <section className="px-4 relative   max-w-[1100px] w-full mx-auto">
            <div className="relative flex items-end justify-center gap-20 mb-4">
              <div className="relative w-full h-[300px]">
                {/* Juice Bottle */}
                <div
                  className={`absolute left-[5%] h-[130px]  ${
                    hoveredItem === "juice" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter("juice")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="  relative lg:-top-[8rem] xl:-top-[8.5rem]   md:-top-[7.1rem] ">
                    <Image
                      src={Juice1}
                      alt="juice bottle"
                      width={130}
                      height={130}
                      className="object-contain scale-90"
                    />

                    {hoveredItem === "juice" && (
                      <motion.div
                        className="absolute left-0 top-0 -z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="absolute flex flex-col justify-center items-start left-full top-[2rem] translate-y-1/2 translate-x-[20%] w-96 h-[10rem] px-2 py-1 rounded-[3rem] shadow-lg bg-gradient-to-r from-[#FC6D12] to-[#F2C050]">
                          <h2 className="uppercase text-[20px] text-white font-bold pl-12 pr-3">
                            {services.juice.title}
                          </h2>
                          <p className="text-white text-sm font-regular mt-2 pl-12 pr-3">
                            {services.juice.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Sticker*/}
                <div
                  className={`absolute left-1/4   ${
                    hoveredItem === "chips" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter("chips")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative lg:top-[0.85rem] xl:-top-[1rem] md:top-[1.7rem] ">
                    <Image
                      src={Sticker || "/placeholder.svg"}
                      alt="chips bag"
                      width={130}
                      height={300}
                      className="object-contain xl:scale-125 md:scale-100 "
                    />

                    {hoveredItem === "chips" && (
                      <motion.div
                        className="absolute left-0 top-0 -z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="absolute flex flex-col justify-center items-start left-full  translate-y-[20%] translate-x-[22%] w-96 h-[10rem] px-2 py-1 rounded-[3rem] shadow-lg bg-gradient-to-r from-[#FC6D12] to-[#F2C050]">
                          <h2 className="uppercase text-[20px] text-white font-bold pl-12 pr-1">
                            {services.chips.title}
                          </h2>
                          <p className="text-white text-sm font-regular mt-2 pl-12 pr-1">
                            {services.chips.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Chips Pack */}
                <div
                  className={`absolute left-[45%]    bottom-0 ${
                    hoveredItem === "sticker" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter("sticker")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative lg:-top-[5.7rem] xl:-top-[7rem]   md:-top-[4.7rem] ">
                    <Image
                      src={Chips3 || "/placeholder.svg"}
                      alt="sticker pack"
                      width={130}
                      height={300}
                      className="object-contain  xl:scale-125 md:scale-100 "
                    />

                    {hoveredItem === "sticker" && (
                      <motion.div
                        className="absolute left-0 top-0 -z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="absolute flex flex-col justify-center items-start left-full  translate-y-[5%] translate-x-[20%] lg:w-96 xl:w-96 md:w-[21.5rem] h-[10rem] px-2 py-2 rounded-[3rem] shadow-lg bg-gradient-to-r from-[#FC6D12] to-[#F2C050]">
                          <h2 className="uppercase text-[20px] text-white font-bold pl-16 pr-2">
                            {services.sticker.title}
                          </h2>
                          <p className="text-white text-sm font-regular mt-2 pl-16 pr-2">
                            {services.sticker.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Lego*/}
                <div
                  className={`absolute left-[65%]  xl:left-[62%] lg:left-[62%] ${
                    hoveredItem === "lego" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter("lego")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative lg:-top-[0rem] xl:-top-[1rem]   md:top-[1rem]">
                    <Image
                      src={LegoShadow || "/placeholder.svg"}
                      alt="lego figure"
                      width={130}
                      height={300}
                      className="object-contain xl:scale-125 md:scale-100"
                    />

                    {hoveredItem === "lego" && (
                      <motion.div
                        className="absolute left-0 top-0 -z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="absolute flex flex-col justify-center items-start lg:right-full xl:left-full md:right-full   translate-y-[22%]  translate-x-[23%] w-96 h-[10rem] px-2 py-1 rounded-[3rem] shadow-lg bg-gradient-to-r from-[#FC6D12] to-[#F2C050]">
                          <h2 className="uppercase text-[20px] text-white font-bold pl-12 pr-3">
                            {services.lego.title}
                          </h2>
                          <p className="text-white text-sm font-regular mt-2 pl-12 pr-3">
                            {services.lego.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Shoes */}
                <div
                  className={`absolute left-[81%] xl:left-[82%]   ${
                    hoveredItem === "shoes" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter("shoes")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative lg:top-[2.55rem] xl:top-[1.2rem]   md:top-[3.75rem]">
                    <Image
                      src={Shoes || "/placeholder.svg"}
                      alt="shoes"
                      width={130}
                      height={300}
                      className="object-contain xl:scale-200 lg:scale-150 md:scale-125"
                    />

                    {hoveredItem === "shoes" && (
                      <motion.div
                        className="absolute left-0 top-0 -z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className=" absolute flex flex-col justify-center items-start lg:right-full xl:right-full md:right-full   lg:-translate-y-[11%] md:-translate-y-[2%] lg:translate-x-[19%] md:translate-x-[23%] w-96 h-[10rem] px-2 py-1 rounded-[3rem] shadow-lg bg-gradient-to-r from-[#FC6D12] to-[#F2C050]">
                          <h2 className="uppercase text-[20px] text-white font-bold pr-16 pl-8">
                            {services.shoes.title}
                          </h2>
                          <p className="text-white text-sm font-regular mt-2 pr-16 pl-8">
                            {services.shoes.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Shelf Image */}
                <div className="absolute bottom-6 w-full">
                  <Image
                    src={Shelf || "/placeholder.svg"}
                    alt="shelf"
                    width={1000}
                    height={50}
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </div>

            <Link href="#" className="ml-14 ">
              <motion.button
                className="bg-yellow  text-white py-2 uppercase underline px-6 text-md w-fit cursor-pointer absolute bottom-5 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Work
              </motion.button>
            </Link>
          </section>
        </div>
      </div>

    </motion.div>
  );
};

export default Services;
