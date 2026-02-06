'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Smartphone, Tablet, ChevronLeft, ChevronRight, ArrowLeft, Monitor } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'

interface ProjectDetailPageProps {
  project: Project | undefined
  projectId: string
}

export default function ProjectDetailPage({ project, projectId }: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentView, setCurrentView] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center card p-8 max-w-md">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-400 mb-6">
            The project "{projectId}" could not be found.
          </p>
          <Link href="/#projects" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const getCurrentImages = () => {
    switch (currentView) {
      case 'tablet':
        return project.tabletImages.length > 0 ? project.tabletImages : project.mobileImages
      case 'desktop':
        return project.images
      default:
        return project.mobileImages.length > 0 ? project.mobileImages : project.images
    }
  }

  const currentImages = getCurrentImages()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <div className="min-h-screen py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title.replace(/_/g, ' ').replace(/\.(APP|GAME|EXE|SYS)$/, '')}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              project.status === 'PRODUCTION'
                ? 'bg-green-500/10 text-green-400'
                : project.status === 'BETA'
                ? 'bg-amber-500/10 text-amber-400'
                : 'bg-slate-700 text-slate-400'
            }`}>
              {project.status}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400">
              {project.category}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-700 text-slate-300">
              {project.version}
            </span>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* View Toggle */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => { setCurrentView('mobile'); setCurrentImageIndex(0); }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  currentView === 'mobile'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Smartphone className="w-4 h-4 inline mr-2" />
                Mobile
              </button>
              {project.tabletImages.length > 0 && (
                <button
                  onClick={() => { setCurrentView('tablet'); setCurrentImageIndex(0); }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    currentView === 'tablet'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Tablet className="w-4 h-4 inline mr-2" />
                  Tablet
                </button>
              )}
              <button
                onClick={() => { setCurrentView('desktop'); setCurrentImageIndex(0); }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  currentView === 'desktop'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Monitor className="w-4 h-4 inline mr-2" />
                Desktop
              </button>
            </div>

            {/* Image Container */}
            <div className="card p-6 bg-slate-900">
              {currentImages.length > 0 && (
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <Image
                      src={currentImages[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      width={currentView === 'mobile' ? 300 : currentView === 'tablet' ? 500 : 600}
                      height={currentView === 'mobile' ? 600 : currentView === 'tablet' ? 700 : 400}
                      className="w-full h-auto rounded-lg"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {currentImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Image Navigation Dots */}
            {currentImages.length > 1 && (
              <div className="flex justify-center gap-2">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-blue-500 w-6'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Platform Support */}
            <div className="flex justify-center gap-3">
              {project.platforms.map((platform) => (
                <div key={platform} className="card px-4 py-2 flex items-center gap-2">
                  {platform === 'iOS' || platform === 'Android' ? (
                    <Smartphone className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Tablet className="w-4 h-4 text-blue-400" />
                  )}
                  <span className="text-sm text-slate-300">{platform}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Description */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">About</h3>
              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg"
                  >
                    {tech.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{feature.replace(/_/g, ' ')}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={project.appStoreUrl}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                App Store
              </a>
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Play Store
                </a>
              )}
              <a
                href={project.githubUrl}
                className="btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>

            {/* Special links for Recipeez */}
            {projectId === 'recipeez' && (
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://recipeez.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit recipeez.app
                </a>
                <Link
                  href="/projects/recipeez/privacy-policy"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 py-2"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Back to Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/#projects" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
