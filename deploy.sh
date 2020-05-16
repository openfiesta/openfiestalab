#!/usr/bin/env sh
set -e

npm run build
cd public

echo 'openfiesta.space' > CNAME

git init
git add -A
git commit -m 'deploy2'

git push -f git@github.com:openfiesta/openfiesta.space.git master

cd -