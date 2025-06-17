#!/bin/bash

# Quick Update Script - For minor changes (content, styles, etc.)
# Skips dependency installation and does a faster update

set -e

echo "⚡ Quick update from git..."

# Get current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Quick build (faster than full build)
echo "🔨 Quick build..."
npm run build

# Restart PM2 if available
if command -v pm2 &> /dev/null && pm2 list | grep -q "wine-import-thailand"; then
    echo "🔄 Restarting app..."
    pm2 restart wine-import-thailand
    echo "✅ Quick update complete!"
else
    echo "✅ Build complete - manual restart may be needed"
fi 