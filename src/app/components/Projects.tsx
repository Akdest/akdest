"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Black Company eCommerce",
    description:
      "Full-stack dark-themed eCommerce platform with animated UI and seamless payment integration.",
    img: "/tbc.png",
    deployment: "https://the-black-company.vercel.app/",
  },
  {
    title: "E2ACon 2025 Conference Website",
    description:
      "Interactive conference site with live countdown, paper submissions, and Springer-indexed proceedings.",
    img: "e2a.png",
    deployment: "https://e2acon25.vercel.app/welcome",
  },
  {
    title: "IEEE NITJ Student Chapter",
    description:
      "The official site of NITJ IEEE Student Chapter",
    img: "/ieee.png",
    deployment: "https://ieeenitj.vercel.app/",
  },
  {
    title: "Galactic Pet Adoption app",
    description:
      "Web app for adopting pets with a modern UI, animations, and responsive design.",
    img: "/pet.png",
    deployment: "https://pet-app-azure.vercel.app/",
  },

  
];

export default function Projects() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen overflow-visible bg-white text-gray-900 font-mono  pb-24 px-8 md:px-24">
      {/* Concentric Circle SVG */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#a1a1a1"
        strokeWidth="0.4"
      >
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
            x2={`${(50 + 50 * Math.cos(rad)).toFixed(4)}%`}
y2={`${(50 + 50 * Math.sin(rad)).toFixed(4)}%`}

              strokeDasharray="4 6"
            />
          );
        })}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${(i + 1) * 15}%`}
            strokeDasharray="4 6"
          />
        ))}
      </svg>

      {/* Right-aligned content like Experience */}
      <div className="relative z-10 flex flex-col items-end mx-auto text-right">
        {/* Heading */}
        <div className="flex items-center justify-end w-full mb-6">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gray-900 mr-4 hidden md:block"
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.5rem] md:text-8xl font-extrabold tracking-wide text-gray-900 leading-tight"
          >
            Spidy Works?
                      </motion.h2>
        </div>

        {/* Project List */}
        <div className="space-y-12 max-w-4xl">
          {projects.map(({ title, description, deployment, img }, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(i)}
              onBlur={() => setHoverIndex(null)}
              tabIndex={0}
              className="relative group cursor-pointer text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Hover Image Preview */}
              <AnimatePresence>
                {hoverIndex === i && (
                  <motion.img
                    key={img}
                    src={img}
                    alt={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-1/2 -left-[320px] w-72 max-h-48 object-cover rounded-lg shadow-lg pointer-events-none select-none"
                    draggable={false}
                  />
                )}
              </AnimatePresence>

              {/* Project Title + Link BELOW description, no hover */}
              <h3
                className={`text-3xl md:text-4xl leading-tight tracking-wide mb-2 ${
                  hoverIndex === i
                    ? "font-semibold text-gray-800"
                    : "text-gray-600"
                }`}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-600 mb-2">
                {description}
              </p>

              {/* Link below description */}
              <Link
  href={deployment}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 select-none"
>
  <span>Link</span>
  <ArrowUpRight className="h-5 w-5" />
</Link>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
