# FE-Hub - 前端导航站

🚀 一个专业的前端开发者资源导航平台，提供精选的前端工具、库和学习资源。

 

## 📦 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📁 项目结构

```
├── app/                  # Next.js App Router
│   ├── layout.tsx       # 根布局
│   ├── page.tsx         # 首页
│   └── globals.css      # 全局样式
├── components/          # React 组件
│   ├── Header.tsx       # 头部组件
│   ├── Sidebar.tsx      # 侧边栏
│   ├── SearchBar.tsx    # 搜索栏
│   ├── ThemeToggle.tsx  # 主题切换
│   └── NavigationCard.tsx # 导航卡片
├── lib/                 # 工具库
│   └── navigation-data.ts # 导航数据
└── public/             # 静态资源
```

## 🎯 资源分类

当前收录了以下分类的前端资源：

- **CSS** - CSS工具、框架和学习资源
- **JavaScript** - JS库、教程和代码片段
- **动画** - 动画库和特效资源
- **工具** - 开发工具和在线服务
- **社区** - 技术社区和论坛
- **素材** - 免费设计素材和图标
- **模版** - 项目模版和脚手架

## 🤝 贡献指南

欢迎提交新的资源或改进建议：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 在 `lib/navigation-data.ts` 中添加新资源
4. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
5. 推送到分支 (`git push origin feature/AmazingFeature`)
6. 开启 Pull Request

### 添加新资源格式

```typescript
{
  name: "网站名称",
  url: "https://example.com",
  description: "网站描述",
  tags: ["标签1", "标签2", "标签3"],
  logo: "https://example.com/favicon.ico" // 可选
}
```

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为前端社区贡献优秀资源的开发者们！

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！

## 前置知识
- [直面JavaScript中的30个疑难杂症-视频](https://www.imooc.com/learn/1303?utm_source=courseright)
- [全方位入门git-视频](https://www.imooc.com/learn/1278?mc_marking=bb86c9071ed9b7cf12612a2a85203372&mc_channel=hk)
- [Git 在线入门教程](http://pcottle.github.io/learnGitBranching/?locale=zh_CN)

## CSS
- [30秒实用css片段](https://www.30secondsofcode.org/css/p/1)
- [在线css编辑社区codepen](https://codepen.io/)
- [flex青蛙小游戏](http://flexboxfroggy.com/#zh-cn)
- [loader大全](https://css-loaders.com/)
- [tailwind 组件](https://www.langui.dev/)

- ## CSS工具
- [可视化border-radius边距工具](https://9elements.github.io/fancy-border-radius/full-control.html)
- [可视化clip-path图形编辑工具](https://bennettfeely.com/clippy/)
- [可视化分割线编辑工具](https://www.shapedivider.app/)

# 优秀动画库
- [hover动画](http://ianlunn.github.io/Hover/)
- [纸屑烟花](https://www.kirilv.com/canvas-confetti/)
- [animate.css](https://animate.style/)
- [打字效果](https://github.com/mattboldt/typed.js/)
- [颜色渐变动画](https://sarcadass.github.io/granim.js/index.html)
- [强大动画库 animejs](https://animejs.com/)
- [专业的js动画库 gsap](https://gsap.com/)
- [滚动作出反应](https://github.com/terwanerik/ScrollTrigger)
- [界面动画](https://jitter.video/?noredir=1)
- [落地页组件](https://magicui.design/)
- [用户界面](https://ui.aceternity.com/)
- [丝滑的微交互动效](https://www.fancycomponents.dev/)

## JavaScript
- [proxy-www](https://github.com/justjavac/proxy-www)
- [javascript 的 12 个怪癖（quirks）](https://github.com/justjavac/12-javascript-quirks)
- [30秒实用js片段](https://30secondsofcode.org/)
- [github-js排行](https://github.com/search?l=JavaScript&o=desc&p=1&q=stars%3A%3E1&s=stars&type=Repositories)
- [阮一峰的ES6标准入门](https://es6.ruanyifeng.com/)
- [可视化 JS EventLoop 中的执行栈、任务队列](https://www.jsv9000.app/)
- [JSConf](https://www.youtube.com/c/JSConfEU/videos)
- [JavaScript心智模型](https://sudongyuer.github.io/javascript-mental-models/)
- [awesome-javascript](https://github.com/sorrycc/awesome-javascript)
- [纯前端打包下载](https://www.zhangxinxu.com/wordpress/2019/08/js-zip-download/)

## 优质文章
- [你可能不知道的前端知识点](https://github.com/justjavac/the-front-end-knowledge-you-may-not-know)
- [前端资源](https://github.com/poppinlp/fe-store-house)
- [收集优质的中文前端博客（不定期更新中）](https://github.com/FrankFang/best-chinese-front-end-blogs)
- [手写cli工具开发](https://juejin.im/post/5cc160b2f265da03452bdf5b)
- [所有请求放一个文件管理](https://www.jianshu.com/p/72d911b6d61d)
    - 关键词 ：axios封装，接口统一管理。
- [前端无痛刷新Token](https://juejin.cn/post/7075348765162340383)
- [Webpack 设置环境变量的误区](https://juejin.cn/post/6844904023791796237)
- [以前端架构师身份，从零开始搞事搞事搞事](https://juejin.cn/post/6952066955868110879#heading-12)



## 社区
- [stackoverflow](https://stackoverflow.com/)
- [掘金](https://juejin.cn/)
- [NODE中文社区](https://cnodejs.org/)

## 插件
- [vue3列表拖拽排序插件](https://github.com/SortableJS/vue.draggable.next)
- [滚动动画](https://scrollrevealjs.org/)
- [文字特效](https://github.com/hanks-zyh/HTextView)

## 静态网站生成器
- [docusaurus](https://www.docusaurus.cn/)
- [vuepress](https://v2.vuepress.vuejs.org/zh/)

## 工具网站
- [图片压缩](https://tinypng.com)
- [渐变背景](https://uigradients.com/#MangoPulp)
- [免费网站模板](https://webpagedesign.io/)
- [前端在线开发工具(stackblitz)](https://stackblitz.com/)
- [免费的素材](https://coverr.co/s?q=nft)
- [免费svg素材](https://undraw.co/illustrations)
- [免费素材](https://www.humaaans.com/?ref=producthunt)
- [网站模板](https://sc.chinaz.com/moban/index_2.html)
- [yeoman打造自己的项目手脚架](https://yeoman.io/)
- [免费商用字体](https://www.maoken.com/)
- [git格式转换](https://ezgif.com/)
- [一个免费的网站SEO检查和建议工具](https://www.seoptimer.com/gptshunter.com)
- [谷歌字体选择器](https://fontsensei.com/zh-cn/tag)

  ## 模版
- [免费sass模版](https://opensaas.sh/)
