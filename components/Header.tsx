'use client';

import { Compass, Menu, Github, Plus, X, Copy, Check } from 'lucide-react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onMenuClick: () => void;
}

export default function Header({ searchTerm, onSearchChange, onMenuClick }: HeaderProps) {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const emailAddress = 'luki123.code@gmail.com';
  const emailTemplate = `网站名称：
网站地址：
网站描述：`;

  const copyToClipboard = async (text: string, type: 'email' | 'template') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedTemplate(true);
        setTimeout(() => setCopiedTemplate(false), 2000);
      }
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="打开菜单"
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className=" bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Image src="/favicon.ico" alt="FE-Hub" width={50} height={50} />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">FEHub</span>.app
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">前端开发者的专业导航 · 精选工具 · 实用资源</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Submit Website Button */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                aria-label="提交网站"
              >
                <Plus className="w-4 h-4" />
                <span>提交网站</span>
              </button>
              
              {/* Mobile Submit Button */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="sm:hidden p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                aria-label="提交网站"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
              
              {/* GitHub Link */}
              <a
                href="https://github.com/qq919006380/Frontend-Resource-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub 仓库"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Submit Website Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                提交网站
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
               感谢你为前端开发社区贡献优质资源！发送邮件到以下地址，我们将在2天内回复：
              </p>

              {/* Email Address */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-100">
                    {emailAddress}
                  </span>
                  <button
                    onClick={() => copyToClipboard(emailAddress, 'email')}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    title="复制邮箱地址"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Email Template */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    邮件模板：
                  </span>
                  <button
                    onClick={() => copyToClipboard(emailTemplate, 'template')}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                    title="复制模板"
                  >
                    {copiedTemplate ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <pre className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap font-mono">
                    {emailTemplate}
                  </pre>
                </div>
              </div>

              <button
                onClick={() => setShowSubmitModal(false)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 