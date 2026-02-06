'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Smartphone, Tablet, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function ProjectsListSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative overflow-hidden scanlines" ref={ref}>
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
            <span className="tech-text">MOBILE</span> <span className="tech-accent">PORTFOLIO</span>
          </h2>
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-mono leading-relaxed">
              {`>>>`} LOADING PROJECT_PORTFOLIO.DB<br />
              {`>>>`} MOBILE APPLICATIONS SPANNING FINANCE, ENTERTAINMENT, EDUCATION, AND PRODUCTIVITY
            </p>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="retro-card p-8 hover:bg-gray-700/20 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="computer-bezel p-2">
                    <div className="retro-card bg-black p-4 min-h-[300px] flex items-center justify-center relative">
                      {/* Monitor Header */}
                      <div className="absolute top-2 left-2 right-2 bg-gray-800 p-2 rounded-none">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-xs font-mono text-gray-400">
                            {project.title} - {project.version}
                          </span>
                        </div>
                      </div>

                      {/* Project Image */}
                      {project.mobileImages.length > 0 ? (
                        <div className="relative w-full max-w-[200px] mx-auto mt-8">
                          <Image
                            src={project.mobileImages[0]}
                            alt={`${project.title} screenshot`}
                            width={200}
                            height={400}
                            className="w-full h-auto retro-card"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ) : project.images.length > 0 ? (
                        <div className="relative w-full max-w-[250px] mx-auto mt-8">
                          <Image
                            src={project.images[0]}
                            alt={`${project.title} screenshot`}
                            width={250}
                            height={200}
                            className="w-full h-auto retro-card"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Platform Support */}
                  <div className="flex justify-center space-x-4 mt-4">
                    {project.platforms.includes('iOS') && (
                      <div className="retro-card p-3 bg-black flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 tech-text" />
                        <span className="text-xs font-mono text-gray-300 tracking-wider">iOS</span>
                      </div>
                    )}
                    {project.platforms.includes('iPadOS') && (
                      <div className="retro-card p-3 bg-black flex items-center space-x-2">
                        <Tablet className="w-4 h-4 tech-accent" />
                        <span className="text-xs font-mono text-gray-300 tracking-wider">iPad</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white font-mono tracking-wider mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`retro-card px-3 py-1 text-sm font-mono tracking-wider ${
                            project.status === 'PRODUCTION' ? 'tech-text bg-black' :
                            project.status === 'BETA' ? 'amber-text bg-black' : 'text-gray-400 bg-black'
                          }`}>
                            {project.status}
                          </span>
                          <span className="retro-card px-3 py-1 tech-accent bg-black text-sm font-mono tracking-wider">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="terminal p-3">
                        <div className="green-text font-mono text-xs">
                          {`>`} STATUS: <span className="tech-text">{project.status}</span><br />
                          {`>`} VERSION: <span className="amber-text">{project.version}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300 font-mono mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-black text-white mb-3 font-mono tracking-wider flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rotate-45"></div>
                      TECH_STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="retro-card px-3 py-1 bg-black text-gray-300 text-sm font-mono tracking-wider hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="retro-card px-3 py-1 bg-black text-gray-400 text-sm font-mono tracking-wider">
                          +{project.technologies.length - 4} MORE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-black text-white mb-3 font-mono tracking-wider flex items-center gap-3">
                      <div className="w-3 h-3 bg-teal-400 rotate-45"></div>
                      KEY_FEATURES
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 font-mono text-sm">
                          <div className="w-2 h-2 bg-green-400 rotate-45 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {project.features.length > 4 && (
                      <p className="text-gray-400 font-mono text-sm mt-2">
                        +{project.features.length - 4} additional features
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="retro-btn text-lg flex items-center justify-center gap-3 flex-1 group"
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>VIEW DETAILS</span>
                    </Link>
                    <div className="flex gap-4 flex-1">
                      <a
                        href={project.appStoreUrl}
                        className="retro-btn-secondary text-sm flex items-center justify-center gap-2 flex-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>APP STORE</span>
                      </a>
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          className="retro-btn-secondary text-sm flex items-center justify-center gap-2 flex-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>PLAY STORE</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        className="retro-btn-secondary text-sm flex items-center justify-center gap-2 flex-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>CODE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20"
        >
          <div className="text-center retro-card p-6 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-3 mb-4">
              <div className="green-text font-mono text-xs">
                {`>`} COUNT_APPS.EXE<br />
                {`>`} <span className="tech-text font-bold">{projects.length}</span>
              </div>
            </div>
            <h5 className="text-lg font-black text-white font-mono tracking-wider mb-2">
              FEATURED APPS
            </h5>
            <p className="text-gray-400 font-mono text-sm">
              PRODUCTION READY APPLICATIONS
            </p>
          </div>

          <div className="text-center retro-card p-6 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-3 mb-4">
              <div className="green-text font-mono text-xs">
                {`>`} PLATFORM_COUNT.SYS<br />
                {`>`} <span className="tech-accent font-bold">2</span>
              </div>
            </div>
            <h5 className="text-lg font-black text-white font-mono tracking-wider mb-2">
              PLATFORMS
            </h5>
            <p className="text-gray-400 font-mono text-sm">
              iOS AND IPAD SUPPORT
            </p>
          </div>

          <div className="text-center retro-card p-6 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-3 mb-4">
              <div className="green-text font-mono text-xs">
                {`>`} DOWNLOAD_STATS.DB<br />
                {`>`} <span className="green-text font-bold">100K+</span>
              </div>
            </div>
            <h5 className="text-lg font-black text-white font-mono tracking-wider mb-2">
              DOWNLOADS
            </h5>
            <p className="text-gray-400 font-mono text-sm">
              TOTAL USER INSTALLATIONS
            </p>
          </div>

          <div className="text-center retro-card p-6 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-3 mb-4">
              <div className="green-text font-mono text-xs">
                {`>`} RATING_AVG.CFG<br />
                {`>`} <span className="amber-text font-bold">4.8★</span>
              </div>
            </div>
            <h5 className="text-lg font-black text-white font-mono tracking-wider mb-2">
              RATING
            </h5>
            <p className="text-gray-400 font-mono text-sm">
              AVERAGE USER SATISFACTION
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}