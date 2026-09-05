# Namidu Harshana — Portfolio

A dark, cinematic single-page portfolio built with React, TypeScript, Tailwind CSS v4,
and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Deploy

The `dist/` folder from `npm run build` is a static site — deploy it to Vercel, Netlify,
or GitHub Pages. For Vercel: `npx vercel --prod` from this folder (framework preset: Vite).

## Editing content

Everything content-related lives in `src/data/`, no need to touch components:

- `src/data/projects.ts` — project cards + detail modal content, links, tech stack
- `src/data/experience.ts` — work experience timeline
- `src/data/skills.ts` — skills grid

## Images

- `public/images/hero-bg.jpg` — the hero background (sci-fi corridor)
- `public/images/profile.png` — your profile photo

To swap either, just replace the file with the same name, or update the path in
`src/components/Hero.tsx`.

## Resume

There's no download-resume button by default. If you want one, add a button in
`src/components/Hero.tsx` linking to `/resume.pdf`, and drop the PDF at
`public/resume.pdf`.

## Contact email / social links

Update the email address and GitHub/LinkedIn URLs in `src/components/Hero.tsx` and
`src/components/Contact.tsx`.

## Design tokens

Colors and fonts are defined once in `src/index.css` under `@theme`, so palette or
typography changes only need to happen in one place.
