git reset $(git commit-tree HEAD^{tree} -m "repan")
git push --force git@github.com:glowinthedark/codepan.git master:master
