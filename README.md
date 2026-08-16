# PNW Lock and Key — landing page

Single-page marketing site built with Vite + React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Page order

Hero (full-bleed photo panel) → inline callback bar → emergency CTA → services →
24/7 emergency → how it works → about → service areas → call CTA →
contact form + map → footer.

## Where to change things

| What | File |
| --- | --- |
| Phone, address, hours, license, map URLs | `src/data/site.js` → `company` |
| Service categories and named services | `src/data/site.js` → `services` |
| Cities grouped by county | `src/data/site.js` → `areas` |
| 24/7 emergency situations list | `src/data/site.js` → `emergencies` |
| The three how-it-works steps | `src/components/Steps.jsx` |
| Hardware brands strip | `src/data/site.js` → `brands` |
| Colors, type scale, spacing | `src/styles.css` (`:root` tokens at the top) |
| Headline and hero copy | `src/components/Hero.jsx` |

Everything factual lives in `site.js`, so updating the phone number or adding a
city is a one-line edit that propagates to the header, hero, CTAs, contact
panel, footer and schema.

## The form (Netlify Forms)

Both forms post to a single Netlify form named `callback`.

Netlify detects forms by scanning the built HTML at deploy time, and a
React-rendered form does not exist at that point. So `index.html` carries a
hidden stub form declaring the name and every field. `ContactForm.jsx` then
sends a URL-encoded POST to `/` with a `form-name` field matching the stub.

**If you add or rename a field, update both places** — the stub in `index.html`
and the state in `ContactForm.jsx` — or the new field will be dropped from
submissions.

Submissions arrive under Forms in the Netlify dashboard. Set up notifications
there (Project configuration → Notifications) so callback requests reach an
inbox or phone rather than sitting in the dashboard.

A `source` field records which form was used, `bar` or `full`, and a honeypot
field named `bot-field` catches basic spam.

Submitting only works on the deployed site or under `netlify dev`. On a plain
`npm run dev` the POST has nowhere to go, and the form falls back to a message
pointing at the phone number — that is expected locally, not a bug.

To use a different handler instead (Formspree, a CRM webhook), replace the
`fetch` call in `submit()` and delete the stub from `index.html`.

## Map

The contact section embeds Google Maps with the plain `output=embed` URL, so no
API key is needed. If you later want styled maps or a custom marker, swap
`company.mapEmbed` for a Maps Embed API URL and add your key.

## Photography

Brand photos live in `src/assets/photos/`, resized and compressed for the web:

- `hero-tech.jpg` — full-bleed hero panel, and the contact section header
- `tech-keypad.jpg` — residential service card, and the FAQ section
- `van-commercial.jpg` — emergency CTA band, commercial service card, and
  the service areas panel background
- `auto-key.jpg` — automotive service card
- `night-call.jpg` — 24/7 emergency section
- `van-tools.jpg` — first photo in the how-it-works section
- `lock-door.jpg` — second how-it-works photo, cropped from the wider
  close-up so the lock and door lead rather than the technician
- `van.png` — transparent cut-out, used in the call CTA panel
- `van-home.jpg`, `lock-service.jpg` — not currently placed

## Logo assets

- `src/assets/logo.png` — your original mark, cropped to its content bounds.
- `src/assets/logo-light.png` — knockout variant (navy turned white, greens
  kept) so the mark stays legible on the dark footer.
- `public/favicon.png` — the padlock-and-key element, squared to 256px.

If you replace the logo, regenerate the light variant too, or the footer mark
will disappear against the dark background.

## Design notes

Light and open: white and a soft evergreen mist `#F2F7F0`, with the logo's navy
`#0D2544` and greens `#4E9F2F` / `#6FBF3B` used as accents rather than as the
field. Type is Archivo for display, Public Sans for body, and JetBrains Mono
reserved for licensed-trade data — license number, hours, labels — so those read
as specifications rather than marketing.

The hero leads with the van cut out against a soft gradient, bleeding off the
right edge, with a callback bar straddling the boundary below it. Buttons and
icon badges are pill and circle shaped throughout.

The recurring element is the ridgeline seam (`Ridgeline.jsx`), now used once, at
the foot of the services section, filled with the color of the section that
follows so it appears to rise out of the landscape. It echoes the mountains and
evergreens in the mark.

## Performance notes

Lighthouse mobile, measured against the production build served with gzip:
performance 97, accessibility 100, best practices 100, SEO 100.

Things that matter if you change assets or markup:

- **Images are WebP at render size.** Source masters (`.jpg` / `.png`) stay in
  the repo but are not imported, so they never ship. If you add a photo,
  export a WebP sized to the box it renders into rather than importing the
  master.
- **The hero image lives in `public/hero/`**, not `src/assets`, so it keeps a
  stable filename and can be preloaded from `index.html`. That preload is what
  makes the LCP image discoverable before React runs — if you rename the file,
  update the `<link rel="preload">` too.
- **Fonts load without blocking render** via the `media="print"` swap in
  `index.html`. The `noscript` copy is the fallback.
- **The Google map is a facade.** It only loads the iframe after the visitor
  clicks, keeping a large third party off the initial load.
- **`--green-action` (#3F8324) is for anything with white text on it.**
  The lighter `--green` fails WCAG AA at 4.5:1 against white; use it only for
  decorative fills and tints.

## Before launch

- Point `og:url` and the `url` field in the JSON-LD (in `index.html`) at the
  real domain, and add an `og:image`.
- Confirm the `dispatch@` email in `site.js` is a real inbox.
- Add an `og:image` at 1200×630 to `public/` for link previews.
- Verify every listed city in `areas` is one you actually want calls from.
