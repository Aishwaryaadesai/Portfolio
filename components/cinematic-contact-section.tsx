"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle, Linkedin } from "lucide-react"

export function CinematicContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/aishwarya-desai",
      href: "https://www.linkedin.com/in/aishwarya-desai-35a055271/",
      gradient: "from-blue-700 to-blue-500",
      delay: 0.8,
    },
    {
      icon: Mail,
      title: "Email",
      value: "aishudesai2005@gmail.com",
      href: "mailto:aishudesai2005@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "+91 9448295504",
    //   href: "tel:+919448295504",
    //   gradient: "from-purple-500 to-pink-500",
    //   delay: 0.4,
    // },
    {
      icon: MapPin,
      title: "Location",
      value: "Belgavi/Bangalore",
      href: "#",
      gradient: "from-emerald-500 to-teal-500",
      delay: 0.6,
    },
   
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/20"></div>

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
              Let's Connect
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
              Start Your Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to transform your data into actionable insights? Let's collaborate to unlock the hidden potential in
            your data and create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
  {/* Left Column – Contact Info */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 1, delay: 0.8 }}
    className="space-y-8"
  >
    {/* Contact Cards */}
    <div className="space-y-6">
      {contactInfo.map((info) => (
        <motion.a
          key={info.title}
          href={info.href}
          target={info.href.startsWith("http") ? "_blank" : "_self"}
          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, delay: info.delay }}
          whileHover={{
            x: 10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
          className="group flex items-center space-x-6 p-8 rounded-3xl bg-slate-900/30 backdrop-blur-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`relative p-4 rounded-2xl bg-gradient-to-br ${info.gradient} bg-opacity-20 border border-opacity-30 group-hover:bg-opacity-30 transition-all duration-300`}
          >
            <info.icon size={28} className="text-white relative z-10" />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-opacity duration-300`}
            ></div>
          </motion.div>

          <div>
            <h3 className="text-xl font-bold text-slate-200 mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              {info.title}
            </h3>
            <p className="text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>
              {info.value}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>

  {/* Right Column – Why Work With Me */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1.2 }}
    className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-slate-900/40 backdrop-blur-2xl border border-blue-400/20 h-fit"
  >
    <div className="flex items-center space-x-3 mb-6">
      <MessageCircle className="w-6 h-6 text-blue-400" />
      <h3 className="text-2xl font-bold text-slate-200" style={{ fontFamily: "Playfair Display, serif" }}>
        Why Work With Aishwarya?
      </h3>
    </div>
    <ul className="space-y-4 text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>
      {[
        "BCA student with 97% in PUC",
        "Multiple certifications in Data Analytics, AI, and Digital Marketing",
        "Award winner in B-plan and Data Analytics competitions",
        "Active participant in tech events and conferences",
        "Hands-on experience with tools like Excel, Power BI, Tableau, and SQL",
        "Proficient in Python for data analysis (Pandas, NumPy, Matplotlib, Seaborn)",
        "Enthusiastic learner constantly exploring new trends in analytics and AI applications",
      ].map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
          className="flex items-center space-x-3"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
</div>


          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          > */}
            {/* <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6"> */}
                {/* Name Field */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Your Name
                  </label>
                  <motion.input */}
                    {/* type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-900/50 backdrop-blur-sm border transition-all duration-300 text-slate-200 placeholder-slate-400 ${
                      focusedField === "name"
                        ? "border-blue-400/70 shadow-lg shadow-blue-400/10"
                        : "border-slate-700/50 hover:border-slate-600/70"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Enter your full name"
                  /> */}
                {/* </motion.div> */}

                {/* Email Field */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-900/50 backdrop-blur-sm border transition-all duration-300 text-slate-200 placeholder-slate-400 ${
                      focusedField === "email"
                        ? "border-blue-400/70 shadow-lg shadow-blue-400/10"
                        : "border-slate-700/50 hover:border-slate-600/70"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="your.email@example.com"
                  />
                </motion.div> */}

                {/* Message Field */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Project Details
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-900/50 backdrop-blur-sm border transition-all duration-300 text-slate-200 placeholder-slate-400 resize-none ${
                      focusedField === "message"
                        ? "border-blue-400/70 shadow-lg shadow-blue-400/10"
                        : "border-slate-700/50 hover:border-slate-600/70"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Tell me about your data challenges, goals, and vision. What story do you want your data to tell?"
                  />
                </motion.div>
              </div> */}

              {/* Submit Button */}
              {/* <motion.button
              type="button"
              onClick={() =>
                window.open(
                  "mailto:aishudesai2005@gmail.com",
                  "_blank"
                )
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.button>
            </form>

            {/* Floating Elements */}
            {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full blur-lg animate-pulse"></div> */}
          {/* </motion.div> */}
       
        

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-10 rounded-3xl bg-gradient-to-br from-slate-900/40 to-blue-950/20 backdrop-blur-2xl border border-slate-700/50"
          >
            <h3 className="text-3xl font-bold text-slate-200 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Let's Create Data Magic Together
            </h3>
            <p
              className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every great data story begins with a conversation. Let's discuss how we can transform your data challenges
              into competitive advantages and create something truly extraordinary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
