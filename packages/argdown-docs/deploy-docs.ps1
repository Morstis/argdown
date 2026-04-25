# abort on errors
# set -e

# build
# npm run docs:buildall
& ./build-docs.ps1

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/argdown/argdown.git master:gh-pages

cd ../../../
