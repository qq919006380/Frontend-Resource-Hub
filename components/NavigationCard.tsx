'use client';

import { NavigationItem } from '@/lib/navigation-data';
import { ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationCardProps {
  item: NavigationItem;
}

export default function NavigationCard({ item }: NavigationCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/20 p-6">
      {/* Logo and External Link */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {!imageError ? (
            <Image
              src={item.logo || '/globe.svg'}
              alt={`${item.name} logo`}
              width={32}
              height={32}
              className="rounded-lg flex-shrink-0"
              onError={handleImageError}
              unoptimized
            />
          ) : (
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.name}
            </h3>
          </div>
        </div>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-600 h-10 dark:text-gray-300 text-sm mb-2 line-clamp-2 leading-relaxed">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium"
          >
            {tag}
          </span>
        ))}
        {item.tags.length > 3 && (
          <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
            +{item.tags.length - 3}
          </span>
        )}
      </div>

      {/* Link */}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-btn group/btn block h-8 w-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-center relative overflow-hidden border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
        aria-label={`访问 ${item.name}`}
      >
        {/* CSS实现的动画背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 -translate-x-full group-hover/btn:translate-x-full"></div>
        
        {/* 边框光效 */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"></div>
      </a>
    </div>
  );
} 