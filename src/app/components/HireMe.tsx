"use client";
import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <section className="relative w-full min-h-screen bg-white font-mono text-gray-900 pb-32 px-8 md:px-24 snap-start overflow-hidden">
      {/* Subtle concentric background */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg/circles.svg')] bg-center bg-no-repeat bg-cover opacity-10" />

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
          className="text-5xl md:text-8xl font-extrabold tracking-wide leading-tight"
        >
          Hire Me
        </motion.h2>
      </div>

      {/* Divider Label */}
      <div className="flex justify-end text-right text-gray-500 mb-12">
        <span className="border-t border-gray-400 w-full mr-4 mt-3" />
        <span className="text-sm">{"// OPPORTUNITIES"}</span>
      </div>

      {/* Right-Aligned Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-3/4 lg:w-1/2 ml-auto text-right space-y-4"
      >
        <p className="text-lg md:text-xl text-gray-700">
          I'm always looking for the next challenge — whether it&apos;s building scalable web platforms,
          crafting sleek interfaces, or solving control system problems with MATLAB and logic.
        </p>

        <p className="text-md md:text-lg text-gray-600">
          If you're hiring for a role in software engineering, instrumentation, or R&D — and value
          clean code, critical thinking, and someone who knows how to lead as well as listen — let&apos;s talk.
        </p>

        <p className="text-md md:text-lg text-gray-600">
          I'm open to full-time roles, freelance projects, and collaborative ventures that push the edge.
        </p>

        {/* Sleek “Let&apos;s Connect” Link */}
        <a
          href="mailto:ayush@example.com" // 🔁 update to your real email
          className="inline-block mt-6 text-lg md:text-xl text-gray-900 font-semibold group"
        >
          Let&apos;s Connect{" "}
          <span className="inline-block transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </motion.div>
    </section>
  );
}
