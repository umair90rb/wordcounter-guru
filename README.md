# Free Online Word & Character Counter

A fast, SEO-optimized single-page app built with Next.js 14, TypeScript, and Tailwind CSS.

## Commands

- dev: `npm run dev`
- build: `npm run build`
- export static: `npm run build:static` (outputs to `out/`)

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. The workflow will automatically build and deploy on push to main branch

### Local Development
```bash
npm install
npm run dev
```

## Notes

- Tailwind is configured in `tailwind.config.ts` and `styles/globals.css`.
- Main page lives in `pages/index.tsx` with complete SEO tags in `<Head>`.
- To customize canonical/OG URL, edit `siteUrl` in `pages/index.tsx`.
- GitHub Actions workflow automatically builds and deploys to Pages. 