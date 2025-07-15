# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Next.js 15 portfolio website for Mark Duenas showcasing 30+ years of mobile development experience. Built with TypeScript, Tailwind CSS v4, and Framer Motion for animations.

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm install              # Install dependencies

# Building
npm run build            # Standard Next.js build
npm run build:static     # Static export for Netlify deployment (current deployment method)

# Code Quality
npm run lint             # Run ESLint
```

## Architecture & Key Files

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`src/app/`)
- **Components**: Modular React components in `src/components/`
- **Project Data**: Centralized in `src/lib/projects.ts` with TypeScript interfaces
- **Styling**: Tailwind CSS v4 with extensive custom configuration
- **Backend**: Supabase for contact form functionality

### Key Components
- `Navigation.tsx` - Site navigation
- `HeroSection.tsx` - Landing section
- `ProjectsSection.tsx` - Mobile app portfolio showcase
- `ContactSection.tsx` - Contact form with Supabase integration

### Static Assets
- Project images organized by app: `public/images/projects/{app-id}/`
- Separate mobile/tablet screenshot directories
- App icons and feature images

## Deployment Strategy

**Current Method**: Static export via `npm run build:static`
- Uses `build-static.sh` script that temporarily replaces config
- Outputs to `out/` directory for Netlify static hosting
- Falls back from SSR due to Netlify runtime limitations

**Configuration Files**:
- `netlify.toml` - Production deployment config
- `next.config.static.js` - Static export configuration
- Multiple fallback configs for different deployment scenarios

## Project Data Management

Projects are defined in `src/lib/projects.ts` with full TypeScript interfaces:
- Project metadata, descriptions, technologies
- Image paths for different device types
- App Store links and version information
- Status tracking (PRODUCTION, BETA, etc.)

## Environment Setup

Required environment variables (for contact form):
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
CONTACT_EMAIL=your_email@example.com
```

## Styling System

Custom Tailwind configuration with:
- Primary/secondary/accent color palettes
- Custom fonts (Inter, JetBrains Mono)
- Animation keyframes (fade-in, slide-up, float)
- Responsive design utilities

## Code Conventions

- TypeScript strict mode enabled
- ESLint with Next.js recommended rules
- Path alias: `@/*` maps to `./src/*`
- Component-based architecture
- Supabase client initialization in `src/lib/supabase.ts`

## Mobile App Portfolio

Features 4 main iOS applications:
1. **CAPITAL_TRACKER.APP** - Real estate investment management
2. **PIG_DICE.GAME** - Classic dice game with modern UI
3. **PI_GENERATOR.EXE** - Mathematical Pi calculation utility
4. **HABA_TRACKER.SYS** - Hearing aid battery tracking (Beta)

Each project includes multiple device screenshots and comprehensive metadata.

## Testing

No testing framework currently configured - opportunity for improvement with Jest/React Testing Library.