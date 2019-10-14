#!/usr/bin/env sh
set -e

sudo npm run build
cd public

echo 'openfiesta.space' > CNAME

sudo git init
sudo git add -A
sudo git commit -m 'deploy2'

sudo git push -f git@github.com:openfiesta/openfiesta.space.git master

cd -