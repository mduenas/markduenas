'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function ConditionalNavigation() {
  const pathname = usePathname()
  const [shouldHideNav, setShouldHideNav] = useState(false)
  
  useEffect(() => {
    // Check both pathname from Next.js and current URL for static exports
    const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '')
    
    // Hide navigation on project pages (routes like /projects/[slug]) and terms/privacy pages
    const isProjectPage = currentPath.startsWith('/projects/') && currentPath !== '/projects'
    const isTermsOrPrivacyPage = currentPath === '/terms' || currentPath === '/privacy' || 
                                 currentPath === '/terms/' || currentPath === '/privacy/'
    
    setShouldHideNav(isProjectPage || isTermsOrPrivacyPage)
  }, [pathname])
  
  if (shouldHideNav) {
    return null
  }
  
  return <Navigation />
}