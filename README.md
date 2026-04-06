# PortfolioFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Current Site Review

Your portfolio already has a lot of good things:
- Clean multi-section structure (Home, Skills, Projects, Resume, Contact).
- Strong personal branding and clear developer positioning.
- Good use of visuals and animations to keep it engaging.

### High-impact improvements (recommended order)

1. **Mobile responsiveness first**
   - Ensure header/menu and hero section scale well on small screens.
   - Add media queries for font sizes, spacing, and image stacking.

2. **Accessibility and semantics**
   - Keep global tags (`<head>`, font includes) only in `index.html`, not inside component templates.
   - Add meaningful `alt` text and visible keyboard focus styles for nav links/buttons.

3. **Performance**
   - Compress large images in `src/assets` and prefer modern formats (WebP/AVIF where possible).
   - Use lazy loading for non-critical images.

4. **SEO and discoverability**
   - Add meta description + Open Graph tags in `src/index.html`.
   - Add a custom domain and proper social preview image.

5. **Trust boosters for recruiters**
   - Add project metrics (users, performance gains, stack complexity).
   - Add direct “Live Demo” links next to GitHub links.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Hosting Guide

### Option A: GitHub Pages (best for this repo)

Your preview is already on GitHub Pages:

https://ganeshparhad10.github.io/Portfolio-Angular/

To redeploy safely:

1. Build with correct base href:
   ```bash
   npm run build -- --configuration production --base-href "/Portfolio-Angular/"
   ```
2. Publish `dist/portfolio-frontend` to your `gh-pages` branch (or `/docs` folder strategy).
3. In GitHub repo settings, set **Pages** source to the published branch/folder.

### Option B: Netlify (easy CI/CD)

- Build command: `npm run build`
- Publish directory: `dist/portfolio-frontend`
- For Angular routing, add a redirect rule so deep links work:
  - `_redirects`: `/* /index.html 200`

### Option C: Vercel

- Framework preset: **Angular**
- Build command: `npm run build`
- Output directory: `dist/portfolio-frontend`
- Add SPA rewrite to `/index.html` for client-side routes.

## Useful commands

```bash
npm install
npm run start
npm run build
npm run test
```

## Further help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli).
