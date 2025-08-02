"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white text-gray-900 font-mono">
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-8 md:px-24 pt-12 pb-12">
        {/* Heading with underline */}
        <div className="flex items-center justify-end w-full mb-6 text-center md:text-right">
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
            &#128375;Spidy says..
          </motion.h2>
        </div>

        {/* Animated pre/code block */}
        <motion.pre
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className={`bg-gray-100 py-12 rounded-lg max-w-full sm:max-w-3xl md:max-w-4xl
            text-left text-sm md:text-lg leading-relaxed whitespace-pre-wrap shadow-md border border-gray-300
            px-4 sm:px-6 md:px-12
            ${isInView ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{ marginLeft: "auto" }}
        >
{`// About Me - Journey as a Developer

const Ayush = {
  passion: "transform ideas into elegant, functional digital experiences",
  journey: [
    "Started with curiosity, late-night coding sessions",
    "Learned discipline and patience through debugging",
    "Built projects that reflect creativity and code mastery",
    "Embraced failures as stepping stones to growth",
    "Continuously evolving, creating for meaning, not just machines"
  ],
  philosophy: \`It's not just code, it's a craft.\`,
  motto: "Code with heart, build with soul.",
  vision: \`
    To innovate responsibly,
    blending tradition with forward-thinking,
    crafting software that stands the test of time.
  \`
};

console.log("Ready to build the future with passion and precision.");  
`}
        </motion.pre>
      </div>
    </div>
  );
}
