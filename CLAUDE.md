# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs server with tsx)
- `npm run build` - Build for production (builds client with Vite and server with esbuild)
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes using Drizzle Kit

## Project Architecture

This is a full-stack React application for the Entelechy intentional community website, built with:

### Frontend (client/)
- **React 18** with **TypeScript** for the UI
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Vite** for build tooling and development server
- **Tailwind CSS** with custom theme colors (forest-green, sage, earth, sky palettes)
- **Radix UI** components with custom shadcn/ui component library
- **Framer Motion** for animations
- **React Query** (@tanstack/react-query) for state management and API calls
- **Styled Components** for additional styling needs

### Backend (server/)
- **Express.js** server with TypeScript
- **Drizzle ORM** with PostgreSQL database
- **Zod** for schema validation
- Development and production modes with different static file serving

### Key Architecture Patterns

1. **Monorepo Structure**: 
   - `client/` - React frontend
   - `server/` - Express backend  
   - `shared/` - Shared schemas and types

2. **Path Aliases**:
   - `@/` maps to `client/src/`
   - `@shared/` maps to `shared/`

3. **Lazy Loading**: All pages are lazy-loaded for code splitting

4. **Theme System**: Custom ThemeContext with dark/light mode support, persisted to localStorage

5. **Component Organization**:
   - `components/` - Reusable components
   - `components/ui/` - Radix UI based components
   - `components/styled/` - Styled components
   - `pages/` - Route-level page components
   - `contexts/` - React contexts (ThemeContext)
   - `hooks/` - Custom React hooks
   - `lib/` - Utility functions and configurations

6. **Database**: PostgreSQL with Drizzle ORM, schema defined in `shared/schema.ts`

## Development Setup

The project uses a single port (5000) for both API and client serving. In development, Vite dev server is integrated with Express. In production, Express serves static files from the built client.

## Styling

The project uses Tailwind CSS with a custom theme focused on nature-inspired colors for the intentional community brand. Custom CSS variables and a dark mode implementation are integrated with the Tailwind theme system.

## Pages and Routes

The site includes pages for community information, gallery, contact, resident applications, work-stay guest info, downloads, and testimonials - all focused on the Entelechy intentional community.