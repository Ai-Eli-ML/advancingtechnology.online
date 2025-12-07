# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**advancingtechnology.online** - Main business website for AdvancingTechnology, built with Next.js 15.3.5, React 19, and Tailwind CSS v4.

**Repository**: Part of the AdvancingTechnology Business Ecosystem monorepo
**Website URL**: [advancingtechnology.online](http://advancingtechnology.online)
**Status**: Fresh Next.js project, minimal customization from `create-next-app` template

## Technology Stack

- **Framework**: Next.js 15.3.5 with App Router
- **React**: 19.0.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (next/font/google)
- **Dev Mode**: Turbopack enabled for faster builds

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev
# or from monorepo root:
pnpm dev:advtech-online

# Production build
npm run build

# Start production server
npm start

# Lint with ESLint (Next.js config)
npm run lint
```

**Default Port**: http://localhost:3000

## Project Structure

```
advancingtechnology.online/
├── src/
│   └── app/              # Next.js App Router
│       ├── layout.tsx    # Root layout with Geist fonts
│       ├── page.tsx      # Home page (default Next.js starter)
│       ├── globals.css   # Tailwind CSS imports & theme
│       └── favicon.ico
├── public/               # Static assets (SVG icons)
├── next.config.ts        # Next.js configuration (minimal)
├── tsconfig.json         # TypeScript config with path aliases (@/*)
├── eslint.config.mjs     # ESLint with Next.js presets
├── postcss.config.mjs    # PostCSS with Tailwind v4
└── package.json
```

## Architecture & Patterns

### App Router Structure
- Uses Next.js 15 App Router (not Pages Router)
- Server Components by default (no 'use client' needed unless interactivity required)
- File-based routing in `src/app/`
- Layouts for shared UI structure

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017 with ESNext modules
- Configured for Next.js with bundler module resolution

### Styling
- Tailwind CSS v4 (latest major version)
- CSS variables for theming: `--background`, `--foreground`
- Dark mode support via `prefers-color-scheme`
- Geist font family variables: `--font-geist-sans`, `--font-geist-mono`

### Font Loading
- Uses `next/font/google` for optimized font loading
- Geist Sans (variable font for body text)
- Geist Mono (variable font for code/monospace)
- Fonts loaded in root layout with CSS variables

## Development Guidelines

### When Adding New Pages
1. Create routes in `src/app/` directory
2. Use Server Components by default
3. Add `'use client'` directive only for interactive components
4. Follow Next.js 15 conventions for layouts, loading states, error boundaries

### Styling Approach
- Use Tailwind utility classes
- Reference CSS variables for theme colors: `bg-background`, `text-foreground`
- Support dark mode automatically (already configured)
- Use Geist fonts via CSS variables: `font-[family-name:var(--font-geist-sans)]`

### Image Optimization
- Use `next/image` for all images (already imported in page.tsx)
- Static assets go in `public/` directory
- Reference with `/filename.ext` (leading slash)

## Integration with Business Ecosystem

This project is part of the larger AdvancingTechnology monorepo:
- Parent directory: `/home/workbench/Development-env/`
- Managed via pnpm workspaces
- See root CLAUDE.md for ecosystem-wide guidelines
- Can share packages from `packages/` directory

## Monorepo Context

When working from the monorepo root:
```bash
# Use pnpm workspace commands
pnpm --filter advancingtechnology.online dev
pnpm --filter advancingtechnology.online build
pnpm --filter advancingtechnology.online lint

# Or use convenience scripts
pnpm dev:advtech-online
```

## Notes

- This is a fresh project - most files are default `create-next-app` outputs
- Customizations needed: Update metadata in `layout.tsx`, replace starter content in `page.tsx`
- Tailwind v4 uses new CSS-first configuration (no `tailwind.config.js` needed)
- Turbopack is enabled for development (faster than Webpack)






## Last Audit

**Date**: 11/8/2025
**Completion**: 68%
**Issues**: 0

