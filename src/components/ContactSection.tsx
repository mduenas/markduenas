'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, User, FileText } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Form submission failed - you might want to show an error message
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL.CFG',
      value: 'markduenas@gmail.com',
      href: 'mailto:markduenas@gmail.com',
      description: 'Primary Communication Channel'
    },
    {
      icon: Phone,
      label: 'PHONE.SYS',
      value: '208.412.5834',
      href: 'tel:+12084125834',
      description: 'Voice Communication Protocol'
    },
    {
      icon: MapPin,
      label: 'LOCATION.DAT',
      value: 'Emmett, Idaho',
      href: '#',
      description: 'Geographic Coordinates'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GITHUB.EXE',
      href: 'https://github.com/mduenas',
      description: 'Code Repository'
    },
    {
      icon: Linkedin,
      label: 'LINKEDIN.NET',
      href: 'https://www.linkedin.com/in/mduenas/',
      description: 'Professional Network'
    }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden scanlines" ref={ref}>
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
            <span className="tech-text">GET</span> <span className="tech-accent">IN</span> <span className="amber-text">TOUCH</span>
          </h2>
          <div className="retro-card p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-mono leading-relaxed">
              {`>>>`} INITIATING CONTACT_PROTOCOL.EXE<br />
              {`>>>`} READY TO BRING YOUR MOBILE APP IDEA TO LIFE? LET'S DISCUSS YOUR PROJECT
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="retro-card p-8">
              <h3 className="text-2xl font-black text-white mb-6 font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-400 rotate-45"></div>
                COMMUNICATION.LOG
              </h3>
              <p className="text-gray-300 mb-8 font-mono leading-relaxed">
                {`>>>`} WHETHER YOU HAVE A SPECIFIC PROJECT IN MIND OR JUST WANT TO EXPLORE POSSIBILITIES, 
                I'M HERE TO HELP. WITH OVER 30 YEARS OF EXPERIENCE IN MOBILE DEVELOPMENT, I CAN GUIDE 
                YOU THROUGH THE ENTIRE PROCESS FROM CONCEPT TO APP STORE.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="retro-card p-6 hover:bg-gray-700/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="retro-card p-3 bg-black group-hover:bg-gray-700 transition-all duration-300">
                      <info.icon className="w-6 h-6 tech-text" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-black text-white font-mono tracking-wider">
                          {info.label}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-400 font-mono mb-2">
                        {info.description}
                      </p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-lg font-mono text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-mono text-gray-300">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-black text-white font-mono tracking-wider flex items-center gap-3">
                <div className="w-4 h-4 bg-teal-400 rotate-45"></div>
                SOCIAL_NETWORKS.DB
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="retro-card p-6 hover:bg-gray-700/20 transition-all duration-300 group text-center"
                  >
                    <div className="retro-card p-3 bg-black mb-4 mx-auto w-fit group-hover:bg-gray-700 transition-all duration-300">
                      <social.icon className="w-6 h-6 tech-accent" />
                    </div>
                    <h5 className="text-lg font-black text-white font-mono tracking-wider mb-2">
                      {social.label}
                    </h5>
                    <p className="text-sm text-gray-400 font-mono">
                      {social.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="retro-card p-6"
            >
              <div className="terminal p-4">
                <div className="green-text font-mono text-sm">
                  {`>`} STATUS_CHECK.EXE<br />
                  {`>`} SCANNING AVAILABILITY...<br />
                  {`>`} <span className="tech-text font-bold">ONLINE</span> - ACCEPTING NEW PROJECTS<br />
                  {`>`} RESPONSE_TIME: <span className="amber-text font-bold">{'< 24 HOURS'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="retro-card p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="terminal p-6 mb-6">
                  <div className="green-text font-mono text-sm">
                    {`>`} MESSAGE_SEND.EXE<br />
                    {`>`} TRANSMITTING DATA...<br />
                    {`>`} <span className="tech-text font-bold">SUCCESS</span> - MESSAGE DELIVERED
                  </div>
                </div>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-white mb-4 font-mono tracking-wider">
                  TRANSMISSION COMPLETE
                </h3>
                <p className="text-gray-300 font-mono mb-6">
                  MESSAGE RECEIVED. RESPONSE WILL BE TRANSMITTED WITHIN 24 HOURS.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="retro-btn-secondary"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Hidden form for Netlify detection */}
                <div hidden>
                  <input name="name" />
                  <input name="email" />
                  <input name="subject" />
                  <textarea name="message"></textarea>
                </div>
                <div className="border-b-2 border-gray-600 pb-4 mb-6">
                  <h3 className="text-2xl font-black text-white font-mono tracking-wider flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rotate-45"></div>
                    MESSAGE_FORM.EXE
                  </h3>
                  <p className="text-sm text-gray-400 font-mono mt-2">
                    COMPLETE ALL REQUIRED FIELDS TO INITIALIZE TRANSMISSION
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono font-bold text-gray-300 mb-2 tracking-wider">
                      <User className="w-4 h-4 inline mr-2" />
                      NAME.DAT *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full retro-card p-4 bg-black text-white font-mono placeholder-gray-500 focus:bg-gray-800 transition-colors"
                      placeholder="ENTER_YOUR_NAME"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono font-bold text-gray-300 mb-2 tracking-wider">
                      <Mail className="w-4 h-4 inline mr-2" />
                      EMAIL.CFG *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full retro-card p-4 bg-black text-white font-mono placeholder-gray-500 focus:bg-gray-800 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono font-bold text-gray-300 mb-2 tracking-wider">
                    <FileText className="w-4 h-4 inline mr-2" />
                    SUBJECT.TXT *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full retro-card p-4 bg-black text-white font-mono placeholder-gray-500 focus:bg-gray-800 transition-colors"
                    placeholder="PROJECT_INQUIRY, CONSULTATION, ETC."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-bold text-gray-300 mb-2 tracking-wider">
                    <Send className="w-4 h-4 inline mr-2" />
                    MESSAGE.LOG *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full retro-card p-4 bg-black text-white font-mono placeholder-gray-500 focus:bg-gray-800 transition-colors resize-none"
                    placeholder="DESCRIBE YOUR PROJECT, TIMELINE, AND SPECIFIC REQUIREMENTS..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full retro-btn text-lg flex items-center justify-center gap-4 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>

                <div className="terminal p-4 mt-6">
                  <div className="green-text font-mono text-xs">
                    {`>`} FORM_VALIDATION.EXE RUNNING...<br />
                    {`>`} ENCRYPTION: <span className="tech-text">ENABLED</span><br />
                    {`>`} PRIVACY: <span className="tech-accent">PROTECTED</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}