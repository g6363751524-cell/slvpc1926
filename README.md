# SLV Pest Control — Complete Website Project

A modern, high-performance static website for **SLV Pest Control** built with **Astro 7**, **React 19**, and **Tailwind CSS 4**. Featuring a dark glassmorphic aesthetic with metallic gold accents, responsive design, comprehensive pest services, interactive knowledge hub, and SEO optimization.

This project is fully prepared for **offline local editing** and **direct one-click deployment to Hostinger shared hosting (`public_html`)**.

---

## Table of Contents
1. [Project Highlights](#project-highlights)
2. [Quick Start (Local & Offline Editing)](#quick-start-local--offline-editing)
3. [Project Directory Structure](#project-directory-structure)
4. [How to Edit Content & Replace Images](#how-to-edit-content--replace-images)
5. [Hostinger Shared Hosting Deployment](#hostinger-shared-hosting-deployment)
6. [Server & Hosting Configuration (.htaccess)](#server--hosting-configuration-htaccess)
7. [External Services & Features Configuration](#external-services--features-configuration)
8. [License & Credits](#license--credits)

---

## Project Highlights

- **Static Generation:** Generates 80+ static HTML pages with zero server-side dependencies. Blazing fast, ultra-secure, and inexpensive to host.
- **Hostinger Compatible:** Pre-configured with `.htaccess` for Apache / LiteSpeed web servers on Hostinger. Clean URLs, trailing slashes, gzip compression, and long-term caching are built-in.
- **10 Dedicated Pest Services:** Ant, Bed Bug, Cockroach, Fleas, Flies, Mosquito, Rodent, Termite, Tick, and Wood Borer control pages with transparent metallic-gold hexagonal line-art icons.
- **Educational Knowledge Hub:** Main Knowledge Hub, Pest Library, Treatment & Prevention guides, and Seasonal Pest Calendar.
- **Offline Capable:** Run `npm run dev` completely offline on your local machine with instant hot reloading.

---

## Quick Start (Local & Offline Editing)

### 1. Prerequisites
- **Node.js:** Version 18.20.0 or higher (Node 20+ recommended). Download from [nodejs.org](https://nodejs.org/).
- **Code Editor:** Visual Studio Code, Cursor, WebStorm, or any code editor of your choice.

### 2. Initial Setup
Open your terminal in the unzipped project folder and install the dependencies (internet connection required only once for downloading npm packages):

```bash
npm install
```

### 3. Start Local Development Server
Once dependencies are installed, you can work **completely offline**:

```bash
npm run dev
```

Your site will be available at:
`http://localhost:3000`

Any changes you make to `.astro`, `.tsx`, or `.css` files will instantly update in your browser.

### 4. Build for Production
To generate the final, minified static HTML, CSS, JavaScript, and asset bundle:

```bash
npm run build
```

The production output is placed into the `dist/` directory (ready to upload to Hostinger's `public_html`).

### 5. Preview the Production Build Locally
To test the exact production build before uploading to your host:

```bash
npm run preview
```

---

## Project Directory Structure

```text
slv-pest-control/
├── dist/                      # Production build output (upload contents to Hostinger public_html)
│   ├── .htaccess              # Hostinger Apache/LiteSpeed URL rewrites, caching, compression
│   ├── 404.html               # Branded 404 Not Found error page
│   ├── index.html             # Homepage
│   ├── services/              # All 10 pest services pages
│   ├── knowledge/             # Knowledge Hub & pest guides
│   ├── images/                # Optimized photography assets
│   ├── icons/                 # Clean icons & gold hexagonal assets
│   └── service-cards/         # Service card assets
├── public/                    # Static assets copied directly to dist/ during build
│   ├── .htaccess              # Hostinger web server configuration file
│   ├── images/                # Photography, banners, background images
│   ├── icons/                 # Species icons, contact icons, and gold hexagonal assets
│   │   └── gold-hexagonal/    # 10 Metallic gold line-art icons (PNG & SVG)
│   └── service-cards/         # Service card assets
├── src/
│   ├── assets/                # Source imagery
│   ├── components/            # Reusable React & Astro components
│   │   ├── Header.tsx         # Responsive navbar with gold accents & call button
│   │   ├── Footer.tsx         # Dark glassmorphic footer with quick links
│   │   ├── ServicesGrid.tsx   # 10 service cards with centered gold hexagonal icons
│   │   ├── FloatingActions.tsx# Sticky Call and WhatsApp contact widgets
│   │   └── ...
│   ├── data/
│   │   └── assets.ts          # Centralized registry of all asset paths for easy replacement
│   ├── layouts/
│   │   └── Layout.astro       # Root HTML layout with SEO meta tags & global styles
│   ├── pages/                 # File-based routing (Astro pages)
│   │   ├── index.astro        # Homepage
│   │   ├── 404.astro          # Custom 404 error page
│   │   ├── about.astro        # About Us page
│   │   ├── contact.astro      # Contact & booking page
│   │   ├── services/          # Pest service route handlers
│   │   └── knowledge/         # Knowledge hub pages
│   └── styles/
│       └── global.css         # Tailwind CSS & custom glassmorphism styles
├── .env.example               # Environment variables template (no secrets required)
├── astro.config.mjs           # Astro framework build configuration
├── package.json               # NPM packages and build scripts
├── HOSTINGER_DEPLOYMENT_GUIDE.md # Detailed Hostinger upload instructions
├── OFFLINE_EDITING_GUIDE.md   # Step-by-step offline modification guide
└── README.md                  # This file
```

---

## How to Edit Content & Replace Images

### 1. Replacing Images Easily
All assets are organized in `public/images/`, `public/icons/`, and `public/service-cards/`.
You can easily replace images in two ways:

#### Option A: Direct File Replacement (Recommended)
Simply overwrite any file in `public/images/` or `public/icons/` with your own image using the same filename:
- **Hero Banner:** `public/images/hero-banner.png` (Recommended size: 1920x1080 or 1536x1024)
- **Kitchen Interior:** `public/images/clean-kitchen-interior.jpg` (Recommended size: 1200x800)
- **WhatsApp Icon:** `public/icons/whatsapp-icon.png` (Square, transparent PNG)
- **Pest Hexagonal Icons:** `public/icons/gold-hexagonal/<pest>.png` (320x365 transparent RGBA PNG)

#### Option B: Updating the Asset Registry
Open `src/data/assets.ts` and change the file path to your new image. Every component referencing that asset will automatically update across the entire site.

### 2. Updating Contact Information & Phone Numbers
- **Phone Number (`+91 80 3978 22`):**
  - Search and replace in `src/components/Header.tsx`, `src/components/Footer.tsx`, and `src/components/FloatingActions.tsx`.
- **WhatsApp Number (`+91 80 3978 22`):**
  - Update `https://wa.me/9180397822` in `src/components/FloatingActions.tsx` and `src/components/Header.tsx`.
- **Office Address:**
  - Update in `src/components/Footer.tsx` and `src/pages/contact.astro`.

### 3. Modifying Service Prices
Service prices (e.g., ₹499, ₹599, ₹799, ₹899, ₹999) are defined in:
- `src/components/ServicesGrid.tsx` (Homepage service cards)
- `src/pages/services/index.astro` (Services directory page)
- Individual service files under `src/pages/services/`

---

## Hostinger Shared Hosting Deployment

### Step 1: Run the Production Build
Before uploading, generate the clean production build:

```bash
npm run build
```

This compiles all HTML, CSS, JavaScript, and assets into the `dist/` directory.

### Step 2: Upload to Hostinger's `public_html`
1. Log in to your **Hostinger hPanel** ([hpanel.hostinger.com](https://hpanel.hostinger.com/)).
2. Navigate to **Websites** → Select your domain → Click **File Manager**.
3. Open the `public_html` directory.
4. Upload all files and folders from inside `dist/` directly into `public_html`.
   *(Or create a ZIP of `dist/` contents, upload `dist.zip` to `public_html`, and click **Extract**)*.
5. Ensure the `.htaccess` file is present in `public_html`. (In Hostinger File Manager, make sure "Show Hidden Files" is enabled).

*For detailed instructions with screenshots and FTP guides, see `HOSTINGER_DEPLOYMENT_GUIDE.md`.*

---

## Server & Hosting Configuration (.htaccess)

The included `.htaccess` file in `dist/` (and `public/.htaccess`) provides production-grade configuration for Hostinger's Apache and LiteSpeed servers:
- **Clean URLs:** Routes like `/services/cockroach-control` automatically load `/services/cockroach-control/index.html` without trailing slash issues.
- **Custom 404:** Handles missing pages gracefully via `/404.html`.
- **Browser Caching:** 1-year caching for immutable static assets (CSS, JS, images, fonts) and 1-hour caching for HTML.
- **Gzip/Brotli Compression:** Automatic compression for HTML, CSS, JS, SVG, and JSON.
- **Security Headers:** Protects against MIME-sniffing, clickjacking, and XSS.

---

## External Services & Features Configuration

The static website is self-contained and does not require an active server or database to display pages. However, the following external integrations can be connected:

1. **Contact Form Submissions:**
   The contact form in `src/pages/contact.astro` currently functions with client-side feedback. For live email delivery on Hostinger, you can:
   - Use a free form endpoint like [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/).
   - Or connect to a simple PHP mailer script placed in `public/send-mail.php`.
2. **WhatsApp Direct Chat:**
   Connected directly via WhatsApp Web / Mobile URL protocol (`https://wa.me/9180397822`). No API key or server setup needed.
3. **Google Maps Embed:**
   The embed iframe in `src/pages/contact.astro` points to Bangalore Soundarya Layout. Replace the coordinates or query parameter if your office location changes.

---

## License & Credits

- Built for **SLV Pest Control Services**, Bangalore.
- Icons by Lucide React and custom gold line-art SVGs.
