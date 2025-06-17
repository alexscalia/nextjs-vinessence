# Shell Scripts Directory

This directory contains utility shell scripts for the Wine Import Thailand project.

## 🛠️ Development Scripts

### `clear-cache.sh`
**Purpose**: Clear all Next.js caches for fresh development
**Usage**: `./shell-scripts/clear-cache.sh`
**What it does**:
- Stops Next.js dev server
- Clears `.next` build cache
- Clears npm cache
- Clears Turbopack cache
- Removes temporary files

### `create-responsive-images.sh`
**Purpose**: Generate multiple responsive sizes for hero images
**Usage**: `./shell-scripts/create-responsive-images.sh`
**What it does**:
- Creates 6 different sizes (640w, 750w, 828w, 1080w, 1200w, 1920w)
- Optimizes each size for performance
- Generates WebP format for modern browsers

### `optimize-images.sh`
**Purpose**: Batch optimize hero images to WebP format
**Usage**: `./shell-scripts/optimize-images.sh`
**What it does**:
- Converts JPG to optimized WebP
- Creates backup of originals
- Reduces file sizes by 60-80%
- Creates mobile/tablet/desktop versions

## 🚀 Deployment Scripts

### `deploy-server.sh`
**Purpose**: Complete deployment script for VPS server
**Usage**: Run on your VPS: `./shell-scripts/deploy-server.sh`
**What it does**:
- Updates system packages
- Installs Node.js, PM2, Nginx
- Clones repository from GitHub
- Builds and starts the application
- Configures reverse proxy
- Sets up SSL with Certbot
- Configures firewall

### `server-setup.sh`
**Purpose**: Initial server setup and configuration
**Usage**: Run on fresh VPS: `./shell-scripts/server-setup.sh`
**What it does**:
- Basic server hardening
- User setup and permissions
- Security configurations
- Dependency installation

## 🔄 Update Scripts

### `update-from-git.sh`
**Purpose**: Complete update from git with full rebuild
**Usage**: `./shell-scripts/update-from-git.sh`
**What it does**:
- Stashes local changes
- Pulls latest git changes
- Installs dependencies (if package.json changed)
- Clears cache and rebuilds
- Restarts PM2 application
- Tests application health

### `quick-update.sh`
**Purpose**: Fast update for minor changes (content, styles)
**Usage**: `./shell-scripts/quick-update.sh`
**What it does**:
- Pulls latest git changes
- Quick rebuild (no dependency check)
- Restarts PM2 application
- Faster than full update

## 📋 Usage Examples

```bash
# Development
./shell-scripts/clear-cache.sh                # Clear all caches for fresh development
./shell-scripts/optimize-images.sh            # Optimize images after adding new hero images

# Server Updates (run on production server)
./shell-scripts/update-from-git.sh            # Full update with dependency check
./shell-scripts/quick-update.sh               # Fast update for minor changes

# Initial Deployment
scp -r shell-scripts/ user@your-server:/var/www/wineimportthailand_com/
ssh user@your-server "cd /var/www/wineimportthailand_com && ./shell-scripts/deploy-server.sh"
```

## 🔧 Requirements

Most scripts require:
- **Git**: For pulling updates
- **Node.js & npm**: Already installed for Next.js development
- **PM2**: For process management on server
- **ImageMagick**: `brew install imagemagick` (for image processing)
- **WebP tools**: `brew install webp` (for WebP conversion)

## 📁 File Permissions

All scripts are executable. If you need to make them executable:
```bash
chmod +x shell-scripts/*.sh
```

## 🚀 Server Update Workflow

### For Major Updates (new features, dependencies):
```bash
ssh your-server
cd /var/www/wineimportthailand_com
./shell-scripts/update-from-git.sh
```

### For Minor Updates (content, styles, bug fixes):
```bash
ssh your-server
cd /var/www/wineimportthailand_com
./shell-scripts/quick-update.sh
```

## 📊 Monitoring After Updates

```bash
# Check application status
pm2 status wine-import-thailand

# View logs
pm2 logs wine-import-thailand

# Monitor in real-time
pm2 monit
``` 