# Sharma Woodworks 🪵

### Bespoke Wooden Furniture Manufacturing

🌐 **Live Website:** [sharmawoodworks.com](https://sharmawoodworks.com)

Sharma Woodworks is a family-run custom furniture workshop in Oshiwara, Mumbai. This repository contains the website I built to give the business a professional online presence, showcase selected work, and make enquiries easier through WhatsApp and direct contact.

## What the website does

- Presents the workshop and its custom furniture offering
- Showcases selected furniture projects
- Provides a dedicated designer / B2B fabrication page
- Explains the manufacturing and enquiry process
- Provides FAQ and workshop information
- Supports direct call, WhatsApp and directions
- Uses local-business structured data and a sitemap
- Is designed to run as a static site without a database or paid backend

## Tech Stack

- **Next.js 16**
- **React 19**
- **JavaScript**
- **CSS**
- **Git & GitHub**
- **Netlify** for static hosting

## Architecture

```
sharma-woodworks/
├── components/
│   ├── Layout.js
│   ├── SEO.js
│   ├── SectionHeading.js
│   ├── PortfolioCard.js
│   └── Lightbox.js
├── lib/
│   └── portfolio.js
├── pages/
│   ├── index.js
│   ├── designers.js
│   └── _app.js
├── public/
│   ├── portfolio images
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── globals.css
├── portfolio.json
├── next.config.mjs
└── netlify.toml
```

## Zero-cost hosting approach

The website does not require a database, server API, authentication system, CMS, or paid third-party backend.

Next.js is configured for static export:

```text
npm run build
      ↓
    out/
      ↓
    Netlify
```

This keeps the business website simple to deploy and maintain while enquiries continue through normal phone and WhatsApp communication.

## Business enquiry flow

```
Visitor
  ↓
Website
  ↓
Portfolio / Services
  ↓
WhatsApp or Call
  ↓
Requirements + Reference Images
  ↓
Quote / Discussion
```

## Project status

**Status: Live & actively improving**

The website is being developed alongside the real-world business requirements. The focus is on performance, mobile UX, accessibility, local SEO, clear communication, and a simple enquiry journey.

## About the Developer

Built by **Deepu Sharma**, a Computer Science Engineering student at DYPIU, Pune.

This project is part of my learning-by-building journey and is one of my projects for a real family business rather than a tutorial-only application.

## Note

The repository contains business branding, images, content, and other material associated with Sharma Woodworks. Please do not reuse proprietary business assets without permission.
