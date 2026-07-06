#!/bin/bash

set -e

echo "🚀 Starting deployment..."

cd ~/Portfolio

echo "📥 Pulling latest code..."
git fetch origin
git reset --hard origin/main

echo "🏗️ Building frontend..."
cd Portfolio-Frontend
npm install
npm run build

echo "📂 Deploying frontend..."
sudo rm -rf /var/www/portfolio/*
sudo cp -r dist/* /var/www/portfolio/

echo "📦 Restarting backend..."
cd ../Portfolio-Backend
npm install

pm2 restart portfolio-api

echo "🌐 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed!"