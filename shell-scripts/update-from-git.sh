#!/bin/bash

# Wine Import Thailand - Safe Git Update Script (PRODUCTION READY)
# Fully safe PM2-aware deployment

set -e  # Exit on any error

echo "🔄 Starting Wine Import Thailand update from git..."

# Get current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo "📁 Working in directory: $PROJECT_DIR"
cd "$PROJECT_DIR"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Stash any local changes (if any)
echo "💾 Stashing any local changes..."
git stash push -m "Auto-stash before update $(date)"

# Pull latest changes from main branch
echo "📥 Pulling latest changes from git..."
git pull origin main

# Check if package.json changed
if git diff --name-only HEAD@{1} HEAD | grep -q "package.json\|package-lock.json"; then
    echo "📦 Package files changed, updating dependencies..."
    npm ci
else
    echo "📦 No dependency changes detected, skipping npm install"
fi

# Clear all caches for fresh build
echo "🗑️  Clearing all caches..."
rm -rf .next
echo "📦 Clearing npm cache..."
npm cache clean --force
echo "⚡ Clearing Turbopack cache..."
rm -rf .next/cache
echo "🧹 Cleaning temporary files..."
find . -name "*.log" -type f -delete 2>/dev/null || true
find . -name ".DS_Store" -type f -delete 2>/dev/null || true

# Build the application
echo "🔨 Building Next.js application..."
npm run build

# Safe PM2 handling to avoid port conflicts

if command -v pm2 &> /dev/null; then
    if pm2 list | grep -q "wineimportthailand"; then
        echo "🔄 Stopping existing PM2 process..."
        pm2 stop wineimportthailand
        pm2 delete wineimportthailand
    fi

    echo "🚀 Starting PM2 process from clean state..."
    pm2 start npm --name wineimportthailand -- start
    pm2 save

    echo "📊 PM2 Status:"
    pm2 status wineimportthailand
else
    echo "⚠️  PM2 not found. Skipping PM2 restart."
fi

# Optional: Test if the application is responding
echo "🏥 Testing application health..."
sleep 3
if curl -f -s http://localhost:3000 > /dev/null; then
    echo "✅ Application is responding on port 3000"
else
    echo "⚠️  Application may not be responding on port 3000"
fi

echo ""
echo "✅ Update completed successfully!"
echo ""
echo "📋 What was updated:"
echo "   - Git: $(git log -1 --pretty=format:'%h - %s (%cr)')"
echo "   - Build: Fresh Next.js build completed"
echo "   - PM2: Application restarted"
echo ""
echo "🌐 Your website should now be running the latest version"
echo ""
echo "📊 To check logs:"
echo "   pm2 logs wineimportthailand"
echo ""
echo "🔄 To check status:"
echo "   pm2 status"