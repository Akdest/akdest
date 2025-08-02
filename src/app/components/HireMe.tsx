"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  QrCode,
  Github,
  Linkedin,
  Code2,
  Server,
  MonitorSmartphone,
} from "lucide-react";

export default function HireMe() {
  return (
    <section className="relative w-full min-h-screen font-mono text-gray-900 flex items-center justify-center px-6 md:px-24 py-24 snap-start overflow-hidden">
      {/* Subtle Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg/abstract-waves.svg')] bg-right-top bg-no-repeat bg-cover opacity-5 pointer-events-none" />

      {/* Business Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white text-left p-8 md:p-10 border border-gray-300 shadow-sm relative overflow-hidden"
      >
        {/* Decorative Side Stripe */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gray-800" />

        {/* Top Bar with Profile + QR */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            {/* Profile image */}
            <div className="w-14 h-14 overflow-hidden border border-gray-300">
              <img
                src="/profile.jpg"
                alt="Ayush Kumar"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ayush Kumar</h1>
              <p className="text-gray-700 text-sm">Full Stack Web Developer</p>
              <p className="text-xs text-gray-500">Crafting scalable systems & intuitive UIs.</p>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex items-center justify-center w-16 h-16 border border-gray-400 text-gray-400 text-xs">
            <QrCode className="w-6 h-6" />
          </div>
        </div>

        {/* Tech Icons Row */}
        <div className="flex gap-6 mt-6 text-gray-700">
          <div className="flex items-center gap-2">
            <MonitorSmartphone className="w-5 h-5" />
            <span className="text-sm">React / Tailwind</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            <span className="text-sm">Node / Mongo</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span className="text-sm">Next.js / API</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 py-6 border-t border-gray-200 mt-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>ayushkr0104@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span>+91-7201050327</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span>https://akdest.vercel.app</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-gray-500" />
            <a
              href="https://www.linkedin.com/in/ayush-kumar-akdest"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              /in/ayush-kumar-akdest
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-gray-500" />
            <a
              href="https://github.com/Akdest"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Akdest
            </a>
          </div>
        </div>

        {/* Let's Connect CTA */}
        <div className="pt-4 text-right border-t border-gray-200 mt-4">
          <a
            href="mailto:ayushkr0104@gmail.com"
            className="inline-flex items-center text-base md:text-lg text-gray-900 font-semibold group"
          >
            Let&apos;s Connect
            <span className="ml-2 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
