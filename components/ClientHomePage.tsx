'use client';

import { useState, useMemo } from 'react';
import { getItemsByTags, NavigationItem } from '@/lib/navigation-data';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from '@/components/MobileSidebar';
import NavigationCard from '@/components/NavigationCard';

interface ClientHomePageProps {
  initialData: NavigationItem[];
  allTags: string[];
  totalResources: number;
  categoryStats: Record<string, number>;
}

export default function ClientHomePage({ 
  initialData, 
  allTags, 
  totalResources, 
  categoryStats 
}: ClientHomePageProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(['全部']);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // 过滤数据
  const filteredData = useMemo(() => {
    let data = getItemsByTags(selectedTags);
    
    if (searchTerm.trim()) {
      data = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return data;
  }, [selectedTags, searchTerm]);

  const handleMenuClick = () => {
    setIsMobileSidebarOpen(true);
  };

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false);
  };

  const getDisplayTitle = () => {
    if (selectedTags.includes('全部')) {
      return '所有资源';
    }
    if (selectedTags.length === 1) {
      return selectedTags[0];
    }
    return `${selectedTags.length} 个分类`;
  };

  const getDisplayDescription = () => {
    if (selectedTags.includes('全部')) {
      return `精选 ${filteredData.length} 个前端资源 · CSS工具 · JS库 · 开发神器 · 学习资源`;
    }
    return `找到 ${filteredData.length} 个相关资源 · 已选择: ${selectedTags.join(', ')}`;
  };

  return (
    <>
      {/* Header */}
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        onMenuClick={handleMenuClick}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar selectedTags={selectedTags} onTagsChange={setSelectedTags} />
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
          isOpen={isMobileSidebarOpen}
          onClose={handleMobileSidebarClose}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {getDisplayTitle()}
                </h1>
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                  {getDisplayDescription()}
                  {searchTerm && ` · 搜索: "${searchTerm}"`}
                </p>
              </div>
            </div>

            {/* Navigation Cards Grid */}
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {filteredData.map((item, index) => (
                  <NavigationCard key={`${item.url}-${index}`} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.901-6.06 2.379C5.412 17.747 5.412 18 6 18h12c.588 0 .588-.253.06-.621z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">暂无相关资源</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchTerm ? `没有找到包含 "${searchTerm}" 的资源` : `选中的分类下暂无资源`}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
} 