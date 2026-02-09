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
      title: "Mobile Development",
      skills: [
        { name: "iOS (Swift/Objective-C)", level: 95 },
        { name: "Android (Kotlin/Java)", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Swift", level: 95 },
        { name: "Kotlin", level: 90 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "Python", level: 85 },
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Core Data & SQLite", level: 92 },
        { name: "Firebase/Firestore", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS/Azure", level: 80 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "App Store Connect", level: 95 },
        { name: "Google Play Console", level: 90 },
      ]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: [
        { name: "Xcode", level: 95 },
        { name: "Android Studio", level: 90 },
        { name: "Git/Version Control", level: 92 },
        { name: "TestFlight/Beta Testing", level: 88 },
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Human Interface Guidelines", level: 90 },
        { name: "Material Design", level: 88 },
        { name: "Accessibility", level: 85 },
      ]
    }
  ]

  const technologies = [
    "Swift", "Kotlin", "React Native", "Flutter", "Objective-C", "Java",
    "JavaScript", "TypeScript", "Python", "Node.js", "Firebase", "AWS",
    "Core Data", "SQLite", "PostgreSQL", "REST APIs", "GraphQL", "Git",
    "Xcode", "Android Studio", "CI/CD", "TestFlight"
  ]

  return (
    <section id="skills" className="py-24 relative bg-slate-900/50" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three decades of experience across the full spectrum of mobile development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <category.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "iOS Specialist",
              description: "Developing for iOS since 2008, from iPhone OS 2.0 to iOS 17+",
              highlight: "Expert"
            },
            {
              title: "Cross-Platform",
              description: "Expertise in native and cross-platform development approaches",
              highlight: "Multi-Platform"
            },
            {
              title: "Full Stack",
              description: "From UI design to backend APIs and deployment strategies",
              highlight: "End-to-End"
            }
          ].map((item) => (
            <div key={item.title} className="card p-6 text-center">
              <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full mb-3">
                {item.highlight}
              </span>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
