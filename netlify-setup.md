# Netlify Deployment Setup Guide

## 🚀 Modern Netlify Next.js Deployment (Recommended)

Netlify now supports Next.js 15 with zero configuration through their Next.js Runtime. This is the **easiest and most reliable** way to deploy your portfolio.

### Option 1: Git-Based Deployment (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub)
   - Select your portfolio repository

3. **Configure build settings** (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: (leave empty - Netlify handles this automatically)
   - **Node version**: 18+ (automatically detected)

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically handle the Next.js build and deployment

### Option 2: CLI Deployment

If you prefer CLI deployment:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize your site**:
   ```bash
   netlify init
   ```

4. **Deploy**:
   ```bash
   # For preview deployment
   netlify deploy
   
   # For production deployment
   netlify deploy --prod
   ```

### Option 3: Using our deployment script

```bash
# Updated script should work now
./deploy.sh --platform netlify
```

## ✅ What Netlify Automatically Handles

- **Next.js App Router**: Full support including Server Components
- **API Routes**: Automatically converted to Netlify Functions
- **Image Optimization**: Uses Netlify Image CDN
- **ISR (Incremental Static Regeneration)**: Fully supported
- **Server-Side Rendering**: Handled by Netlify Edge Functions
- **Middleware**: Automatically deployed as Edge Functions

## 🛠️ Configuration Files

Your project already includes optimized configurations:

### `netlify.toml` (already configured)
```toml
[build]
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

### `next.config.ts` (already optimal)
- Clean configuration compatible with Netlify
- No static export needed

## 🔧 Troubleshooting

### If you encounter issues:

1. **Check Node version**:
   ```bash
   node --version  # Should be 18+
   ```

2. **Clear build cache**:
   ```bash
   rm -rf .next
   npm run build
   ```

3. **Verify dependencies**:
   ```bash
   npm install
   npm run build
   ```

### Common Issues and Solutions:

**Issue**: "Build failed" error
**Solution**: Ensure all dependencies are installed and Next.js version is 13.5+

**Issue**: Images not loading
**Solution**: Verify all images are in the `public/` directory

**Issue**: API routes not working
**Solution**: Netlify automatically converts these - no action needed

## 🌐 Domain Setup

After successful deployment:

1. **Custom domain**: Go to Netlify Dashboard → Domain management
2. **HTTPS**: Automatically enabled
3. **CDN**: Global distribution included

## 📊 Performance Features

Netlify automatically provides:
- **Global CDN**: Fast worldwide delivery
- **Image CDN**: Automatic optimization and WebP conversion
- **Edge Functions**: Server-side rendering at the edge
- **Fine-grained caching**: Optimized caching strategy

## 🎯 Recommended Approach

For the smoothest experience:

1. **Use Git-based deployment** (Option 1)
2. **Let Netlify auto-detect** your build settings
3. **Keep the default Next.js configuration**
4. **Use the included `netlify.toml`** for any custom settings

This approach leverages Netlify's latest Next.js Runtime which provides the best performance and compatibility with Next.js 15 features.