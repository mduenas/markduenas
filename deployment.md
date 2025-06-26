# Portfolio Deployment Guide

This document provides a comprehensive guide for deploying the Mark Duenas Portfolio website across multiple hosting platforms.

## 🚀 Overview

The portfolio is a Next.js 15.3.4 application with the following characteristics:
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with custom retro theme
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization
- **Build Type**: Static export compatible
- **Node Version**: 18+ required

## 📋 Pre-Deployment Checklist

### Environment Requirements
- [ ] Node.js 18+ installed
- [ ] npm or yarn package manager
- [ ] Git repository access
- [ ] Domain name (optional)
- [ ] Hosting platform account

### Code Preparation
- [ ] All tests passing: `npm run test` (if tests exist)
- [ ] Build successful: `npm run build`
- [ ] No TypeScript errors
- [ ] All images optimized and accessible
- [ ] Environment variables configured

## 🏗️ Build Process

### Local Build
```bash
# Install dependencies
npm install

# Run development server (optional verification)
npm run dev

# Create production build
npm run build

# Test production build locally
npm start
```

### Build Output Structure
```
.next/
├── static/          # Static assets
├── server/          # Server-side code
└── standalone/      # Self-contained deployment files
out/                 # Static export (if configured)
public/              # Public assets
├── favicon.ico
└── images/          # Project screenshots and assets
```

## 🌐 Deployment Options

### 1. Vercel (Recommended - Zero Config)

**Why Vercel?**
- Native Next.js support (created by Vercel)
- Automatic deployments from Git
- Global CDN
- Automatic HTTPS
- Built-in analytics
- Free tier available

**Deployment Steps:**
1. Connect GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration
4. Custom domain setup (optional)

**Build Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Netlify (Static Export)

**Configuration Required:**
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18+

### 3. AWS S3 + CloudFront

**Requirements:**
- AWS Account with S3 and CloudFront access
- AWS CLI configured
- Static export configuration

**Benefits:**
- Full control over infrastructure
- Global CDN with CloudFront
- Cost-effective for high traffic
- Custom SSL certificates

### 4. GitHub Pages

**Requirements:**
- GitHub repository
- Static export configuration
- GitHub Actions workflow

**Limitations:**
- Static sites only
- Custom domains require DNS configuration

### 5. DigitalOcean App Platform

**Benefits:**
- Managed infrastructure
- Auto-scaling
- Built-in monitoring
- Competitive pricing

## 🔧 Deployment Script Features

The `deploy.sh` script provides automated deployment with the following features:

### Platform Detection
- Automatically detects available deployment platforms
- Provides platform-specific deployment commands
- Validates prerequisites for each platform

### Build Optimization
- Cleans previous builds
- Optimizes images
- Minifies assets
- Generates static exports when needed

### Environment Management
- Handles environment variables
- Manages different configs for staging/production
- Validates required settings

### Verification Steps
- Pre-deployment testing
- Build verification
- Post-deployment health checks
- Performance auditing

## 🚀 Quick Deployment Commands

### Using the Deployment Script
```bash
# Make script executable
chmod +x deploy.sh

# Deploy to Vercel (recommended)
./deploy.sh --platform vercel

# Deploy to Netlify (static)
./deploy.sh --platform netlify

# Deploy to AWS S3
./deploy.sh --platform aws

# Deploy with custom domain
./deploy.sh --platform vercel --domain mydomain.com

# Staging deployment
./deploy.sh --platform vercel --environment staging

# Full deployment with all optimizations
./deploy.sh --platform vercel --optimize --verify
```

### Manual Platform-Specific Commands

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
npm run build:static
netlify deploy --prod --dir=out
```

#### AWS S3
```bash
npm run build:static
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 🔒 Security Considerations

### HTTPS Configuration
- All platforms provide automatic HTTPS
- Custom domains require SSL certificate setup
- Implement security headers via platform configs

### Environment Variables
- Never commit sensitive data to repository
- Use platform-specific environment variable management
- Validate all required variables before deployment

### Content Security Policy
```javascript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

## 📊 Performance Optimization

### Image Optimization
- All images in WebP format when possible
- Responsive image sizes
- Lazy loading implemented
- CDN delivery

### Bundle Optimization
- Code splitting enabled
- Unused code elimination
- Compression enabled
- Static asset caching

### Monitoring
- Core Web Vitals tracking
- Error monitoring setup
- Performance budgets
- Uptime monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: ./deploy.sh --platform vercel --auto
```

### Deployment Stages
1. **Code Checkout**: Pull latest code from repository
2. **Dependency Installation**: Install all required packages
3. **Build Process**: Create optimized production build
4. **Testing**: Run automated tests (if configured)
5. **Deployment**: Deploy to target platform
6. **Verification**: Confirm successful deployment

## 🛠️ Troubleshooting

### Common Issues

#### Build Failures
- **Node Version**: Ensure Node.js 18+ is installed
- **Memory Issues**: Increase Node.js memory limit: `NODE_OPTIONS="--max-old-space-size=4096"`
- **TypeScript Errors**: Run `npm run type-check` to identify issues

#### Image Loading Issues
- Verify all image paths are correct
- Check image file sizes and formats
- Ensure images are in `public/` directory

#### Styling Issues
- Confirm Tailwind CSS is properly configured
- Verify custom CSS imports
- Check for CSS conflicts

#### Performance Issues
- Enable compression on hosting platform
- Optimize images before deployment
- Review bundle size with `npm run analyze` (if configured)

### Platform-Specific Issues

#### Vercel
- Build timeouts: Check build logs for memory issues
- Function limits: Ensure no serverless functions exceed limits
- Domain configuration: Verify DNS settings

#### Netlify
- Form handling: Configure Netlify forms if contact form used
- Redirects: Set up proper redirect rules
- Build plugins: Configure necessary build plugins

#### AWS
- Permissions: Ensure proper IAM roles for S3 and CloudFront
- CORS: Configure CORS policies for assets
- SSL: Set up SSL certificates in Certificate Manager

## 📈 Post-Deployment

### Verification Checklist
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Contact form functions (if applicable)
- [ ] Mobile responsiveness verified
- [ ] Performance scores acceptable
- [ ] SEO metadata present

### Monitoring Setup
- [ ] Analytics configured (Google Analytics, etc.)
- [ ] Error tracking enabled
- [ ] Uptime monitoring active
- [ ] Performance monitoring in place

### Domain Configuration
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] Redirects configured (www to non-www, etc.)
- [ ] Email forwarding set up (if needed)

## 🔧 Maintenance

### Regular Tasks
- Monitor performance metrics
- Update dependencies monthly
- Review and optimize images
- Check for broken links
- Update content as needed

### Backup Strategy
- Git repository serves as code backup
- Export deployment configurations
- Document custom settings
- Regular dependency audits

## 📞 Support and Resources

### Documentation Links
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS S3 Static Hosting](https://docs.aws.amazon.com/s3/latest/userguide/WebsiteHosting.html)

### Emergency Contacts
- Hosting platform support
- Domain registrar support
- DNS provider support

---

*This deployment guide ensures a smooth, reliable deployment process for the Mark Duenas Portfolio across multiple hosting platforms with comprehensive monitoring and maintenance procedures.*