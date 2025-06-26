'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Smartphone, Tablet, ChevronLeft, ChevronRight, Monitor, Play } from 'lucide-react'
import Image from 'next/image'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 'cap',
      title: 'CAPITAL_TRACKER.APP',
      category: 'Finance & Real Estate',
      description: 'A comprehensive real estate and investment property management application for iOS and iPad. Features property tracking, market analysis, financial calculations, and portfolio management.',
      longDescription: 'Advanced real estate investment platform offering detailed property analysis, market trends, financial modeling, and comprehensive portfolio management. Built with native iOS technologies for optimal performance.',
      technologies: ['SWIFT', 'CORE_DATA', 'CHARTS', 'MAPKIT', 'CLOUDKIT'],
      platforms: ['iOS', 'iPadOS'],
      appStoreUrl: '#',
      githubUrl: '#',
      status: 'PRODUCTION',
      version: 'v2.1.3',
      features: [
        'PROPERTY PORTFOLIO TRACKING',
        'MARKET ANALYSIS AND TRENDS',
        'FINANCIAL CALCULATIONS AND ROI',
        'INTERACTIVE CHARTS AND GRAPHS',
        'CLOUD SYNC ACROSS DEVICES',
        'ADVANCED FILTERING AND SEARCH'
      ],
      images: [
        '/images/projects/cap/main.png',
        '/images/projects/cap/feature.png',
        '/images/projects/cap/market1.png',
        '/images/projects/cap/market2.png',
        '/images/projects/cap/settings.png'
      ],
      mobileImages: [
        '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.13.png',
        '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.42.png',
        '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.46.png'
      ],
      tabletImages: [
        '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.22.48.png',
        '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.24.00.png',
        '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.24.10.png'
      ]
    },
    {
      id: 'pigs',
      title: 'PIG_DICE.GAME',
      category: 'Games & Entertainment',
      description: 'Classic dice game implementation with modern UI/UX design. Features single and multiplayer modes, customizable rules, and engaging animations.',
      longDescription: 'A beautifully crafted digital version of the classic Pig dice game. Features intuitive gameplay, stunning animations, multiplayer support, and customizable game rules for endless entertainment.',
      technologies: ['SWIFT', 'SPRITEKIT', 'GAMECENTER', 'AVFOUNDATION'],
      platforms: ['iOS', 'iPadOS'],
      appStoreUrl: '#',
      githubUrl: '#',
      status: 'PRODUCTION',
      version: 'v1.4.2',
      features: [
        'SINGLE AND MULTIPLAYER MODES',
        'GAME CENTER INTEGRATION',
        'CUSTOM RULE SETS',
        'ANIMATED DICE AND EFFECTS',
        'PLAYER STATISTICS TRACKING',
        'UNIVERSAL iOS/IPAD DESIGN'
      ],
      images: [
        '/images/projects/pigs/app_icon.png',
        '/images/projects/pigs/game_view.png',
        '/images/projects/pigs/settings.png',
        '/images/projects/pigs/feature.png'
      ],
      mobileImages: [
        '/images/projects/pigs/ios/main_ios.png',
        '/images/projects/pigs/ios/settings_ios.png',
        '/images/projects/pigs/ios/main_screen.png'
      ],
      tabletImages: [
        '/images/projects/pigs/ios/main_ipad.png',
        '/images/projects/pigs/ios/settings_ipad.png'
      ]
    },
    {
      id: 'pigen',
      title: 'PI_GENERATOR.EXE',
      category: 'Education & Utilities',
      description: 'Mathematical utility app for calculating and exploring the digits of Pi. Features high-precision calculations, digit search, and educational content.',
      longDescription: 'Educational and utility application for mathematics enthusiasts. Calculate Pi to thousands of digits, search for specific number sequences, and explore the fascinating properties of this mathematical constant.',
      technologies: ['SWIFT', 'METAL', 'CORE_ANIMATION', 'ACCELERATE'],
      platforms: ['iOS', 'iPadOS'],
      appStoreUrl: '#',
      githubUrl: '#',
      status: 'PRODUCTION',
      version: 'v3.0.1',
      features: [
        'HIGH-PRECISION PI CALCULATION',
        'DIGIT SEQUENCE SEARCH',
        'MATHEMATICAL ALGORITHMS',
        'BEAUTIFUL VISUALIZATIONS',
        'EDUCATIONAL CONTENT',
        'EXPORT AND SHARING OPTIONS'
      ],
      images: [
        '/images/projects/pigen/main1.png',
        '/images/projects/pigen/main2.png',
        '/images/projects/pigen/main3.png',
        '/images/projects/pigen/main4.png'
      ],
      mobileImages: [
        '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.24.46.png',
        '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.26.00.png',
        '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.26.05.png'
      ],
      tabletImages: [
        '/images/projects/pigen/ipad_main1.png',
        '/images/projects/pigen/ipad_main2.png',
        '/images/projects/pigen/ipad_main3.png'
      ]
    },
    {
      id: 'haba',
      title: 'HABA_TRACKER.SYS',
      category: 'Productivity & Lifestyle',
      description: 'Personal habit tracking and productivity application. Clean, minimalist design focused on helping users build and maintain positive habits.',
      longDescription: 'Elegant habit tracking application designed to help users build lasting positive habits. Features clean design, progress visualization, reminder system, and detailed analytics.',
      technologies: ['SWIFT', 'CORE_DATA', 'USERNOTIFICATIONS', 'WIDGETKIT'],
      platforms: ['iOS'],
      appStoreUrl: '#',
      githubUrl: '#',
      status: 'BETA',
      version: 'v0.9.1',
      features: [
        'HABIT CREATION AND TRACKING',
        'PROGRESS VISUALIZATION',
        'SMART NOTIFICATIONS',
        'STREAK TRACKING',
        'WIDGET SUPPORT',
        'DATA EXPORT AND BACKUP'
      ],
      images: [
        '/images/projects/haba/icon.png',
        '/images/projects/haba/main.png'
      ],
      mobileImages: [
        '/images/projects/haba/main.png'
      ],
      tabletImages: []
    }
  ]

  const currentProject = projects[selectedProject]
  const currentImages = currentProject.mobileImages.length > 0 ? currentProject.mobileImages : currentProject.images

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

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
            <span className="tech-text">FEATURED</span> <span className="tech-accent">PROJECTS</span>
          </h2>
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-mono leading-relaxed">
              {`>>>`} LOADING PROJECT_PORTFOLIO.DB<br />
              {`>>>`} MOBILE APPLICATIONS SPANNING FINANCE, ENTERTAINMENT, EDUCATION, AND PRODUCTIVITY
            </p>
          </div>
        </motion.div>

        {/* Project Navigation - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProject(index)
                setCurrentImageIndex(0)
              }}
              className={`retro-card px-6 py-4 font-mono font-bold text-sm tracking-wider transition-all duration-300 ${
                selectedProject === index
                  ? 'bg-gray-700 tech-text'
                  : 'bg-black text-gray-300 hover:text-blue-400 hover:bg-gray-700/30'
              }`}
            >
              {project.title}
            </button>
          ))}
        </motion.div>

        {/* Project Details - CENTERED */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto mb-20"
        >
          {/* Project Images */}
          <div className="space-y-6">
            {/* Computer Monitor Display */}
            <div className="computer-bezel p-2">
              <div className="retro-card bg-black p-4 min-h-[500px] flex items-center justify-center relative">
                {/* Monitor Header */}
                <div className="absolute top-2 left-2 right-2 bg-gray-800 p-2 rounded-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">
                      {currentProject.title} - v{currentProject.version}
                    </span>
                  </div>
                </div>

                {currentImages.length > 0 && (
                  <>
                    <div className="relative w-full max-w-sm mx-auto mt-12">
                      <Image
                        src={currentImages[currentImageIndex]}
                        alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                        width={300}
                        height={600}
                        className="w-full h-auto retro-card"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 retro-card p-2 bg-black hover:bg-gray-700 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-300" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 retro-card p-2 bg-black hover:bg-gray-700 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Image Navigation */}
            {currentImages.length > 1 && (
              <div className="flex space-x-3 justify-center">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 transition-all duration-200 ${
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
              {currentProject.platforms.includes('iOS') && (
                <div className="retro-card p-4 bg-black flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 tech-text" />
                  <span className="text-sm font-mono text-gray-300 tracking-wider">iOS_SUPPORT</span>
                </div>
              )}
              {currentProject.platforms.includes('iPadOS') && (
                <div className="retro-card p-4 bg-black flex items-center space-x-2">
                  <Tablet className="w-5 h-5 tech-accent" />
                  <span className="text-sm font-mono text-gray-300 tracking-wider">IPAD_SUPPORT</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="retro-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-black text-white font-mono tracking-wider mb-2">
                    {currentProject.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`retro-card px-3 py-1 text-sm font-mono tracking-wider ${
                      currentProject.status === 'PRODUCTION' ? 'tech-text bg-black' :
                      currentProject.status === 'BETA' ? 'amber-text bg-black' : 'text-gray-400 bg-black'
                    }`}>
                      {currentProject.status}
                    </span>
                    <span className="retro-card px-3 py-1 tech-accent bg-black text-sm font-mono tracking-wider">
                      {currentProject.category}
                    </span>
                  </div>
                </div>
                <div className="terminal p-3">
                  <div className="green-text font-mono text-xs">
                    > STATUS: <span className="tech-text">{currentProject.status}</span><br />
                    > VERSION: <span className="amber-text">{currentProject.version}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 font-mono mb-4">
                {currentProject.description}
              </p>
              <p className="text-gray-400 font-mono text-sm">
                {currentProject.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="retro-card p-6">
              <h4 className="text-xl font-black text-white mb-4 font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-400 rotate-45"></div>
                TECH_STACK.CFG
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="retro-card px-3 py-2 bg-black text-gray-300 text-sm font-mono tracking-wider hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="retro-card p-6">
              <h4 className="text-xl font-black text-white mb-4 font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-teal-400 rotate-45"></div>
                FEATURES.LOG
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentProject.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 font-mono text-sm">
                    <div className="w-2 h-2 bg-green-400 rotate-45 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentProject.appStoreUrl}
                className="retro-btn text-lg flex items-center justify-center gap-3 flex-1"
              >
                <ExternalLink className="w-5 h-5" />
                <span>VIEW ON APP STORE</span>
              </a>
              <a
                href={currentProject.githubUrl}
                className="retro-btn-secondary text-lg flex items-center justify-center gap-3 flex-1"
              >
                <Github className="w-5 h-5" />
                <span>SOURCE CODE</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Statistics - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          <div className="text-center retro-card p-6 hover:bg-gray-700/20 transition-all duration-300">
            <div className="terminal p-3 mb-4">
              <div className="green-text font-mono text-xs">
                > COUNT_APPS.EXE<br />
                > <span className="tech-text font-bold">{projects.length}</span>
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
                > PLATFORM_COUNT.SYS<br />
                > <span className="tech-accent font-bold">2</span>
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
                > DOWNLOAD_STATS.DB<br />
                > <span className="green-text font-bold">100K+</span>
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
                > RATING_AVG.CFG<br />
                > <span className="amber-text font-bold">4.8★</span>
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