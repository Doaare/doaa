# Doaa Alrefaei, PhD — academic site

Personal academic site, built with **Vite + React**.

Rebuilt from the two supplied HTML files. Those two files were the *same page*
(one minified, one formatted): the DOM, all visible text, the CSS and the
JavaScript were identical. The formatted copy was used as the source of truth.

## Stack

- Vite 7 + React 19 (no framework beyond that, no runtime dependencies)
- Plain CSS, carried over unchanged from the original page
- Images extracted from the original inline base64 into real `.webp` assets

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Project layout

```
index.html            document head: title, meta, Open Graph, JSON-LD, fonts
src/
  main.jsx            React entry point
  App.jsx             section order
  data/site.js        ALL page content lives here — edit this to update the site
  components/         one component per section
  hooks/              scanpath animation, scroll reveal
  lib/motion.js       reduced-motion check, smooth scrolling
  styles/global.css   the original stylesheet
  assets/             project figures and tool logos (webp)
public/robots.txt
vercel.json           build settings, caching and security headers
```

### Editing content

Everything visible on the page — publications, projects, education, awards,
courses, contact links — is in `src/data/site.js`. Adding a publication means
adding one object to the `publications` array; no component needs to change.

In `publications`, wrap your own name in `**double asterisks**` and it renders
bold, matching the original page.

## Deploying to Vercel

1. Go to <https://vercel.com/new> and import this repository.
2. Vercel detects Vite automatically; `vercel.json` pins the settings anyway.
   Build command `npm run build`, output directory `dist`.
3. Deploy.

### Custom domain

1. In the Vercel project: **Settings → Domains → Add**, enter the domain.
2. Vercel shows the DNS records to create at your registrar:
   - apex (`example.com`) → `A` record to `76.76.21.21`
   - `www` → `CNAME` to `cname.vercel-dns.com`
   (Use the exact values Vercel shows you — they can change.)
3. DNS propagation is usually minutes. HTTPS is issued automatically.
4. Update `<link rel="canonical">` in `index.html` to the real domain.

## Firebase

Not required. This site is fully static — no database, no authentication, no
server code — so Vercel alone serves it. Firebase would only become relevant if
you later add something like a contact form that stores messages, gated content,
or visitor analytics beyond Vercel's built-in analytics.

## Copyright

© 2026 Doaa Alrefaei, Ph.D. All rights reserved. Text, images, structure and
styling are the property of Doaa Alrefaei. Contact: dmalrefaei@kau.edu.sa
