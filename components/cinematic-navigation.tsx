"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sparkles, Download, Eye } from "lucide-react"

export function CinematicNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Aishwarya_Desai_Resume.pdf"
    link.download = "Aishwarya_Desai_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Elegant Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full blur-lg"></div>
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-slate-200 to-blue-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Aishwarya
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -3,
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                }}
                className="relative text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Action Buttons in Navigation */}
            <div className="flex items-center space-x-4 ml-6">
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg font-medium transition-all duration-300 border border-slate-600/50 group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Projects</span>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-300 group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <a
                  href="/Aishwarya%20Resume.pdf"
                  download
                  className="flex items-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span> Resume</span>
                </a>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-slate-300 hover:text-blue-400 transition-colors"
          >
            <div className="absolute inset-0 bg-blue-400/10 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity"></div>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-6 pb-6 border-t border-slate-800/50"
          >
            <div className="pt-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-slate-300 hover:text-blue-400 hover:bg-slate-900/50 rounded-lg transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3">
                <motion.button
                  onClick={() => {
                    handleViewProjects()
                    setIsOpen(false)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg font-medium transition-all duration-300 border border-slate-600/50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Eye className="w-4 h-4" />
                  <span>View Projects</span>
                </motion.button>

                <motion.button
                  onClick={() => {
                    handleDownloadResume()
                    setIsOpen(false)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
