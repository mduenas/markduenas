#!/bin/bash

# Static build script for Netlify fallback

echo "Building for static export..."

# Backup original config
if [ -f "next.config.ts" ]; then
    cp next.config.ts next.config.ts.backup
fi

# Use static config
cp next.config.static.js next.config.js

# Build with static export
npm run build

# Restore original config
rm -f next.config.js
if [ -f "next.config.ts.backup" ]; then
    mv next.config.ts.backup next.config.ts
fi

echo "Static build completed. Output in 'out' directory."