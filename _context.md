# Chetan Web Studio - Project Context

## 1. Agency Mission & Overview
We are Chetan Web Studio. We are an elite, premium digital agency building all kinds of high-end websites. Our absolute priority is creating cutting-edge digital experiences for elite brands.

## 2. Target Audience
- **Demographic:** Premium brands and businesses requiring $10,000+ Apple-style WebGL websites.
- **Profile:** Industry leaders, high-end businesses, and brands that value prestige, technical excellence, and brutalist aesthetic dominance.

## 3. Product & Core Value Proposition
- **Product:** $10,000+ ultra-premium React/Vite websites built with cutting-edge tech (WebGL, Framer Motion).
- **Value Proposition:** We build digital storefronts engineered for elite brands. Bridging stunning aesthetics with ruthless performance to command authority and scale conversions.

## 4. Brand Voice
- **Tone:** Premium, authoritative, clean, minimalist (Apple-esque), avant-garde, and highly technical.
- **Messaging:** Focus on prestige, engineering excellence, high-end aesthetics, and ruthless performance.

## 5. Sales & Marketing Context
- **Sales Representative:** Hardik
- **Methodology:** Category A/B WhatsApp scripts targeted at high-ticket business leads.

## 6. Implementation Requirements (Audit July 2026)
Based on the latest full-site audit (Focus: Home Page Post-Selected Works), all team members must ensure the following requirements are met in their respective phases:

### Security (Security Auditor)
- Run `npm audit` manually.
- Integrate Dependabot in GitHub for vulnerability tracking.
- Ensure standard Next.js security headers in `next.config.mjs`.

### Content & Messaging (Copywriter)
- **Brand Injection:** Mention "Chetan Web Studio" explicitly in Act 6 to boost SEO and brand recall (e.g., "At Chetan Web Studio, we don't build websites...").
- **Social Proof:** Add trust markers (e.g., "Trusted by elite brands", ROI metrics, client satisfaction notes) near bold claims in Act 4 and Act 6.
- **Copy Refinement:** In Act 4 Capabilities Grid, change "Spatial UX & Motion Design" (Item 03) to "Interactive UX" or "Micro-interactions" to avoid repeating "Spatial".
- **CTA Clarity:** Add micro-copy under the Act 6 CTA `[ INITIATE PROJECT ]` explaining the exact next step (e.g., "Schedule a confidential discovery call").

### UI/UX & Aesthetics (UI/UX Designer / Frontend Developer)
- **Entrance/Stagger Animations:** Apply GSAP ScrollTrigger entrance animations (e.g., stagger fade-up) and premium hover effects (localized glows, magnetic tracking) to the Capabilities Grid (Act 4). Avoid basic CSS.
- **Dynamic Marquee:** Update Tech Marquee (Act 5) to tie scrolling speed/skew to the user's scroll velocity via GSAP ScrollTrigger.
- **Text Reveals:** Add cinematic text-split reveal animations for the Final CTA Section (Act 6) headings and subheadings.
- **Custom Cursor:** Extend custom cursor logic to interact with the Capabilities Grid, CTA buttons, and "Ready to Scale?" button (sticking, magnetic pull, inversion).
- **Micro-interactions:** Upgrade standard button hovers to magnetic physics or mask-fill effects. Animate the SVG noise texture in the CTA section to have an "alive" film-grain quality.

### SEO & Performance (SEO Specialist / Frontend Developer)
- **Metadata:** Export specific custom Next.js metadata (title/description) for all inner pages (e.g., `/work/page.jsx`, `/contact/page.jsx`) to avoid duplication.
- **Sitemap & Robots:** Add `sitemap.js` and `robots.txt` in the `app/` directory.
- **Structured Data:** Upgrade JSON-LD from generic WebSite to `ProfessionalService` or `LocalBusiness` in `layout.jsx`. Inject `Portfolio` schemas on inner pages.
- **Image Optimization:** Migrate all `<img>` tags to Next.js `<Image />` for WebP compression, responsive sizing, and lazy-loading.
- **Performance:** Use `next/dynamic` to dynamically import heavy GSAP/ThreeJS scripts for improved TTI.

### Technical QA & Architecture (QA Engineer / Frontend Developer)
- **Fallback Pages:** Build bespoke `not-found.jsx`, `error.jsx`, and `loading.jsx` matching the premium aesthetic.
- **Routing:** Refactor hardcoded portfolio items (e.g., `/work/ikoho`) to dynamic routing (`/work/[slug]`).
- **Layout Robustness:** Verify GSAP `ScrollTrigger` pin spacers in horizontal scroll sections accurately calculate and push down the global `<Footer />`.
- **Cohesion:** Ensure Acts 4-6 maintain the high-end GSAP/WebGL architecture of the sections above them, removing disjointed CSS-only fallbacks.

## History & Feedback
- [15-07-2026] Phase 0 (Discovery): Account Manager created initial `_context.md` file.
- [15-07-2026] Phase 1 (Copywriting): Copywriter generated premium dental-niche Hero copy.
- [15-07-2026] Phase 1.5 (Pivot): CEO corrected strategy to a broad, elite agency for all high-end websites. Copywriter updated context and generated new broad-agency WebGL/Brutalist Hero copy.
- [15-07-2026] Phase 1.8 (Legal): Legal Counsel drafted GDPR & IT Act compliant Privacy Policy and WebGL-protected Terms of Service.
- [16-07-2026] Phase 0 (Audit Alignment): Account Manager updated requirements based on the Agency Site Audit Report, detailing Action Items for Security, Content & Messaging, UI/UX, SEO & Performance, and Technical QA.
- [16-07-2026] Phase 1 (Prototyping): UI/UX Designer generated visual UI mockups for 404, Error, Loading screens and GSAP hover states. Awaiting Art Director review before code is written.
