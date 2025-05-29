"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin, Star, Zap, Download, Eye } from "lucide-react"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Aishwarya Resume.pdf"
    link.download = "Aishwarya Resume.pdf"
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

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "KLS Gogte College of Commerce",
      duration: "Aug 2023 - May 2026",
      status: "Currently Pursuing",
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue",
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "KLS Gogte College of Commerce",
      duration: "Sep 2021 - May 2023",
      status: "97% - Distinction",
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple",
    },
    {
      degree: "High School",
      institution: "KLS English Medium High School, Belgavi",
      duration: "Jun 2008 - Jul 2021",
      status: "93.4% - First Class",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "emerald",
    },
  ]

  const certifications = [
    "Fundamentals of Digital Marketing by Google Digital Garage",
    "TCS iON Career Edge - Young Professional",
    "Digital Skills: Artificial Intelligence by Accenture",
    "Artificial Intelligence Fundamentals by IBM",
    "Generative AI Basics by Google Digital Garage",
    "Hashgraph Developer Course by Hashgraph",
    "Data Analytics Advanced by Google Cloud Skills",
    "Copywriting by Henry Harvin",
    "Data Analytics by NIIT",
    "Data Analytics Job Simulation by Deloitte",
    "Data Analytics Visualization Job by Accenture",
    "Data Visualization by Tata",
  ]

  const achievements = [
    {
      title: "Second Place in Data Analytics",
      event: "MAGNUM-2024 - GCC BCA",
      icon: Award,
      color: "text-gray-300",
      glowColor: "gray",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      title: "Third Place in B-Plan Competition",
      event: "FEISTA-2K25 - Angadi Institute of Technology",
      icon: Award,
      color: "text-yellow-400",
      glowColor: "yellow",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Google DevFest 2024 Participant",
      event: "Google Developers Group",
      icon: Calendar,
      color: "text-blue-400",
      glowColor: "blue",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "National Level IT-Fest Participant",
      event: "Technical Quiz 'Prodigy' - Jain College of Engineering",
      icon: Calendar,
      color: "text-purple-400",
      glowColor: "purple",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Event Coordinator",
      event: "GNOSIS-2022 - GCC PUC",
      icon: MapPin,
      color: "text-green-400",
      glowColor: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "National Level IT-Fest Participant",
      event: "Data Analytics 'Yuva' - Lingaraj College of Commerce",
      icon: Calendar,
      color: "text-purple-400",
      glowColor: "purple",
      gradient: "from-pink-500 to-red-500",
    },
  ]

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Enhanced Background with reduced transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-purple-950/70 to-slate-950/85"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-xl border border-purple-400/50 rounded-full mb-8 shadow-lg shadow-purple-500/25"
          >
            <Star className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-slate-100 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Academic Excellence
            </span>
            <Zap className="w-5 h-5 text-blue-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Education &
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Achievements
            </span>
          </motion.h2>
        </motion.div>

        {/* Education Timeline with Enhanced Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold text-slate-100 mb-12 text-center drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Academic Journey
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: `0 25px 50px rgba(59, 130, 246, 0.3)`,
                }}
                className={`group relative flex items-center space-x-6 p-8 rounded-3xl bg-slate-900/95 backdrop-blur-2xl border-2 border-slate-700/70 hover:border-${edu.glowColor}-400/70 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-${edu.glowColor}-500/25`}
              >
                {/* Neon glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Animated border glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative p-5 rounded-2xl bg-gradient-to-br ${edu.gradient} bg-opacity-30 border-2 border-opacity-50 group-hover:bg-opacity-50 transition-all duration-300 shadow-lg`}
                >
                  <edu.icon size={36} className="text-white relative z-10 drop-shadow-lg" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-30 rounded-2xl blur-lg group-hover:opacity-60 transition-opacity duration-300`}
                  ></div>
                </motion.div>

                <div className="flex-1 relative z-10">
                  <h4
                    className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-md"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className="text-slate-200 mb-3 text-lg group-hover:text-slate-100 transition-colors duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {edu.duration}
                    </span>
                    <span
                      className={`text-${edu.glowColor}-400 font-bold text-base group-hover:text-${edu.glowColor}-300 transition-colors duration-300 drop-shadow-sm`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className={`w-3 h-3 bg-${edu.glowColor}-400 rounded-full shadow-lg shadow-${edu.glowColor}-400/50`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Certifications */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-4xl font-bold text-slate-100 mb-12 text-center drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                }}
                className="group relative p-6 rounded-2xl bg-slate-900/95 backdrop-blur-xl border-2 border-slate-600/70 hover:border-blue-400/70 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-blue-500/20"
              >
                {/* Neon glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl"></div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-blue-400/50"></div>
                  <p
                    className="text-slate-200 group-hover:text-slate-100 transition-colors duration-300 font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {cert}
                  </p>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Achievements */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-4xl font-bold text-slate-100 mb-12 text-center drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Awards & Activities
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotateY: 5,
                  boxShadow: `0 20px 40px rgba(59, 130, 246, 0.3)`,
                }}
                className={`group relative p-8 rounded-3xl bg-slate-900/95 backdrop-blur-2xl border-2 border-slate-700/70 hover:border-${achievement.glowColor}-400/70 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-${achievement.glowColor}-500/25`}
                style={{ perspective: "1000px" }}
              >
                {/* Neon glow background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Border glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`}
                ></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} bg-opacity-30 border-2 border-opacity-50 group-hover:bg-opacity-50 transition-all duration-300 shadow-lg`}
                    >
                      <achievement.icon
                        size={28}
                        className={`${achievement.color} relative z-10 drop-shadow-lg group-hover:text-white transition-colors duration-300`}
                      />
                    </motion.div>
                    <h4
                      className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-300 drop-shadow-md"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {achievement.title}
                    </h4>
                  </div>
                  <p
                    className="text-slate-200 group-hover:text-slate-100 transition-colors duration-300 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {achievement.event}
                  </p>
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className={`w-2 h-2 bg-${achievement.glowColor}-400 rounded-full shadow-lg shadow-${achievement.glowColor}-400/50`}
                  ></motion.div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    className={`w-1 h-1 bg-${achievement.glowColor}-300 rounded-full shadow-sm shadow-${achievement.glowColor}-300/50`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 3.0 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 to-blue-950/75 backdrop-blur-2xl border border-slate-700/50 shadow-2xl"
          >
            <div className="flex justify-center items-center space-x-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <Award className="w-8 h-8 text-purple-400" />
              <Star className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-slate-100 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Collaborate?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Let's work together to create innovative solutions and transform ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.button>
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(51, 65, 85, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-xl font-semibold text-lg border border-slate-600/50 transition-all duration-300 group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Projects</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
