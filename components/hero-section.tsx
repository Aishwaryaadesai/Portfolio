"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-slate-200 to-blue-300 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Data Architect
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Transforming complex data into elegant insights through
              <span className="text-blue-400 font-semibold"> analytics</span>,
              <span className="text-blue-400 font-semibold"> visualization</span>, and
              <span className="text-blue-400 font-semibold"> strategic intelligence</span>
            </motion.p>
          </div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-block p-8 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-slate-700/50 shadow-2xl"
          >
            <p className="text-slate-200 text-lg mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Specializing in Excel, Power BI, Python & Advanced Analytics
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Contact" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-600/20 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-slate-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Explore
              </span>
              <ArrowDown size={20} className="text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
