#!/usr/bin/env sh
set -e

sudo npm run docs:build
cd public

# echo 'www.example.com' > CNAME

sudo git init
sudo git add -A
sudo git commit -m 'deploy1'

sudo git push -f git@github.com:openfiesta/openfiesta.github.io.git master

cd -