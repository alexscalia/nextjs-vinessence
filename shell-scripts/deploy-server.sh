#!/bin/bash

# Wine Import Thailand - VPS Deployment Script
# Run this script on your VPS server

set -e  # Exit on any error

echo "🍷 Starting Wine Import Thailand deployment..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18.x
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2 globally
echo "📦 Installing PM2..."
npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
apt install -y nginx

# Install Git
echo "📦 Installing Git..."
apt install -y git

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /var/www/wineimportthailand_com
cd /var/www/wineimportthailand_com

# Clone the repository
echo "📥 Cloning repository..."
echo "Enter your GitHub username:"
read -r github_username
echo "Enter your GitHub Personal Access Token:"
read -rs github_token
git clone https://$github_username:$github_token@github.com/alexscalia/nextjs-wine-import-thailand.git .

# Install dependencies
echo "📦 Installing project dependencies..."
npm install

# Build the application
echo "🔨 Building Next.js application..."
npm run build

# Create PM2 ecosystem file
echo "⚙️ Creating PM2 configuration..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'wine-import-thailand',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/wineimportthailand_com',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start application with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Configure Nginx
echo "⚙️ Configuring Nginx..."
cat > /etc/nginx/sites-available/wineimportthailand << 'EOF'
server {
    listen 80;
    server_name wineimportthailand.com www.wineimportthailand.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/wineimportthailand /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# Install Certbot for SSL
echo "🔒 Installing Certbot for SSL..."
apt install -y certbot python3-certbot-nginx

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable

echo "✅ Deployment completed!"
echo ""
echo "🌐 Your website should now be accessible at:"
echo "   http://wineimportthailand.com"
echo ""
echo "🔒 To enable HTTPS, run:"
echo "   sudo certbot --nginx -d wineimportthailand.com -d www.wineimportthailand.com"
echo ""
echo "📊 To check application status:"
echo "   pm2 status"
echo "   pm2 logs wine-import-thailand"
echo ""
echo "🔄 To update the application:"
echo "   cd /var/www/wineimportthailand_com"
echo "   git pull"
echo "   npm run build"
echo "   pm2 restart wine-import-thailand" 