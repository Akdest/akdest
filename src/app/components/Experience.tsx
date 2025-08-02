"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experienceData = `
// Experience 

db.experiences.find({
  developer: "Ayush",
  timeline: {
    $gte: ISODate("2024-01-01T00:00:00Z"),
    $lte: ISODate("2025-12-31T23:59:59Z")
  }
},
{
  role: 1,
  company: 1,
  period: 1,
  description: 1
}).sort({ period: -1 });

/*
[
  {
    role: "Frontend Intern",
    company: "Cybernaut Labs",
    period: "Jan 2025 - Mar 2025",
    description: "Built reusable UI components, optimized performance with Next.js and TailwindCSS, added fluid animations."
  },
  {
    role: "Web Developer",
    company: "The Black Company",
    period: "Dec 2024 - Present",
    description: "Led full-stack development of an eCommerce platform featuring authentication and sleek dark-glassmorphism UI."
  },
  {
    role: "Team Lead - E2ACon Website",
    company: "NIT Jalandhar",
    period: "Sep 2024 - Dec 2024",
    description: "Architected multi-section website for Springer-indexed international conference with dynamic hero and countdown."
  }
]
*/
`;

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // triggers a bit before fully visible

  return (
    <div className="relative w-full min-h-screen overflow-visible bg-white text-gray-900 font-mono pt-20 pb-24 px-8 md:px-24 ">
      <div ref={ref} className="relative z-10 flex flex-col items-end mx-auto md:text-right">
        {/* Heading with underline bar */}
        <div className="flex items-center justify-end w-full mb-6">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isInView ? 80 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gray-900 mr-4 hidden md:block"
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-[4rem] md:text-8xl font-extrabold tracking-wide text-gray-900 leading-tight"
          >
            Xp&apos;s
          </motion.h2>
        </div>

        {/* Code snippet */}
        <motion.pre
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gray-100 p-8 rounded-lg max-w-4xl text-left text-sm md:text-lg leading-relaxed whitespace-pre-wrap shadow-md border border-gray-300"
        >
          {experienceData}
        </motion.pre>
      </div>
    </div>
  );
}
