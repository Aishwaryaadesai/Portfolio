"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@portfolio.com",
      href: "mailto:hello@portfolio.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-32 relative">
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
            Let's Connect
          </h2>
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to transform your data into actionable insights? Let's discuss how we can work together to unlock the
            potential hidden in your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-400/30 group-hover:bg-blue-600/30 transition-colors">
                    <info.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold text-slate-200"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {info.title}
                    </h3>
                    <p className="text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-slate-900/40 backdrop-blur-xl border border-blue-400/20"
            >
              <h3 className="text-2xl font-bold text-slate-200 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Why Work With Me?
              </h3>
              <ul className="space-y-3 text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>5+ years of data analytics experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Expert in Excel, Power BI, and Python</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Proven track record of business impact</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Clear communication of complex insights</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-slate-200 placeholder-slate-400 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-slate-200 placeholder-slate-400 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-slate-200 placeholder-slate-400 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Tell me about your project or data challenges..."
                  />
                </div>
              </div>

            {/* <motion.button
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aishwarya-desai-35a055271",
                    "_blank"
                  )
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Send size={20} />
                <a href="https://www.linkedin.com/in/aishwarya-desai-35a055271">Send Message</a>
              </motion.button> */}
                <a href="https://www.linkedin.com/in/aishwarya-desai-35a055271">Send Message</a>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
