# Mark Duenas - Mobile Developer Portfolio

A modern, responsive portfolio website showcasing 30+ years of mobile application development experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Professional Showcase**: Comprehensive portfolio of mobile applications
- **Interactive UI**: Smooth animations and engaging user experience
- **SEO Optimized**: Built-in SEO optimization and meta tags
- **Dark Mode Support**: Automatic dark/light mode switching
- **Contact Form**: Integrated contact form with Supabase backend
- **Performance Focused**: Optimized for Core Web Vitals

## Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Backend & Database
- **Supabase**: Backend-as-a-Service
- **PostgreSQL**: Database (via Supabase)

### Deployment
- **Netlify**: Hosting and deployment
- **Git**: Version control and CI/CD

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   CONTACT_EMAIL=your_email@example.com
   ```

3. **Supabase Setup** (Optional - for contact form)
   
   Create a new table in your Supabase project:
   ```sql
   CREATE TABLE contact_submissions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     subject TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── public/
│   └── images/
│       └── projects/          # Mobile app screenshots
│           ├── cap/           # Capital Investment Tracker
│           ├── pigs/          # Pig Dice Game
│           ├── pigen/         # Pi Generator
│           └── haba/          # Haba Tracker
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Navigation header
│   │   ├── HeroSection.tsx    # Hero/landing section
│   │   ├── AboutSection.tsx   # About and experience
│   │   ├── SkillsSection.tsx  # Skills and technologies
│   │   ├── ProjectsSection.tsx # Mobile app portfolio
│   │   └── ContactSection.tsx # Contact form
│   └── lib/
│       └── supabase.ts        # Supabase client and API
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## Featured Projects

The portfolio showcases four main mobile applications:

1. **Capital Investment Tracker** - Real estate investment management (iOS/iPadOS)
2. **Pig Dice Game** - Classic dice game with modern UI (iOS/iPadOS)
3. **Pi Generator** - Mathematical utility for calculating Pi (iOS/iPadOS)
4. **Haba Tracker** - Habit tracking and productivity app (iOS)

## Deployment

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment variables**: Add your Supabase credentials
4. **Deploy**: Netlify will automatically deploy on git pushes

## Contact

- **Email**: mark@duenasgames.com
- **LinkedIn**: [linkedin.com/in/markduenas](https://linkedin.com/in/markduenas)
- **GitHub**: [github.com/markduenas](https://github.com/markduenas)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
