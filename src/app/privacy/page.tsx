'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Shield, Eye, Database, Mail, Cookie, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections = [
    {
      icon: Eye,
      title: "INFORMATION_COLLECTION.DAT",
      content: [
        "This portfolio website collects minimal information to provide and improve the service.",
        "Contact form submissions collect: name, email address, subject, and message content.",
        "Analytics data may include: page views, session duration, and general geographic location (country/city level).",
        "No personal information is collected without your explicit consent through form submission."
      ]
    },
    {
      icon: Database,
      title: "DATA_USAGE.CFG",
      content: [
        "Contact form information is used solely to respond to your inquiries and project discussions.",
        "Analytics data helps understand website usage patterns and improve user experience.",
        "Your information will never be sold, rented, or shared with third parties for marketing purposes.",
        "All data is processed lawfully and transparently according to applicable privacy regulations."
      ]
    },
    {
      icon: Cookie,
      title: "COOKIES_TRACKING.SYS",
      content: [
        "This website may use cookies and similar technologies for analytics and functionality.",
        "Essential cookies ensure proper website operation and user experience.",
        "Analytics cookies (if used) help understand website performance and visitor behavior.",
        "You can control cookie preferences through your browser settings."
      ]
    },
    {
      icon: Lock,
      title: "DATA_SECURITY.EXE",
      content: [
        "All form submissions are transmitted using secure HTTPS encryption.",
        "Contact information is stored securely and access is limited to necessary personnel.",
        "We implement appropriate technical and organizational measures to protect your data.",
        "Data retention is limited to necessary periods for responding to inquiries and legal requirements."
      ]
    },
    {
      icon: Mail,
      title: "CONTACT_RIGHTS.LOG",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can request information about what data we have collected about you.",
        "You may opt out of any communications by contacting us directly.",
        "For privacy-related questions or requests, use the contact form or email directly."
      ]
    },
    {
      icon: Shield,
      title: "POLICY_UPDATES.BIN",
      content: [
        "This privacy policy may be updated to reflect changes in practices or legal requirements.",
        "Material changes will be communicated through website notifications.",
        "Continued use of the website after updates constitutes acceptance of the revised policy.",
        "Last updated: " + new Date().toLocaleDateString()
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
                <span className="tech-text">PRIVACY</span> <span className="tech-accent">POLICY</span>
              </h1>
              <div className="retro-card p-6">
                <p className="text-xl text-white font-mono leading-relaxed">
                  &gt;&gt;&gt; LOADING PRIVACY_PROTOCOL.EXE<br />
                  &gt;&gt;&gt; DATA PROTECTION AND PRIVACY PRACTICES FOR PORTFOLIO WEBSITE
                </p>
              </div>
            </motion.div>

            {/* Privacy Sections */}
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

            {/* Contact for Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-16 retro-card p-8 text-center"
            >
              <h3 className="text-2xl font-black text-white mb-4 font-mono tracking-wider">
                PRIVACY_CONTACT.EXE
              </h3>
              <p className="text-gray-300 font-mono mb-6">
                &gt;&gt;&gt; FOR PRIVACY-RELATED QUESTIONS, DATA REQUESTS, OR CONCERNS
              </p>
              <Link 
                href="/#contact"
                className="retro-btn"
              >
                CONTACT FORM
              </Link>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-16 text-center"
            >
              <div className="terminal p-6">
                <div className="green-text font-mono text-sm">
                  &gt; PRIVACY_STATUS.EXE<br />
                  &gt; POLICY LOADED: <span className="tech-text">SUCCESS</span><br />
                  &gt; ENCRYPTION: <span className="tech-accent">ENABLED</span><br />
                  &gt; LAST_MODIFIED: <span className="amber-text">{new Date().toLocaleDateString()}</span><br />
                  &gt; GDPR_COMPLIANT: <span className="green-text">TRUE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}