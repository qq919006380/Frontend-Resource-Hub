export interface NavigationItem {
  name: string;
  url: string;
  description: string;
  tags: string[];
  logo?: string;
}

export const navigationData: NavigationItem[] = [
  // 前置知识
  {
    name: "Picsum Photos",
    url: "https://picsum.photos/",
    description: "免费占位图片库,可以用于测试和开发,支持随机图片、指定尺寸、指定数量、指定分类",
    tags: ["图片", "免费", "测试", "占位图"],
    logo: "https://picsum.photos/favicon.ico"
  },
  {
    name: "慕课网 - JavaScript疑难杂症",
    url: "https://www.imooc.com/learn/1303",
    description: "直面JavaScript中的30个疑难杂症视频教程",
    tags: ["JavaScript", "视频教程", "前置知识"],
    logo: "https://www.imooc.com/favicon.ico"
  },
  {
    name: "慕课网 - Git入门",
    url: "https://www.imooc.com/learn/1278",
    description: "全方位入门git视频教程",
    tags: ["Git", "视频教程", "前置知识"],
    logo: "https://www.imooc.com/favicon.ico"
  },
  {
    name: "Git在线教程",
    url: "http://pcottle.github.io/learnGitBranching/?locale=zh_CN",
    description: "交互式Git学习教程，通过可视化方式学习Git分支操作",
    tags: ["Git", "在线教程", "前置知识"],
    logo: "https://pcottle.github.io/learnGitBranching/assets/favicon.ico"
  },

  // CSS相关
  {
    name: "30 Seconds of CSS",
    url: "https://www.30secondsofcode.org/css/p/1",
    description: "30秒实用CSS代码片段集合",
    tags: ["CSS", "代码片段", "工具"],
    logo: "https://www.30secondsofcode.org/favicon-32x32.png"
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    description: "在线CSS编辑社区，前端开发者分享作品的平台",
    tags: ["CSS", "在线编辑器", "社区"],
    logo: "https://codepen.io/favicon.ico"
  },
  {
    name: "Flexbox Froggy",
    url: "http://flexboxfroggy.com/#zh-cn",
    description: "通过游戏学习CSS Flexbox布局的青蛙小游戏",
    tags: ["CSS", "Flexbox", "游戏"],
    logo: "http://flexboxfroggy.com/favicon.ico"
  },
  {
    name: "CSS Loaders",
    url: "https://css-loaders.com/",
    description: "CSS加载动画效果大全",
    tags: ["CSS", "动画", "Loader"],
    logo: "https://css-loaders.com/favicon.ico"
  },
  {
    name: "Langui",
    url: "https://www.langui.dev/",
    description: "Tailwind CSS组件库",
    tags: ["CSS", "Tailwind", "组件"],
    logo: "https://www.langui.dev/favicon.ico"
  },

  // CSS工具
  {
    name: "Border Radius Generator",
    url: "https://9elements.github.io/fancy-border-radius/full-control.html",
    description: "可视化border-radius边距工具",
    tags: ["CSS", "工具", "Border"],
    logo: "https://9elements.github.io/fancy-border-radius/favicon.ico"
  },
  {
    name: "Clippy",
    url: "https://bennettfeely.com/clippy/",
    description: "可视化clip-path图形编辑工具",
    tags: ["CSS", "工具", "Clip-path"],
    logo: "https://bennettfeely.com/clippy/favicon.ico"
  },
  {
    name: "Shape Divider",
    url: "https://www.shapedivider.app/",
    description: "可视化分割线编辑工具",
    tags: ["CSS", "工具", "分割线"],
    logo: "https://www.shapedivider.app/favicon.ico"
  },

  // 动画库
  {
    name: "Hover.css",
    url: "http://ianlunn.github.io/Hover/",
    description: "CSS3 Hover动画效果集合",
    tags: ["CSS", "动画", "Hover"],
    logo: "http://ianlunn.github.io/Hover/favicon.ico"
  },
  {
    name: "Canvas Confetti",
    url: "https://www.kirilv.com/canvas-confetti/",
    description: "纸屑烟花效果JavaScript库",
    tags: ["JavaScript", "动画", "特效"],
    logo: "https://www.kirilv.com/canvas-confetti/favicon.ico"
  },
  {
    name: "Animate.css",
    url: "https://animate.style/",
    description: "CSS动画库，即插即用的CSS动画",
    tags: ["CSS", "动画", "库"],
    logo: "https://animate.style/favicon.ico"
  },
  {
    name: "Typed.js",
    url: "https://github.com/mattboldt/typed.js/",
    description: "JavaScript打字效果库",
    tags: ["JavaScript", "动画", "打字效果"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "Granim.js",
    url: "https://sarcadass.github.io/granim.js/index.html",
    description: "颜色渐变动画JavaScript库",
    tags: ["JavaScript", "动画", "渐变"],
    logo: "https://sarcadass.github.io/granim.js/favicon.ico"
  },
  {
    name: "Anime.js",
    url: "https://animejs.com/",
    description: "强大的JavaScript动画库",
    tags: ["JavaScript", "动画", "库"],
    logo: "https://animejs.com/favicon.ico"
  },
  {
    name: "GSAP",
    url: "https://gsap.com/",
    description: "专业的JavaScript动画库",
    tags: ["JavaScript", "动画", "专业"],
    logo: "https://gsap.com/favicon.ico"
  },
  {
    name: "ScrollTrigger",
    url: "https://github.com/terwanerik/ScrollTrigger",
    description: "滚动触发动画库",
    tags: ["JavaScript", "动画", "滚动"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "Jitter",
    url: "https://jitter.video/?noredir=1",
    description: "界面动画设计工具",
    tags: ["动画", "设计工具", "界面"],
    logo: "https://jitter.video/favicon.ico"
  },
  {
    name: "Magic UI",
    url: "https://magicui.design/",
    description: "落地页组件库",
    tags: ["UI", "组件", "落地页"],
    logo: "https://magicui.design/favicon.ico"
  },
  {
    name: "Aceternity UI",
    url: "https://ui.aceternity.com/",
    description: "现代化用户界面组件库",
    tags: ["UI", "组件", "现代化"],
    logo: "https://ui.aceternity.com/favicon.ico"
  },
  {
    name: "Fancy Components",
    url: "https://www.fancycomponents.dev/",
    description: "丝滑的微交互动效组件",
    tags: ["UI", "组件", "微交互"],
    logo: "https://www.fancycomponents.dev/favicon.ico"
  },

  // JavaScript
  {
    name: "Proxy WWW",
    url: "https://github.com/justjavac/proxy-www",
    description: "Proxy相关的学习资源",
    tags: ["JavaScript", "Proxy", "学习"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "JavaScript 12个怪癖",
    url: "https://github.com/justjavac/12-javascript-quirks",
    description: "JavaScript的12个怪癖（quirks）",
    tags: ["JavaScript", "怪癖", "学习"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "30 Seconds of Code",
    url: "https://30secondsofcode.org/",
    description: "30秒实用JavaScript代码片段",
    tags: ["JavaScript", "代码片段", "工具"],
    logo: "https://30secondsofcode.org/favicon-32x32.png"
  },
  {
    name: "ES6 标准入门",
    url: "https://es6.ruanyifeng.com/",
    description: "阮一峰的ES6标准入门教程",
    tags: ["JavaScript", "ES6", "教程"],
    logo: "https://es6.ruanyifeng.com/favicon.ico"
  },
  {
    name: "JS EventLoop 可视化",
    url: "https://www.jsv9000.app/",
    description: "可视化JavaScript EventLoop中的执行栈、任务队列",
    tags: ["JavaScript", "EventLoop", "可视化"],
    logo: "https://www.jsv9000.app/favicon.ico"
  },
  {
    name: "JavaScript心智模型",
    url: "https://sudongyuer.github.io/javascript-mental-models/",
    description: "JavaScript心智模型学习资源",
    tags: ["JavaScript", "心智模型", "学习"],
    logo: "https://sudongyuer.github.io/javascript-mental-models/favicon.ico"
  },
  {
    name: "Awesome JavaScript",
    url: "https://github.com/sorrycc/awesome-javascript",
    description: "JavaScript资源大全",
    tags: ["JavaScript", "资源", "大全"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "纯前端打包下载",
    url: "https://www.zhangxinxu.com/wordpress/2019/08/js-zip-download/",
    description: "纯前端实现文件打包下载",
    tags: ["JavaScript", "下载", "文件处理"],
    logo: "https://www.zhangxinxu.com/favicon.ico"
  },

  // 社区
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    description: "全球最大的程序员问答社区",
    tags: ["社区", "问答", "编程"],
    logo: "https://stackoverflow.com/favicon.ico"
  },
  {
    name: "掘金",
    url: "https://juejin.cn/",
    description: "中文技术社区",
    tags: ["社区", "中文", "技术"],
    logo: "https://juejin.cn/favicon.ico"
  },
  {
    name: "Node中文社区",
    url: "https://cnodejs.org/",
    description: "Node.js中文技术社区",
    tags: ["社区", "Node.js", "中文"],
    logo: "https://cnodejs.org/favicon.ico"
  },

  // 插件
  {
    name: "Vue Draggable Next",
    url: "https://github.com/SortableJS/vue.draggable.next",
    description: "Vue3列表拖拽排序插件",
    tags: ["Vue", "插件", "拖拽"],
    logo: "https://github.com/favicon.ico"
  },
  {
    name: "ScrollReveal",
    url: "https://scrollrevealjs.org/",
    description: "滚动动画JavaScript库",
    tags: ["JavaScript", "动画", "滚动"],
    logo: "https://scrollrevealjs.org/favicon.ico"
  },

  // 静态网站生成器
  {
    name: "Docusaurus",
    url: "https://www.docusaurus.cn/",
    description: "Facebook开源的静态网站生成器",
    tags: ["静态网站", "文档", "React"],
    logo: "https://www.docusaurus.cn/img/favicon.ico"
  },
  {
    name: "VuePress",
    url: "https://v2.vuepress.vuejs.org/zh/",
    description: "Vue驱动的静态网站生成器",
    tags: ["静态网站", "Vue", "文档"],
    logo: "https://v2.vuepress.vuejs.org/images/favicon.ico"
  },

  // 工具网站
  {
    name: "TinyPNG",
    url: "https://tinypng.com",
    description: "在线图片压缩工具",
    tags: ["工具", "图片压缩", "优化"],
    logo: "https://tinypng.com/favicon.ico"
  },
  {
    name: "UI Gradients",
    url: "https://uigradients.com/#MangoPulp",
    description: "渐变背景生成器",
    tags: ["CSS", "渐变", "背景"],
    logo: "https://uigradients.com/favicon.ico"
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com/",
    description: "前端在线开发工具",
    tags: ["开发工具", "在线编辑器", "前端"],
    logo: "https://stackblitz.com/favicon.ico"
  },
  {
    name: "Coverr",
    url: "https://coverr.co/s?q=nft",
    description: "免费视频素材",
    tags: ["素材", "视频", "免费"],
    logo: "https://coverr.co/favicon.ico"
  },
  {
    name: "unDraw",
    url: "https://undraw.co/illustrations",
    description: "免费SVG插画素材",
    tags: ["素材", "SVG", "插画"],
    logo: "https://undraw.co/favicon.ico"
  },
  {
    name: "Humaaans",
    url: "https://www.humaaans.com/",
    description: "免费人物插画素材",
    tags: ["素材", "插画", "人物"],
    logo: "https://www.humaaans.com/favicon.ico"
  },
  {
    name: "Yeoman",
    url: "https://yeoman.io/",
    description: "项目脚手架生成工具",
    tags: ["工具", "脚手架", "生成器"],
    logo: "https://yeoman.io/favicon.ico"
  },
  {
    name: "猫啃网",
    url: "https://www.maoken.com/",
    description: "免费商用字体下载",
    tags: ["字体", "免费", "商用"],
    logo: "https://www.maoken.com/favicon.ico"
  },
  {
    name: "EZGIF",
    url: "https://ezgif.com/",
    description: "在线GIF格式转换工具",
    tags: ["工具", "GIF", "格式转换"],
    logo: "https://ezgif.com/favicon.ico"
  },
  {
    name: "SEO Timer",
    url: "https://www.seoptimer.com/gptshunter.com",
    description: "免费的网站SEO检查和建议工具",
    tags: ["SEO", "网站分析", "工具"],
    logo: "https://www.seoptimer.com/favicon.ico"
  },
  {
    name: "Font Sensei",
    url: "https://fontsensei.com/zh-cn/tag",
    description: "谷歌字体选择器",
    tags: ["字体", "谷歌字体", "选择器"],
    logo: "https://fontsensei.com/favicon.ico"
  },

  // 模版
  {
    name: "OpenSaaS",
    url: "https://opensaas.sh/",
    description: "免费SaaS项目模版",
    tags: ["模版", "SaaS", "免费"],
    logo: "https://opensaas.sh/favicon.ico"
  }
];

// 获取所有标签
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  navigationData.forEach(item => {
    item.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// 根据多个标签筛选（多选模式）
export const getItemsByTags = (selectedTags: string[]): NavigationItem[] => {
  if (selectedTags.length === 0 || selectedTags.includes("全部")) {
    return navigationData;
  }
  
  return navigationData.filter(item => 
    selectedTags.some(selectedTag => item.tags.includes(selectedTag))
  );
}; 