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
      title: "30+ YEARS",
      description: "Professional software development experience",
      color: "tech-text"
    },
    {
      icon: Award,
      title: "INDUSTRY PIONEER", 
      description: "Early adopter of mobile technologies since the 1990s",
      color: "tech-accent"
    },
    {
      icon: Users,
      title: "MILLION+ USERS",
      description: "Apps reaching millions of users worldwide",
      color: "green-text"
    },
    {
      icon: Zap,
      title: "INNOVATION FOCUS",
      description: "Constantly exploring cutting-edge technologies",
      color: "amber-text"
    },
  ]

  const timeline = [
    {
      period: "1990s",
      title: "EARLY COMPUTING",
      description: "Started with desktop applications and system programming",
      icon: Code,
      color: "bg-blue-600"
    },
    {
      period: "2000s", 
      title: "WEB DEVELOPMENT",
      description: "Transitioned to web technologies and server-side development",
      icon: Globe,
      color: "bg-teal-600"
    },
    {
      period: "2007+",
      title: "MOBILE REVOLUTION",
      description: "Embraced iOS development from the App Store launch",
      icon: Smartphone,
      color: "bg-green-600"
    },
    {
      period: "PRESENT",
      title: "AI & MODERN MOBILE",
      description: "Leading-edge development with AI integration and modern frameworks",
      icon: Brain,
      color: "bg-orange-600"
    },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden scanlines" ref={ref}>
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
            <span className="tech-accent">ABOUT</span> <span className="tech-text">ME</span>
          </h2>
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-mono leading-relaxed">
              {`>>>`} THREE DECADES OF PASSION-DRIVEN DEVELOPMENT<br />
              {`>>>`} FROM DESKTOP APPLICATIONS TO CUTTING-EDGE MOBILE EXPERIENCES
            </p>
          </div>
        </motion.div>

        {/* Split Layout - CENTERED */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32 max-w-6xl mx-auto">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="retro-card p-8">
              <h3 className="text-2xl font-black text-white mb-6 font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-400 rotate-45"></div>
                MY JOURNEY.EXE
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
                <p>
                  {`>>>`} INITALIZED IN EARLY 1990s WHEN PERSONAL COMPUTERS WERE BECOMING MAINSTREAM. 
                  OVER THREE DECADES, I'VE WITNESSED AND PARTICIPATED IN THE EVOLUTION OF TECHNOLOGY—FROM DESKTOP 
                  APPLICATIONS TO THE MOBILE REVOLUTION.
                </p>
                <p>
                  {`>>>`} WHAT STARTED AS CURIOSITY ABOUT PROGRAMMING EVOLVED INTO A PASSION FOR CREATING MOBILE EXPERIENCES. 
                  DEVELOPING FOR iOS SINCE APP STORE LAUNCH 2008, EXPANDED TO ANDROID AND CROSS-PLATFORM DEVELOPMENT.
                </p>
                <p>
                  {`>>>`} TODAY: BUILDING PRACTICAL, USER-CENTERED MOBILE APPLICATIONS. EXPERIENCE SPANS FROM UTILITY APPS 
                  TO COMPLEX ENTERPRISE SOLUTIONS. ALWAYS EMPHASIZING CLEAN CODE AND RELIABLE PERFORMANCE.
                </p>
              </div>
            </div>

            <div className="retro-card p-8">
              <h4 className="text-xl font-black text-white mb-6 font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-teal-400 rotate-45"></div>
                CORE_VALUES.DAT
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "USER-FIRST DESIGN PHILOSOPHY",
                  "CLEAN, MAINTAINABLE CODE", 
                  "CONTINUOUS LEARNING & ADAPTATION",
                  "PRACTICAL SOLUTIONS OVER COMPLEXITY"
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-gray-300 font-mono text-sm"
                  >
                    <div className="w-2 h-2 bg-green-400 rotate-45 flex-shrink-0"></div>
                    <span>{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="retro-card p-6 hover:bg-gray-700/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="retro-card p-3 bg-black group-hover:bg-gray-700 transition-all duration-300">
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-white mb-2 font-mono tracking-wider">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-mono">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          <h3 className="text-4xl font-black text-center mb-16 font-mono tracking-wider">
            <span className="green-text">TECHNOLOGY</span> <span className="tech-accent">EVOLUTION</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-teal-500 to-green-500 opacity-60"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="retro-card p-6 group hover:bg-gray-700/30 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`retro-card p-2 ${item.color}`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="font-black text-3xl font-mono tracking-wider tech-text">
                          {item.period}
                        </div>
                      </div>
                      <h4 className="text-xl font-black text-white mb-3 font-mono tracking-wider">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-8 h-8 ${item.color} border-4 border-white retro-pulse`}></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}