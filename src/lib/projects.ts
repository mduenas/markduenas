export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  platforms: string[];
  appStoreUrl: string;
  githubUrl: string;
  status: string;
  version: string;
  features: string[];
  images: string[];
  mobileImages: string[];
  tabletImages: string[];
}

export const projects: Project[] = [
  {
    id: 'cap',
    title: 'CAPITAL_TRACKER.APP',
    category: 'Finance & Real Estate',
    description: 'A comprehensive real estate and investment property management application for iOS and iPad. Features property tracking, market analysis, financial calculations, and portfolio management.',
    longDescription: 'Advanced real estate investment platform offering detailed property analysis, market trends, financial modeling, and comprehensive portfolio management. Built with native iOS technologies for optimal performance.',
    technologies: ['SWIFT', 'CORE_DATA', 'CHARTS', 'MAPKIT', 'CLOUDKIT'],
    platforms: ['iOS', 'iPadOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'PRODUCTION',
    version: 'v2.1.3',
    features: [
      'PROPERTY PORTFOLIO TRACKING',
      'MARKET ANALYSIS AND TRENDS',
      'FINANCIAL CALCULATIONS AND ROI',
      'INTERACTIVE CHARTS AND GRAPHS',
      'CLOUD SYNC ACROSS DEVICES',
      'ADVANCED FILTERING AND SEARCH'
    ],
    images: [
      '/images/projects/cap/main.png',
      '/images/projects/cap/feature.png',
      '/images/projects/cap/market1.png',
      '/images/projects/cap/market2.png',
      '/images/projects/cap/settings.png'
    ],
    mobileImages: [
      '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.13.png',
      '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.42.png',
      '/images/projects/cap/ios_views/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 14.25.46.png'
    ],
    tabletImages: [
      '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.22.48.png',
      '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.24.00.png',
      '/images/projects/cap/ios_views/Simulator Screenshot - iPad Pro 13-inch (M4) - 2025-06-25 at 14.24.10.png'
    ]
  },
  {
    id: 'pigs',
    title: 'PIG_DICE.GAME',
    category: 'Games & Entertainment',
    description: 'Classic dice game implementation with modern UI/UX design. Features single and multiplayer modes, customizable rules, and engaging animations.',
    longDescription: 'A beautifully crafted digital version of the classic Pig dice game. Features intuitive gameplay, stunning animations, multiplayer support, and customizable game rules for endless entertainment.',
    technologies: ['SWIFT', 'SPRITEKIT', 'GAMECENTER', 'AVFOUNDATION'],
    platforms: ['iOS', 'iPadOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'PRODUCTION',
    version: 'v1.4.2',
    features: [
      'SINGLE AND MULTIPLAYER MODES',
      'GAME CENTER INTEGRATION',
      'CUSTOM RULE SETS',
      'ANIMATED DICE AND EFFECTS',
      'PLAYER STATISTICS TRACKING',
      'UNIVERSAL iOS/IPAD DESIGN'
    ],
    images: [
      '/images/projects/pigs/app_icon.png',
      '/images/projects/pigs/game_view.png',
      '/images/projects/pigs/settings.png',
      '/images/projects/pigs/feature.png'
    ],
    mobileImages: [
      '/images/projects/pigs/ios/main_ios.png',
      '/images/projects/pigs/ios/settings_ios.png',
      '/images/projects/pigs/ios/main_screen.png'
    ],
    tabletImages: [
      '/images/projects/pigs/ios/main_ipad.png',
      '/images/projects/pigs/ios/settings_ipad.png'
    ]
  },
  {
    id: 'pigen',
    title: 'PI_GENERATOR.EXE',
    category: 'Education & Utilities',
    description: 'Mathematical utility app for calculating and exploring the digits of Pi. Features high-precision calculations, digit search, and educational content.',
    longDescription: 'Educational and utility application for mathematics enthusiasts. Calculate Pi to thousands of digits, search for specific number sequences, and explore the fascinating properties of this mathematical constant.',
    technologies: ['SWIFT', 'METAL', 'CORE_ANIMATION', 'ACCELERATE'],
    platforms: ['iOS', 'iPadOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'PRODUCTION',
    version: 'v3.0.1',
    features: [
      'HIGH-PRECISION PI CALCULATION',
      'DIGIT SEQUENCE SEARCH',
      'MATHEMATICAL ALGORITHMS',
      'BEAUTIFUL VISUALIZATIONS',
      'EDUCATIONAL CONTENT',
      'EXPORT AND SHARING OPTIONS'
    ],
    images: [
      '/images/projects/pigen/main1.png',
      '/images/projects/pigen/main2.png',
      '/images/projects/pigen/main3.png',
      '/images/projects/pigen/main4.png'
    ],
    mobileImages: [
      '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.24.46.png',
      '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.26.00.png',
      '/images/projects/pigen/Simulator Screenshot - iPhone 16 Plus - 2025-06-25 at 13.26.05.png'
    ],
    tabletImages: [
      '/images/projects/pigen/ipad_main1.png',
      '/images/projects/pigen/ipad_main2.png',
      '/images/projects/pigen/ipad_main3.png'
    ]
  },
  {
    id: 'haba',
    title: 'HABA_TRACKER.SYS',
    category: 'Health & Medical',
    description: 'Hearing Aid Battery replacement tracking app. Clean, minimalist design focused on helping users track battery changes and receive replacement reminders.',
    longDescription: 'Specialized tracking application for hearing aid users to monitor battery replacements. Features battery life tracking, replacement reminders, usage analytics, and maintenance scheduling.',
    technologies: ['SWIFT', 'CORE_DATA', 'USERNOTIFICATIONS', 'WIDGETKIT'],
    platforms: ['iOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'BETA',
    version: 'v0.9.1',
    features: [
      'BATTERY REPLACEMENT TRACKING',
      'USAGE ANALYTICS AND CHARTS',
      'REPLACEMENT REMINDERS',
      'BATTERY LIFE MONITORING',
      'WIDGET SUPPORT',
      'DATA EXPORT AND BACKUP'
    ],
    images: [
      '/images/projects/haba/icon.png',
      '/images/projects/haba/main.png'
    ],
    mobileImages: [
      '/images/projects/haba/main.png'
    ],
    tabletImages: []
  },
  {
    id: 'recipeez',
    title: 'RECIPEEZ.APP',
    category: 'Food & Cooking',
    description: 'Privacy-first recipe management app for iOS and Android. Create, organize, and import recipes with AI-powered URL extraction. Your recipes are yours.',
    longDescription: 'A modern, privacy-first recipe management application featuring anonymous authentication, AI-powered recipe import from URLs, cross-device sync, meal planning, and automatic shopping lists. Built with Kotlin Multiplatform and Compose for a beautiful Material3 experience on both platforms.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'FIREBASE', 'OPENAI', 'MATERIAL3', 'KTOR'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: 'https://apps.apple.com/us/app/recipeez/id6748916547',
    githubUrl: '#',
    status: 'PRODUCTION',
    version: 'v1.0.68',
    features: [
      'PRIVACY-FIRST ANONYMOUS AUTH',
      'AI-POWERED RECIPE IMPORT FROM URLs',
      'CROSS-DEVICE CLOUD SYNC',
      'MEAL PLANNING CALENDAR',
      'AUTOMATIC SHOPPING LISTS',
      'PHOTO GALLERIES WITH CLOUD STORAGE',
      'OFFLINE-FIRST DATA CACHING',
      'ADVANCED SEARCH AND FILTERING'
    ],
    images: [
      '/images/projects/recipeez/icon.png'
    ],
    mobileImages: [
      '/images/projects/recipeez/icon.png'
    ],
    tabletImages: []
  },
  {
    id: 'rockskipper',
    title: 'ROCKSKIPPER.APP',
    category: 'Sports & Recreation',
    description: 'AI-powered rock skipping counter that uses advanced audio detection to count skips in real-time. Features achievement system, personal records, and detailed analytics.',
    longDescription: 'An innovative Kotlin Multiplatform application that revolutionizes rock skipping by using sophisticated audio pattern recognition to detect and count skips automatically. The app analyzes sound patterns in real-time to identify the distinctive acoustic signature of rocks hitting water, complete with gamification elements and detailed performance tracking.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'AUDIO_PROCESSING', 'MACHINE_LEARNING', 'FFT_ANALYSIS'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: '#',
    githubUrl: 'https://github.com/markduenas/rockskipper',
    status: 'DEVELOPMENT',
    version: 'v1.0.0-alpha',
    features: [
      'REAL-TIME AUDIO SKIP DETECTION',
      'PERSONAL RECORDS TRACKING',
      'ACHIEVEMENT SYSTEM WITH 8 BADGES',
      'SESSION HISTORY AND ANALYTICS',
      'SPECTRAL AUDIO VISUALIZATION',
      'CROSS-PLATFORM KOTLIN MULTIPLATFORM',
      'ADAPTIVE SENSITIVITY CONTROLS',
      'ENVIRONMENTAL NOISE FILTERING'
    ],
    images: [
      '/images/projects/rockskipper/icon.png'
    ],
    mobileImages: [
      '/images/projects/rockskipper/icon.png'
    ],
    tabletImages: []
  },
  {
    id: 'practiceflow',
    title: 'PRACTICEFLOW.APP',
    category: 'Music & Education',
    description: 'Music practice tracking app for rock/pop musicians. Track sessions, manage songs, build streaks, and achieve your practice goals with gamification.',
    longDescription: 'A comprehensive music practice companion built with Kotlin Multiplatform for Android and iOS. Features practice session tracking with timer and mood capture, song library management with status progression, daily streak tracking with milestone celebrations, and detailed analytics. Designed for rock/pop musicians ages 16-45 who want to level up their skills.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'SQLDELIGHT', 'SUPABASE', 'KOIN', 'VOYAGER'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'DEVELOPMENT',
    version: 'v1.0.0-alpha',
    features: [
      'PRACTICE SESSION TIMER WITH PAUSE/RESUME',
      'SONG LIBRARY WITH STATUS PROGRESSION',
      'DAILY STREAK TRACKING AND MILESTONES',
      'SESSION MOOD CAPTURE AND NOTES',
      'DETAILED PRACTICE ANALYTICS',
      'OFFLINE-FIRST WITH CLOUD SYNC',
      'GAMIFICATION AND ACHIEVEMENTS',
      'FREEMIUM WITH PREMIUM FEATURES'
    ],
    images: [
      '/images/projects/practiceflow/icon.png'
    ],
    mobileImages: [
      '/images/projects/practiceflow/icon.png'
    ],
    tabletImages: []
  },
  {
    id: 'markdownviewer',
    title: 'MARKDOWN_FLOW.APP',
    category: 'Developer Tools',
    description: 'A cross-platform markdown viewer with integrated Mermaid diagram support. Render markdown files and URLs with full GFM support and beautiful diagram visualizations.',
    longDescription: 'Markdown Flow is a Kotlin Multiplatform application that renders markdown files with integrated Mermaid diagram support. Features full CommonMark and GitHub Flavored Markdown rendering, syntax highlighting for 15+ languages, and real-time Mermaid diagram visualization including flowcharts, sequence diagrams, class diagrams, and more. Open files locally or from URLs with recent file tracking.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'KTOR', 'MERMAID_JS', 'MATERIAL3', 'FIREBASE'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'BETA',
    version: 'v1.0',
    features: [
      'FULL GITHUB FLAVORED MARKDOWN',
      'MERMAID DIAGRAM RENDERING',
      'SYNTAX HIGHLIGHTING FOR 15+ LANGUAGES',
      'OPEN LOCAL FILES OR REMOTE URLS',
      'RECENT FILES AND URLS TRACKING',
      'LIGHT AND DARK THEME SUPPORT',
      'FULL-SCREEN DIAGRAM VIEWER',
      'CROSS-PLATFORM iOS AND ANDROID'
    ],
    images: [
      '/images/projects/markdownviewer/icon.png',
      '/images/projects/markdownviewer/screenshot.png'
    ],
    mobileImages: [
      '/images/projects/markdownviewer/screenshot.png'
    ],
    tabletImages: []
  },
  {
    id: 'windule',
    title: 'WINDULE.APP',
    category: 'Business & Productivity',
    description: 'Professional window cleaning business management app. Schedule appointments, optimize routes, manage customers, generate invoices, and collaborate with your team.',
    longDescription: 'Windule is the complete solution for window cleaning professionals built with Kotlin Multiplatform. Features smart scheduling with drag-and-drop calendar, automatic route optimization to save time and fuel, complete customer management with service history, professional invoicing with payment tracking, team collaboration with real-time syncing, and comprehensive business analytics. Perfect for solo window cleaners to established companies with unlimited users.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'FIREBASE', 'MAPS', 'ICLOUD_SYNC', 'IN_APP_PURCHASES'],
    platforms: ['Android', 'iOS', 'iPadOS'],
    appStoreUrl: 'https://windule.com',
    githubUrl: '#',
    status: 'PRODUCTION',
    version: 'v1.0',
    features: [
      'SMART SCHEDULING WITH DRAG-AND-DROP',
      'AUTOMATIC ROUTE OPTIMIZATION',
      'CUSTOMER MANAGEMENT AND HISTORY',
      'PROFESSIONAL INVOICE GENERATION',
      'TEAM COLLABORATION AND SYNCING',
      'BUSINESS ANALYTICS AND REPORTS',
      'ICLOUD SYNC ACROSS DEVICES',
      'FREEMIUM WITH PRO/TEAM/BUSINESS TIERS'
    ],
    images: [
      '/images/projects/windule/icon.png'
    ],
    mobileImages: [
      '/images/projects/windule/icon.png'
    ],
    tabletImages: []
  },
  {
    id: 'homesteader',
    title: 'HOMESTEADER.APP',
    category: 'Agriculture & Farming',
    description: 'Comprehensive livestock and farm animal management app for homesteaders. Track animals, breeding cycles, health records, production data, and more.',
    longDescription: 'Homesteader is a complete farm management solution built with Kotlin Multiplatform for Android and iOS. Track your entire herd with support for cattle, goats, sheep, pigs, poultry, horses, and more. Features breeding management with gestation tracking, health records with vaccination and treatment logs, production tracking for milk and eggs, event calendar with reminders, and detailed reports. Perfect for small farms and homesteads.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'SQLDELIGHT', 'FIREBASE', 'KOIN', 'VOYAGER'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: '#',
    githubUrl: '#',
    status: 'DEVELOPMENT',
    version: 'v1.0.0',
    features: [
      'MULTI-SPECIES ANIMAL TRACKING',
      'BREEDING AND GESTATION MANAGEMENT',
      'HEALTH RECORDS AND VACCINATIONS',
      'MILK AND EGG PRODUCTION TRACKING',
      'EVENT CALENDAR WITH REMINDERS',
      'DETAILED REPORTS AND ANALYTICS',
      'CSV IMPORT AND DATA BACKUP',
      'DARK AND LIGHT THEME SUPPORT'
    ],
    images: [
      '/images/projects/homesteader/icon.png',
      '/images/projects/homesteader/dashboard_light.png'
    ],
    mobileImages: [
      '/images/projects/homesteader/dashboard_light.png',
      '/images/projects/homesteader/animal_list_light.png',
      '/images/projects/homesteader/calendar_light.png'
    ],
    tabletImages: []
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}