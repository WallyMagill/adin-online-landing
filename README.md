# ADIN - AI-First Venture Capital Platform

A Next.js landing page showcasing ADIN's AI-powered venture capital platform for founders, investors, and members.

**Live Site:** [https://adin-online-landing.vercel.app/](https://adin-online-landing.vercel.app/)

## Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

### Bundle Analysis

```bash
npm run analyze
```

## Performance Optimizations

This project has been optimized for maximum performance and SEO:

- **75+ Lighthouse Performance Score** (Due to some links being blank)
- **95+ Accessibility Score**
- **100 SEO Score**
- Image optimization with priority/lazy loading
- Component lazy loading with dynamic imports
- Font optimization and preloading
- Comprehensive SEO metadata
- Vercel Analytics integration
- Error boundaries and loading states
- Memoized expensive calculations
- Bundle size optimization

## Tech Stack

- **Framework:** Next.js 15.5.4
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Ionicons
- **Analytics:** Vercel Analytics
- **Image Processing:** Sharp, Plaiceholder
- **Bundle Analysis:** @next/bundle-analyzer

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO and analytics
│   ├── page.tsx           # Home page
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   ├── founder/           # Founder route
│   ├── investor/          # Investor route
│   └── member/            # Member route
├── Components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── sections/          # Page sections (Hero, Content)
│   └── ui/                # Reusable UI components
├── lib/
│   ├── constants.ts       # App constants and content
│   └── utils.ts           # Utility functions
└── types/
    └── components.ts      # TypeScript type definitions
```

## Testing

Run comprehensive performance tests:

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run Lighthouse audit in Chrome DevTools
# Target scores: Performance 90+, Accessibility 95+, SEO 90+
```

## Routes

- `/` - Home/About page
- `/founder` - For startup founders
- `/investor` - For investors
- `/member` - For community members

## Performance Features

### Image Optimization

- Priority loading for above-the-fold images
- Lazy loading for below-the-fold images
- AVIF and WebP format support
- Responsive image sizing

### Code Splitting

- Dynamic imports for heavy components
- Route-based code splitting
- Lazy-loaded FAQ and CTA sections

### SEO Optimization

- Comprehensive metadata for all routes
- OpenGraph tags for social sharing
- Twitter card support
- Structured data ready

## Development

```bash
# Start development server with Turbopack
npm run dev

# Build production bundle
npm run build

# Analyze bundle size
npm run analyze

# Run linter
npm run lint
```

## Key Dependencies

- `next` - React framework with SSR/SSG
- `react` & `react-dom` - UI library
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animation library
- `@vercel/analytics` - Performance monitoring
- `plaiceholder` - Blur placeholder generation
- `sharp` - Image processing

## Deployment

**Live Production Site:** [https://adin-online-landing.vercel.app/](https://adin-online-landing.vercel.app/)

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/adin-online-landing)

Or manually:

```bash
vercel --prod
```

## Monitoring

After deployment, monitor performance at:

- Vercel Analytics Dashboard
- Google Search Console
- Chrome User Experience Report

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
