'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ProjectsListSection from '@/components/ProjectsListSection'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Back to Home Button */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/" 
              className="retro-btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Projects List Section */}
      <ProjectsListSection />
    </div>
  )
}