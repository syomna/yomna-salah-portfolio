# Yomna Salah — Portfolio

Personal portfolio website built with a clean, editorial aesthetic — warm paper tones, generous negative space, and typography as the primary design element.

**[yomna-salah.vercel.app](https://yomna-salah.vercel.app)** · **[LinkedIn](https://linkedin.com/in/yomna-s/)** · **[GitHub](https://github.com/syomna)**

---

## Stack

| | |
|---|---|
| Build tool | Vite |
| Framework | React 19 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Contact form | EmailJS |
| Fonts | Playfair Display · Lora · DM Mono |

---

## Structure

```
src/
├── utils/
│   ├── constants.jsx      # Project data, experience, skill categories
│   ├── animations.js       # Shared Framer Motion helpers
│   │
│   ├── components/
│   │   ├── common/         # MonoLabel, SectionLabel, StatCell, CertRow, Languages, CustomCursor
│   │   ├── home/           # BackgroundYear, NameDisplay, CtaCell
│   │   ├── about/          # AboutText, CodePane, SkillBlock
│   │   ├── experience/     # ExperienceRow, ExpMeta, ExpBullets
│   │   ├── projects/       # ProjectCard, LinkIcon
│   │   │
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   └── App.jsx
│
├── assets/resume/
│   ├── Yomna_Salah_Flutter_Mobile_Developer_CV.pdf   # Downloaded by the hero CTA
│
scripts/
├── cv.html                # Source for the CV PDF
├── og-image.html          # Source for the OG/social preview image
└── build-assets.sh        # Regenerates both binaries from their HTML sources
```

---

## Sections

| # | Section | Source of truth |
|---|---|---|
| 01 | About | CV — Professional Summary |
| 02 | Skills & Stack | CV — Skills |
| 03 | Experience | CV — Work Experience |
| 04 | Projects | CV — Key / Additional / Web Projects |
| 05 | Education | CV — Education |
| 06 | Contact | CV — header contact details |

> All copy, dates, titles, and skill chips on the site are kept in sync with the CV.
> See [`CV_CONSISTENCY_CHANGES.md`](./CV_CONSISTENCY_CHANGES.md) for the full audit and the change list.

---

## Features

- **Custom cursor** — sage dot that expands to a ring on links and buttons (desktop only)
- **Scroll animations** — sections reveal on scroll via Framer Motion
- **Project tabs** — Mobile / Web switching with animated transition, plus per-project date ranges and store links
- **Contact form** — EmailJS integration with toast notifications
- **Fully responsive** — mobile-first, tested down to 375px
- **SEO** — JSON-LD structured data, Open Graph, Twitter Card, canonical URL, and a generated 1200×630 OG image

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `./scripts/build-assets.sh` | Regenerate the CV PDF and OG image from `scripts/*.html` (needs Chrome + Pillow) |

---

## License

© 2026 Yomna Salah. All rights reserved.
