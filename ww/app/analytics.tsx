'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (command: string, trackingId: string, config: { page_path: string }) => void;
  }
}

const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default Analytics;