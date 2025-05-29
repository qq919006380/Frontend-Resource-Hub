'use client';

import { Compass, Menu, Github } from 'lucide-react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onMenuClick: () => void;
}

export default function Header({ searchTerm, onSearchChange, onMenuClick }: HeaderProps) {
  return (
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">FEHub</span>.app
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">前端开发者的专业导航 · 精选工具 · 实用资源</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
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
  );
} 