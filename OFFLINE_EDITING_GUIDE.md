# Offline Editing & Local Development Guide
### SLV Pest Control Website

This guide explains how to edit, test, and maintain the SLV Pest Control website on your local computer completely offline.

---

## 1. System Requirements & Setup

### Requirements
1. **Operating System:** Windows 10/11, macOS, or Linux.
2. **Node.js:** Version 18.20.0 or higher (Download LTS from [nodejs.org](https://nodejs.org/)).
3. **Code Editor:** [Visual Studio Code](https://code.visualstudio.com/) (Recommended), Cursor, Sublime Text, or WebStorm.

### First-Time Setup (Internet Required Once)
Extract your downloaded source project ZIP file to a folder on your computer (e.g., `Documents/slv-pest-control`).

Open your terminal or command prompt inside that folder and run:

```bash
npm install
```

This installs all necessary local development packages (Astro, React, Tailwind CSS, Lucide icons).

> **After this one-time install, NO INTERNET CONNECTION is required to run the development server, edit code, or compile builds!**

---

## 2. Working Offline

### Start the Local Offline Server
Whenever you want to work on your website, open terminal in the project folder and run:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

- Any file edits you save in your editor will update in your browser instantly via Hot Module Replacement (HMR).
- You can work on planes, trains, or anywhere without an internet connection.

---

## 3. What to Edit & Where to Find Files

### A. Updating Business Details (Phone, Email, Address)
- **Top Header Bar & Phone Button:** `src/components/Header.tsx`
- **Floating Call & WhatsApp Widgets:** `src/components/FloatingActions.tsx`
- **Footer Information:** `src/components/Footer.tsx`
- **Contact Page & Office Address:** `src/pages/contact.astro`

### B. Updating Service Prices & Descriptions
- **Homepage Service Cards:**
  Open `src/components/ServicesGrid.tsx`. Look at the `services` array at the top of the file:
  ```typescript
  {
    icon: '/service-cards/cockroach-hex-live.png',
    title: 'Cockroach Control',
    price: '₹599',
    href: '/services/cockroach-control',
    ...
  }
  ```
- **Services Directory Page:**
  Open `src/pages/services/index.astro`. Look at the `allServices` array to update badges, descriptions, or prices.
- **Individual Service Detail Pages:**
  Located in `src/pages/services/`:
  - `ant-control.astro`
  - `bed-bugs.astro`
  - `cockroach-control.astro`
  - `fleas.astro`
  - `fly-control.astro`
  - `mosquitoes.astro`
  - `rodents.astro`
  - `termites.astro`
  - `tick-control.astro`
  - `wood-borer-control.astro`

### C. Replacing Images & Icons
All static assets reside in the `public/` folder.

1. **Photography & Banners:** Place images in `public/images/`.
   - `hero-banner.png` (Main hero banner)
   - `clean-kitchen-interior.jpg` (Kitchen hygiene section)
   - `fly-hero-banner.jpg` (Fly control banner)
2. **Gold Hexagonal Icons:** Located in `public/service-cards/` and `public/icons/gold-hexagonal/`.
   - Maintain PNG transparency (RGBA 32-bit) with dark gold borders for the cleanest aesthetic.
3. **Centralized Asset Registry:**
   See `src/data/assets.ts` for a convenient map of all image references.

### D. Editing Knowledge Hub Articles
All educational content is located in `src/pages/knowledge/`:
- `src/pages/knowledge/index.astro` — Main Knowledge Hub landing page
- `src/pages/knowledge/pests.astro` — Pest Library
- `src/pages/knowledge/treatment.astro` — Treatment & Prevention methods
- `src/pages/knowledge/seasonal.astro` — Seasonal pest activity calendar
- `src/pages/knowledge/<pest>/` — In-depth pest guides (identification, prevention, FAQs, where they hide)

---

## 4. Testing & Generating the New Production Build

Whenever you finish making your changes:

### Step 1: Run TypeScript Check
```bash
npm run lint
```
Ensures there are no syntax errors or missing variables.

### Step 2: Build the Production Site
```bash
npm run build
```
This takes roughly 5 seconds and generates all 80+ static HTML pages into the `dist/` directory.

### Step 3: Test Production Output Locally
```bash
npm run preview
```
View `http://localhost:3000` to verify how the compiled static production site will behave on Hostinger.

### Step 4: Upload to Hostinger
Upload the contents of `dist/` to Hostinger's `public_html` following `HOSTINGER_DEPLOYMENT_GUIDE.md`.

---

## 5. Offline Limitations & Notes
- **Static vs Server-Side:** This website is a pure static site (JAMstack). It does not require a database or backend server.
- **Contact Form:** If you want form submissions to send real emails to your inbox, connect a service like Formspree or place a PHP script on Hostinger (`public_html/send-mail.php`).
- **Google Maps:** The interactive map embed on the Contact page displays offline with cached map tiles if previously loaded, but requires internet for live interactive panning.
