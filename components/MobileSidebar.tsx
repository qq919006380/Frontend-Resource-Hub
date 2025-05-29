'use client';

import { getAllTags } from '@/lib/navigation-data';
import { Filter, Hash, X } from 'lucide-react';
import { useEffect } from 'react';

interface MobileSidebarProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ selectedTags, onTagsChange, isOpen, onClose }: MobileSidebarProps) {
  const allTags = getAllTags();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const clearAllTags = () => {
    onTagsChange(["全部"]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-80 h-full bg-white dark:bg-gray-800 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">筛选标签</h2>
            </div>
            <div className="flex items-center gap-2">
              {selectedTags.length > 1 || !selectedTags.includes("全部") ? (
                <button
                  onClick={clearAllTags}
                  className="text-xs text-gray-500 hover:text-red-500 transition-colors"
                >
                  清空
                </button>
              ) : null}
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* 已选标签 */}
          {selectedTags.length > 0 && !selectedTags.includes("全部") && (
            <div className="mb-4">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">已选择 ({selectedTags.length})</div>
              <div className="flex flex-wrap gap-1">
                {selectedTags.map((tag) => (
                  <span
                    key={`selected-${tag}`}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                  >
                    {tag}
                    <button
                      onClick={() => handleTagToggle(tag)}
                      className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto">
            <button
              onClick={() => handleTagToggle("全部")}
              className={`w-full flex items-center gap-2 px-2 py-1.5 text-left rounded-md transition-colors text-sm ${
                selectedTags.includes("全部")
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Hash className="w-3 h-3 flex-shrink-0" />
              <span>全部</span>
            </button>
            
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 text-left rounded-md transition-colors text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Hash className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{tag}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
} 