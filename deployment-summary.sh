#!/bin/bash

# Deployment Summary Script
# Quick overview of deployment options and commands

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m'

echo -e "${PURPLE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                  Portfolio Deployment                     ║"
echo "║                   Quick Reference                          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

echo -e "${GREEN}Available Deployment Platforms:${NC}"
echo
echo -e "${BLUE}1. Vercel (Recommended)${NC}"
echo "   ✓ Zero-config Next.js hosting"
echo "   ✓ Global CDN and automatic HTTPS"
echo "   ✓ Perfect for Next.js applications"
echo "   Command: ${YELLOW}./deploy.sh --platform vercel${NC}"
echo

echo -e "${BLUE}2. Netlify${NC}"
echo "   ✓ Static site hosting with forms"
echo "   ✓ Branch previews and rollbacks"
echo "   ✓ Great for static exports"
echo "   Command: ${YELLOW}./deploy.sh --platform netlify${NC}"
echo

echo -e "${BLUE}3. AWS S3 + CloudFront${NC}"
echo "   ✓ Enterprise-grade hosting"
echo "   ✓ Full infrastructure control"
echo "   ✓ Cost-effective at scale"
echo "   Command: ${YELLOW}./deploy.sh --platform aws --domain your-domain.com${NC}"
echo

echo -e "${BLUE}4. GitHub Pages${NC}"
echo "   ✓ Free hosting for GitHub repos"
echo "   ✓ Automatic deployment from repo"
echo "   ✓ Perfect for open source projects"
echo "   Command: ${YELLOW}./deploy.sh --platform github${NC}"
echo

echo -e "${GREEN}Quick Start Commands:${NC}"
echo
echo "# Basic deployment to Vercel:"
echo "${YELLOW}./deploy.sh --platform vercel${NC}"
echo
echo "# Production deployment with optimizations:"
echo "${YELLOW}./deploy.sh --platform vercel --optimize --verify${NC}"
echo
echo "# Deploy to custom domain:"
echo "${YELLOW}./deploy.sh --platform vercel --domain myportfolio.com${NC}"
echo
echo "# Staging deployment:"
echo "${YELLOW}./deploy.sh --platform vercel --environment staging${NC}"
echo

echo -e "${GREEN}Pre-Deployment Checklist:${NC}"
echo "□ Node.js 18+ installed"
echo "□ Dependencies installed (npm install)"
echo "□ Build successful (npm run build)"
echo "□ Platform CLI installed (if needed)"
echo "□ Environment variables configured"
echo "□ Domain configured (if using custom domain)"
echo

echo -e "${GREEN}File Structure:${NC}"
echo "├── deploy.sh              # Main deployment script"
echo "├── deployment.md          # Detailed documentation"
echo "├── vercel.json            # Vercel configuration"
echo "├── netlify.toml           # Netlify configuration"
echo "├── Dockerfile             # Docker configuration"
echo "├── docker-compose.yml     # Docker Compose setup"
echo "└── .github/workflows/     # CI/CD automation"
echo

echo -e "${GREEN}Need Help?${NC}"
echo "• Read the full documentation: ${YELLOW}cat deployment.md${NC}"
echo "• View script options: ${YELLOW}./deploy.sh --help${NC}"
echo "• Test without deploying: ${YELLOW}./deploy.sh --platform vercel --dry-run${NC}"
echo

echo -e "${PURPLE}Ready to deploy? Choose your platform and run the deployment script!${NC}"