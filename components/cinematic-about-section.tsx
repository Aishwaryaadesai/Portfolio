"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, Database, Brain, TrendingUp, Activity, Zap } from "lucide-react"

export function CinematicAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const analyticsSkills = [
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description:
        "Proficient in transforming raw data into actionable insights through compelling visualizations and comprehensive analysis.",
      tools: ["Power BI", "Tableau", "Excel", "SQL", "Predictive analysis", "Descriptive analysis"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Database,
      title: "Digital Marketing & Content Creation",
      description:
        "Skilled in creating engaging content and implementing effective digital marketing strategies to enhance brand visibility and drive audience engagement.",
      tools: ["SEO", "Copywriting", "Content Writing", "Google Analytics"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
    },
    {
      icon: Brain,
      title: "Graphic Design ",
      description:
        "Experienced in creating visually appealing designs and intuitive user interfaces to enhance user experience and brand aesthetics.",
      tools: ["Photoshop", "Figma", "Canva", "Typography", "Graphics Creator", 
        "Branding"
      ],
      gradient: "from-emerald-500 to-teal-500",
      delay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Programming & Machine Learning",
      description:
        "Knowledgeable in programming and machine learning, capable of developing models and algorithms to solve complex problems and automate tasks.",
      tools: ["Python", "C", "HTML", "CSS", "Java", "Machine Learning Models"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.8,
    },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Analytics Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-blue-950/40 to-slate-950/30"></div>

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
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-8"
          >
            <Activity className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-slate-300 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Analytics Expertise
            </span>
            <Zap className="w-5 h-5 text-blue-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
            {/* <br /> */}
            {/* <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills */}
          
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            As a BCA student with a passion for data, I leverage my analytical skills and technical proficiency to
            extract meaningful insights from data. My experience as a data analyst has equipped me with the ability to
            transform complex datasets into strategic business advantages.
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {analyticsSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: skill.delay, ease: "easeOut" }}
              whileHover={{
                y: -10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Enhanced Card Background */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/85 backdrop-blur-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 h-full overflow-hidden">
                {/* Animated Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Enhanced Icon with Animation */}
                <div className="relative flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} bg-opacity-20 border border-opacity-30 group-hover:bg-opacity-30 transition-all duration-300`}
                  >
                    <skill.icon size={32} className="text-white relative z-10" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: skill.delay + 0.2 }}
                    className="text-3xl font-bold text-slate-200 ml-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {skill.title}
                  </motion.h3>
                </div>

                {/* Enhanced Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: skill.delay + 0.4 }}
                  className="text-slate-300 mb-8 leading-relaxed text-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {skill.description}
                </motion.p>

                {/* Enhanced Tools with Animations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: skill.delay + 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  {skill.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: skill.delay + 0.8 + toolIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 text-sm bg-gradient-to-r from-slate-800/60 to-slate-700/60 text-slate-300 rounded-full border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 backdrop-blur-sm font-medium`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Enhanced Floating Particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                  ></motion.div>
                </div>
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    className="w-1 h-1 bg-purple-400 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-block p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 to-blue-950/75 backdrop-blur-2xl border border-slate-700/50"
          >
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Database className="w-8 h-8 text-blue-400" />
              <Brain className="w-8 h-8 text-purple-400" />
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-slate-200 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Unlock Your Data's Potential?
            </h3>
            <p className="text-slate-300 text-lg mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Let's transform your data challenges into competitive advantages
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <a href="#contact" >Start Analytics Journey with me</a>
              
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
