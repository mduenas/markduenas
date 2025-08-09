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
    description: 'Modern recipe management app built with Kotlin Multiplatform. Create, organize, and share your favorite recipes with beautiful photo galleries and intuitive design.',
    longDescription: 'A comprehensive recipe management application featuring cross-platform compatibility, anonymous authentication for privacy, photo upload with Firebase storage, and a beautiful Material3 design. Built with Kotlin Multiplatform for Android and iOS.',
    technologies: ['KOTLIN_MULTIPLATFORM', 'COMPOSE_MULTIPLATFORM', 'FIREBASE', 'MATERIAL3', 'COIL'],
    platforms: ['Android', 'iOS'],
    appStoreUrl: '#',
    githubUrl: 'https://github.com/markduenas/recipes',
    status: 'DEVELOPMENT',
    version: 'v1.0.0-beta',
    features: [
      'CROSS-PLATFORM RECIPE MANAGEMENT',
      'ANONYMOUS AUTHENTICATION',
      'PHOTO UPLOAD AND GALLERIES',
      'FIREBASE CLOUD STORAGE',
      'MATERIAL3 DESIGN SYSTEM',
      'OFFLINE-FIRST DATA CACHING',
      'SEARCH AND FILTER RECIPES',
      'COMMUNITY RECIPE SHARING'
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
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}