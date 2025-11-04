# Ashikur Rahaman Portfolio Website

## Overview

This is a premium dark-themed portfolio website for Ashikur Rahaman, a blockchain developer and business entrepreneur. The application is a single-page portfolio featuring sophisticated blockchain-themed animations, showcasing professional experience, ventures, skills, and testimonials. Built with React, TypeScript, and modern web technologies, it delivers an immersive user experience with particle systems, animated backgrounds, and smooth scroll-triggered interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured with custom aliases and runtime error handling
- **Wouter** for lightweight client-side routing (single-page application with `/` and 404 routes)
- **Single-Page Layout**: All content sections rendered on one scrollable page with anchor navigation

**UI Component System**
- **Shadcn/ui** component library based on Radix UI primitives
- **New York** style variant with dark theme as default
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture located in `client/src/components/ui/` with extensive pre-built components (buttons, cards, dialogs, forms, etc.)

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management
- Custom query client configuration with credential-based requests
- Optimistic UI updates with disabled refetching by default

**Animation System**
- **Framer Motion** for declarative animations and scroll-triggered effects
- **Custom Canvas Animations**: 
  - `BlockchainBackground.tsx` - Interconnected node network visualization
  - `TechParticles.tsx` - Floating particle system
  - `DataStream.tsx` - Vertical data stream effects
- Accessibility-first: Respects `prefers-reduced-motion` system preference
- Staggered fade-ins, slide-ins, and parallax effects throughout sections

**Design System**
- **Dark-first theming** with electric blue (#00d4ff) as primary accent
- CSS custom properties for theming with HSL color format
- **Typography**: Inter/Poppins for body, Source Code Pro for technical elements
- Gradient text effects, glass-morphism navigation, and premium hover states
- Responsive breakpoint at 768px for mobile adaptations

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Development mode uses Vite middleware for HMR
- Production build uses esbuild for server bundling (ESM format)

**Middleware & Request Handling**
- JSON body parsing with raw body preservation for webhook verification
- Request/response logging middleware for API routes
- Custom response time tracking

**Storage Layer**
- **In-Memory Storage** (`MemStorage` class) as default implementation
- Abstracted `IStorage` interface for CRUD operations on users
- Designed to be swapped for database implementation (PostgreSQL prepared via Drizzle)

**Session Management**
- Configured for `connect-pg-simple` session store (PostgreSQL-backed sessions)
- Cookie-based authentication ready for implementation

### External Dependencies

**Database (Configured but Not Actively Used)**
- **PostgreSQL** via `@neondatabase/serverless` driver
- **Drizzle ORM** (v0.39.1) for type-safe database operations
- **Schema**: Basic user table with UUID primary keys defined in `shared/schema.ts`
- **Migrations**: Output directory set to `./migrations/`
- Database URL expected via `DATABASE_URL` environment variable
- Note: Currently using in-memory storage; Postgres integration prepared for future use

**UI & Component Libraries**
- **Radix UI**: Comprehensive unstyled component primitives (accordion, dialog, dropdown, navigation, tooltip, etc.)
- **Shadcn/ui**: Pre-styled components built on Radix primitives
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (Si* icons for brand logos)
- **Embla Carousel**: Touch-friendly carousel component
- **CMDK**: Command menu interface component

**Form Handling**
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration with React Hook Form

**Styling & Utilities**
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date formatting and manipulation

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **@replit/vite-plugin-dev-banner**: Development environment banner

**Fonts**
- **Google Fonts**: Inter, Poppins, Source Code Pro loaded via CDN in `index.html`

**Static Assets**
- Images stored in `attached_assets/` directory
- Vite alias `@assets` configured for asset imports
- Logos for ventures (SpudBlocks, Arcane, AscendEX, AGT)