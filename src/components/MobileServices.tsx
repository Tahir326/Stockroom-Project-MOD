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

const MobileServices = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    if (clickedItem === item) {
      setClickedItem(null); 
    } else {
      setClickedItem(item); 
    }
  };

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

  // Animation for the service cards
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

  // Animation  for page load
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
  };

  return (
    <motion.div
      className="w-screen h-screen pb-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="flex-grow flex flex-col justify-start md:px-5 md:gap-x-2">
        <div className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <section className="px-3 py-20 pt-32 pb-20">
              <div className="flex flex-col justify-center gap-y-40 w-full">
                {/* Juice + Shelf */}
                <div className="self-end relative md:mt-10">
                  <div className="relative">
                    <Image
                      alt="juice"
                      width={500}
                      height={500}
                      className="z-50 object-contain max-md:w-[50px] w-[70px] absolute sm:-bottom-12 -bottom-4 right-12"
                      src={Juice1 || "/placeholder.svg"}
                      onClick={() => handleItemClick("juice")}
                    />
                    {clickedItem === "juice" && (
                      <motion.div
                        className="absolute right-0 -top-24 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="bg-gradient-to-r from-[#FC6D12] to-[#F2C050] rounded-4xl  w-[270px] -translate-y-[25%] -translate-x-[25%]  flex flex-col justify-center items-start   px-4 py-2  shadow-lg">
                          <h3 className="text-white font-bold uppercase pr-8 pl-2">
                            {services.juice.title}
                          </h3>
                          <p className="text-white text-sm mt-1 pr-8 pl-2">
                            {services.juice.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Image
                    alt="shelf"
                    width={5000}
                    height={500}
                    className="object-contain ml-auto w-[55%]"
                    src={Shelf || "/placeholder.svg"}
                  />
                </div>

                {/* Sticker + Shelf */}
                <div className="relative">
                  <div className="relative">
                    <Image
                      alt="stickers"
                      width={500}
                      height={500}
                      className="z-50 object-contain max-md:w-[110px] w-[160px] absolute sm:-bottom-14 -bottom-7 left-2"
                      src={Sticker || "/placeholder.svg"}
                      onClick={() => handleItemClick("sticker")}
                    />
                    {clickedItem === "sticker" && (
                      <motion.div
                        className="absolute left-0 -top-24 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="bg-gradient-to-r from-[#FC6D12] to-[#F2C050] rounded-4xl  w-[270px] -translate-y-[26%] translate-x-[25%]  flex flex-col justify-center items-start   px-4 py-2  shadow-lg">
                          <h3 className="text-white font-bold uppercase pl-8 pr-2">
                            {services.sticker.title}
                          </h3>
                          <p className="text-white text-sm mt-1 pl-8 pr-2">
                            {services.sticker.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Image
                    alt="shelf"
                    width={5000}
                    height={500}
                    className="object-contain mr-auto w-[55%]"
                    src={Shelf || "/placeholder.svg"}
                  />
                </div>

                {/* Chips + Shelf */}
                <div className="self-end relative">
                  <div className="relative">
                    <Image
                      alt="chips"
                      width={500}
                      height={500}
                      className="z-50 object-contain max-md:w-[100px] w-[140px] absolute sm:-bottom-10 -bottom-4 xs:right-14 right-5"
                      src={Chips3 || "/placeholder.svg"}
                      onClick={() => handleItemClick("chips")}
                    />
                    {clickedItem === "chips" && (
                      <motion.div
                        className="absolute right-0 -top-24 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="bg-gradient-to-r from-[#FC6D12] to-[#F2C050] rounded-4xl  w-[270px] -translate-y-[26%] -translate-x-[25%]  flex flex-col justify-center items-start   px-4 py-2  shadow-lg">
                          <h3 className="text-white font-bold uppercase pr-8 pl-2">
                            {services.chips.title}
                          </h3>
                          <p className="text-white text-sm mt-1 pr-8 pl-2">
                            {services.chips.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Image
                    alt="shelf"
                    width={5000}
                    height={500}
                    className="object-contain ml-auto w-[55%]"
                    src={Shelf || "/placeholder.svg"}
                  />
                </div>

                {/* Lego + Shelf */}
                <div className="relative">
                  <div className="relative">
                    <Image
                      alt="lego"
                      width={1000}
                      height={1000}
                      className="z-50 object-contain max-md:w-[120px] w-[150px] absolute max-sm:-bottom-6 -bottom-10 -left-3"
                      src={LegoShadow || "/placeholder.svg"}
                      onClick={() => handleItemClick("lego")}
                    />
                    {clickedItem === "lego" && (
                      <motion.div
                        className="absolute left-0 -top-24 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="bg-gradient-to-r from-[#FC6D12] to-[#F2C050] rounded-4xl  w-[270px] -translate-y-[26%] translate-x-[23%]  flex flex-col justify-center items-start   px-4 py-2  shadow-lg">
                          <h3 className="text-white font-bold uppercase  pl-8 pr-2">
                            {services.lego.title}
                          </h3>
                          <p className="text-white text-sm mt-1  pl-8 pr-2">
                            {services.lego.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Image
                    alt="shelf"
                    width={5000}
                    height={500}
                    className="object-contain mr-auto w-[55%]"
                    src={Shelf || "/placeholder.svg"}
                  />
                </div>

                {/* Shoe + Shelf */}
                <div className="self-end relative">
                  <div className="relative">
                    <Image
                      alt="shoe"
                      width={1000}
                      height={1000}
                      className="z-50 object-contain max-md:w-[160px] w-[160px] absolute max-xs:-bottom-28 -bottom-24 -right-2"
                      src={Shoes || "/placeholder.svg"}
                      onClick={() => handleItemClick("shoes")}
                    />
                    {clickedItem === "shoes" && (
                      <motion.div
                        className="absolute right-0 -top-24 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={cardVariants}
                      >
                        <div className="bg-gradient-to-r from-[#FC6D12] to-[#F2C050] rounded-4xl  w-[270px] -translate-y-[25%] -translate-x-[28%]  flex flex-col justify-center items-start   px-4 py-2  shadow-lg">
                          <h3 className="text-white font-bold uppercase pr-8 pl-2">
                            {services.shoes.title}
                          </h3>
                          <p className="text-white text-sm mt-1 pr-8 pl-2">
                            {services.shoes.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Image
                    alt="shelf"
                    width={5000}
                    height={500}
                    className="object-contain ml-auto w-[55%]"
                    src={Shelf || "/placeholder.svg"}
                  />
                </div>
              </div>

              <div className="mt-30 flex justify-center">
                <Link href="#">
                  <button className="bg-yellow-400 text-white uppercase font-bold py-2 px-8 hover:bg-yellow-500 transition-colors">
                    WORK
                  </button>
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileServices;
