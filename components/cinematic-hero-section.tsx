"use client"

import { motion } from "framer-motion"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  BarChart3,
  Database,
  TrendingUp,
  Activity,
  Download,
  Eye,
} from "lucide-react"

export function CinematicHeroSection() {
  // const handleDownloadResume = () => {
  //   // Create a link element and trigger download
  //   const link = document.createElement("a")
  //   link.href = "/resume/Aishwarya_Desai_Resume.pdf"
  //   link.download = "Aishwarya_Desai_Resume.pdf"
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  const handleViewProjects = () => {
    // Smooth scroll to projects section
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle email click with fallback
  const handleEmailClick = () => {
    const email = "aishudesai2005@gmail.com"
    const subject = "Portfolio Inquiry"
    const body = "Hi Aishwarya, I found your portfolio and would like to connect!"

    // Try to open email client
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      window.location.href = mailtoLink
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard
        .writeText(email)
        .then(() => {
          alert(`Email copied to clipboard: ${email}`)
        })
        .catch(() => {
          alert(`Please email me at: ${email}`)
        })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Data Analytics Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/40"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Analytics Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-400/30 rounded-full"
          >
            <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-slate-300 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Currently pursuing BCA
            </span>
            <BarChart3 className="w-5 h-5 text-cyan-400" />
          </motion.div>

          {/* Enhanced Main Heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-bold leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Aishwarya
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Desai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A passionate BCA student skilled in
              <span className="text-blue-400 font-semibold"> Data Analytics</span>,
              <span className="text-cyan-400 font-semibold"> Digital Marketing</span>, and
              <span className="text-purple-400 font-semibold"> Graphic Design</span> with proven expertise in creating
              impactful solutions.
            </motion.p>
          </div>

          {/* Enhanced Analytics Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            whileHover={{
              y: -10,
              rotateX: 5,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
            }}
            className="inline-block p-10 rounded-3xl bg-gradient-to-br from-slate-900/40 to-blue-950/30 backdrop-blur-2xl border border-slate-700/50 shadow-2xl"
            style={{ perspective: "1000px" }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {/* Analytics Icons Row */}
              <div className="flex justify-center items-center space-x-6 mb-6">
                {[
                  { icon: BarChart3, color: "text-blue-400", label: "Power BI" },
                  { icon: Database, color: "text-cyan-400", label: "Data Analysis" },
                  { icon: TrendingUp, color: "text-purple-400", label: "ML/AI" },
                  { icon: Activity, color: "text-green-400", label: "Digital Marketing" },
                ].map(({ icon: Icon, color, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`flex flex-col items-center space-y-2 ${color}`}
                  >
                    <Icon size={32} />
                    <span className="text-xs text-slate-400 font-medium">{label}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-200 text-lg mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Proficient in <span className="text-blue-400 font-semibold">Power BI</span>,{" "}
                <span className="text-cyan-400 font-semibold">Python</span>,{" "}
                <span className="text-purple-400 font-semibold">Machine Learning</span>,{" "}
                <span className="text-green-400 font-semibold">Photoshop</span>, and{" "}
                <span className="text-yellow-400 font-semibold">Digital Marketing</span> for comprehensive data
                solutions
              </p>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
{/*                 <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 group"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                <a
                  href="/Aishwarya%20Resume.pdf"
                  download
                  className="flex items-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>

                </motion.button> */}

                <motion.button
                  onClick={handleViewProjects}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(51, 65, 85, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-xl font-semibold text-lg border border-slate-600/50 transition-all duration-300 group"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Projects</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center space-x-8 pt-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Aishwaryaadesai?tab=repositories",
                label: "GitHub",
                color: "hover:text-purple-400",
                onClick: null,
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aishwarya-desai-35a055271/",
                label: "LinkedIn",
                color: "hover:text-blue-400",
                onClick: null,
              },
              {
                icon: Mail,
                href: "mailto:aishudesai2005@gmail.com",
                label: "Email",
                color: "hover:text-cyan-400",
                onClick: handleEmailClick,
              },
            ].map(({ icon: Icon, href, label, color, onClick }) => (
              <motion.div
                key={label}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  filter: "drop-shadow(0 0 20px currentColor)",
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-4 rounded-full bg-slate-800/40 backdrop-blur-sm border border-slate-600/50 text-slate-300 ${color} transition-all duration-300 group cursor-pointer`}
                onClick={onClick || (() => window.open(href, href.startsWith("mailto:") ? "_self" : "_blank"))}
              >
                <Icon size={24} />
                <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {label === "Email" ? "aishudesai2005@gmail.com" : label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center space-y-3"
            >
              <span className="text-slate-400 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                Discover More
              </span>
              <div className="relative">
                <ArrowDown size={24} className="text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
