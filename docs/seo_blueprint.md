# SEO Technical Blueprint: Audit Resolution Plan (Phase 2)

**Target Website:** Chetan Web Studio (`AgencySite`)
**Objective:** Address critical SEO shortcomings identified in the audit (Missing Metadata, Missing Sitemap & Robots.txt, and Suboptimal Structured Data) to align with our elite $10k+ brand positioning.

## 1. Page-Level Metadata Specification (Next.js App Router)
To avoid duplicate global titles and inject our premium brand voice, add the following `metadata` objects to their respective `page.jsx` or `page.tsx` files.

### `app/work/page.jsx` (Portfolio / Work Page)
```javascript
export const metadata = {
  title: 'Selected Works | Chetan Web Studio',
  description: 'Explore our portfolio of award-winning, high-performance WebGL websites and digital experiences crafted for elite brands.',
  openGraph: {
    title: 'Selected Works | Chetan Web Studio',
    description: 'Explore our portfolio of award-winning, high-performance WebGL websites and digital experiences crafted for elite brands.',
    url: 'https://chetanwebstudio.com/work',
    type: 'website',
  }
};
```

### `app/contact/page.jsx` (Contact / Lead Gen Page)
```javascript
export const metadata = {
  title: 'Start a Project | Chetan Web Studio',
  description: 'Partner with Chetan Web Studio. We design and engineer $10k+ ultra-premium digital experiences for industry leaders.',
  openGraph: {
    title: 'Start a Project | Chetan Web Studio',
    description: 'Partner with Chetan Web Studio. We design and engineer $10k+ ultra-premium digital experiences for industry leaders.',
    url: 'https://chetanwebstudio.com/contact',
    type: 'website',
  }
};
```

## 2. Sitemap & Robots.txt Specification
Implement these files in the root `app/` directory to ensure optimal crawling and indexing. We utilize dynamic JS generation compatible with Next.js App Router.

### `app/sitemap.js`
```javascript
export default function sitemap() {
  const baseUrl = 'https://chetanwebstudio.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    }
  ];
}
```

### `app/robots.js`
```javascript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: 'https://chetanwebstudio.com/sitemap.xml',
  };
}
```

## 3. Structured Data (JSON-LD) Specification
Enhance rich snippet opportunities by injecting schema into the application. We use Next.js `dangerouslySetInnerHTML` for JSON-LD.

### Global Schema: `app/layout.jsx`
Inject the `ProfessionalService` schema representing Chetan Web Studio in the global layout root `body`.
```javascript
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Chetan Web Studio",
    "image": "https://chetanwebstudio.com/images/og-image.jpg",
    "url": "https://chetanwebstudio.com",
    "priceRange": "$$$$",
    "description": "Elite digital agency specializing in premium $10,000+ React and WebGL websites for global brands.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/chetanwebstudio",
      "https://linkedin.com/company/chetanwebstudio"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
```

### Contextual Schema: `/work/[project]/page.jsx` (Dynamic Inner Project Pages)
On dynamic inner portfolio case study pages, implement `CreativeWork` schema contextually.
```javascript
// Inside the project detail page component
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title, // Dynamically inject project title
  "creator": {
    "@type": "Organization",
    "name": "Chetan Web Studio"
  },
  "genre": "Web Development & WebGL Design",
  "url": `https://chetanwebstudio.com/work/${project.slug}`, // Dynamically inject URL
  "image": `https://chetanwebstudio.com${project.image}` // Dynamically inject Image
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
    {/* Rest of the page component */}
  </>
);
```
