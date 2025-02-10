#!/bin/bash

# 创建父文件夹 packages
mkdir -p packages

# 创建子文件夹
mkdir -p packages/package-fomantic-ui
mkdir -p packages/package-jquery
mkdir -p packages/package-dayjs
mkdir -p packages/package-js-cookie
mkdir -p packages/package-jquery-countdown
mkdir -p packages/package-echarts
mkdir -p packages/package-js-url
mkdir -p packages/package-countup

# 安装各个依赖包

# 安装 fomantic-ui
cd packages/package-fomantic-ui
npm init -y
npm install fomantic-ui@^2.9.2
cd ../../

# 安装 jquery
cd packages/package-jquery
npm init -y
npm install jquery@^3.7.0
cd ../../

# 安装 dayjs
cd packages/package-dayjs
npm init -y
npm install dayjs@^1.11.8
cd ../../

# 安装 js-cookie
cd packages/package-js-cookie
npm init -y
npm install js-cookie@^3.0.5
cd ../../

# 安装 jquery-countdown
cd packages/package-jquery-countdown
npm init -y
npm install jquery-countdown@^2.2.0
cd ../../

# 安装 echarts
cd packages/package-echarts
npm init -y
npm install echarts@^4.9.0
cd ../../

# 安装 js-url
cd packages/package-js-url
npm init -y
npm install js-url@^2.3.0
cd ../../

# 安装 countup.js
cd packages/package-countup
npm init -y
npm install countup.js@^1.9.3
cd ../../

echo "All packages have been installed in separate folders inside the 'packages' directory."
