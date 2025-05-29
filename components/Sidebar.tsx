'use client';

import { useState } from 'react';
import { getAllTags, navigationData } from '@/lib/navigation-data';
import { tagCategories, getCategoryColorClasses } from '@/lib/tag-categories';
import { Filter, Hash, X, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export default function Sidebar({ selectedTags, onTagsChange }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['前端技术']));
  const allTags = getAllTags();
  
  // 统计每个标签的资源数量
  const getTagCount = (tag: string) => {
    if (tag === "全部") return navigationData.length;
    return navigationData.filter(item => item.tags.includes(tag)).length;
  };

  // 统计每个分类的资源数量
  const getCategoryCount = (categoryTags: string[]) => {
    return navigationData.filter(item => 
      item.tags.some(tag => categoryTags.includes(tag))
    ).length;
  };
  
  const handleTagToggle = (tag: string) => {
    if (tag === "全部") {
      onTagsChange(["全部"]);
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
    
    onTagsChange(newTags);
  };

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const clearAllTags = () => {
    onTagsChange(["全部"]);
  };

  const hasSelectedTagsInCategory = (categoryTags: string[]) => {
    return selectedTags.some(tag => categoryTags.includes(tag));
  };

  return (
    <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-77px)] sticky top-[77px] overflow-y-auto">
      <div className="p-4">
        {/* 头部 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">筛选标签</h2>
          </div>
          {selectedTags.length > 1 || !selectedTags.includes("全部") ? (
            <button
              onClick={clearAllTags}
              className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              清空
            </button>
          ) : null}
        </div>

        {/* 全部选项 */}
        <div className="mb-4">
          <button
            onClick={() => handleTagToggle("全部")}
            className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-all border ${
              selectedTags.includes("全部")
                ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 font-medium border-blue-200 dark:border-blue-700'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 flex-shrink-0" />
              <span>全部资源</span>
            </div>
            <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              {getTagCount("全部")}
            </span>
          </button>
        </div>

        {/* 分类列表 */}
        <div className="space-y-2">
          {tagCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);
            const hasSelected = hasSelectedTagsInCategory(category.tags);
            const categoryCount = getCategoryCount(category.tags);
            const colorClasses = getCategoryColorClasses(category.color, hasSelected);
            const IconComponent = category.icon;

            return (
              <div key={category.name} className="space-y-1">
                {/* 分类头部 */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-all border ${colorClasses.bg} ${colorClasses.border}`}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-4 h-4 flex-shrink-0 ${colorClasses.icon}`} />
                    <div>
                      <div className={`text-sm font-medium ${hasSelected ? colorClasses.icon : 'text-gray-900 dark:text-gray-100'}`}>
                        {category.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {category.description}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {categoryCount}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* 分类下的标签 */}
                {isExpanded && (
                  <div className="ml-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 pl-3">
                    {category.tags
                      .filter(tag => allTags.includes(tag))
                      .map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        const tagCount = getTagCount(tag);
                        
                        return (
                          <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`w-full flex items-center justify-between px-2 py-1.5 text-left rounded-md transition-colors text-sm ${
                              isSelected
                                ? `${colorClasses.bg} ${colorClasses.icon} font-medium`
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Hash className="w-3 h-3 flex-shrink-0 opacity-60" />
                              <span className="truncate">{tag}</span>
                            </div>
                            <span className="text-xs bg-gray-100 dark:bg-gray-600 px-1.5 py-0.5 rounded">
                              {tagCount}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
} 