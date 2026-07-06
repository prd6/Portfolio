script: |
  cd ~/Portfolio

  git fetch origin
  git reset --hard origin/main

  cd Portfolio-Frontend
  npm install
  npm run build

  sudo rm -rf /var/www/portfolio/*
  sudo cp -r dist/* /var/www/portfolio/

  cd ../Portfolio-Backend
  npm install

  pm2 restart portfolio-api

  sudo systemctl reload nginx