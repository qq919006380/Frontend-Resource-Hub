import { MetadataRoute } from 'next'
import { navigationData, getAllTags } from '@/lib/navigation-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fe-hub.cn'
  
  // 基础页面
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]
  
  // 分类页面（如果将来有的话）
  const tags = getAllTags().filter(tag => tag !== '全部')
  const categoryRoutes = tags.map((tag) => ({
    url: `${baseUrl}/category/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [...routes, ...categoryRoutes]
} 