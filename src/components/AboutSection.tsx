'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Award, Users, Zap, Code, Smartphone, Globe, Brain } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Calendar,
      title: "30+ Years",
      description: "Professional software development experience"
    },
    {
      icon: Award,
      title: "Industry Pioneer",
      description: "Early adopter of mobile technologies since the 1990s"
    },
    {
      icon: Users,
      title: "Million+ Users",
      description: "Apps reaching millions of users worldwide"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Constantly exploring cutting-edge technologies"
    },
  ]

  const timeline = [
    {
      period: "1990s",
      title: "Early Computing",
      description: "Started with desktop applications and system programming",
      icon: Code,
      color: "bg-blue-500"
    },
    {
      period: "2000s",
      title: "Web Development",
      description: "Transitioned to web technologies and server-side development",
      icon: Globe,
      color: "bg-cyan-500"
    },
    {
      period: "2007+",
      title: "Mobile Revolution",
      description: "Embraced iOS development from the App Store launch",
      icon: Smartphone,
      color: "bg-green-500"
    },
    {
      period: "Present",
      title: "AI & Modern Mobile",
      description: "Leading-edge development with AI integration and modern frameworks",
      icon: Brain,
      color: "bg-purple-500"
    },
  ]

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three decades of passion-driven development, from desktop applications to cutting-edge mobile experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  My career began in the early 1990s when personal computers were becoming mainstream.
                  Over three decades, I've witnessed and participated in the evolution of technology—from desktop
                  applications to the mobile revolution.
                </p>
                <p>
                  What started as curiosity about programming evolved into a passion for creating mobile experiences.
                  I've been developing for iOS since the App Store launch in 2008, and have expanded to Android and
                  cross-platform development.
                </p>
                <p>
                  Today, I focus on building practical, user-centered mobile applications. My experience spans from
                  utility apps to complex enterprise solutions, always emphasizing clean code and reliable performance.
                </p>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "User-first design philosophy",
                  "Clean, maintainable code",
                  "Continuous learning",
                  "Practical solutions"
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card p-5 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-500/10">
                    <achievement.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Technology <span className="text-blue-500">Evolution</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card p-5 text-center"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-blue-400 font-semibold text-sm mb-1">
                  {item.period}
                </div>
                <h4 className="text-white font-medium mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
