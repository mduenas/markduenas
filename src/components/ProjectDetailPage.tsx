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
  
  // Special styling for different apps to match their themes
  const isRecipeez = projectId === 'recipeez'
  const isRockSkipper = projectId === 'rockskipper'

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center retro-card p-8">
          <h1 className="text-3xl font-black text-white mb-4 font-mono">
            PROJECT NOT FOUND
          </h1>
          <p className="text-gray-300 font-mono mb-6">
            {`>>>`} ERROR: PROJECT_ID '{projectId}' NOT FOUND IN DATABASE
          </p>
          <Link href="/#projects" className="retro-btn">
            <ArrowLeft className="w-5 h-5 mr-2" />
            BACK TO PROJECTS
          </Link>
        </div>
      </div>
    )
  }

  // Determine which images to show based on current view
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
    <div className={`min-h-screen py-32 relative overflow-hidden ${isRecipeez || isRockSkipper ? '' : 'scanlines'}`}>
      {/* Background - different for each app */}
      {isRecipeez ? (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100"></div>
      ) : isRockSkipper ? (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"></div>
      ) : (
        <div className="absolute inset-0 retro-grid opacity-10"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/#projects" 
            className="retro-btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PROJECTS
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-black mb-6 tracking-wider ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-700' : ''}`}>
            <span className={isRecipeez || isRockSkipper ? '' : 'tech-text'}>{project.title}</span>
          </h1>
          <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-xl' : 'retro-card'} p-6 max-w-4xl mx-auto`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className={`${isRecipeez ? 'bg-orange-100 border border-orange-300 text-orange-700 rounded-full' : isRockSkipper ? 'bg-blue-100 border border-blue-300 text-blue-700 rounded-full' : 'retro-card bg-black'} px-4 py-2 text-lg font-mono tracking-wider ${
                !isRecipeez && !isRockSkipper && project.status === 'PRODUCTION' ? 'tech-text' :
                !isRecipeez && !isRockSkipper && project.status === 'BETA' ? 'amber-text' : !isRecipeez && !isRockSkipper ? 'text-gray-400' : ''
              }`}>
                {project.status}
              </span>
              <span className={`${isRecipeez ? 'bg-amber-100 border border-amber-300 text-amber-700 rounded-full' : isRockSkipper ? 'bg-cyan-100 border border-cyan-300 text-cyan-700 rounded-full' : 'retro-card tech-accent bg-black'} px-4 py-2 text-lg font-mono tracking-wider`}>
                {project.category}
              </span>
              <span className={`${isRecipeez ? 'bg-green-100 border border-green-300 text-green-700 rounded-full' : isRockSkipper ? 'bg-slate-100 border border-slate-300 text-slate-700 rounded-full' : 'retro-card green-text bg-black'} px-4 py-2 text-lg font-mono tracking-wider`}>
                {project.version}
              </span>
            </div>
            <p className={`text-xl ${isRecipeez || isRockSkipper ? 'text-gray-700' : 'text-white'} ${isRecipeez || isRockSkipper ? '' : 'font-mono'} leading-relaxed`}>
              {project.longDescription}
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* View Toggle */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => { setCurrentView('mobile'); setCurrentImageIndex(0); }}
                className={`retro-card px-4 py-2 font-mono font-bold text-sm tracking-wider transition-all duration-300 ${
                  currentView === 'mobile'
                    ? 'tech-text bg-gray-700'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/30'
                }`}
              >
                <Smartphone className="w-4 h-4 inline mr-2" />
                MOBILE
              </button>
              {project.tabletImages.length > 0 && (
                <button
                  onClick={() => { setCurrentView('tablet'); setCurrentImageIndex(0); }}
                  className={`retro-card px-4 py-2 font-mono font-bold text-sm tracking-wider transition-all duration-300 ${
                    currentView === 'tablet'
                      ? 'tech-accent bg-gray-700'
                      : 'text-gray-300 hover:text-teal-400 hover:bg-gray-700/30'
                  }`}
                >
                  <Tablet className="w-4 h-4 inline mr-2" />
                  TABLET
                </button>
              )}
              <button
                onClick={() => { setCurrentView('desktop'); setCurrentImageIndex(0); }}
                className={`retro-card px-4 py-2 font-mono font-bold text-sm tracking-wider transition-all duration-300 ${
                  currentView === 'desktop'
                    ? 'green-text bg-gray-700'
                    : 'text-gray-300 hover:text-green-400 hover:bg-gray-700/30'
                }`}
              >
                <Monitor className="w-4 h-4 inline mr-2" />
                DESKTOP
              </button>
            </div>

            {/* Computer Monitor Display */}
            <div className="computer-bezel p-3">
              <div className="retro-card bg-black p-6 min-h-[600px] flex items-center justify-center relative">
                {/* Monitor Header */}
                <div className="absolute top-3 left-3 right-3 bg-gray-800 p-3 rounded-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-mono text-gray-400">
                      {project.title} - {currentView.toUpperCase()} VIEW
                    </span>
                  </div>
                </div>

                {currentImages.length > 0 && (
                  <>
                    <div className="relative w-full max-w-md mx-auto mt-12">
                      <Image
                        src={currentImages[currentImageIndex]}
                        alt={`${project.title} ${currentView} screenshot ${currentImageIndex + 1}`}
                        width={currentView === 'mobile' ? 300 : currentView === 'tablet' ? 500 : 600}
                        height={currentView === 'mobile' ? 600 : currentView === 'tablet' ? 700 : 400}
                        className="w-full h-auto retro-card"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-6 top-1/2 transform -translate-y-1/2 retro-card p-3 bg-black hover:bg-gray-700 transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-300" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 retro-card p-3 bg-black hover:bg-gray-700 transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-300" />
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Image Navigation Dots */}
            {currentImages.length > 1 && (
              <div className="flex space-x-3 justify-center">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 transition-all duration-200 ${
                      currentImageIndex === index
                        ? 'bg-blue-500 rotate-45'
                        : 'bg-gray-600 hover:bg-gray-500 rotate-45'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Platform Support */}
            <div className="flex justify-center space-x-4">
              {project.platforms.includes('iOS') && (
                <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl shadow-lg' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl shadow-lg' : 'retro-card bg-black'} p-4 flex items-center space-x-2`}>
                  <Smartphone className={`w-5 h-5 ${isRecipeez ? 'text-orange-500' : isRockSkipper ? 'text-blue-500' : 'tech-text'}`} />
                  <span className={`text-sm ${isRecipeez || isRockSkipper ? 'text-gray-700' : 'font-mono text-gray-300 tracking-wider'}`}>
                    {isRecipeez || isRockSkipper ? 'iOS Support' : 'iOS_SUPPORT'}
                  </span>
                </div>
              )}
              {project.platforms.includes('Android') && (
                <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl shadow-lg' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl shadow-lg' : 'retro-card bg-black'} p-4 flex items-center space-x-2`}>
                  <Smartphone className={`w-5 h-5 ${isRecipeez || isRockSkipper ? 'text-green-500' : 'tech-text'}`} />
                  <span className={`text-sm ${isRecipeez || isRockSkipper ? 'text-gray-700' : 'font-mono text-gray-300 tracking-wider'}`}>
                    {isRecipeez || isRockSkipper ? 'Android Support' : 'ANDROID_SUPPORT'}
                  </span>
                </div>
              )}
              {project.platforms.includes('iPadOS') && (
                <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl shadow-lg' : 'retro-card bg-black'} p-4 flex items-center space-x-2`}>
                  <Tablet className={`w-5 h-5 ${isRecipeez ? 'text-orange-500' : 'tech-accent'}`} />
                  <span className={`text-sm ${isRecipeez ? 'text-gray-700' : 'font-mono text-gray-300 tracking-wider'}`}>
                    {isRecipeez ? 'iPad Support' : 'IPAD_SUPPORT'}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Description */}
            <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-xl' : 'retro-card'} p-6`}>
              <h3 className={`text-2xl font-black ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-700' : 'text-white'} ${isRecipeez || isRockSkipper ? '' : 'font-mono tracking-wider'} mb-4 flex items-center gap-3`}>
                <div className={`w-4 h-4 ${isRecipeez ? 'bg-orange-400 rounded-full' : isRockSkipper ? 'bg-blue-400 rounded-full' : 'bg-blue-400 rotate-45'}`}></div>
                {isRecipeez ? 'About This App' : isRockSkipper ? 'About RockSkipper' : 'PROJECT_OVERVIEW.TXT'}
              </h3>
              <p className={`text-lg ${isRecipeez || isRockSkipper ? 'text-gray-700' : 'text-gray-300'} ${isRecipeez || isRockSkipper ? '' : 'font-mono'} leading-relaxed`}>
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-xl' : 'retro-card'} p-6`}>
              <h4 className={`text-xl font-black ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-700' : 'text-white'} mb-4 ${isRecipeez || isRockSkipper ? '' : 'font-mono tracking-wider'} flex items-center gap-3`}>
                <div className={`w-4 h-4 ${isRecipeez ? 'bg-teal-400 rounded-full' : isRockSkipper ? 'bg-teal-400 rounded-full' : 'bg-teal-400 rotate-45'}`}></div>
                {isRecipeez ? 'Built With' : isRockSkipper ? 'Technologies' : 'TECH_STACK.CFG'}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`${isRecipeez ? 'bg-orange-50 border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-100' : isRockSkipper ? 'bg-blue-50 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100' : 'retro-card px-3 py-2 bg-black text-gray-300 hover:text-blue-400'} px-3 py-2 text-sm ${isRecipeez || isRockSkipper ? '' : 'font-mono tracking-wider'} transition-colors text-center`}
                  >
                    {tech.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-xl' : 'retro-card'} p-6`}>
              <h4 className={`text-xl font-black ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-700' : 'text-white'} mb-4 ${isRecipeez || isRockSkipper ? '' : 'font-mono tracking-wider'} flex items-center gap-3`}>
                <div className={`w-4 h-4 ${isRecipeez ? 'bg-green-400 rounded-full' : isRockSkipper ? 'bg-green-400 rounded-full' : 'bg-green-400 rotate-45'}`}></div>
                {isRecipeez ? 'Key Features' : isRockSkipper ? 'Core Features' : 'FEATURES.LOG'}
              </h4>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className={`flex items-start ${isRecipeez || isRockSkipper ? 'text-gray-700' : 'text-gray-300'} ${isRecipeez || isRockSkipper ? '' : 'font-mono'} text-sm`}>
                    <div className={`w-2 h-2 bg-green-400 ${isRecipeez || isRockSkipper ? 'rounded-full' : 'rotate-45'} mr-3 mt-2 flex-shrink-0`}></div>
                    <span>{feature.replace(/_/g, ' ')}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Status */}
            <div className={`${isRecipeez ? 'bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl' : isRockSkipper ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-xl' : 'retro-card'} p-6`}>
              <h4 className={`text-xl font-black ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-700' : 'text-white'} mb-4 ${isRecipeez || isRockSkipper ? '' : 'font-mono tracking-wider'} flex items-center gap-3`}>
                <div className={`w-4 h-4 ${isRecipeez ? 'bg-orange-400 rounded-full' : isRockSkipper ? 'bg-orange-400 rounded-full' : 'bg-orange-400 rotate-45'}`}></div>
                {isRecipeez ? 'Project Info' : isRockSkipper ? 'Status & Info' : 'PROJECT_STATUS.SYS'}
              </h4>
              <div className={`${isRecipeez ? 'bg-orange-50 border border-orange-200 rounded-lg' : isRockSkipper ? 'bg-blue-50 border border-blue-200 rounded-lg' : 'terminal'} p-4`}>
                <div className={`${isRecipeez || isRockSkipper ? 'text-gray-700' : 'green-text'} ${isRecipeez || isRockSkipper ? '' : 'font-mono'} text-sm`}>
                  {isRecipeez || isRockSkipper ? '•' : '>'} STATUS: <span className={`font-bold ${isRecipeez ? 'text-orange-600' : isRockSkipper ? 'text-blue-600' : 'tech-text'}`}>{project.status}</span><br />
                  {isRecipeez || isRockSkipper ? '•' : '>'} VERSION: <span className={`font-bold ${isRecipeez ? 'text-amber-600' : isRockSkipper ? 'text-slate-600' : 'amber-text'}`}>{project.version}</span><br />
                  {isRecipeez || isRockSkipper ? '•' : '>'} PLATFORM: <span className={`font-bold ${isRecipeez ? 'text-teal-600' : isRockSkipper ? 'text-cyan-600' : 'tech-accent'}`}>{project.platforms.join(', ')}</span><br />
                  {isRecipeez || isRockSkipper ? '•' : '>'} CATEGORY: <span className={`font-bold ${isRecipeez ? 'text-green-600' : isRockSkipper ? 'text-teal-600' : 'green-text'}`}>{project.category}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={project.appStoreUrl}
                className={`${isRecipeez ? 'bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105' : isRockSkipper ? 'bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105' : 'retro-btn'} text-lg flex items-center justify-center gap-3 py-3 px-6 transition-all duration-200`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>{isRecipeez ? 'Download from App Store' : isRockSkipper ? 'Coming to App Store' : 'VIEW ON APP STORE'}</span>
              </a>
              <a
                href={project.githubUrl}
                className={`${isRecipeez ? 'bg-gray-700 hover:bg-gray-800 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105' : isRockSkipper ? 'bg-slate-600 hover:bg-slate-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105' : 'retro-btn-secondary'} text-lg flex items-center justify-center gap-3 py-3 px-6 transition-all duration-200`}
              >
                <Github className="w-5 h-5" />
                <span>{isRecipeez ? 'View Source Code' : isRockSkipper ? 'View Source Code' : 'SOURCE CODE'}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Projects or Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/#projects" className="retro-btn text-lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            VIEW ALL PROJECTS
          </Link>
        </motion.div>
      </div>
    </div>
  )
}