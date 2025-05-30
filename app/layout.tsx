import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FE-Hub 前端资源导航平台 | 精选CSS工具、JavaScript库、Vue/React组件 | 免费开发神器大全",
  description: "FE-Hub 是专为前端开发者打造的专业资源导航平台，精选1000+优质前端开发工具和资源。汇集CSS工具、JavaScript库、Vue/React组件、动画效果、UI设计资源、开发神器、学习教程等优质内容。完全免费访问，定期更新维护，助力高效开发，全面提升编程技能和工作效率。",
  keywords: "前端导航,前端资源,CSS工具,JavaScript库,Vue组件,React组件,动画库,UI设计,开发工具,前端神器,编程学习,网站模板",
  authors: [{ name: "FE-Hub Team" }],
  creator: "FE-Hub",
  publisher: "FE-Hub",
  alternates: {
    canonical: "https://fehub.app",
  },
  openGraph: {
    title: "FE-Hub - 前端开发者的专业资源导航",
    description: "精选前端开发工具、CSS库、JavaScript框架、UI组件等优质资源，助力前端开发者高效编程",
    type: "website",
    locale: "zh_CN",
    siteName: "FE-Hub",
    url: "https://fehub.app",
    images: [
      {
        url: "https://fehub.app/image.png",
        width: 1200,
        height: 630,
        alt: "FE-Hub - 前端资源导航平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FE-Hub - 前端资源导航",
    description: "精选优质前端开发资源，CSS工具、JS库、设计素材一站式导航",
    images: ["https://fehub.app/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'theme-color': '#ffffff',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* 主题色配置 */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />
        
        {/* PWA相关 */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* 防止主题闪烁的脚本 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isDark = localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {
                  console.warn('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
