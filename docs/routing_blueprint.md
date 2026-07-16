# Routing & Fallback Pages Blueprint

## Overview
This blueprint outlines the technical implementation for establishing standard Next.js fallback and error pages, and refactoring the hardcoded `/work/*` portfolio routes to a scalable dynamic routing pattern (`/work/[slug]`) using local JSON or MDX data.

## 1. Missing Error/Fallback Pages
The Next.js App Router utilizes specific file conventions for loading states, not found states, and error boundaries.

### File Structure Changes
```text
app/
 ├── loading.jsx
 ├── error.jsx
 ├── not-found.jsx
 ├── work/
 │    ├── loading.jsx (Optional: specific to work section)
 │    └── error.jsx (Optional)
```

### Component Specifications

#### `app/loading.jsx`
- **Purpose**: Displays immediately when a route is navigated to, before the page component finishes loading.
- **Prop Structure**: None.
- **Design/Aesthetic**: Should feature a premium, minimalist loading animation (e.g., a simple GSAP rotating shape, animated Chetan Web Studio logo, or a subtle progress bar) matching the WebGL/brutalist style.

#### `app/error.jsx`
- **Purpose**: Catches unexpected runtime errors in Server Components and Client Components within the application.
- **Prop Structure**: 
  ```javascript
  {
    error: Error & { digest?: string },
    reset: () => void
  }
  ```
- **Design/Aesthetic**: A clean, dark-themed brutalist error screen with a `[ RELOAD CORE ]` button wired to the `reset` function to attempt recovery. Must remain fully styled even if data fetching fails. Must include `"use client"` at the top of the file.

#### `app/not-found.jsx`
- **Purpose**: Rendered when a route segment cannot be found, or when the `notFound()` function is explicitly thrown (e.g., in a dynamic route when the slug doesn't exist).
- **Prop Structure**: None.
- **Design/Aesthetic**: High-end 404 page ("404 // SIGNAL LOST"). Include magnetic hover buttons and a clear CTA back to the `[ HOME ]` or `[ WORK ]` directory.

---

## 2. Routing Scalability (Dynamic Portfolio)
Refactoring from `/work/ikoho` to `/work/[slug]` allows Chetan Web Studio to easily add new case studies by just adding data, rather than building new page components.

### File Structure Changes
```text
app/
 ├── work/
 │    ├── page.jsx              # The portfolio index page (listing all works)
 │    └── [slug]/
 │         └── page.jsx         # Dynamic detail page
 │
data/
 └── works.json                 # Local data store (or works/*.mdx files)
```

### Data Fetching & Structure (`data/works.json`)
Create a central data registry for all portfolio items:
```json
[
  {
    "id": "ikoho",
    "slug": "ikoho",
    "title": "Ikoho",
    "client": "Ikoho Inc.",
    "roles": ["Art Direction", "WebGL", "Frontend"],
    "description": "A spatial digital experience...",
    "coverImage": "/images/work/ikoho-cover.webp",
    "gallery": ["/images/work/ikoho-1.webp", "/images/work/ikoho-2.webp"]
  }
]
```

### `app/work/[slug]/page.jsx` Specification
- **Routing Logic**:
  - The page will receive `params` containing the `slug`.
  - Read from `data/works.json` and find the matching `slug`.
  - If no match is found, call the Next.js `notFound()` utility function to trigger `not-found.jsx`.
- **Static Generation (`generateStaticParams`)**:
  - Export `generateStaticParams()` to pre-render the known slugs at build time.
  ```javascript
  import worksData from '@/data/works.json';
  
  export function generateStaticParams() {
    return worksData.map((work) => ({
      slug: work.slug,
    }));
  }
  ```
- **SEO & Metadata (`generateMetadata`)**:
  - Export `generateMetadata({ params })` to dynamically set the `<title>` and `<meta name="description">` based on the fetched project data.

## Developer Next Steps
- Implement `error.jsx`, `loading.jsx`, and `not-found.jsx` in the root `app/` folder with GSAP animations.
- Migrate existing hardcoded pages (e.g., `/work/ikoho`) into a unified `works.json` or MDX structure.
- Delete the old hardcoded folders in `app/work/` and replace them with the `app/work/[slug]` folder.
- Ensure all transitions remain seamless and maintain the agency's premium "Apple-style WebGL" aesthetic.
