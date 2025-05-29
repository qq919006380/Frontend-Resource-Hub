'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) {
    return null;
  }
  
  return <NextGoogleAnalytics gaId={gaId} />;
} 