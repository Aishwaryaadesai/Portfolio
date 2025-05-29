"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, BarChart3, Database, PieChart } from "lucide-react"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description:
        "Interactive Power BI dashboard analyzing sales trends, regional performance, and forecasting models with real-time KPI tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Power BI", "DAX", "SQL", "Excel"],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Customer Analytics Platform",
      description:
        "Python-based analytics platform for customer segmentation, lifetime value analysis, and churn prediction using machine learning.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "Pandas", "Scikit-learn", "Plotly"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Financial Reporting Suite",
      description:
        "Comprehensive Excel-based financial reporting system with automated data refresh, variance analysis, and executive dashboards.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Excel", "VBA", "Power Query", "Pivot Tables"],
      icon: PieChart,
      color: "from-green-500 to-emerald-500",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-slate-200 bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore my portfolio of data-driven solutions that have transformed business operations and delivered
            measurable insights across various industries.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Project Image */}
              <motion.div whileHover={{ scale: 1.05 }} className="lg:w-1/2">
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity`}
                  />
                  <div className="relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-6 bg-gradient-to-t from-slate-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="flex space-x-4 p-4">
                        <motion.a
                          href={project.links.demo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-blue-600/80 hover:bg-blue-600 transition-colors"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20 border border-opacity-30`}
                  >
                    <project.icon size={28} className="text-white" />
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-slate-200"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-full border border-slate-600/50 text-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 border border-slate-600/50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
