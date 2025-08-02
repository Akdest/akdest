"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpiderPreloader({ onDone }: { onDone?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const spiderRef = useRef<SVGPathElement[]>([]);
  const tRef = useRef(0);

  // Animate legs continuously
  useEffect(() => {
    let rafId: number;

    const animateLegs = () => {
      const t = tRef.current;
      spiderRef.current.forEach((path, i) => {
        if (!path) return;
        const wave = Math.sin(t + i * 0.5) * 3;

        switch (i) {
          case 0:
            path.setAttribute("d", `M10 30 C5 ${30 + wave}, 5 20, 10 10`);
            break;
          case 1:
            path.setAttribute("d", `M15 40 C7 ${40 + wave}, 7 30, 15 20`);
            break;
          case 2:
            path.setAttribute("d", `M10 50 C5 ${50 + wave}, 5 60, 10 70`);
            break;
          case 3:
            path.setAttribute("d", `M40 30 C45 ${30 - wave}, 45 20, 40 10`);
            break;
          case 4:
            path.setAttribute("d", `M35 40 C43 ${40 - wave}, 43 30, 35 20`);
            break;
          case 5:
            path.setAttribute("d", `M40 50 C45 ${50 - wave}, 45 60, 40 70`);
            break;
        }
      });

      tRef.current += 0.1;
      rafId = requestAnimationFrame(animateLegs);
    };

    animateLegs();

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Progress bar logic (simulated load)
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onDone) onDone();
          }, 500);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isLoading, onDone]);

  // Dynamic loading messages
  const getLoadingMessage = (p: number) => {
    if (p === 100) return "Done! Welcome to the web!";
    if (p > 75) return "Loading the last thread...";
    if (p > 50) return "Almost there, just a few legs left...";
    if (p > 25) return "Spinning my web...";
    if (p > 0) return "Crawling through the code...";
    // We’re ignoring the previous dynamic “Hi, I'm Spidy” so no typo possible
    return ""; 
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Hardcoded Top Text: Hi I'm Spidy */}
          <h1 className="text-black font-mono font-extrabold text-4xl md:text-6xl mb-10 select-none text-center">
            Hi. I&apos;m Spidy
          </h1>

          {/* Progress Bar Container */}
          <div className="relative w-full max-w-3xl h-[80px] border border-gray-300 overflow-hidden rounded-full mb-8">
            {/* Filled Bar */}
            <motion.div
              className="absolute top-1/2 left-0 h-[8px] bg-black rounded-full -translate-y-1/2"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
              style={{ zIndex: 1 }}
            />

            {/* Main spider riding the bar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="80"
              viewBox="0 0 50 80"
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `calc(${progress}% - 30px)`,
                zIndex: 10,
              }}
            >
              {/* Body */}
              <circle cx="25" cy="40" r="15" fill="black" />
              {/* Eyes */}
              <circle cx="19" cy="37" r="3" fill="white" />
              <circle cx="31" cy="37" r="3" fill="white" />
              <path d="M19 45 Q25 50, 31 45" stroke="white" strokeWidth="2" fill="none" />

              {/* Legs (animated) */}
              {[
                "M10 30 C5 30, 5 20, 10 10",
                "M15 40 C7 40, 7 30, 15 20",
                "M10 50 C5 50, 5 60, 10 70",
                "M40 30 C45 30, 45 20, 40 10",
                "M35 40 C43 40, 43 30, 35 20",
                "M40 50 C45 50, 45 60, 40 70",
              ].map((d, i) => (
                <path
                  key={i}
                  ref={(el) => {
                    if (el) spiderRef.current[i] = el;
                  }}
                  d={d}
                  stroke="black"
                  strokeWidth="3"
                  fill="none"
                />
              ))}
            </svg>
          </div>

          {/* Loading Text below progress bar */}
          <p className="text-black font-mono text-lg md:text-xl tracking-wide select-none text-center max-w-md px-2">
            {getLoadingMessage(progress)}
          </p>

          {/* Percentage below text */}
          <p className="text-black font-mono text-sm tracking-widest select-none mt-1">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
