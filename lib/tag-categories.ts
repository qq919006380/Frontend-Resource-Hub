import { Code, Palette, Zap, Users, Wrench, Layers, BookOpen, Sparkles } from 'lucide-react';

export interface TagCategory {
  name: string;
  icon: any;
  color: string;
  tags: string[];
  description: string;
}

export const tagCategories: TagCategory[] = [
  {
    name: "前端技术",
    icon: Code,
    color: "blue",
    description: "JavaScript、CSS、框架等核心技术",
    tags: [
      "JavaScript", "CSS", "HTML", "TypeScript", "ES6", 
      "Vue", "React", "Angular", "Node.js", "Proxy", 
      "EventLoop", "Flexbox", "Tailwind"
    ]
  },
  {
    name: "动画特效",
    icon: Sparkles,
    color: "purple",
    description: "动画库、特效和交互效果",
    tags: [
      "动画", "特效", "Hover", "打字效果", "渐变", 
      "滚动", "微交互", "Loader"
    ]
  },
  {
    name: "UI设计",
    icon: Palette,
    color: "pink",
    description: "组件库、设计系统和UI资源",
    tags: [
      "UI", "组件", "设计工具", "界面", "落地页", 
      "现代化", "背景", "插画", "人物"
    ]
  },
  {
    name: "开发工具",
    icon: Wrench,
    color: "green",
    description: "提升开发效率的工具和插件",
    tags: [
      "工具", "开发工具", "在线编辑器", "脚手架", 
      "生成器", "图片压缩", "优化", "格式转换",
      "Border", "Clip-path", "分割线", "GIF"
    ]
  },
  {
    name: "学习资源",
    icon: BookOpen,
    color: "indigo",
    description: "教程、文档和学习材料",
    tags: [
      "教程", "学习", "视频教程", "在线教程", "前置知识",
      "心智模型", "可视化", "游戏", "怪癖", "文档"
    ]
  },
  {
    name: "资源素材",
    icon: Layers,
    color: "orange",
    description: "字体、图片、视频等设计素材",
    tags: [
      "素材", "字体", "免费", "商用", "视频", "SVG", 
      "谷歌字体", "选择器"
    ]
  },
  {
    name: "社区平台",
    icon: Users,
    color: "teal",
    description: "技术社区、问答平台和交流空间",
    tags: [
      "社区", "问答", "编程", "中文", "技术"
    ]
  },
  {
    name: "其他分类",
    icon: Zap,
    color: "gray",
    description: "其他未分类的标签",
    tags: [
      "插件", "拖拽", "静态网站", "模版", "SaaS", 
      "SEO", "网站分析", "代码片段", "资源", "大全",
      "下载", "文件处理", "专业", "库"
    ]
  }
];

// 获取标签所属的分类
export const getTagCategory = (tag: string): TagCategory | undefined => {
  return tagCategories.find(category => 
    category.tags.includes(tag)
  );
};

// 获取分类颜色类名
export const getCategoryColorClasses = (color: string, isSelected: boolean = false) => {
  const colorMap = {
    blue: {
      icon: isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500 dark:text-blue-400',
      bg: isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-blue-50 dark:hover:bg-blue-900/10',
      border: isSelected ? 'border-blue-200 dark:border-blue-700' : 'border-transparent'
    },
    purple: {
      icon: isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-purple-500 dark:text-purple-400',
      bg: isSelected ? 'bg-purple-50 dark:bg-purple-900/20' : 'hover:bg-purple-50 dark:hover:bg-purple-900/10',
      border: isSelected ? 'border-purple-200 dark:border-purple-700' : 'border-transparent'
    },
    pink: {
      icon: isSelected ? 'text-pink-600 dark:text-pink-400' : 'text-pink-500 dark:text-pink-400',
      bg: isSelected ? 'bg-pink-50 dark:bg-pink-900/20' : 'hover:bg-pink-50 dark:hover:bg-pink-900/10',
      border: isSelected ? 'border-pink-200 dark:border-pink-700' : 'border-transparent'
    },
    green: {
      icon: isSelected ? 'text-green-600 dark:text-green-400' : 'text-green-500 dark:text-green-400',
      bg: isSelected ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-green-50 dark:hover:bg-green-900/10',
      border: isSelected ? 'border-green-200 dark:border-green-700' : 'border-transparent'
    },
    indigo: {
      icon: isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-500 dark:text-indigo-400',
      bg: isSelected ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'hover:bg-indigo-50 dark:hover:bg-indigo-900/10',
      border: isSelected ? 'border-indigo-200 dark:border-indigo-700' : 'border-transparent'
    },
    orange: {
      icon: isSelected ? 'text-orange-600 dark:text-orange-400' : 'text-orange-500 dark:text-orange-400',
      bg: isSelected ? 'bg-orange-50 dark:bg-orange-900/20' : 'hover:bg-orange-50 dark:hover:bg-orange-900/10',
      border: isSelected ? 'border-orange-200 dark:border-orange-700' : 'border-transparent'
    },
    teal: {
      icon: isSelected ? 'text-teal-600 dark:text-teal-400' : 'text-teal-500 dark:text-teal-400',
      bg: isSelected ? 'bg-teal-50 dark:bg-teal-900/20' : 'hover:bg-teal-50 dark:hover:bg-teal-900/10',
      border: isSelected ? 'border-teal-200 dark:border-teal-700' : 'border-transparent'
    },
    gray: {
      icon: isSelected ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400',
      bg: isSelected ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800',
      border: isSelected ? 'border-gray-200 dark:border-gray-600' : 'border-transparent'
    }
  };
  
  return colorMap[color as keyof typeof colorMap] || colorMap.gray;
}; 