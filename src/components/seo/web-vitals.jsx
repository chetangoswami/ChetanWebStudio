'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // In production, this can be sent to an analytics endpoint.
    // For now, we log to the console as per requirements.
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
  });

  return null;
}
