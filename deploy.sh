#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包生成的文件夹路径
docs_path=docs/.vuepress/dist

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $docs_path
git init
git remote add origin https://github.com/neoszion/neoszion.github.io.git
git pull
git add -A
git commit -m "auto commit"
git push -f https://github.com/neoszion/neoszion.github.io.git HEAD:master

cd -