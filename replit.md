# Panda Digital - Marketing Website

## Overview

Panda Digital is a marketing agency website specializing in helping Chinese companies expand into global markets. The application is built as a modern Next.js-based marketing site with a focus on showcasing services (social media marketing, web development, sales generation, and AI agent services), displaying team information, and collecting client inquiries through a contact form.

The site features a polished, professional design inspired by modern web aesthetics (Linear, Stripe, Framer, Vercel) with support for both light and dark modes, smooth animations, and responsive layouts optimized for international audiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 14+ with App Router
- Uses the modern App Router (`app/` directory) for routing and layouts
- Server Components by default with Client Components (`"use client"`) for interactive features
- TypeScript for type safety across the application

**UI Component Library**: shadcn/ui
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with a custom design system
- Class Variance Authority (CVA) for component variant management
- Components follow a compositional pattern stored in `components/ui/`

**Styling System**:
- Tailwind CSS with custom configuration supporting dark mode via class strategy
- CSS custom properties for theme values (colors, spacing, borders)
- Design tokens defined in `app/globals.css` and `client/src/index.css`
- Typography uses Google Fonts: Inter (body) and Poppins/Space Grotesk (headings)
- Color palette features bamboo green primary and coral/red accent colors

**Animation & Interaction**:
- Framer Motion for page transitions, scroll animations, and micro-interactions
- Motion components wrap sections for viewport-triggered animations
- Custom hover states using Tailwind utility classes (`hover-elevate`, `active-elevate-2`)

**State Management**:
- React Hook Form with Zod validation for form handling (contact form)
- TanStack Query (React Query) for server state management
- next-themes for theme switching (light/dark mode)
- Custom hooks for responsive behavior (`use-mobile`, `use-toast`)

**Routing Structure**:
- Home page (`/`) - Hero, services, stats, testimonials, management team, CTA
- About page (`/about`) - Company values, team profiles
- Contact page (`/contact`) - Contact form and company information
- 404 page for unmatched routes

### Backend Architecture

**Server Framework**: Next.js 14 with custom bootstrap
- Next.js handles all routing, server-side rendering, and API routes
- Custom server bootstrap in `server/index.ts` using Next.js Node API
- Runs on port 5000 for Replit compatibility
- Development server with Fast Refresh for instant updates

**Build Process**:
- Development: `npm run dev` runs tsx with server/index.ts which bootstraps Next.js
- Production: `next build` creates optimized production build
- Build output in `.next/` directory (excluded from git)

**Server Configuration**:
- Environment-based configuration (NODE_ENV for dev/production)
- Next.js path aliases configured in tsconfig.json (`@/*` maps to root)
- Static assets served from `/public` directory

### Data Storage Solutions

**Database**: PostgreSQL via Neon serverless
- Connection managed through `@neondatabase/serverless` package
- Drizzle ORM for type-safe database operations
- Schema defined in `shared/schema.ts`

**Schema Design**:
- Users table with UUID primary keys, username, and password fields
- Zod schemas generated from Drizzle for runtime validation
- Migrations stored in `migrations/` directory

**Session Management**:
- connect-pg-simple for PostgreSQL-backed session storage
- Prepared for authentication flows (schema includes user/password fields)

**In-Memory Fallback**:
- `MemStorage` class in `server/storage.ts` provides in-memory implementation
- Allows development without database connection
- Implements `IStorage` interface for easy swapping with database implementation

### External Dependencies

**UI & Component Libraries**:
- Radix UI primitives (accordion, dialog, dropdown, tooltip, etc.)
- shadcn/ui component system
- Lucide React for icons
- React Icons for social media icons

**Forms & Validation**:
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for integrating Zod with React Hook Form

**Data Fetching**:
- TanStack Query (React Query) v5 for async state management
- Configured client in `client/src/lib/queryClient.ts`

**Routing**:
- Next.js App Router for all routing (file-based routing in `app/` directory)
- next/link for client-side navigation
- next/navigation hooks (usePathname) for route awareness

**Animation**:
- Framer Motion for declarative animations
- Animation variants for consistent motion design

**Development Tools**:
- Replit-specific plugins for development environment integration
- TypeScript for type checking
- ESLint/Prettier implied by project structure

**Fonts**:
- Google Fonts (Inter, Poppins, Space Grotesk)
- @next/font for optimized font loading

**Utilities**:
- clsx and tailwind-merge (via cn utility) for conditional class names
- date-fns for date manipulation
- nanoid for generating unique IDs

**Production Build**:
- Next.js build system (webpack-based) for both server and client
- Automatic code splitting and optimization
- PostCSS with Tailwind and Autoprefixer

## Recent Changes (October 2025)

**Complete Next.js Conversion:**
- Converted entire application from React/Vite/Express to Next.js 14 with App Router
- All 10 components migrated with proper "use client" directives for interactive features
- All 3 pages created in Next.js App Router structure
- Replaced wouter routing with Next.js Link and navigation hooks
- Images migrated to `/public/images/` directory
- Custom server bootstrap in `server/index.ts` to work with existing workflow
- Security: Removed .next build artifacts from git, added proper .gitignore entries