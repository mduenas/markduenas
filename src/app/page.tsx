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
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-xl font-bold">
                <span className="text-blue-500">Mark</span>
                <span className="text-slate-300">Duenas</span>
              </span>
              <p className="text-slate-500 text-sm mt-2">
                Senior Mobile App Developer • 30+ Years Experience
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex justify-center gap-6 mb-6">
              <Link
                href="/terms"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </div>

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Mark Duenas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
