# 🔱 Apex Omni Vault

> **Luxury, Secured Power. Undeniable Prestige.**
> A sovereign ecosystem — charismatically engineered for those who command excellence and refuse ordinary limits.
> Seamlessly secure. Boldly intelligent. Every asset, signal and decision unified. Polished for the elite. Built to dominate.

---

## Live Projects

| Project | URL |
|---------|-----|
| GODSPEED App | https://godspeed-x7-command.lovable.app |
| Lovable Project 1 | https://lovable.dev/projects/8c4dd1e8-055a-49b0-b1e2-e4f56430ac6c |
| Lovable Project 2 | https://lovable.dev/projects/960d4852-809d-413f-b4eb-de5b4e326082 |
| Lovable Project 3 | https://lovable.dev/projects/7dd6aa49-afda-4aca-aa84-a6e4585d78f0 |
| Lovable Project 4 | https://lovable.dev/projects/de2de274-07a8-4e03-a8c4-14533a7c85b0 |
| Lovable Project 5 | https://lovable.dev/projects/81f03100-95db-49f1-a926-d77924b78050 |
| Lovable Project 6 | https://lovable.dev/projects/78f287cc-6d5a-4b35-87ce-eb30a8a824ba |
| Lovable Project 7 | https://lovable.dev/projects/6d4e205c-ddcf-4f8a-b82b-81de4f71575e |
| Lovable Project 8 | https://lovable.dev/projects/440feea8-e7b4-44bd-872c-773ed869544e |
| Lovable Project 9 | https://lovable.dev/projects/487686fb-aee4-41fc-b12b-841a2068a4dd |
| Lovable Project 10 | https://lovable.dev/projects/3c463366-8df2-4a3c-8744-dd398e3e45a4 |

---

## What Is This?

**Apex Omni Vault** is a zero-dependency, static web dashboard that unifies the entire Apex ecosystem into one secured, permission-controlled portal. No frameworks. No build step. Just three files — drop anywhere and deploy.

### Features

- 🔐 **Gatekeeper Auth** — simulated biometric/SSO overlay with permission lanes (owner / admin / team / user / guest)
- ⚡ **Operator Panel** — live system metrics + quick actions (deploy, restart, logs, backup)
- 🔍 **Search & Filter** — instant search across all 62+ entries, filterable by category
- 📐 **Architecture Diagram** — Mermaid-rendered ecosystem map
- 🛡️ **Production Security Headers** — CSP, HSTS, X-Frame-Options, etc.
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🖨️ **Print Friendly** — clean print stylesheet included

---

## Project Structure

```
Apex-Omni-Vault/
├── index.html      # Main entry point — auth overlay + operator panel + vault grid
├── style.css       # Premium dark theme (glassmorphism, gold accents, responsive)
├── vault.js        # Full 62-entry link registry, permission filtering, search, render
├── gatekeeper.js   # Authentication engine, permission map, operator panel, toasts
├── _headers        # Cloudflare Pages / Netlify security headers
├── _redirects      # HTTP→HTTPS redirect + SPA fallback
├── netlify.toml    # Netlify deployment configuration
├── vercel.json     # Vercel deployment configuration
├── .gitignore      # Ignore rules
└── README.md       # This file
```

---

## Deploy in 60 Seconds

### Cloudflare Pages
1. Connect this repo in the [Cloudflare Pages dashboard](https://pages.cloudflare.com)
2. Build command: *(leave empty)*
3. Publish directory: `.`
4. Deploy ✅

### Netlify
```bash
# Drag-and-drop the folder at https://app.netlify.com/drop
# — or —
netlify deploy --prod --dir .
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
1. Go to **Settings → Pages**
2. Source: `main` branch, `/ (root)`
3. Save ✅

### Local
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Ecosystem

| Section | Description |
|---------|-------------|
| **Apex Life Global** | Main domain & sub-pages |
| **GODSPEED** | Command & control portal |
| **Gatekeeper** | Access control & security |
| **MAC Music** | Music production & distribution |
| **Lovable** | AI-built app projects |
| **Cloud & Infra** | AWS, DigitalOcean, Firebase, MongoDB Atlas |
| **Social** | TikTok, Instagram, YouTube, Snapchat |
| **Payments** | Cash App, Zelle, Shopify |

---

## Security

All deployments enforce:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; ...
```

---

## Godspeed, Rahmann.

*The vault is yours.*
