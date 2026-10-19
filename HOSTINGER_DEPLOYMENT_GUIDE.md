# Hostinger Shared Hosting Deployment Guide
### SLV Pest Control Website

This guide walks you through deploying your production-ready SLV Pest Control website directly to **Hostinger Shared Hosting** (Single, Premium, Business, or Cloud plans).

---

## What to Upload

You will upload the contents of the **`dist/`** directory (or the pre-packaged `hostinger_public_html/` folder / `hostinger_public_html.zip`).

Inside this folder, you will find:
- `.htaccess` *(Crucial for clean URLs, caching, compression, and 404 handling)*
- `index.html` *(The website root homepage)*
- `404.html` *(Custom branded 404 error page)*
- `services/` *(All 10 pest service pages)*
- `knowledge/` *(Knowledge hub, pest library, guides)*
- `about/`, `contact/`, `privacy/`, `terms/`, `our-story/`, `service-areas/`
- `_astro/` *(Compiled CSS stylesheets, JavaScript chunks, optimized bundles)*
- `images/`, `icons/`, `service-cards/` *(All photographs, logos, and metallic gold icons)*

> **IMPORTANT:** Upload the **contents inside `dist/`**, not the folder named `dist` itself. The `index.html` file should be located directly at `public_html/index.html`.

---

## Method 1: Using Hostinger File Manager (Fastest & Easiest)

This method takes under 3 minutes using Hostinger's web-based File Manager.

### Step 1: Log in to Hostinger hPanel
1. Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com) and log in.
2. Under **Websites**, click **Manage** next to your domain.

### Step 2: Open File Manager
1. In the left sidebar or dashboard, click **File Manager** (under *Files*).
2. Click **Access files of [your-domain.com]**.
3. Double-click to enter the **`public_html`** directory.

### Step 3: Clear Any Default Hostinger Placeholder
- If you see a file named `default.php` or `index.php` from Hostinger, delete it so your `index.html` can take precedence.

### Step 4: Upload the ZIP File
1. In the top-right toolbar of the File Manager, click the **Upload** icon (arrow pointing up).
2. Select **File**, then select `hostinger_public_html.zip` (or create a zip of the contents of `dist/`).
3. Once the upload finishes, right-click `hostinger_public_html.zip` inside `public_html`.
4. Click **Extract**.
5. When prompted for the extraction path, enter `.` (or select `public_html`).
6. Click **Extract**.
7. Delete the uploaded `.zip` file to keep your hosting clean.

### Step 5: Verify the Hidden `.htaccess` File
1. In the File Manager top bar, check the **Settings** gear icon.
2. Ensure **"Show Hidden Files (dotfiles)"** is checked.
3. Confirm that `.htaccess` is present in `public_html`.

---

## Method 2: Using FTP / FileZilla

If you prefer uploading via FTP:

### Step 1: Get Your FTP Credentials from Hostinger
1. In Hostinger hPanel, go to **Files** → **FTP Accounts**.
2. Note your:
   - **FTP Hostname:** e.g., `ftp.yourdomain.com` or Hostinger server IP
   - **FTP Username:** e.g., `u123456789`
   - **FTP Password:** Your account password
   - **Port:** `21`

### Step 2: Connect via FileZilla
1. Open FileZilla on your computer.
2. Enter the Host Hostname, Username, Password, and Port `21`.
3. Click **Quickconnect**.

### Step 3: Upload Files
1. In the **Remote Site** panel (right side), navigate into `/public_html/`.
2. In the **Local Site** panel (left side), navigate into your project's `dist/` folder.
3. Select all files and folders inside `dist/` (including `.htaccess`).
4. Right-click and choose **Upload**.
5. Wait for all files to transfer (usually 1-2 minutes).

---

## Step-by-Step Post-Deployment Checks

### 1. Enable Free SSL (HTTPS)
1. In Hostinger hPanel, search for **SSL**.
2. Click **Install SSL** on your domain. Hostinger provides free lifetime Let's Encrypt SSL certificates.
3. Once active, toggle **Force HTTPS** ON in hPanel (or uncomment the HTTPS rule in `.htaccess`).

### 2. Test Website Navigation & Routes
Visit your website in your browser (e.g., `https://yourdomain.com`):
- [x] **Homepage:** Confirm the gold theme, hero banner, and gold hexagonal pest cards appear crisply.
- [x] **Service Cards:** Click on several cards (e.g., Cockroach Control, Termite Treatment, Bed Bugs). Confirm they navigate cleanly without 404 errors.
- [x] **Knowledge Hub:** Test `/knowledge`, `/knowledge/pests`, `/knowledge/treatment`, and `/knowledge/seasonal`.
- [x] **Floating Actions:** Click the floating Call button and WhatsApp button to verify they trigger your phone dialer or open WhatsApp Web.
- [x] **404 Page:** Visit `https://yourdomain.com/random-test-page` and verify the custom branded 404 page is displayed with navigation options.

---

## Troubleshooting Common Issues

### Issue 1: Website shows Hostinger default landing page
- **Cause:** `default.php` still exists in `public_html`.
- **Fix:** In File Manager, delete `default.php` from `public_html`. Ensure `index.html` is in `public_html`.

### Issue 2: Subpages return 404 when refreshing
- **Cause:** Missing `.htaccess` file in `public_html`.
- **Fix:** Make sure the included `.htaccess` file was uploaded. If you uploaded a ZIP, make sure hidden files were extracted.

### Issue 3: Old content shows up after update
- **Cause:** Browser cache or LiteSpeed cache.
- **Fix:** In Hostinger hPanel, go to **Advanced** → **LiteSpeed** → click **Flush Cache**. In your browser, perform a hard refresh (`Ctrl + F5` on Windows, `Cmd + Shift + R` on Mac).

### Issue 4: Contact form doesn't send emails
- **Cause:** Static hosting does not run server-side Node.js or email daemons by default.
- **Fix:** Point the contact form action to a free transactional mail service like Formspree (`https://formspree.io/f/YOUR_ID`) or Web3Forms, or place a simple PHP mailer script in `public_html/api/contact.php`.

---

## Summary Checklist
- [x] Built static production bundle (`npm run build`)
- [x] Uploaded contents of `dist/` to Hostinger's `public_html`
- [x] Confirmed `.htaccess` is present in `public_html`
- [x] Activated Hostinger Free SSL Certificate
- [x] Verified mobile and desktop rendering
