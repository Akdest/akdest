"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  // JS helper to download file programmatically
  const downloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = ""; // Let browser infer filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Foreground Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-end h-screen px-8 md:px-24 text-right"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={childVariants}
          className="text-sm md:text-base lg:text-[5rem] text-neutral-600 mb-2"
        >
          G&apos;day, buddy!!
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="text-5xl md:text-7xl lg:text-[9rem] text-slate-950 font-extrabold tracking-tight"
        >
          I&apos;m Ayush
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-4 text-base md:text-lg lg:text-[2rem] text-neutral-500 max-w-xl"
        >
          A passionate developer crafting sleek and modern web experiences.
        </motion.p>

        {/* Download CV Button - using Link only with JS download */}
        <motion.div variants={childVariants} className="mt-8">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              downloadFile("/Ayush_CV.pdf");
            }}
            className="inline-flex items-center gap-2 rounded-md text-slate-950 px-6 py-3 font-semibold text-lg transition hover:bg-gray-200 cursor-pointer select-none"
            aria-label="Download CV"
          >
            Download CV
            <ArrowUpRight size={20} strokeWidth={2} color="black" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        layout="fill"
        className="z-0 pointer-events-none select-none object-cover"
      />

      {/* Akdest in Hex - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-8 text-sm md:text-lg text-neutral-300 font-mono tracking-widest z-20"
      >
        0x416B64657374
      </motion.div>

      {/* Animated Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{
          y: [0, 15, 0], // Up and down motion
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll down indicator"
      >
        <ArrowUpRight size={40} strokeWidth={2} color="white" />
      </motion.div>
    </div>
  );
}
