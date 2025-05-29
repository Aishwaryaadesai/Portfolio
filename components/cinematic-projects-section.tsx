"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  Instagram,
  BarChart3,
  Database,
  Sparkles,
  Play,
  PenTool,
  LayoutDashboard,
  Wand2,
} from "lucide-react"

export function CinematicProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Data Analyst Intern at Keshav Cement & Infra Ltd",
      description: "Analyzed large datasets and created interactive Power BI dashboards",
      image: "keshav cement.png?height=400&width=600",
      tech: ["Power BI", "Advanced Excel", "SQL", "Data Visualization"],
      icon: BarChart3,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      links: {
        demo: "https://github.com/Aishwaryaadesai/Power-BI-internship-project",
        github:"https://github.com/Aishwaryaadesai/Power-BI-internship-project",
      },
      stats: { accuracy: "98%", performance: "Improved Reporting", users: "Internal Teams" },
    },
    {
      title: "Freelance Graphic Designer and Copywriter",
      description: "Instagram content creation with brand alignment and engagement focus",
      image: "freelance.jpg?height=400&width=600",
      tech: ["Photoshop", "Figma", "Copywriting", "content Writing"],
      icon: PenTool,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      links: {
        demo: "https://heyzine.com/flip-book/6033347ab6.html",
        Instagram : "https://www.instagram.com/writodesign",
      },
      stats: { accuracy: "90%", performance: "Increased Engagement", users: "Followers" },
    },
    {
      title: "Travel Blog Content Creator",
      description: "SEO-optimized travel blogs on Kedarnath and Yamunotri Yatras",
      image: "travel blog.jpg?height=400&width=600",
      tech: ["SEO", "Content Writing", "Blogger Platform", "Travel writing"],
      icon: Wand2,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      links: {
        demo: "https://yatrafullinfo.blogspot.com/",
        link : "https://yatrafullinfo.blogspot.com/2023/07/the-spiritual-journey-of-yamunotri-yatra.html",
      },
      stats: { accuracy: "N/A", performance: "Improved Visibility", users: "Readers" },
    },
    {
      title: "Power BI Dashboard Developer",
      description: "Interactive dashboard with dynamic filters and drill-throughs",
      image: "powerbi dashboard.png?height=400&width=600",
      tech: ["Power BI", "Data Visualization", "Dashboard Design", "DAX queries"],
      icon: LayoutDashboard,
      gradient: "from-orange-500 via-yellow-500 to-green-500",
      links: { demo: "https://github.com/Aishwaryaadesai/Power-BI-report", 
        github: "https://github.com/Aishwaryaadesai/Power-BI-report" },
      stats: { accuracy: "95%", performance: "Enhanced Insights", users: "Stakeholders" },
    },
    {
      title: "Machine Learning Model Developer",
      description: "Classification model using Python with preprocessing and evaluation",
      image: "mlmodel.png?height=400&width=600",
      tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      icon: Database,
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      links: { demo: "https://github.com/Aishwaryaadesai/ML-model", github: "https://github.com/Aishwaryaadesai?tab=repositories" },
      stats: { accuracy: "98%", performance: "Linear Regression", users: "Business/Company" },
    },
  ]

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/5 to-transparent"></div>

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Featured Masterpieces
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-slate-200 to-blue-300 bg-clip-text text-transparent">
              Project Gallery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore my collection of data-driven solutions that have transformed business operations, delivered
            measurable insights, and created lasting impact across diverse industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              {/* Project Visual */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:w-1/2 relative group"
                style={{ perspective: "1000px" }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
                  ></div>

                  {/* Main Image Container */}
                  <div className="relative p-5 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-90 object-cover rounded-2xl"
                    />


                    {/* Floating Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-8 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent rounded-2xl flex items-end justify-center pb-8"
                    >
                      <div className="flex space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                        >
                          <Play  size={18} />
                        <span>Live Demo</span>
                        </motion.button>
                        <motion.a
                          href="https://github.com/Aishwaryaadesai/Power-BI-internship-project"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      x: hoveredProject === index ? 0 : index % 2 === 0 ? 50 : -50,
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`absolute top-8 ${index % 2 === 0 ? "right-8" : "left-8"} bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50`}
                  >
                    <div className="space-y-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{project.stats.accuracy}</div>
                        <div className="text-xs text-slate-400">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{project.stats.performance}</div>
                        <div className="text-xs text-slate-400">Performance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{project.stats.users}</div>
                        <div className="text-xs text-slate-400">Users</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                className="lg:w-1/2 space-y-8"
              >
                {/* Icon and Title */}
                <div className="flex items-center space-x-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-20 border border-opacity-30`}
                  >
                    <project.icon size={36} className="text-white relative z-10" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-lg`}
                    ></div>
                  </motion.div>

                  <h3
                    className="text-4xl md:text-5xl font-bold text-slate-200 leading-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.8 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 text-sm bg-slate-800/50 text-slate-300 rounded-full border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 backdrop-blur-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-6 pt-4 ">
                  <motion.a
                  href={project.links.demo}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  <ExternalLink size={30} />
                  <span>Explore Project</span>
                </motion.a>


                  {/* <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(51, 65, 85, 0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-xl font-semibold border border-slate-600/50 transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </motion.a> */}

                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-10 rounded-3xl bg-gradient-to-br from-slate-900/40 to-blue-950/20 backdrop-blur-2xl border border-slate-700/50"
          >
            <h3 className="text-3xl font-bold text-slate-200 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Create Something Amazing?
            </h3>
            <p className="text-slate-300 text-lg mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Let's collaborate on your next data-driven masterpiece
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <a href="#contact">Start a Project</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
