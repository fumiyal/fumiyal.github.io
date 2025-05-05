
# push to github
# https://github.com/fumiyal/fumiyal.github.io.git

# cd ../dist
# git init
# git add ../dist
git add .
git commit -m "No message."
git branch -M main
git remote add origin https://github.com/fumiyal/fumiyal.github.io.git
git push -u origin main
# cd -

# remote bundle.js.map and .gitignore from the repo
# git rm -r bundle.js.map
# git rm -r .gitignore