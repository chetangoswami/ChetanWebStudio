export const yourindiaholidaysCaseStudy = {
  title: "Your India Holidays - Modernizing AI-Driven Travel",
  client: "Your India Holidays",
  platform: "React, Firebase, Cloudflare, AI",
  timeline: "2024 – Present",
  role: "Lead Technical Consultant",
  heroImage: "/yourindiaholidays-hero.png",
  liveUrl: "https://yourindiaholidays.com",
  challenge: "Complex AI hallucinations, slow queries on massive collections, and CI/CD bottlenecks severely impacted operational efficiency.",
  solution: "I spearheaded a technical overhaul across the AI pipeline, admin database queries, and deployment operations to stabilize the platform.",
  phases: [
    {
      title: "Phase 1: AI Planner Architecture",
      details: [
        "Cloudflare Workers: Migrated the AI pipeline to edge compute for rapid generation.",
        "Llama 3 Integration: Replaced legacy models with Llama 3 to drastically reduce AI hallucinations in travel itineraries."
      ]
    },
    {
      title: "Phase 2: Admin Dashboard Optimization",
      details: [
        "getCountFromServer: Implemented native Firestore aggregation to avoid massive document reads and speed up dashboard load times.",
        "Search Filtering: Engineered a robust multi-parameter search system for admin operations."
      ]
    },
    {
      title: "Phase 3: Security & CI/CD",
      details: [
        "GitHub Actions: Automated the deployment process to eliminate manual CI/CD bottlenecks.",
        "App Check: Secured the backend infrastructure against unverified requests using Firebase App Check."
      ]
    },
    {
      title: "Phase 4: SEO & Data Integrity",
      details: [
        "Data Integrity: Re-structured the NoSQL schema and enforced strict rules to maintain database hygiene.",
        "SEO Optimization: Overhauled semantic markup and metadata to boost organic search engine rankings."
      ]
    }
  ],
  results: [
    "Eliminated AI Hallucinations: Achieved highly reliable, contextual tour generation.",
    "Lightning-fast Dashboard: Drastically reduced load times for backend admin portals.",
    "Automated Deployments: Replaced manual bottlenecks with seamless GitHub Actions pipelines."
  ]
};
