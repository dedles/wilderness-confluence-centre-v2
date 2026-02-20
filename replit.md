# Entelechy Community Website

## Project Overview
A responsive React-based platform for Entelechy intentional community on Vancouver Island. Features an earthy, organic aesthetic with professional functionality including navigation, testimonials, applications, and gallery sections.

## Stack
- React with TypeScript
- Styled-components for styling
- Wouter for routing
- React Hook Form with Zod validation
- Formspree integration for forms
- Tailwind CSS with custom theme
- Lucide Icons
- Dark mode support throughout

## Recent Changes
**December 30, 2024:**
- ✓ Comprehensive SEO optimization with meta tags, Open Graph, and Twitter cards
- ✓ Added structured data (JSON-LD) for Organization and Place schema
- ✓ Created dynamic SEO component for page-specific optimization
- ✓ Generated robots.txt and sitemap.xml for search engine crawling
- ✓ Added PWA manifest.json for mobile app functionality
- ✓ Implemented breadcrumb navigation for better site structure
- ✓ Added performance optimizations with DNS prefetch and preconnect
- ✓ Enhanced geographic and location-based SEO targeting
- ✓ Added canonical URLs and proper meta descriptions across all pages
- ✓ Updated all SEO URLs to use production domain: https://www.entelechysaltspring.ca/
- ✓ Created vercel.json configuration for production deployment on Vercel
- ✓ Fixed TypeScript compatibility issue with server/vite.ts by updating package dependencies
- ✓ Created new About Us page combining content from Hero and AboutEntelechy components
- ✓ Added About Us page to navbar dropdown menu and sitemap for SEO

**December 29, 2024:**
- ✓ Fixed Community page section titles to be left-aligned instead of center-aligned
- ✓ Removed Gallery component from bottom of Community page
- ✓ Added ImageCaption components interspersed throughout Community page content
- ✓ Ensured Gallery, Testimonials, and Contact links appear in mobile navbar menu
- ✓ Fixed mobile navbar link styling for proper visibility and contrast
- ✓ Implemented dropdown menu auto-close functionality using escape key simulation
- ✓ Applied dropdown closing fix to both About and Applications menus
- ✓ Simplified Navbar code by removing unused imports and creating helper functions
- ✓ Fixed TypeScript error in LongTermResidentPage by properly accessing window.Tally

## Architecture
- Frontend-focused with minimal backend for form handling
- Responsive mobile-first design
- Component-based architecture with reusable styled components
- Theme context for dark/light mode switching
- Gallery data management through centralized data files

## User Preferences
- Prefers simple, everyday language in communications
- Values clean, professional appearance with earthy aesthetics
- Wants comprehensive solutions rather than partial implementations
- Appreciates confirmation of working functionality

## Important Notes
- Uses forest green (#3a7563) as primary color
- Background images maintain 4:3 aspect ratio
- Local images preferred over external URLs
- Mobile menu slides in from right side
- Dropdown menus now properly close when navigation occurs