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

## Wiring up the form

`src/components/ContactForm.jsx` currently validates input, logs the payload and
shows a confirmation. To send it somewhere real, replace the `console.log` in
`submit()` with a POST:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
})
```

Netlify Forms, Formspree, Basin or a CRM webhook all work the same way. The same
component powers both forms via the `variant` prop (`compact` in the hero,
`full` in the contact section), so you only wire it once.

## Map

The contact section embeds Google Maps with the plain `output=embed` URL, so no
API key is needed. If you later want styled maps or a custom marker, swap
`company.mapEmbed` for a Maps Embed API URL and add your key.

## Photography

Brand photos live in `src/assets/photos/`, resized and compressed for the web:

- `tech-keypad.jpg` — About section
- `lock-service.jpg` — 24/7 emergency section
- `van-commercial.jpg` — emergency CTA band
- `van-home.jpg` — currently unused in layout; kept for future use
- `hero-tech.jpg` — full-bleed hero panel background
- `van.png` — transparent cut-out, currently unused

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

## Before launch

- Point `og:url` and the `url` field in the JSON-LD (in `index.html`) at the
  real domain, and add an `og:image`.
- Confirm the `dispatch@` email in `site.js` is a real inbox.
- Add an `og:image` at 1200×630 to `public/` for link previews.
- Verify every listed city in `areas` is one you actually want calls from.
