"use client";
import DesktopServices from "../../components/DesktopServices";
import MobileServices from "../../components/MobileServices";
import { useIsMobile } from "../../hooks/use-mobile";
import { motion } from "framer-motion";
import Header from "../../components/Header";
export default function ServicesPage() {
  const isMobile = useIsMobile();

  return (
    <div
      className={`w-full bg-main-bg bg-cover bg-center ${
        isMobile ? "overflow-y-auto" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Header />
      </motion.div>
      {isMobile ? <MobileServices /> : <DesktopServices />}
    </div>
  );
}
