'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FileText, Calendar, Scale, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections = [
    {
      icon: FileText,
      title: "ACCEPTANCE.DAT",
      content: [
        "By accessing and using this portfolio website (the 'Service'), you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service."
      ]
    },
    {
      icon: Shield,
      title: "SERVICE_USE.CFG",
      content: [
        "This portfolio website is provided for informational purposes only to showcase professional work and experience.",
        "You may not use this website for any unlawful purpose or to solicit the performance of any illegal acts.",
        "You agree not to interfere with or disrupt the website or servers connected to the website.",
        "Reproduction, distribution, or modification of website content requires explicit written permission."
      ]
    },
    {
      icon: Scale,
      title: "INTELLECTUAL_PROPERTY.SYS",
      content: [
        "All content, trademarks, logos, and intellectual property displayed on this website are owned by Mark Duenas or their respective owners.",
        "Project information and screenshots are used for portfolio demonstration purposes.",
        "Third-party trademarks and logos are property of their respective owners.",
        "Unauthorized use of any content may violate copyright, trademark, and other laws."
      ]
    },
    {
      icon: Calendar,
      title: "MODIFICATIONS.LOG",
      content: [
        "These terms may be updated from time to time without prior notice.",
        "Continued use of the website after changes constitutes acceptance of new terms.",
        "Last updated: " + new Date().toLocaleDateString(),
        "For questions about these terms, please contact through the provided contact form."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 scanlines">
      {/* Retro Background */}
      <div className="absolute inset-0 retro-grid opacity-10"></div>
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 retro-card border-b-2 border-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="text-3xl font-black hover:text-blue-400 transition-colors">
                <span className="tech-text font-mono">[MD]</span>
              </Link>
              <Link 
                href="/"
                className="retro-card px-6 py-3 bg-black hover:bg-gray-700 transition-colors font-mono text-sm tracking-wider text-gray-300 hover:text-blue-400"
              >
                &lt;&lt; BACK_TO_PORTFOLIO.EXE
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-32 pb-20" ref={ref}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
                <span className="tech-text">TERMS</span> <span className="tech-accent">OF</span> <span className="amber-text">USE</span>
              </h1>
              <div className="retro-card p-6">
                <p className="text-xl text-white font-mono leading-relaxed">
                  &gt;&gt;&gt; LOADING LEGAL_FRAMEWORK.EXE<br />
                  &gt;&gt;&gt; TERMS AND CONDITIONS FOR PORTFOLIO WEBSITE USAGE
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="retro-card p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="retro-card p-3 bg-black mr-4">
                      <section.icon className="w-6 h-6 tech-text" />
                    </div>
                    <h2 className="text-2xl font-black text-white font-mono tracking-wider">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 font-mono leading-relaxed">
                        &gt;&gt;&gt; {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 text-center"
            >
              <div className="terminal p-6">
                <div className="green-text font-mono text-sm">
                  &gt; TERMS_STATUS.EXE<br />
                  &gt; DOCUMENT LOADED: <span className="tech-text">SUCCESS</span><br />
                  &gt; LAST_MODIFIED: <span className="amber-text">{new Date().toLocaleDateString()}</span><br />
                  &gt; QUESTIONS? <Link href="/#contact" className="tech-accent hover:text-blue-400">CONTACT_FORM.EXE</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}