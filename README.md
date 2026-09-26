This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO landing pages (generated)

Long-tail SEO pages (apps, devices, boxes, buying guides, French track, brand comparisons) are data-driven:

- Content lives in `src/data/seo/*.ts` (one `SeoPageData` object per URL; `depth*.ts` add long-form sections).
- `src/components/SeoPage.tsx` renders every page in the site's design system and emits FAQPage, BreadcrumbList,
  HowTo and WebPage/BlogPosting JSON-LD plus canonical, hreflang, Open Graph and Twitter tags.
- `node scripts/gen-seo-pages.mjs` writes the `src/app/<slug>/page.tsx` route files, refreshes the generated block in
  `public/sitemap.xml` and the alias block in `public/_redirects`, and lints titles, descriptions and FAQ counts.
- `npm run build && node scripts/audit-out.mjs` audits the built site (H1, canonical, FAQ/breadcrumb schema, broken links, orphans).

To add a page: add an object to the right `src/data/seo/*.ts` file, run the generator, build, audit.
