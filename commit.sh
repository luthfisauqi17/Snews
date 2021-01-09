#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# blog
# tambahkan perubahan ke Git
git add -A
# Buat sebuah commit baru
msg="Project commit at `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
# Push atau puload ke Github
git push origin main