# Go2Ways website — Next.js

The Go2Ways website rebuilt as a **Next.js 16 (App Router) + React 19 + TypeScript** app.
It looks and behaves the same as the original static site in `../go2ways-previous`, which is not changed.

## Run it

Needs Node.js 22 or newer.

```bash
npm install
npm run dev        # development, http://localhost:3000
npm run build      # production build
npm start          # serve the production build, http://localhost:3000
```

Optional settings (AI chat, contact inbox, email alerts): copy `.env.example` to `.env.local` and fill it in. Email alerts only need `SMTP_PASS`, the Gmail app password for servicego2ways@gmail.com.

## Pages

| URL | File | Was |
| --- | --- | --- |
| `/` | `app/page.tsx` | `index.html` |
| `/services` | `app/services/page.tsx` | `services.html` |
| `/industries` | `app/industries/page.tsx` | `industries.html` |
| `/contact` | `app/contact/page.tsx` | `contact.html` |
| `/service-<slug>` (8 pages) | `app/[service]/page.tsx` + `components/ServicePage.tsx` | `service-*.html` |
| any unknown URL | `app/not-found.tsx` | `404.html` |

Old links ending in `.html` (for example `/services.html`) redirect to the new URLs (`next.config.ts`).

## Where things live

- `app/layout.tsx`: the shell on every page (fonts, header, footer, motion, chat).
- `app/globals.css`: the original `styles.css` with the same rules.
- `components/`: `SiteHeader` (menu and active-page highlight), `SiteFooter`, `CtaSection`, `ServicePage`, `SplitWords` (hero headline word reveal), `Icon`.
- `content/services.ts`: text for the 8 service pages, the Services menu, the Products menu and the footer links. Edit this instead of `_build/build_pages.py`.
- `content/icons.tsx`: the menu and service icons.
- `content/knowledge.md`: what the AI chat assistant knows. Edit it, then restart the server.
- `lib/site-effects.ts`: animations and interactions (page transitions, header, menus, sliders, reveals, count-ups, silk waves, ribbons, FAQ, contact form), ported from `main.js`. It runs again after every page change.
- `lib/chat-widget.ts`: the "Ask Go2Ways" widget, ported from `chatbot.js`.
- `lib/waves.ts`: the Figma wave artwork.
- `public/assets/img/`: all images, at the same paths as before.

## Backend (replaces the old `server/` folder)

| Route | What it does |
| --- | --- |
| `POST /api/chat` | Streams Claude's reply into the chat widget. With no `ANTHROPIC_API_KEY` it returns 503, and the widget answers from its built-in knowledge base. |
| `POST /api/contact` | Validates and saves contact form messages to `data/messages.jsonl` and emails the team if SMTP is set up. |
| `GET /admin` | Password-protected inbox (any username, `ADMIN_PASSWORD`). Off when no password is set. |
| `GET /admin/messages.csv` | The inbox as a spreadsheet. |
| `GET /api/health` | Shows which features are switched on. |

Limits are the same as before: chat messages up to 600 characters, 30 chat messages and 5 form messages per visitor per 10 minutes.

## Differences from the static site

- URLs no longer end in `.html`. The old ones redirect.
- Moving between pages is client-side (no full reload), with the same fade transition. The chat stays open across pages.
- The Cloudflare Pages, GitHub Pages and Google Sheets setups from the old folder are not included. This app runs on any Node.js host (`npm run build && npm start`), or on Vercel.
