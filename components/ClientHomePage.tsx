'use client';

import { useState, useMemo } from 'react';
import { getItemsByTags, NavigationItem } from '@/lib/navigation-data';
import { getTagCategory, getCategoryColorClasses } from '@/lib/tag-categories';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from '@/components/MobileSidebar';
import NavigationCard from '@/components/NavigationCard';
import { Star, X } from 'lucide-react';

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

  const handleTagToggle = (tag: string) => {
    if (tag === "全部") {
      setSelectedTags(["全部"]);
      return;
    }

    let newTags = [...selectedTags];
    
    // 移除"全部"如果选择了具体标签
    if (newTags.includes("全部")) {
      newTags = newTags.filter(t => t !== "全部");
    }
    
    if (newTags.includes(tag)) {
      newTags = newTags.filter(t => t !== tag);
      // 如果没有选择任何标签，回到"全部"
      if (newTags.length === 0) {
        newTags = ["全部"];
      }
    } else {
      newTags.push(tag);
    }
    
    setSelectedTags(newTags);
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
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {getDisplayTitle()}
                  </h1>
                  <div className="space-y-2">
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                      {getDisplayDescription()}
                      {searchTerm && ` · 搜索: "${searchTerm}"`}
                    </p>
                    
                    {/* 已选标签 - 紧凑版本 */}
                    {selectedTags.length > 0 && !selectedTags.includes("全部") && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          已选择:
                        </span>
                        {selectedTags.map((tag) => {
                          const category = getTagCategory(tag);
                          const colorClasses = category ? getCategoryColorClasses(category.color, true) : getCategoryColorClasses('gray', true);
                          return (
                            <span
                              key={`selected-${tag}`}
                              className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md border ${colorClasses.bg} ${colorClasses.border}`}
                            >
                              <span className={colorClasses.icon}>{tag}</span>
                              <button
                                onClick={() => handleTagToggle(tag)}
                                className="hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 rounded-full p-0.5 transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
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