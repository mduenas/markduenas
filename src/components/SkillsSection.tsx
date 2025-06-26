'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Code, Database, Cloud, Wrench, Palette } from 'lucide-react'

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Smartphone,
      title: "MOBILE_DEV.SYS",
      category: "Mobile Development",
      skills: [
        { name: "iOS (Swift/Objective-C)", level: 95, color: "tech-text" },
        { name: "Android (Kotlin/Java)", level: 90, color: "tech-accent" },
        { name: "React Native", level: 85, color: "green-text" },
        { name: "Flutter", level: 80, color: "amber-text" },
      ]
    },
    {
      icon: Code,
      title: "LANGUAGES.DAT",
      category: "Programming Languages",
      skills: [
        { name: "Swift", level: 95, color: "tech-text" },
        { name: "Kotlin", level: 90, color: "tech-accent" },
        { name: "JavaScript/TypeScript", level: 88, color: "green-text" },
        { name: "Python", level: 85, color: "amber-text" },
      ]
    },
    {
      icon: Database,
      title: "BACKEND.EXE",
      category: "Backend & Database",
      skills: [
        { name: "Core Data & SQLite", level: 92, color: "tech-text" },
        { name: "Firebase/Firestore", level: 88, color: "tech-accent" },
        { name: "PostgreSQL", level: 85, color: "green-text" },
        { name: "REST APIs", level: 90, color: "amber-text" },
      ]
    },
    {
      icon: Cloud,
      title: "CLOUD_OPS.CFG",
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS/Azure", level: 80, color: "tech-text" },
        { name: "CI/CD Pipelines", level: 85, color: "tech-accent" },
        { name: "App Store Connect", level: 95, color: "green-text" },
        { name: "Google Play Console", level: 90, color: "amber-text" },
      ]
    },
    {
      icon: Wrench,
      title: "TOOLS.BIN",
      category: "Development Tools",
      skills: [
        { name: "Xcode", level: 95, color: "tech-text" },
        { name: "Android Studio", level: 90, color: "tech-accent" },
        { name: "Git/Version Control", level: 92, color: "green-text" },
        { name: "TestFlight/Beta Testing", level: 88, color: "amber-text" },
      ]
    },
    {
      icon: Palette,
      title: "DESIGN.UI",
      category: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 85, color: "tech-text" },
        { name: "Human Interface Guidelines", level: 90, color: "tech-accent" },
        { name: "Material Design", level: 88, color: "green-text" },
        { name: "Accessibility", level: 85, color: "amber-text" },
      ]
    }
  ]

  const technologies = [
    "SWIFT", "KOTLIN", "REACT NATIVE", "FLUTTER", "OBJECTIVE-C", "JAVA",
    "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "NODE.JS", "FIREBASE", "AWS",
    "CORE DATA", "SQLITE", "POSTGRESQL", "REST APIs", "GRAPHQL", "GIT",
    "XCODE", "ANDROID STUDIO", "CI/CD", "TESTFLIGHT", "APP STORE", "GOOGLE PLAY"
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden scanlines" ref={ref}>
      {/* Retro Background */}
      <div className="absolute inset-0 retro-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="tech-text">SKILLS</span> <span className="tech-accent">&</span> <span className="green-text">EXPERTISE</span>
          </h2>
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-mono leading-relaxed">
              {`>>>`} LOADING SKILL_MATRIX.DB<br />
              {`>>>`} THREE DECADES OF EXPERIENCE ACROSS THE FULL SPECTRUM OF MOBILE DEVELOPMENT
            </p>
          </div>
        </motion.div>

        {/* Skills Grid - CENTERED */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="retro-card p-6 hover:bg-gray-700/20 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="retro-card p-3 bg-black mr-4 group-hover:bg-gray-700 transition-all duration-300">
                  <category.icon className="w-6 h-6 tech-text" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white font-mono tracking-wider">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    {category.category}
                  </p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-300 tracking-wide">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-mono font-bold ${skill.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="retro-card p-0 h-3 bg-black overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${
                          skill.color === 'tech-text' ? 'from-blue-600 to-blue-400' :
                          skill.color === 'tech-accent' ? 'from-teal-600 to-teal-400' :
                          skill.color === 'green-text' ? 'from-green-600 to-green-400' :
                          'from-orange-600 to-orange-400'
                        } relative`}
                      >
                        {/* Animated scan line effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl font-black text-white mb-8 font-mono tracking-wider">
            <span className="amber-text">TECHNOLOGIES</span> <span className="tech-accent">&</span> <span className="tech-text">TOOLS</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.03 }}
                className="retro-card px-4 py-2 bg-black hover:bg-gray-700 transition-all duration-200 group"
              >
                <span className="text-sm font-mono tracking-wider text-gray-300 group-hover:text-blue-400 transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="text-center retro-card p-8 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-4 mb-4">
              <div className="green-text font-mono text-sm">
                {`>`} EXPERTISE_LEVEL.IOS<br />
                {`>`} LOADING...<br />
                {`>`} <span className="tech-text font-bold">EXPERT</span>
              </div>
            </div>
            <h4 className="text-xl font-black text-white mb-3 font-mono tracking-wider">
              iOS SPECIALIST
            </h4>
            <p className="text-gray-300 font-mono text-sm">
              DEVELOPING FOR iOS SINCE 2008, FROM IPHONE OS 2.0 TO IOS 17+
            </p>
          </div>

          <div className="text-center retro-card p-8 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-4 mb-4">
              <div className="green-text font-mono text-sm">
                {`>`} PLATFORM_SUPPORT.DAT<br />
                {`>`} SCANNING...<br />
                {`>`} <span className="tech-accent font-bold">MULTI-PLATFORM</span>
              </div>
            </div>
            <h4 className="text-xl font-black text-white mb-3 font-mono tracking-wider">
              CROSS-PLATFORM
            </h4>
            <p className="text-gray-300 font-mono text-sm">
              EXPERTISE IN NATIVE AND CROSS-PLATFORM DEVELOPMENT APPROACHES
            </p>
          </div>

          <div className="text-center retro-card p-8 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-4 mb-4">
              <div className="green-text font-mono text-sm">
                {`>`} STACK_ANALYSIS.EXE<br />
                {`>`} PROCESSING...<br />
                {`>`} <span className="amber-text font-bold">FULL-STACK</span>
              </div>
            </div>
            <h4 className="text-xl font-black text-white mb-3 font-mono tracking-wider">
              FULL STACK
            </h4>
            <p className="text-gray-300 font-mono text-sm">
              FROM UI DESIGN TO BACKEND APIs AND DEPLOYMENT STRATEGIES
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}