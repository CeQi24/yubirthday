# 生日祝福网页

这是一个为朋友制作的生日祝福静态网页。页面包含动画效果、互动元素和个性化的祝福信息。

## 功能特点

- 互动生日贺卡（点击打开）
- 可交互的生日蛋糕（可以吹灭蜡烛）
- 照片墙展示区域
- 个性化的祝福信息
- 响应式设计，适配各种设备

## 如何使用

1. 下载或克隆这个仓库到你的电脑
2. 直接在浏览器中打开 `index.html` 文件即可查看页面

## 自定义指南

### 修改文字内容

在 `index.html` 中，你可以修改以下内容：
- 标题和副标题
- 贺卡中的祝福语
- 签名
- 祝福标签的内容

### 添加照片

替换照片占位符：
1. 准备你想展示的照片
2. 在 `index.html` 中，找到 "美好回忆" 部分
3. 将 `<div class="photo-placeholder">照片 1</div>` 替换为 `<img src="path/to/your/photo.jpg" alt="描述">`

### 添加背景音乐

1. 将你喜欢的生日歌曲（如 "happy_birthday.mp3"）放在项目根目录
2. 在 `script.js` 中找到 `addBackgroundMusic()` 函数
3. 取消注释 `audio.src = 'happy_birthday.mp3';` 这一行
4. 在文件底部取消注释 `window.addEventListener('click', addBackgroundMusic, { once: true });`

## 技术说明

这个生日祝福页面使用了以下技术：
- HTML5
- CSS3（动画、渐变、响应式设计）
- 原生 JavaScript（无需任何框架）

## 提示

- 由于浏览器安全限制，如果在本地直接打开并添加了音乐，可能需要点击页面才能播放音乐
- 页面最佳查看宽度为768px以上 