export const ikohoCaseStudy = {
  title: "Ikoho - Scaling a Luxury Streetwear Architecture",
  client: "Ikoho (D2C Streetwear & Footwear)",
  platform: "Shopify (Customized Minimog Theme)",
  timeline: "February 2026 – July 2026",
  role: "Lead Technical Consultant & Shopify Architect",
  heroImage: "/ikoho-hero.png",
  liveUrl: "https://ikoho.in",
  challenge: "Ikoho is a fast-growing, luxury Indian streetwear brand pushing boundaries in the post-sneaker era. As their traffic scaled, their existing Shopify infrastructure began to crack under the pressure. They faced five critical bottlenecks: Conversion Friction & Cart Abandonment, Multimedia Pipeline Failures, Checkout & Logistics Friction, Severe Technical Debt, and SEO Cannibalization.",
  solution: "Acting as the Lead Shopify Architect, I deployed a multi-phased technical overhaul to stabilize their infrastructure, boost mobile conversions, and rescue their organic search rankings.",
  phases: [
    {
      title: "Phase 1: UX Architecture & Cart Engineering (Feb 2026)",
      details: [
        "AJAX Cart Variant Swapper: Engineered a bespoke Javascript function inside the Minimog cart drawer to allow users to swap clothing sizes instantly without reloading.",
        "Aggressive CSS Specificity Wars: Permanently decoupled 3rd-party app styling from the theme's backend cache by injecting ultra-high specificity CSS selectors.",
        "Mobile Sticky ATC Validation Fix: Rewrote the WebComponent blind queries inside sticky-atc.liquid to unlock multi-node submissions on mobile devices."
      ]
    },
    {
      title: "Phase 2: Multimedia Optimization & FOMO Engineering (March 2026)",
      details: [
        "CSS Re-hydration Bypass: Moved away from Shopify's locked custom.css asset file to bypass locking algorithms during live re-hydration.",
        "Persistent Session Scarcity Engine: Engineered a hybrid availability badge system generating a persistent 'low stock' number specific to a user's session.",
        "Shadow DOM Browser Fallbacks: Bypassed Firefox Autoplay Shield with forced recovery on mobile swiping, preserving the 'Trusted User Gesture'.",
        "AJAX-Surviving Web Components: Engineered a native Web Component bound directly to the connectedCallback lifecycle method."
      ]
    },
    {
      title: "Phase 3: B2B Architecture & Data Cleanup (April - May 2026)",
      details: [
        "Bulk Order Infrastructure: Designed and engineered a custom B2B 'Bulk Order' page prototype opening a new revenue channel for wholesale clients.",
        "Storefront Auditing: Conducted a comprehensive live page audit and inventory badge cleanup to remove orphaned testing pages and broken link nodes."
      ]
    },
    {
      title: "Phase 4: Security Audit & API Checkout Logistics (June 2026)",
      details: [
        "Codebase Security Audit (XSS Mitigations): Verified that all DOM innerHTML injections are strictly bound to trusted server-side responses from the Storefront API.",
        "Flawless DOM Guard Implementations: Refactored legacy event listeners, ensuring scripts are wrapped in strict defensive DOM guards to eliminate browser crashes.",
        "Shiprocket API Rotation & Recovery: Orchestrated a high-stakes credential rotation for the Shiprocket Checkout API, bypassing a live lockout crisis with zero downtime."
      ]
    },
    {
      title: "Phase 5: Advanced Technical SEO (July 2026)",
      details: [
        "Custom Python Deep-Crawler: Engineered a bespoke Python crawler to bypass Shopify's security firewalls to audit the entire production site across 91 live pages.",
        "Sitemap Cannibalization Fix: Audited the theme's JSON templates, identified the correct architectural routes, and executed a complete sitemap cleanup.",
        "Alt-Text SEO Restoration: Identified and patched hundreds of missing image descriptions hardcoded deep within the theme assets."
      ]
    }
  ],
  results: [
    "Zero-Downtime Operations: Successfully migrated their fulfillment API credentials without halting warehouse shipments.",
    "Restored Organic Traffic: Eliminated sitemap cannibalization and resolved massive Alt-Text penalties, giving the brand a clean slate for Google indexing.",
    "Premium Brand Consistency: Ensured every pixel reflected Ikoho's luxury standard across all devices."
  ]
};
