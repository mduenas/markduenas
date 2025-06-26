import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-full mx-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-16 relative overflow-hidden scanlines max-w-full mx-auto">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="retro-card p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-black mb-4 font-mono tracking-wider">
                <span className="tech-text">[MD]</span> <span className="tech-accent">PORTFOLIO</span>
              </h3>
              <p className="text-gray-300 mb-6 font-mono">
                &gt;&gt;&gt; MOBILE APPLICATION DEVELOPER<br />
                &gt;&gt;&gt; 30+ YEARS OF EXPERIENCE
              </p>
              
              {/* Legal Links */}
              <div className="flex justify-center gap-6 mb-6">
                <Link 
                  href="/terms"
                  className="retro-card px-4 py-2 bg-black hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-mono tracking-wider text-gray-300 hover:text-blue-400">
                    TERMS.EXE
                  </span>
                </Link>
                <Link 
                  href="/privacy"
                  className="retro-card px-4 py-2 bg-black hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-mono tracking-wider text-gray-300 hover:text-blue-400">
                    PRIVACY.CFG
                  </span>
                </Link>
              </div>
              
              <div className="terminal p-4">
                <div className="green-text font-mono text-xs">
                  &gt; COPYRIGHT.DAT<br />
                  &gt; © {new Date().getFullYear()} MARK DUENAS. ALL RIGHTS RESERVED.<br />
                  &gt; STATUS: <span className="tech-text">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
