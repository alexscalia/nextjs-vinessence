#!/bin/bash

# Initial Server Setup for Ubuntu 20.04
# Run this script first on a fresh VPS

set -e  # Exit on any error

echo "🔧 Starting initial server configuration..."

# Update system packages
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install essential packages
echo "📦 Installing essential packages..."
apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Configure timezone
echo "🕐 Setting timezone..."
timedatectl set-timezone UTC

# Create a non-root user (optional but recommended)
echo "👤 Do you want to create a non-root user? (y/n)"
read -r create_user

if [[ $create_user == "y" || $create_user == "Y" ]]; then
    echo "Enter username:"
    read -r username
    
    # Create user
    adduser --gecos "" $username
    
    # Add user to sudo group
    usermod -aG sudo $username
    
    # Create .ssh directory for the new user
    mkdir -p /home/$username/.ssh
    
    # Copy root's authorized_keys to new user (if exists)
    if [ -f /root/.ssh/authorized_keys ]; then
        cp /root/.ssh/authorized_keys /home/$username/.ssh/
        chown -R $username:$username /home/$username/.ssh
        chmod 700 /home/$username/.ssh
        chmod 600 /home/$username/.ssh/authorized_keys
    fi
    
    echo "✅ User $username created successfully"
fi

# Configure SSH (basic security)
echo "🔒 Configuring SSH security..."
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup

# Basic SSH hardening
sed -i 's/#PermitRootLogin yes/PermitRootLogin yes/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config

# Restart SSH service
systemctl restart sshd

# Configure basic firewall
echo "🔥 Setting up basic firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable

# Install fail2ban for additional security
echo "🛡️ Installing fail2ban..."
apt install -y fail2ban

# Configure fail2ban
cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3
EOF

systemctl enable fail2ban
systemctl start fail2ban

# Set up automatic security updates
echo "🔄 Configuring automatic security updates..."
apt install -y unattended-upgrades
echo 'Unattended-Upgrade::Automatic-Reboot "false";' >> /etc/apt/apt.conf.d/50unattended-upgrades

# Create swap file (if not exists and server has less than 2GB RAM)
echo "💾 Checking swap configuration..."
if ! swapon --show | grep -q "/swapfile"; then
    MEMORY=$(free -m | awk 'NR==2{printf "%.0f", $2}')
    if [ $MEMORY -lt 2048 ]; then
        echo "Creating 1GB swap file..."
        fallocate -l 1G /swapfile
        chmod 600 /swapfile
        mkswap /swapfile
        swapon /swapfile
        echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
    fi
fi

# Install Docker (optional)
echo "🐳 Do you want to install Docker? (y/n)"
read -r install_docker

if [[ $install_docker == "y" || $install_docker == "Y" ]]; then
    echo "Installing Docker..."
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
    apt update
    apt install -y docker-ce docker-ce-cli containerd.io
    systemctl enable docker
    systemctl start docker
    
    # Install Docker Compose
    curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    
    echo "✅ Docker installed successfully"
fi

# System information
echo ""
echo "📊 System Information:"
echo "OS: $(lsb_release -d | cut -f2)"
echo "Kernel: $(uname -r)"
echo "Memory: $(free -h | awk 'NR==2{printf "%s/%s (%.2f%%)", $3,$2,$3*100/$2 }')"
echo "Disk: $(df -h / | awk 'NR==2{printf "%s/%s (%s)", $3,$2,$5}')"
echo "CPU: $(nproc) cores"

echo ""
echo "✅ Initial server setup completed!"
echo ""
echo "🔒 Security measures applied:"
echo "   - SSH key authentication enabled"
echo "   - Password authentication disabled"
echo "   - UFW firewall configured"
echo "   - Fail2ban installed"
echo "   - Automatic security updates enabled"
echo ""
echo "🚀 Your server is now ready for application deployment!"
echo ""
echo "Next steps:"
echo "1. Reboot the server: sudo reboot"
echo "2. Reconnect via SSH"
echo "3. Run the deployment script" 