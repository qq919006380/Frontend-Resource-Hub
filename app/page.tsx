import { navigationData, getAllTags } from '@/lib/navigation-data';
import Header from '@/components/Header';
import NavigationCard from '@/components/NavigationCard';
import ClientHomePage from '@/components/ClientHomePage';

// 生成结构化数据
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FE-Hub",
    "description": "专为前端开发者打造的资源导航平台",
    "url": "https://fe-hub.cn",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fe-hub.cn/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FE-Hub",
      "description": "前端资源导航平台"
    }
  };
}

// 服务端渲染的首页
export default function Home() {
  const allTags = getAllTags();
  const totalResources = navigationData.length;
  
  // 按分类统计资源数量
  const categoryStats = allTags.reduce((acc, tag) => {
    if (tag === '全部') return acc;
    acc[tag] = navigationData.filter(item => item.tags.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);

  const structuredData = generateStructuredData();

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* 使用客户端组件处理交互 */}
        <ClientHomePage 
          initialData={navigationData}
          allTags={allTags}
          totalResources={totalResources}
          categoryStats={categoryStats}
        />

        {/* SEO友好的静态内容 */}
        <noscript>
          <div className="p-4">
            <h1>FE-Hub - 前端资源导航</h1>
            <p>精选 {totalResources} 个前端资源</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {navigationData.slice(0, 12).map((item, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    访问网站
                  </a>
                </div>
              ))}
            </div>
          </div>
        </noscript>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <div className="text-center">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">FE-Hub</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  专为前端开发者打造的资源导航平台，精选优质工具、框架、库和学习资源，助力高效开发
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                © 2024 FE-Hub. 开源项目 · 持续更新 · 社区驱动
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
