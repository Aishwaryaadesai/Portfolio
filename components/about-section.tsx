"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, Database, PieChart, TrendingUp } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating compelling dashboards and interactive reports that tell data stories",
      tools: ["Power BI", "Tableau", "Excel Charts", "Python Matplotlib"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes for scalable analytics",
      tools: ["SQL", "Python", "Power Query", "Data Modeling"],
    },
    {
      icon: PieChart,
      title: "Business Intelligence",
      description: "Transforming raw data into actionable business insights and KPIs",
      tools: ["Power BI", "DAX", "Excel Pivot Tables", "KPI Design"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leveraging statistical models and machine learning for forecasting",
      tools: ["Python", "Scikit-learn", "Excel Solver", "Time Series"],
    },
  ]

  return (
    <section id="about" className="py-32 relative">
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
            About Me
          </h2>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            I'm a passionate data professional who believes that every dataset has a story to tell. With expertise
            spanning from Excel mastery to advanced Python analytics, I bridge the gap between complex data and clear
            business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-400/30 group-hover:bg-blue-600/30 transition-colors">
                    <skill.icon size={28} className="text-blue-400" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-slate-200 ml-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {skill.title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-slate-800/50 text-blue-300 rounded-full border border-slate-600/50"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
