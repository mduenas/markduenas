'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-wider">
            <span className="tech-text">PROJECTS</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
            Mobile applications spanning finance, entertainment, education, and productivity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-xl overflow-hidden bg-gray-800">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-mono font-bold text-white text-sm sm:text-base text-center mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title.replace(/_/g, ' ').replace(/\.(APP|GAME|EXE|SYS)$/, '')}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm text-center line-clamp-2 mb-2">
                  {project.description.split('.')[0]}.
                </p>

                {/* Status Badge */}
                <div className="flex justify-center">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    project.status === 'PRODUCTION'
                      ? 'bg-green-900/50 text-green-400'
                      : project.status === 'BETA'
                      ? 'bg-amber-900/50 text-amber-400'
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
