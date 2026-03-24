'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Shield, Eye, Database, Mail, Cookie, Lock, Smartphone, Server, AlertTriangle, Users } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections = [
    {
      icon: Eye,
      title: "INFORMATION_COLLECTION.DAT",
      content: [
        "This privacy policy covers both this portfolio website and all mobile applications published by Mark Duenas.",
        "Portfolio website collects: contact form submissions (name, email, subject, message) and analytics data (page views, session duration, general geographic location).",
        "Mobile applications may collect: account credentials (email/password), user-generated content (visit schedules, messages, recipes, session notes, etc.), device identifiers, crash reports, and usage analytics.",
        "No personal information is collected without your explicit consent through form submission or app account creation.",
        "Camera access (where requested) is used solely for in-app functionality such as QR code scanning. No images are stored or transmitted to any server."
      ]
    },
    {
      icon: Server,
      title: "THIRD_PARTY_SERVICES.CFG",
      content: [
        "Our mobile applications use Firebase (Google LLC) for authentication, cloud data storage, analytics, and crash reporting. Firebase may collect device identifiers, IP addresses, and usage data. See Google's privacy policy at https://policies.google.com/privacy.",
        "Firebase Authentication stores your email address and a hashed password to provide secure account access.",
        "Firebase Firestore stores app-specific data (e.g., visit schedules, messages, recipes) in Google's cloud infrastructure.",
        "Firebase Analytics collects anonymized usage events to help improve app experience. This data is not linked to personally identifiable information.",
        "Firebase Crashlytics automatically collects crash logs, device model, OS version, and app state at the time of a crash to help diagnose and fix bugs.",
        "Apps that display advertisements use Google AdMob, which may collect your device advertising ID (IDFA on iOS, GAID on Android) to serve personalized ads. You can opt out via your device's advertising settings.",
        "In-app purchases are processed by Apple (App Store) or Google (Google Play). We do not receive or store your payment information."
      ]
    },
    {
      icon: Database,
      title: "DATA_USAGE.CFG",
      content: [
        "Contact form information is used solely to respond to your inquiries and project discussions.",
        "App account data is used to provide, personalize, and improve the app experience.",
        "Analytics and crash data are used to understand usage patterns, diagnose issues, and improve app stability and performance.",
        "Your information will never be sold, rented, or shared with third parties for marketing purposes.",
        "All data is processed lawfully and transparently according to applicable privacy regulations."
      ]
    },
    {
      icon: Smartphone,
      title: "MOBILE_APP_PERMISSIONS.SYS",
      content: [
        "Camera: Used for QR code scanning (e.g., visitor check-in) or photo capture where applicable. No images are stored externally without explicit user action.",
        "Face ID / Touch ID: Biometric authentication is handled entirely by the device operating system. We never access, store, or transmit biometric data.",
        "Notifications: Used to deliver visit reminders, approval updates, and other app-relevant alerts. You can disable notifications at any time in device settings.",
        "All permission requests include a clear explanation of purpose at the time of request."
      ]
    },
    {
      icon: Cookie,
      title: "COOKIES_TRACKING.SYS",
      content: [
        "This website may use cookies and similar technologies for analytics and functionality.",
        "Essential cookies ensure proper website operation and user experience.",
        "Analytics cookies (if used) help understand website performance and visitor behavior.",
        "Mobile apps do not use browser cookies. Device identifiers used by Firebase and AdMob are governed by those services' respective privacy policies.",
        "You can control cookie preferences through your browser settings, and advertising ID tracking through your device's privacy settings."
      ]
    },
    {
      icon: Lock,
      title: "DATA_SECURITY.EXE",
      content: [
        "All data transmissions use secure HTTPS/TLS encryption.",
        "Firebase infrastructure provides enterprise-grade security for cloud-stored app data.",
        "Sensitive local data (such as authentication tokens) is stored using platform-secure storage (iOS Keychain, Android EncryptedSharedPreferences).",
        "We implement appropriate technical and organizational measures to protect your data.",
        "Data retention is limited to the period necessary to provide the service or as required by law. You may request deletion of your account and associated data at any time."
      ]
    },
    {
      icon: Users,
      title: "CHILDREN_PRIVACY.DAT",
      content: [
        "None of our applications are directed at children under the age of 13.",
        "We do not knowingly collect personal information from children under 13.",
        "If you believe a child under 13 has provided personal information through one of our apps, please contact us immediately and we will delete that information promptly.",
        "This policy complies with the Children's Online Privacy Protection Act (COPPA)."
      ]
    },
    {
      icon: AlertTriangle,
      title: "CCPA_RIGHTS.LOG",
      content: [
        "California residents have additional rights under the California Consumer Privacy Act (CCPA).",
        "You have the right to know what personal information is collected, used, shared, or sold.",
        "You have the right to delete personal information we have collected about you.",
        "You have the right to opt out of the sale of personal information. We do not sell personal information.",
        "You have the right to non-discrimination for exercising your CCPA rights.",
        "To exercise these rights, contact us at markduenas@gmail.com."
      ]
    },
    {
      icon: Mail,
      title: "CONTACT_RIGHTS.LOG",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can request information about what data has been collected about you.",
        "To request account or data deletion for a specific app, contact us at markduenas@gmail.com with the app name and registered email address.",
        "You may opt out of any communications by contacting us directly.",
        "For privacy-related questions or requests, use the contact form below or email markduenas@gmail.com."
      ]
    },
    {
      icon: Shield,
      title: "POLICY_UPDATES.BIN",
      content: [
        "This privacy policy applies to markduenas.com and all mobile applications published under the Mark Duenas developer account.",
        "This policy may be updated to reflect changes in practices, app features, or legal requirements.",
        "Material changes will be communicated through website notifications or in-app notices.",
        "Continued use of the website or apps after updates constitutes acceptance of the revised policy.",
        "Last updated: March 2026"
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
            <div className="flex justify-end items-center h-20">
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
                  &gt;&gt;&gt; DATA PROTECTION PRACTICES FOR PORTFOLIO WEBSITE AND MOBILE APPLICATIONS
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  &gt; LAST_MODIFIED: <span className="amber-text">MARCH 2026</span><br />
                  &gt; GDPR_COMPLIANT: <span className="green-text">TRUE</span><br />
                  &gt; CCPA_COMPLIANT: <span className="green-text">TRUE</span><br />
                  &gt; COPPA_COMPLIANT: <span className="green-text">TRUE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
