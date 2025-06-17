#!/bin/bash

# Complete Cache Clear Script for Next.js Wine Import Thailand

echo "🗑️  Clearing all caches..."

# Stop any running Next.js processes
echo "🛑 Stopping Next.js dev server..."
pkill -f "next dev" 2>/dev/null || true

# Clear Next.js build cache
echo "🗂️  Clearing Next.js build cache..."
rm -rf .next

# Clear npm cache
echo "📦 Clearing npm cache..."
npm cache clean --force

# Clear node_modules and reinstall (optional - uncomment if needed)
# echo "🔄 Reinstalling node_modules..."
# rm -rf node_modules
# npm install

# Clear Turbopack cache (Next.js 15)
echo "⚡ Clearing Turbopack cache..."
rm -rf .next/cache

# Clear any temp files
echo "🧹 Cleaning temporary files..."
find . -name "*.log" -type f -delete 2>/dev/null || true
find . -name ".DS_Store" -type f -delete 2>/dev/null || true

echo ""
echo "✅ All caches cleared!"
echo ""
echo "🚀 To restart development:"
echo "   npm run dev"
echo ""
echo "🌐 Browser cache clearing:"
echo "   Chrome/Safari: Cmd + Shift + R (hard refresh)"
echo "   Or open DevTools and 'Empty Cache and Hard Reload'" 