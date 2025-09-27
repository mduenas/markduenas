'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Zap, Star, Cpu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [glitchText, setGlitchText] = useState('MARK DUENAS')

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const originalText = 'MARK DUENAS'
    
    const glitch = () => {
      let result = ''
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          result += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          result += originalText[i]
        }
      }
      setGlitchText(result)
      
      setTimeout(() => setGlitchText(originalText), 100)
    }

    const interval = setInterval(glitch, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines vhs-effect">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-20"></div>
      
      {/* Floating Retro Elements */}
      <div className="absolute top-20 left-10 retro-float opacity-60">
        <Zap className="w-12 h-12 tech-text" />
      </div>
      <div className="absolute top-32 right-20 retro-float opacity-60" style={{ animationDelay: '2s' }}>
        <Star className="w-8 h-8 amber-text" />
      </div>
      <div className="absolute bottom-40 left-20 retro-float opacity-60" style={{ animationDelay: '4s' }}>
        <Cpu className="w-10 h-10 green-text" />
      </div>
      <div className="absolute top-1/2 right-10 retro-float opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 retro-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Retro Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-40 h-40 retro-card p-2 retro-pulse">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 via-teal-500 to-blue-600 flex items-center justify-center">
                  <span className="text-5xl font-black text-white">MD</span>
                </div>
              </div>
              {/* Online Indicator */}
              <div className="absolute -top-2 -right-2 w-12 h-12 retro-card bg-green-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">ON</span>
              </div>
            </div>
          </motion.div>

          {/* Glitch Name Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-wider glitch" data-text={glitchText}>
              <span className="text-teal-400">{glitchText}</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold tracking-widest">
                <span className="tech-text">MOBILE APP</span>{' '}
                <span className="tech-accent">DEVELOPER</span>
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 opacity-60"></div>
            </div>
          </motion.div>

          {/* Retro Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="retro-card p-8 max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed font-mono">
              {`>>>`} INITIALIZING PORTFOLIO.EXE<br />
              {`>>>`} LOADING EXPERIENCE: <span className="tech-text font-bold">30+ YEARS</span><br />
              {`>>>`} PLATFORMS: <span className="tech-accent font-bold">iOS</span> | <span className="green-text font-bold">ANDROID</span><br />
              {`>>>`} STATUS: <span className="amber-text font-bold">READY FOR ACTION</span>
            </p>
          </motion.div>

          {/* Retro Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { number: '30+', label: 'YEARS', color: 'tech-text' },
              { number: '50+', label: 'APPS', color: 'tech-accent' },
              { number: '10M+', label: 'DOWNLOADS', color: 'green-text' },
              { number: '4.8★', label: 'RATING', color: 'amber-text' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="retro-card p-6 text-center group hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 font-mono tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Retro Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-8 pt-12"
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="retro-btn text-lg flex items-center justify-center gap-4 min-w-[250px]"
            >
              <span>VIEW PROJECTS</span>
              <Zap className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="retro-btn-secondary text-lg flex items-center justify-center gap-4 min-w-[250px]"
            >
              <span>CONTACT</span>
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Retro Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center space-x-8 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/mduenas', label: 'GITHUB' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mduenas/', label: 'LINKEDIN' },
              { icon: Mail, href: 'mailto:markduenas@gmail.com', label: 'EMAIL' },
              { icon: Download, href: '#', label: 'RESUME' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="retro-card p-4 hover:bg-gray-700 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="pt-8"
          >
            <div className="terminal max-w-md mx-auto">
              <p className="font-mono text-left">
                <span className="green-text">C:\PORTFOLIO{`>`}</span> <span className="animate-pulse">_</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Retro Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => handleScroll('#about')}
            className="retro-card p-4 hover:bg-gray-700 transition-all duration-300 animate-bounce"
          >
            <ArrowDown className="w-8 h-8 tech-text" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}