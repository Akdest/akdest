"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [greeting, setGreeting] = useState("G'day");

  useEffect(() => {
    const getISTGreeting = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 5.5 * 3600000);
      const hours = istTime.getHours();

      if (hours >= 6 && hours < 12) return "G'day";
      if (hours >= 12 && hours < 17) return "G'aft";
      if (hours >= 17 && hours < 21) return "G'eve";
      return "G'night";
    };

    setGreeting(getISTGreeting());
  }, []);

  const downloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
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
          className="text-[2.5rem] md:text-[2.5rem] lg:text-[5rem] text-neutral-600 mb-2"
        >
          {greeting}, buddy!!
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="text-[4rem] md:text-[7rem] lg:text-[9rem] text-slate-950 font-extrabold tracking-tight"
        >
          I&apos;m Ayush
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-4 text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-neutral-500 max-w-xl"
        >
          A passionate developer crafting sleek and modern web experiences.
        </motion.p>

        <motion.div variants={childVariants} className="mt-8">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              downloadFile("/Ayush_CV.pdf");
            }}
            className="inline-flex items-center gap-2 text-slate-950 px-6 py-3 font-semibold text-lg transition hover:bg-gray-200 cursor-pointer select-none"
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

      {/* Akdest in Hex */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-8 text-sm md:text-lg text-neutral-300 font-mono tracking-widest z-20"
      >
        0x416B64657374
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform text-black -translate-x-1/2 z-20 cursor-pointer"
        animate={{
          y: [0, 15, 0], // bounce up and down
          opacity: [1, 0.6, 1], // fade
          scale: [1, 1.2, 1], // pulse size
          filter: [
            "drop-shadow(0 0 0 rgba(255,255,255,0))", // no glow
            "drop-shadow(0 0 8px rgba(255,255,255,0.6))", // glow
            "drop-shadow(0 0 0 rgba(255,255,255,0))", // no glow
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll down indicator"
      >
        <ArrowDown size={40} strokeWidth={2} color="black" />
      </motion.div>
    </div>
  );
}
