# Yomna Salah — Portfolio

Personal portfolio website built with a *Still Magazine* editorial aesthetic — warm paper tones, generous negative space, and typography as the primary design element.

**[yomna-salah.vercel.app](https://yomna-salah.vercel.app)** · **[LinkedIn](https://linkedin.com/in/yomna-s/)** · **[GitHub](https://github.com/syomna)**

---

## Stack

| | |
|---|---|
| Framework | React 18 |
| UI Library | MUI (Material UI v5) |
| Animation | Framer Motion |
| Contact form | EmailJS |
| Fonts | Playfair Display · Lora · DM Mono |

---

## Structure

```
src/
├── utils/
│   ├── constants.js       # Project data, experience, skill categories
│   ├── tokens.js          # Design tokens (single source of truth for all colors)
│   ├── theme.js           # MUI theme
│   └── animations.js      # Shared Framer Motion helpers
│
├── components/
│   ├── common/            # MonoLabel, SectionLabel, StatCell, CertRow, CustomCursor
│   ├── home/              # BackgroundYear, NameDisplay, CtaCell
│   ├── about/             # AboutText, CodePane, SkillBlock
│   ├── experience/        # ExperienceRow, ExpMeta, ExpBullets
│   ├── projects/          # ProjectCard, LinkIcon
│   │
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
│
└── App.js
```

---

## Features

- **Custom cursor** — sage dot that expands to a ring on links and buttons (desktop only)
- **Scroll animations** — sections reveal on scroll via Framer Motion
- **Project tabs** — Mobile / Web switching with animated transition
- **Contact form** — EmailJS integration with toast notifications
- **Fully responsive** — mobile-first, tested down to 375px
- **SEO** — JSON-LD structured data, Open Graph, Twitter Card, canonical URL

---

## License

© 2026 Yomna Salah. All rights reserved.