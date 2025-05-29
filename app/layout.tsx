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
  title: "FE-Hub - 前端导航站 | 精选前端资源工具库",
  description: "FE-Hub 是专为前端开发者打造的资源导航平台。精选 CSS 工具、JavaScript 库、动画效果、UI 组件、设计资源、开发神器等优质前端资源，助力高效开发，提升编程技能。",
  keywords: "前端导航,前端资源,CSS工具,JavaScript库,Vue组件,React组件,动画库,UI设计,开发工具,前端神器,编程学习,网站模板",
  authors: [{ name: "FE-Hub Team" }],
  creator: "FE-Hub",
  publisher: "FE-Hub",
  alternates: {
    canonical: "https://fe-hub.cn",
  },
  openGraph: {
    title: "FE-Hub - 前端开发者的专业资源导航",
    description: "精选前端开发工具、CSS库、JavaScript框架、UI组件等优质资源，助力前端开发者高效编程",
    type: "website",
    locale: "zh_CN",
    siteName: "FE-Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "FE-Hub - 前端资源导航",
    description: "精选优质前端开发资源，CSS工具、JS库、设计素材一站式导航",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
