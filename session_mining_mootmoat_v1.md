# Session Mine: MootMoat V17 Setup & Cloudflare Integration

_Date: 2026-02-23_

## Overview

This session focused on scaffolding the `mootmoat.com` web presence using the Solstice Astro template, preparing the local asset architecture, and deploying the site to Cloudflare Pages with an R2 Virtual Proxy Bridge.

## [IMPLEMENTED] Stream A: The Machine (Technical)

### 1. The Virtual Proxy Bridge (R2 Integration)

- **Context:** Cloudflare Pages enforces a hard 25MB limit on static assets, making it impossible to host MootMoat's 34MB `.m4a` files within the `public/` directory.
- **Solution:** Replicated the `eriknorris` Air Gap architecture.
- **Action:**
  - Migrated all binaries (`.jpg`, `.png`, `.svg`, `.m4a`) from `public/assets` to a local sovereign staging directory: `D:\GitHub\mootmoat-assets\R2_STAGING`.
  - Created a local Virtual Proxy (`src/pages/assets/[...path].ts`) using `node:fs` to serve assets to the Vite dev server without blowing up the memory watcher.
  - Created an Edge Function Proxy (`functions/[[path]].js`) to intercept `/assets/*` requests in production and fetch them directly from the `MOOTMOAT_ASSETS` R2 binding.
- **Impact:** Infinite scalable asset hosting. Zero OOM errors during deployment.

### 2. Astro Configuration Tweaks

- **Action:** Updated `astro.config.mjs` to dynamically switch output modes: `isProduction ? "static" : "server"`.
- **Why:** The Cloudflare adapter normally bundles the whole site into an SSR worker, hitting the 10,000 Module Limit on large markdown collections. Pre-rendering the site to static HTML via `CF_PAGES=1` fixes this while leaving the edge functions intact.
- **Action:** Excluded the new asset staging drive from Vite's `watch.ignored` list to prevent infinite loop reloading.

### 3. PNPM vs NPM Disconnects

- **Trap:** The Solstice template originated with `pnpm`. Running `npm install @astrojs/cloudflare` broke the parity between `package.json` and `pnpm-lock.yaml`.
- **Fix:** Cloudflare Pages refuses to build if the lockfile is out of sync. Ran `pnpm install --no-frozen-lockfile` to resynchronize the tree before pushing.

### 4. Negative DNS Caching

- **Trap:** The user successfully bound the custom domain, but `www.mootmoat.com` was unreachable locally despite showing "Active" in Cloudflare.
- **Root Cause:** Local ISP Negative DNS caching (NXDOMAIN). The browser pinged the domain _before_ it was active and cached the dead response.

---

## [PROPOSED] Stream B: The Operator & Next Steps

### Immediate Priority: "The Great Strip-Down"

Now that the infrastructure, DNS, and proxy bridge are operational, the aesthetic and structural shift must occur.

1. **Delete the Template Fluff**:
   - Scrub the existing landing page (`src/pages/index.astro`) of all generic Solstice template marketing copy.
   - Remove unused template components, placeholder images, and excess stylistic flourishes that don't serve the DIY/Documentation aesthetic.

2. **Populate V17 Content**:
   - The raw markdown files for V17 have been seeded into `src/docs/data/docs` and forced to compile with injected `title` frontmatter.
   - We need to properly integrate this content into the navigation, sidebar, and landing page architecture.
   - Replace the default branding with MootMoat visuals.

3. **Checklist Item #6 Pivot**:
   - The user clarified that the "Isomorphic Proof" blocks are intended _only_ for "Enriched eriknorris projects", not the core colophon cases. The roadmap should reflect this narrower, high-value focus.
