# Overview

This project is a pnpm workspace monorepo utilizing TypeScript, designed to build and manage various applications and shared libraries. The core purpose is to support BH Labs Recovery Pod, a biohacking/wellness company, through marketing landing pages, an API server, and internal tools. The project aims to provide a comprehensive digital presence, streamline development, and facilitate business operations for the company's offerings across different market segments like hotels, residential, fitness, and athletics.

Key capabilities include:
- Generating dynamic, SEO-optimized landing pages with interactive elements (e.g., ROI calculators).
- Providing a robust API backend for data persistence and business logic.
- Developing shared components and libraries to ensure consistency and efficiency across applications.
- Supporting various marketing campaigns with tailored content and conversion-focused designs.

The business vision is to establish BH Labs as a leader in biohacking and wellness solutions, leveraging technology to reach diverse markets and drive revenue through effective digital engagement and lead generation.

# User Preferences

I want iterative development. I prefer detailed explanations. Ask before making major changes. Do not make changes to the folder `lib/api-client-react/src/generated/`. Do not make changes to the folder `lib/api-zod/src/generated/`.

# System Architecture

The project is structured as a pnpm workspace monorepo, organizing deployable applications (`artifacts/`) and shared libraries (`lib/`). Each package manages its own dependencies and is configured for TypeScript with `composite: true` and project references for efficient type-checking and build processes.

**UI/UX Decisions:**
- **Branding:** BH Labs branding is consistently applied across all landing pages and artifacts, using a specific color palette: dark emerald (#0A2E1C) primary, gold (#C8A951) accent, and cream (#F5F1EA) background.
- **Typography:** Playfair Display for display serifs and Inter for body sans-serif text.
- **Imagery:** Real equipment photos are used, alongside AI-generated hero and resort images where appropriate, with specific processing and display requirements (e.g., `-auto-orient`, `object-contain`, max-height 400px).
- **Interactive Elements:** ROI calculators are a central feature on landing pages, designed with sliders for inputs and real-time results, often incorporating loss aversion messaging.
- **Animations:** Framer-motion is used for scroll-triggered animations on landing pages.
- **Layouts:** Landing pages adhere to specific section structures (e.g., 7-section structure for campaign pages) and often feature minimal sticky headers, no traditional navbars/footers for conversion optimization, and two-step contact forms with progress indicators.
- **Color Schemes:** Loss aversion sections are often red-themed, while opportunity cost sections use elegant stone colors. Emerald green is consistently used for results panels and CTA buttons.

**Technical Implementations:**
- **Monorepo Tool:** pnpm workspaces.
- **Node.js:** Version 24.
- **TypeScript:** Version 5.9, with a shared `tsconfig.base.json` and root `tsconfig.json` for project references and `composite: true`.
- **Build System:** esbuild for CJS bundling; `tsc --build --emitDeclarationOnly` for type-checking and `.d.ts` generation.
- **API Framework:** Express 5.
- **Database:** PostgreSQL with Drizzle ORM for database interactions and schema management.
- **Validation:** Zod (`zod/v4`) and `drizzle-zod` for request/response validation and Drizzle schema integration.
- **API Codegen:** Orval generates React Query hooks (into `@workspace/api-client-react`) and Zod schemas (into `@workspace/api-zod`) from an OpenAPI specification.
- **Frontend Frameworks:** React with Vite for landing pages, and Tailwind CSS for styling slide decks.
- **Routing:** `wouter` for client-side routing on multi-page landing pages.
- **SEO/AEO Optimization:** Extensive use of JSON-LD (Organization, Product, FAQPage, BreadcrumbList, WebPage), per-route canonical URLs, OG/Twitter meta tags, `robots.txt` configured for AI crawlers, `llms.txt`, lazy loading, and specific title tag guidelines.
- **Form Handling:** UTM parameter capture and storage (sessionStorage to form payload).

**Feature Specifications:**
- **Landing Pages (`artifacts/landing-pages`, `fitness-landing`, `residential-landing`, `athletics-landing`):**
    - Designed for various verticals (Hotels, Residential, Fitness, Athletics).
    - Campaign-specific pages with simplified navigation for paid ad traffic.
    - Interactive ROI calculators tailored to each vertical with specific input fields and output metrics.
    - Lead capture forms with qualification fields and thank-you states.
    - Comprehensive SEO/AEO features including JSON-LD, meta tags, and AI crawler directives.
    - FAQ sections with accordion UI and JSON-LD.
    - Content sections like "Why This Matters Now," "Proof/Credibility," "Opportunity Cost," and equipment showcases grouped by outcomes.
- **API Server (`artifacts/api-server`):**
    - Express 5 based, with routes organized in `src/routes/`.
    - Uses `@workspace/api-zod` for validation and `@workspace/db` for persistence.
    - Health check endpoint at `/api/health`.
- **Database Layer (`lib/db`):**
    - Drizzle ORM with PostgreSQL.
    - Exports a Drizzle client and schema models.
    - Drizzle Kit for development migrations (`push`, `push-force`).
- **API Specification (`lib/api-spec`):**
    - Manages `openapi.yaml` and `orval.config.ts`.
    - Drives codegen for client-side React Query hooks and server-side Zod schemas.
- **Utility Scripts (`scripts`):**
    - A dedicated package for various utility scripts, runnable via pnpm.

# External Dependencies

- **Node.js:** Runtime environment.
- **pnpm:** Package manager and monorepo tool.
- **TypeScript:** Programming language.
- **Express 5:** API framework.
- **PostgreSQL:** Database system.
- **Drizzle ORM:** Object-Relational Mapper for database interaction.
- **Zod (`zod/v4`):** Schema declaration and validation library.
- **`drizzle-zod`:** Integration between Drizzle ORM and Zod.
- **Orval:** OpenAPI client code generator.
- **esbuild:** JavaScript bundler.
- **React:** Frontend library for building user interfaces.
- **Vite:** Next-generation frontend tooling for React applications.
- **wouter:** A tiny (~1.5KB) React hook-based router.
- **framer-motion:** Animation library for React.
- **Tailwind CSS:** Utility-first CSS framework (used in `hotel-deck`).
- **Google Fonts:** Playfair Display and Inter are used for typography.
- **OpenAPI 3.1:** Specification for API definition.
- **AI Crawlers:** OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot (allowed via `robots.txt`).
- **Global Wellness Institute:** Source for citations (2024/2025 data).