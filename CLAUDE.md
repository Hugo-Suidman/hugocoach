# hugo.coach — Website Guide for AI Agents

This repository contains the website of Hugo Suidman (hugo.coach), an executive coach. Read this file fully before making any change.

## What lives where

```
hugocoach/
├── frontend/          # The website — Next.js (App Router). ALL changes happen here.
│   └── src/
│       ├── app/
│       │   ├── page.tsx           # Homepage (hero, testimonials carousel, Mozart section)
│       │   ├── coaching/page.tsx  # Coaching page (price, 1:1 section, team section, cards)
│       │   ├── about/page.tsx     # About page
│       │   ├── layout.tsx         # Fonts, metadata
│       │   └── globals.css        # Global styles
│       └── components/            # Header, Footer, ScrollReveal
├── backend/           # Strapi CMS — NOT used by the live site. Never touch or deploy.
└── package.json       # Root helper scripts
```

- **All website text is hard-coded in the `page.tsx` files.** There is no CMS in use. To change copy, edit the JSX directly.
- Testimonials: the `testimonials` array at the top of `frontend/src/app/page.tsx`. Each entry needs `logo` (in `frontend/public/logos/`), `logoClass` (Tailwind size for the logo box — wide wordmarks use `h-8 w-32`, compact marks get more height, e.g. `h-10 w-24`, so all logos carry similar visual weight), `quote`/`bold`/`rest` (the quote is split so one segment renders bold), `name`, `role`, `company`, `avatar` (square PNG ~800px in `frontend/public/testimonials/`).
- Logo files are NOT recolored by CSS: every logo must be delivered in brand grey `#94857A` (SVG: set the fill; color PNG: tint all pixels to `#94857A` with alpha = darkness so white knockouts stay transparent) and trimmed of transparent padding before adding.
- Prices: currently only on the coaching page hero (`frontend/src/app/coaching/page.tsx`).
- Images: `frontend/public/` (subfolders `home/`, `coaching/`, `about/`, `logos/`, `testimonials/`).

## Commands

```bash
cd frontend
npm install        # first time only
npm run dev        # local preview at http://localhost:3000
npm run build      # MUST pass before every push
```

## Deployment

- Pushing to the `main` branch on GitHub deploys the live site automatically via Vercel (hugo.coach). **A push IS a production deploy.**
- Workflow for every change: edit → `npm run dev` and check the affected pages in the browser → `npm run build` passes → commit with a clear message → push.
- To undo a bad deploy: revert the commit and push again, or promote a previous deployment in the Vercel dashboard.

## Privacy: this site is cookie-free, keep it that way

As of 20 August 2026 this site sets **no cookies**, loads **no third-party scripts**, runs **no analytics**, and serves its fonts from its own server. Verified in-browser: 0 cookies, 0 localStorage/sessionStorage entries, 0 third-party requests. That is exactly why it needs no consent banner (§ 25 (2) TDDDG) and why the privacy policy at `/privacy` says so in writing.

**STOP and ask the site owner before adding any of the following.** Each one breaks that state, triggers a consent-banner obligation and requires the privacy policy to be rewritten:

- web analytics of any kind (Google Analytics, Plausible, Vercel Analytics/Speed Insights, PostHog, Hotjar …)
- embedded third-party media (YouTube, Vimeo, Spotify, Google Maps)
- fonts or icons loaded from an external domain: always use `next/font`, which self-hosts
- chat widgets, booking widgets, tracking pixels, A/B testing tools
- any `<script src="https://…">` pointing off-domain

Adding one of these is never a "small change". Flag it, do not just do it.

Check the current state at any time:

```bash
curl -sI https://hugo.coach/ | grep -i set-cookie          # expect: no output
curl -s https://hugo.coach/ | grep -oE 'https://[a-z0-9.-]+' | sort -u   # expect: only own/link domains
```

If anything is added, update `frontend/src/app/privacy/page.tsx` in the same change.

## Hard rules

1. **Never touch `backend/`.** It is unused legacy. No edits, no deploys, no dependency updates.
2. **Never commit secrets** (.env files, API keys, passwords). The .gitignore already excludes them — do not weaken it.
3. **Always run `npm run build` before pushing.** A broken build takes the live site's deploy pipeline down.
4. **Match the existing style.** Copy the Tailwind classes and JSX patterns of neighboring elements instead of inventing new styles. Brand colors in use: `#0074b3` (blue), `#ed6606` (orange), `#012c3f`/`#001924` (dark navy), `#65564a` (brown text), `#f6f3f1` (light bg).
5. **Change only what was asked.** No drive-by refactors, dependency bumps, or formatting sweeps.
6. **Check both desktop and mobile** — most sections have separate `lg:` (desktop) and base (mobile) markup; some, like the testimonials carousel, are duplicated per breakpoint.
