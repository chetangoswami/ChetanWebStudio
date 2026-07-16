// src/lib/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Ensure registration only occurs in the browser to prevent Next.js SSR fatal errors
if (typeof window !== "undefined") {
  // Prevent double-registration in React 18 Strict Mode development environments
  if (!gsap.core.globals()["ScrollTrigger"]) {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    
    // Globally optimize GSAP for hardware acceleration across all modern browsers
    gsap.config({
      force3D: true, 
    });
  }
}

// Export the centralized instances for uniform use across the application
export { gsap, ScrollTrigger, useGSAP };
