#!/bin/bash

# Portfolio Deployment Script
# Automated deployment for Mark Duenas Portfolio
# Supports multiple platforms: Vercel, Netlify, AWS S3, GitHub Pages

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default values
PLATFORM=""
ENVIRONMENT="production"
DOMAIN=""
OPTIMIZE=false
VERIFY=false
AUTO=false
DRY_RUN=false
VERBOSE=false

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

# Help function
show_help() {
    cat << EOF
Portfolio Deployment Script

USAGE:
    ./deploy.sh [OPTIONS]

OPTIONS:
    -p, --platform PLATFORM    Target platform (vercel, netlify, aws, github)
    -e, --environment ENV       Environment (production, staging) [default: production]
    -d, --domain DOMAIN         Custom domain name
    -o, --optimize              Enable build optimizations
    -v, --verify                Run post-deployment verification
    -a, --auto                  Auto-confirm prompts (for CI/CD)
    --dry-run                   Show what would be done without executing
    --verbose                   Enable verbose output
    -h, --help                  Show this help message

EXAMPLES:
    ./deploy.sh --platform vercel
    ./deploy.sh --platform netlify --optimize --verify
    ./deploy.sh --platform aws --domain myportfolio.com
    ./deploy.sh --platform vercel --environment staging --auto

SUPPORTED PLATFORMS:
    vercel      - Vercel hosting (recommended for Next.js)
    netlify     - Netlify static hosting
    aws         - AWS S3 + CloudFront
    github      - GitHub Pages

EOF
}

# Parse command line arguments
parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -p|--platform)
                PLATFORM="$2"
                shift 2
                ;;
            -e|--environment)
                ENVIRONMENT="$2"
                shift 2
                ;;
            -d|--domain)
                DOMAIN="$2"
                shift 2
                ;;
            -o|--optimize)
                OPTIMIZE=true
                shift
                ;;
            -v|--verify)
                VERIFY=true
                shift
                ;;
            -a|--auto)
                AUTO=true
                shift
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --verbose)
                VERBOSE=true
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check Node.js
    if ! command_exists node; then
        error "Node.js is not installed. Please install Node.js 18+ and try again."
        exit 1
    fi
    
    local node_version=$(node --version | sed 's/v//')
    local major_version=$(echo $node_version | cut -d. -f1)
    if [ "$major_version" -lt 18 ]; then
        error "Node.js version $node_version detected. Please upgrade to Node.js 18+."
        exit 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        error "npm is not installed. Please install npm and try again."
        exit 1
    fi
    
    # Check if we're in a valid Next.js project
    if [ ! -f "package.json" ]; then
        error "package.json not found. Are you in the project root directory?"
        exit 1
    fi
    
    if ! grep -q "next" package.json; then
        error "This doesn't appear to be a Next.js project."
        exit 1
    fi
    
    success "Prerequisites check passed"
}

# Platform-specific prerequisite checks
check_platform_prerequisites() {
    case $PLATFORM in
        vercel)
            if ! command_exists vercel; then
                warning "Vercel CLI not found. Installing..."
                if [ "$DRY_RUN" = false ]; then
                    npm install -g vercel
                fi
            fi
            ;;
        netlify)
            if ! command_exists netlify; then
                warning "Netlify CLI not found. Installing..."
                if [ "$DRY_RUN" = false ]; then
                    npm install -g netlify-cli
                fi
            fi
            ;;
        aws)
            if ! command_exists aws; then
                error "AWS CLI not found. Please install AWS CLI and configure credentials."
                exit 1
            fi
            # Check AWS credentials
            if [ "$DRY_RUN" = false ]; then
                if ! aws sts get-caller-identity >/dev/null 2>&1; then
                    error "AWS credentials not configured. Run 'aws configure' first."
                    exit 1
                fi
            fi
            ;;
        github)
            if ! command_exists git; then
                error "Git is not installed. Please install Git and try again."
                exit 1
            fi
            ;;
    esac
}

# Clean previous builds
clean_build() {
    log "Cleaning previous builds..."
    
    if [ "$DRY_RUN" = false ]; then
        # Remove Next.js build directories
        rm -rf .next
        rm -rf out
        
        # Remove node_modules if it exists and we're optimizing
        if [ "$OPTIMIZE" = true ]; then
            rm -rf node_modules
        fi
    fi
    
    success "Build cleanup completed"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    if [ "$DRY_RUN" = false ]; then
        if [ "$OPTIMIZE" = true ]; then
            npm ci --production=false
        else
            npm install
        fi
    fi
    
    success "Dependencies installed"
}

# Run pre-deployment tests
run_tests() {
    log "Running pre-deployment tests..."
    
    # Check if test script exists
    if grep -q '"test"' package.json; then
        if [ "$DRY_RUN" = false ]; then
            npm run test -- --passWithNoTests
        fi
    else
        info "No test script found, skipping tests"
    fi
    
    # Type checking (if TypeScript)
    if [ -f "tsconfig.json" ]; then
        log "Running TypeScript type check..."
        if [ "$DRY_RUN" = false ]; then
            npx tsc --noEmit
        fi
    fi
    
    success "Pre-deployment tests passed"
}

# Build the project
build_project() {
    log "Building project for $PLATFORM..."
    
    case $PLATFORM in
        vercel)
            if [ "$DRY_RUN" = false ]; then
                npm run build
            fi
            ;;
        netlify|aws|github)
            # These platforms need static export
            log "Creating static export build..."
            if [ "$DRY_RUN" = false ]; then
                # Create temporary next.config.js for static export
                create_static_config
                npm run build
                restore_original_config
            fi
            ;;
    esac
    
    success "Build completed successfully"
}

# Create static export configuration
create_static_config() {
    # Backup original config if it exists
    if [ -f "next.config.js" ]; then
        cp next.config.js next.config.js.backup
    fi
    
    # Create static export config
    cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    EXPORT_MODE: 'true'
  }
}

module.exports = nextConfig
EOF
}

# Restore original configuration
restore_original_config() {
    if [ -f "next.config.js.backup" ]; then
        mv next.config.js.backup next.config.js
    else
        rm -f next.config.js
    fi
}

# Deploy to Vercel
deploy_vercel() {
    log "Deploying to Vercel..."
    
    local deploy_cmd="vercel"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        deploy_cmd="$deploy_cmd --prod"
    fi
    
    if [ "$AUTO" = true ]; then
        deploy_cmd="$deploy_cmd --yes"
    fi
    
    if [ "$DOMAIN" != "" ]; then
        deploy_cmd="$deploy_cmd --name $DOMAIN"
    fi
    
    if [ "$DRY_RUN" = false ]; then
        eval $deploy_cmd
    else
        info "Would run: $deploy_cmd"
    fi
    
    success "Vercel deployment completed"
}

# Deploy to Netlify
deploy_netlify() {
    log "Deploying to Netlify..."
    
    local deploy_cmd="netlify deploy --dir=out"
    
    if [ "$ENVIRONMENT" = "production" ]; then
        deploy_cmd="$deploy_cmd --prod"
    fi
    
    if [ "$DRY_RUN" = false ]; then
        eval $deploy_cmd
    else
        info "Would run: $deploy_cmd"
    fi
    
    success "Netlify deployment completed"
}

# Deploy to AWS S3
deploy_aws() {
    log "Deploying to AWS S3..."
    
    if [ "$DOMAIN" = "" ]; then
        error "AWS deployment requires a domain/bucket name. Use --domain option."
        exit 1
    fi
    
    local bucket_name="$DOMAIN"
    local sync_cmd="aws s3 sync out/ s3://$bucket_name --delete"
    
    if [ "$DRY_RUN" = false ]; then
        eval $sync_cmd
        
        # Invalidate CloudFront cache if distribution exists
        local dist_id=$(aws cloudfront list-distributions --query "DistributionList.Items[?Aliases.Items && contains(Aliases.Items, '$DOMAIN')].Id" --output text)
        if [ "$dist_id" != "" ]; then
            log "Invalidating CloudFront cache..."
            aws cloudfront create-invalidation --distribution-id $dist_id --paths "/*"
        fi
    else
        info "Would run: $sync_cmd"
    fi
    
    success "AWS S3 deployment completed"
}

# Deploy to GitHub Pages
deploy_github() {
    log "Deploying to GitHub Pages..."
    
    if [ "$DRY_RUN" = false ]; then
        # Create or switch to gh-pages branch
        git checkout -B gh-pages
        
        # Copy build output to root
        cp -r out/* .
        
        # Commit and push
        git add .
        git commit -m "Deploy to GitHub Pages - $(date)"
        git push origin gh-pages --force
        
        # Switch back to main branch
        git checkout main
    else
        info "Would deploy to GitHub Pages via gh-pages branch"
    fi
    
    success "GitHub Pages deployment completed"
}

# Main deployment function
deploy() {
    case $PLATFORM in
        vercel)
            deploy_vercel
            ;;
        netlify)
            deploy_netlify
            ;;
        aws)
            deploy_aws
            ;;
        github)
            deploy_github
            ;;
        *)
            error "Unsupported platform: $PLATFORM"
            exit 1
            ;;
    esac
}

# Post-deployment verification
verify_deployment() {
    if [ "$VERIFY" = false ]; then
        return
    fi
    
    log "Running post-deployment verification..."
    
    local url=""
    case $PLATFORM in
        vercel)
            url="https://${DOMAIN:-$(basename $(pwd))}.vercel.app"
            ;;
        netlify)
            url="https://${DOMAIN:-$(basename $(pwd))}.netlify.app"
            ;;
        aws|github)
            if [ "$DOMAIN" != "" ]; then
                url="https://$DOMAIN"
            fi
            ;;
    esac
    
    if [ "$url" != "" ] && [ "$DRY_RUN" = false ]; then
        info "Checking deployment at: $url"
        
        # Basic HTTP check
        if command_exists curl; then
            local status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
            if [ "$status_code" = "200" ]; then
                success "Website is accessible (HTTP $status_code)"
            else
                warning "Website returned HTTP $status_code"
            fi
        fi
        
        # Performance check with Lighthouse (if available)
        if command_exists lighthouse; then
            log "Running Lighthouse performance audit..."
            lighthouse "$url" --only-categories=performance --output=json --output-path=lighthouse-report.json --quiet || true
        fi
    fi
    
    success "Post-deployment verification completed"
}

# Cleanup function
cleanup() {
    log "Cleaning up temporary files..."
    
    # Remove any temporary configs
    if [ -f "next.config.js.backup" ]; then
        restore_original_config
    fi
    
    # Remove lighthouse report if it exists
    rm -f lighthouse-report.json
}

# Main execution flow
main() {
    # Parse arguments
    parse_args "$@"
    
    # Show banner
    echo -e "${PURPLE}"
    echo "╔══════════════════════════════════════════╗"
    echo "║          Portfolio Deployment           ║"
    echo "║         Mark Duenas Portfolio            ║"
    echo "╚══════════════════════════════════════════╝"
    echo -e "${NC}"
    
    # Validate platform
    if [ "$PLATFORM" = "" ]; then
        error "Platform is required. Use --platform option."
        show_help
        exit 1
    fi
    
    # Show configuration
    info "Configuration:"
    info "  Platform: $PLATFORM"
    info "  Environment: $ENVIRONMENT"
    info "  Domain: ${DOMAIN:-'auto-generated'}"
    info "  Optimize: $OPTIMIZE"
    info "  Verify: $VERIFY"
    info "  Dry Run: $DRY_RUN"
    
    # Confirmation prompt
    if [ "$AUTO" = false ] && [ "$DRY_RUN" = false ]; then
        echo
        read -p "Continue with deployment? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            info "Deployment cancelled"
            exit 0
        fi
    fi
    
    # Set trap for cleanup
    trap cleanup EXIT
    
    # Execute deployment steps
    check_prerequisites
    check_platform_prerequisites
    clean_build
    install_dependencies
    run_tests
    build_project
    deploy
    verify_deployment
    
    success "🎉 Deployment completed successfully!"
    
    # Show deployment URL
    case $PLATFORM in
        vercel)
            info "🌐 Your site is available at: https://${DOMAIN:-$(basename $(pwd))}.vercel.app"
            ;;
        netlify)
            info "🌐 Your site is available at: https://${DOMAIN:-$(basename $(pwd))}.netlify.app"
            ;;
        aws|github)
            if [ "$DOMAIN" != "" ]; then
                info "🌐 Your site is available at: https://$DOMAIN"
            fi
            ;;
    esac
    
    info "📖 Check deployment.md for detailed documentation"
}

# Script entry point
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi