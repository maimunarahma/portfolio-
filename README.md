# Maimuna Rahman Mysha — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Embla Carousel

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import the repo on https://vercel.com (zero config).

## Edit content

All text, links, skills, experience, projects and certificates live in **`lib/data.ts`**.

- `site.raaiconCert` — paste the RAAICON certificate URL; every "View certificate" button updates.
- `projects` — replace the `[ADD]` entries (set `draft: false`, add `live`, `source`, optional `url` for the live preview).
- Resume — drop `Maimuna-Rahman-Mysha-Resume.pdf` into `public/`.

## Structure

```
app/            layout, page, globals.css (theme tokens)
components/ui/  shadcn primitives (button, badge, card, input, textarea, label)
components/sections/  hero, tech-marquee, about, skills, experience, projects (carousel), moments, recognition, education, contact, footer
lib/data.ts     all content
public/images/  profile + RAAICON photos
```

Add more shadcn components any time with `npx shadcn@latest add <component>`.
