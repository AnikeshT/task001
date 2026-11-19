# Tourpublish — Curated Luxury Travel & Expedition Directory

A high-performance modern travel website and directory built with **Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion**, optimized for 1-click deployment on **Vercel**.

Every tour points directly to **KLNK** (`https://klnk.tv/...`) for zero-markup direct operator booking with instant Apple Wallet / Google Pay pass generation.

---

## 🌟 Highlights & Features

- **Framer-Inspired Modern Luxury Design**:
  - Editorial typography with Space Grotesk, clean letter-spaced badges, and Dark Slate OKLCH aesthetics with `#fd3d4b` Brand Coral accents.
  - Smooth micro-interactions, spring physics, and animated transitions.
  - High-resolution photography from verified Mediterranean and wild frontier journeys.
- **Niche Focus**:
  - **Luxury Tours in Italy & Mediterranean**: Private Riva yacht charters in Amalfi & Capri, vintage Brunello wine and truffle estates in Tuscany, high-altitude Via Ferrata in the Dolomites, and Aeolian volcanic catamaran sailing in Sicily.
  - **Rare Global Frontiers**: Dark Sky astronomy and rhino tracking in Namibia (*TerraFauna Safaris*), and prehistoric Dragon Blood forests on Socotra Island (*Arabian Wanderers*).
- **Multi-Operator Architecture**:
  - Showcases real independent local operators (*Amalfi Nautical Privé*, *Tuscan Terroir Guild*, *Dolomite Alpine Masters*, *Sicilia Barocca*, *TerraFauna*, *Arabian Wanderers*).
  - Each operator profile includes founder bio, response time, verified badge, and rating.
- **Direct KLNK Booking Protocol**:
  - Every expedition features a direct link to `https://klnk.tv/:slug`.
  - Interactive **KLNK Checkout Modal** with guest count calculator, live total pricing, and instant Apple Wallet / Google Pay pass simulation.
- **Multi-Facet Interactive Filters**:
  - Filter by Region (Amalfi Coast, Tuscany, Dolomites, Sicily, Global Rare Expeditions).
  - Filter by Travel Style (Luxury Private, Small Group Max 8, Alpine & Adventure, Wine & Gastronomy, Yacht & Coastal).
  - Filter by Duration (1 Day, 2-4 Days, 5-7 Days, 8+ Days).
  - Instant KLNK Pass only toggle.
  - Real-time keyword search with instant matching.
- **Multi-Currency Engine**:
  - Instant 1-click currency switching across **USD ($)**, **EUR (€)**, and **GBP (£)**.
- **Interactive Tour Detail Modal / Drawer**:
  - High-resolution gallery carousel.
  - Day-by-day expandable itinerary accordion.
  - Transparent "What’s Included & Excluded" checklists.
  - Direct operator profile and 24/7 concierge contact.
- **Full SEO & Vercel Ready**:
  - Complete OpenGraph tags, Twitter cards, metadata, and 100% static generation with 0 build errors.

---

## 🚀 Getting Started

### 1. Install & Run Locally
```bash
# Navigate to the project directory
cd "C:\Users\Abc\Downloads\tourpublish task website"

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel (Zero-Config)

This repository is built using native Next.js 15 App Router conventions, making it deployable on Vercel with zero extra configuration:

### Option A: Via GitHub & Vercel Dashboard (Recommended)
1. Push this folder to a GitHub repository (e.g. `github.com/your-org/tourpublish-travel-directory`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select the repository. Vercel automatically detects **Next.js**.
4. Click **"Deploy"**. The site will be live on `https://your-project.vercel.app` in under 60 seconds.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📂 Project Structure

```text
tourpublish task website/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Luxury dark slate theme & scrollbar styles
│   │   ├── layout.tsx      # Root layout with SEO & OpenGraph metadata
│   │   └── page.tsx        # Master homepage orchestration
│   ├── components/
│   │   ├── common/
│   │   │   └── ThemeAwareLogo.tsx    # Official Tourpublish brand logo
│   │   ├── home/
│   │   │   ├── HeroSection.tsx       # Framer-style luxury hero with search dock
│   │   │   ├── CollectionsSection.tsx# Handpicked seasonal portfolio cards
│   │   │   ├── FilterBar.tsx         # Multi-facet region/style/duration filter
│   │   │   ├── TourCard.tsx          # Interactive tour card with KLNK CTA
│   │   │   ├── TourDetailModal.tsx   # Full itinerary and inclusions drawer
│   │   │   ├── KlnkBookingModal.tsx  # Direct KLNK pass checkout simulation
│   │   │   ├── OperatorSpotlight.tsx # Verified master operator cards
│   │   │   ├── WhyTourpublish.tsx    # Value proposition & KLNK trust badges
│   │   │   ├── TravelerReviews.tsx   # Verified traveler testimonials
│   │   │   └── FaqSection.tsx        # Interactive accordion FAQ
│   │   └── layout/
│   │       ├── Navbar.tsx            # Sticky glassmorphism nav with currency switcher
│   │       └── Footer.tsx            # Modern luxury footer with sitemap
│   ├── data/
│   │   └── toursData.ts              # Curated tour catalog & verified operators
│   └── lib/
│       ├── types.ts                  # Strict TypeScript interfaces
│       └── utils.ts                  # Class merge & price formatting utilities
├── next.config.mjs         # Image domains (Unsplash, Filestack, Bokun, CDN)
├── tailwind.config.ts      # Brand Coral (#fd3d4b), typography & animations
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Next.js 15, React 19, Tailwind CSS, Framer Motion
```

---

## 🛡️ License & Brand Guidelines
- **Brand Name**: **Tourpublish** (strictly not datakyte).
- **Checkout Engine**: **KLNK** (`https://klnk.tv`).
- All rights reserved © 2026 Tourpublish Ltd.
