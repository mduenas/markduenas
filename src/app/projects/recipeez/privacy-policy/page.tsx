'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Download, Mail, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

interface PolicySection {
  title: string
  content: string
  isHighlighted?: boolean
}

const policySections: PolicySection[] = [
  {
    title: "Data Ownership",
    content: "All recipes, photos, notes, and content you create or import into Recipeez remain your intellectual property. We do not claim ownership of your recipes or photos. Your data is yours to keep, export, or delete at any time.",
    isHighlighted: true
  },
  {
    title: "Information We Collect",
    content: "We collect only the data necessary to provide app functionality: recipes you create, photos you upload, and anonymous usage analytics to improve the app. We don't collect personal information like names, emails, or phone numbers."
  },
  {
    title: "Anonymous Authentication",
    content: "Your account uses anonymous authentication, meaning we don't require personal information to use the app. Your recipes are tied to a device-generated anonymous ID, protecting your privacy."
  },
  {
    title: "Data Security",
    content: "All data is encrypted in transit and at rest using industry-standard security measures. We use Firebase's enterprise-grade security infrastructure to protect your recipes and photos."
  },
  {
    title: "Data Sharing",
    content: "We never share, sell, or use your recipes for any purpose other than app functionality. Your recipes remain private and accessible only to you. Limited sharing only occurs with secure service providers under strict data processing agreements."
  },
  {
    title: "Data Retention",
    content: "Your data is retained as long as you use the app. If you delete your account, all data is permanently deleted within 30 days. Anonymous accounts remain active indefinitely since there's no personal data to expire."
  },
  {
    title: "Children's Privacy",
    content: "Recipeez is designed for users 13 and older. We don't knowingly collect information from children under 13. Parents can help children delete accounts if accidentally created."
  },
  {
    title: "Changes to Policy",
    content: "Material changes to this policy will be announced 30 days before taking effect. Important privacy updates will be shown in the app. Changes never reduce your data ownership rights."
  },
  {
    title: "Legal Compliance",
    content: "This policy complies with CCPA, GDPR, COPPA, and other privacy regulations. We're committed to protecting your privacy while giving you full control over your culinary creations."
  }
]

export default function RecipeezPrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-32 relative overflow-hidden">
      {/* Recipeez-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/projects/recipeez" 
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 py-2 px-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipeez
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-orange-600">
              Recipeez Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your recipes belong to you. We're just providing the secure, private space to store them.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Key Rights Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-black text-orange-600">Your Rights Summary</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-orange-600 mb-3">Available Now:</h3>
                <ul className="space-y-2">
                  {[
                    "✅ Own your recipes and photos completely",
                    "✅ Delete individual recipes anytime",
                    "✅ Request account deletion",
                    "✅ Private, anonymous usage"
                  ].map((right, index) => (
                    <li key={index} className="text-gray-700">{right}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-amber-600 mb-3">Coming Soon:</h3>
                <ul className="space-y-2">
                  {[
                    "🔄 One-click data export (in development)",
                    "🔄 Recipe sharing controls (planned feature)",
                    "🔄 Advanced privacy settings (future update)"
                  ].map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Export Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-black text-amber-600">Data Export</h2>
            </div>
            <p className="text-gray-700 mb-4">
              The data export feature is currently in development. When available, you'll be able to export all your recipes, photos, and metadata in multiple formats (JSON, PDF).
            </p>
            <p className="text-gray-600 text-sm">
              Until then, you can request a manual export by contacting privacy@recipeez.app
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-black text-orange-600">Contact Us</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Privacy Questions:</h3>
                <p className="text-orange-600 font-medium">privacy@recipeez.app</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">General Support:</h3>
                <p className="text-orange-600 font-medium">support@recipeez.app</p>
              </div>
            </div>
          </motion.div>

          {/* Policy Sections */}
          {policySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`${
                section.isHighlighted 
                  ? 'bg-orange-50 border-2 border-orange-300' 
                  : 'bg-white/90 border-2 border-orange-200'
              } backdrop-blur-sm rounded-2xl shadow-xl p-6`}
            >
              <h2 className={`text-xl font-black mb-4 ${
                section.isHighlighted ? 'text-orange-700' : 'text-orange-600'
              }`}>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/60 backdrop-blur-sm border border-orange-200 rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Last Updated: January 1, 2025</span>
            </div>
            <p className="text-sm text-gray-600">Effective Date: January 1, 2025</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}