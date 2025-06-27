'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

export default function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Hide navigation on project pages (routes like /projects/[slug]) and terms/privacy pages
  const isProjectPage = pathname.startsWith('/projects/') && pathname !== '/projects'
  const isTermsOrPrivacyPage = pathname === '/terms' || pathname === '/privacy'
  
  if (isProjectPage || isTermsOrPrivacyPage) {
    return null
  }
  
  return <Navigation />
}