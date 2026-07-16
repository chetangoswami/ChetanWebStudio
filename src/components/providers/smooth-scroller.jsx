'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export function SmoothScroller({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // Handle dynamic route transitions and purge residual scrolling momentum
  useEffect(() => {
    // Disable native browser scroll restoration to prevent it from fighting Lenis
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (lenis) {
      lenis.stop();
      
      // Execute scroll reset synchronously
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
      
      // Delay the scroll trigger refresh by 150ms to ensure Next.js has swapped the DOM
      setTimeout(() => {
        lenis.start();
        ScrollTrigger.refresh();
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  // Synchronize Lenis mathematically with GSAP's internal RequestAnimationFrame (RAF) ticker
  useEffect(() => {
    if (!lenis) return;

    // Connect GSAP's ticker to drive the Lenis instance
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing to prevent desynchronization between GSAP and Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,             // Interpolation intensity (lower value = smoother, heavier feel)
        duration: 1.2,          // Fallback duration parameter
        syncTouch: true,        // Replaces deprecated smoothTouch for flawless mobile touch handling
        smoothWheel: true,      // Enable mouse wheel smoothing
      }}
    >
      {children}
    </ReactLenis>
  );
}
