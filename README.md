# Wine Import Thailand

A modern Next.js website for wine import services in Thailand, featuring optimized performance, responsive design, and professional business presentation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Tech Stack

- **Framework**: Next.js 15.3.3 with Turbopack
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Montserrat
- **Image Optimization**: Next.js Image + WebP

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── public/images/       # Optimized hero images (WebP)
├── shell-scripts/      # Utility scripts (deployment)
├── assets/             # Original images backup (not served)
└── components/         # Reusable React components
```

## 🛠️ Available Scripts

Available utility scripts in the `shell-scripts/` directory:

```bash
# Development
./shell-scripts/clear-cache.sh           # Clear all Next.js caches

# Deployment  
./shell-scripts/deploy-server.sh         # Full VPS deployment
./shell-scripts/server-setup.sh          # Initial server setup
```

See [`shell-scripts/README.md`](./shell-scripts/README.md) for detailed documentation.

## 🖼️ Image Optimization

Hero images are automatically optimized by Next.js:
- **Format**: WebP (60-80% smaller than JPEG)
- **Responsive**: Multiple sizes for different devices automatically generated
- **Loading**: Priority loading with blur placeholders
- **Smart Serving**: Browser selects optimal size based on device and viewport

## 🚀 Deployment

### VPS Deployment
```bash
# Copy scripts to server
scp -r shell-scripts/ user@your-server:/var/www/wineimportthailand_com/

# Run deployment script on server
ssh user@your-server "cd /var/www/wineimportthailand_com && ./shell-scripts/deploy-server.sh"
```

### Vercel Deployment
This project is optimized for Vercel deployment with automatic builds and optimizations.

## 📋 Features

- ✅ Responsive hero sections with optimized images
- ✅ Professional service pages
- ✅ Contact forms and CTAs
- ✅ SEO optimized
- ✅ Fast loading performance
- ✅ Modern UI/UX design
