#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git checkout -B main
git add -A
git commit -m 'deploy'
git push

cd -

echo "DEPLOY!"