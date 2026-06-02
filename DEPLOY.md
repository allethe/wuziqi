
# 五子棋游戏部署指南

## 🚀 方案一：Vercel 部署（推荐，最推荐）

Vercel 是部署 React/Vite 项目最简单的方式，免费且高性能：

1. 访问 https://vercel.com 注册账号（使用 GitHub 账号登录）
2. 创建一个新的 GitHub 仓库
3. 将当前代码推送到 GitHub
4. 在 Vercel 上导入该仓库
5. 一键部署！

具体步骤：
```bash
# 在 GitHub 上创建仓库后：
git remote add origin &lt;你的GitHub仓库地址&gt;
git push -u origin master
```

## 📦 方案二：GitHub Pages 部署

```bash
# 1. 安装 gh-pages
npm install gh-pages --save-dev

# 2. 在 package.json 中添加：
# "homepage": "https://&lt;你的用户名&gt;.github.io/&lt;仓库名&gt;",
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }

# 3. 部署
npm run deploy
```

## 🎉 方案三：Netlify 部署

类似 Vercel，同样简单：
1. 访问 https://app.netlify.com
2. 使用 GitHub 登录
3. 导入仓库，自动部署

## 📊 构建产物

当前构建产物位置：`dist/ 目录

您也可以直接将 dist/ 目录部署到任何静态托管服务
