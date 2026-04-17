# Project Documentation: SCZ Metal MMC Corporate Website (scz.az)

## Website Technical Specification Document (WTS)

**Document Type:** Website Technical Specification (WTS)
**Project:** SCZ Metal MMC — Corporate Website
**Domain:** scz.az
**Prepared by:** Hakan
**Client:** SCZ Metal MMC
**Version:** v1.0 — Draft
**Created:** April 16, 2026
**Target Delivery:** April 23, 2026
**Status:** 🟡 In Progress

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Brand Identity](#3-brand-identity)
4. [Language Matrix](#4-language-matrix)
5. [Site Map & Page Inventory](#5-site-map--page-inventory)
6. [Folder Structure](#6-folder-structure)
7. [Image Inventory](#7-image-inventory)
8. [Features & Functionality](#8-features--functionality)
9. [SEO Specification](#9-seo-specification)
10. [Known Issues & Technical Notes](#10-known-issues--technical-notes)
11. [Change Log](#11-change-log)
12. [Pending Tasks](#12-pending-tasks)
13. [Delivery & Sign-Off](#13-delivery--sign-off)

---

## 1. Project Overview

| Field | Details |
| --- | --- |
| **Client** | SCZ Metal MMC |
| **Website** | scz.az |
| **Industry** | Metal Manufacturing & Industrial Services |
| **Services** | CNC Laser/Router/Punch Cutting, Bending, Welding, Coating |
| **Developer** | Hakan |
| **Type** | Static Corporate Website |
| **Total Core Pages** | 22 |
| **Languages** | 4 (AZ, EN, TR, RU) |
| **Total Language Variants** | 88 |
| **Reference Site** | solmazaluminyum.com (provided by client) |
| **Development Method** | Cloned via `wget`, edited on source files |
| **Hosting** | Hostinger Web Hosting |
| **Delivery Date** | April 23, 2026 |

### About the Project

SCZ Metal MMC required a corporate website to represent their metal manufacturing business. The client provided `solmazaluminyum.com` as a design and structural reference. The site was cloned using `wget` and fully reworked — all branding, content, contact details, translations, SEO metadata, and media assets have been replaced to reflect SCZ Metal MMC's identity.

---

## 2. Tech Stack

| Layer | Technology |
| --- | --- |
| **Markup** | HTML5 |
| **Styling** | CSS3 |
| **Scripting** | Vanilla JavaScript |
| **Slider** | Revolution Slider (JS/CSS) |
| **Fonts** | Alumni Sans (Google Fonts) — changed from Teko |
| **Maps** | Google Maps Embed API |
| **Hosting** | Hostinger (shared hosting) |
| **Deployment** | Manual upload to `public_html` via File Manager / FTP |
| **Build Tool** | None — pure static files |
| **CMS** | None |
| **Framework** | None |

---

## 3. Brand Identity

| Element | Value |
| --- | --- |
| **Company Name** | SCZ Metal MMC |
| **Logo** | SCZ Metal Logo (replaced from Solmaz Aluminyum) |
| **Primary Font** | Alumni Sans |
| **Previous Font** | Teko (reference site font — replaced) |
| **Brand Colors** | *(To be confirmed by client)* |

> ⚠️ Brand color hex values to be documented here before final delivery.

---

## 4. Language Matrix

| Language | Code | Folder | Status | Notes |
| --- | --- | --- | --- | --- |
| Azerbaijani | AZ | `/AZ/` | ✅ Complete | Primary language |
| English | EN | `/EN/` `/en/` `/En/` | 🟡 Under Revision | 3 case variants exist — duplicate issue (see §10) |
| Turkish | TR | `/TR/` `/tr/` | 🟡 Under Revision | 2 case variants exist — duplicate issue (see §10) |
| Russian | RU | `/RU/` | ✅ Added | New — not present in reference site |

**Total language variants per core page: 4**
**Total language variants across all pages: 88**

---

## 5. Site Map & Page Inventory

### Legend

- ✅ Complete
- 🟡 In Progress
- 🔴 Pending

---

### 5.1 Home

| Page (AZ) | Page (EN) | Page (TR) | Page (RU) | Status |
| --- | --- | --- | --- | --- |
| Ana Səhifə | Home | Ana Sayfa | Главная | 🟡 Images Pending |

| Language | URL |
| --- | --- |
| AZ | `scz.az/AZ/` |
| EN | `scz.az/EN/` |
| TR | `scz.az/TR/` |
| RU | `scz.az/RU/` |

---

### 5.2 About (Haqqımızda)

| Page (AZ) | Slug (AZ) | Slug (EN) | Slug (TR) | Slug (RU) | Status |
| --- | --- | --- | --- | --- | --- |
| SCZ Metalı Tanıyın | `scz-metali-taniyin` | `get-to-know` | `scz-metali-taniyin` | `uznayte-scz-metal` | 🟡 |
| Keyfiyyət Siyasətimiz | `keyfiyyat-siyasetimiz` | `quality-policy` | `kalite-politikamiz` | `politika-kachestva` | 🟡 |
| Missiya və Vizyonumuz | `missiya-ve-vizyonumuz` | `our-mission-vision` | `misyon-ve-vizyonumuz` | `missiya-i-videniye` | 🟡 |

**Full URLs (example — SCZ Metalı Tanıyın):**

| Language | URL |
| --- | --- |
| AZ | `scz.az/AZ/haqqimizda/scz-metali-taniyin/` |
| EN | `scz.az/EN/about-us/get-to-know/` |
| TR | `scz.az/TR/hakkimizda/scz-metali-taniyin/` |
| RU | `scz.az/RU/o-nas/uznayte-scz-metal/` |

---

### 5.3 Cutting Services (Kəsim)

| Page (AZ) | Slug (AZ) | Slug (EN) | Slug (TR) | Slug (RU) | Status |
| --- | --- | --- | --- | --- | --- |
| Kəsim (Ümumi) | `kesim` | `cutting` | `kesim` | `rezka` | 🟡 |
| CNC Lazer Kəsim | `cnc-lazer-kesim` | `cnc-lazer-cutting` | `cnc-lazer-kesim` | `cnc-lazernaya-rezka` | 🟡 |
| CNC Router Kəsim | `cnc-router-kesim` | `cnc-router-cutting` | `cnc-router-kesim` | `cnc-router-rezka` | 🟡 |
| CNC Punch | `cnc-punch` | `cnc-punch` | `cnc-punch` | `cnc-punch` | 🟡 |
| Giyotin Qayçı | `giyotin-qayci` | `guillotine-shearing` | `giyotin-makas` | `gilotinnaya-rezka` | 🟡 |
| Perfore | `perfore` | `perforation` | `perfore` | `perforaciya` | 🟡 |

---

### 5.4 Bending Services (Əyim)

| Page (AZ) | Slug (AZ) | Slug (EN) | Slug (TR) | Slug (RU) | Status |
| --- | --- | --- | --- | --- | --- |
| Əyim (Ümumi) | `bukum` | `bending` | `bukum` | `gibka` | 🟡 |
| CNC Abkant Əyim | `cnc-abkant-buku` | `cnc-abkant-press` | `cnc-abkant-bukum` | `cnc-abkant-press` | 🟡 |
| CNC Silindr Əyim | `cnc-silindr-buku` | `cnc-roll-bending` | `cnc-valjcovaya-gibka` | `cnc-valjcovaya-gibka` | 🟡 |
| CNC Profil Əyim | `cnc-profil-buku` | `cnc-profile-bending` | `cnc-gibka-profilya` | `cnc-gibka-profilya` | 🟡 |
| CNC Boru Əyim | `cnc-boru-buku` | `cnc-pipe-bending` | `cnc-gibka-trub` | `cnc-gibka-trub` | 🟡 |
| Mesh | `mesh` | `mesh` | `mesh` | `mesh` | 🟡 |

---

### 5.5 Other Services (Digər Xidmətlər)

| Page (AZ) | Slug (AZ) | Slug (EN) | Slug (TR) | Slug (RU) | Status |
| --- | --- | --- | --- | --- | --- |
| Qaynaq (Welding) | `qaynaq` | `welding` | `kaynak` | `svarka` | 🟡 |
| Boya (Coating) | `boya` | `coating` | `boya` | `pokrytiye` | 🟡 |

---

### 5.6 Catalogue & Contact

| Page (AZ) | Slug (AZ) | Slug (EN) | Slug (TR) | Slug (RU) | Status |
| --- | --- | --- | --- | --- | --- |
| Layihələr | `layiheler` | `projects` | `projeler` | `proekty` | 🟡 |
| Nümunə Məhsullar | `numune-mehsullar` | `sample-products` | `ornek-urunler` | `obrazcy-produkcii` | 🟡 |
| Bloqlar | `bloglar` | `blogs` | `bloglar` | `blog` | 🟡 |
| Əlaqə (Contact) | `elaqe` | `contact` | `iletisim` | `kontakty` | ✅ Fixed |

---

## 6. Folder Structure

```text
scz.az/ (public_html)
│
├── assets/
│   ├── css/
│   │   ├── revolution/           ← Revolution Slider styles
│   │   └── assets/               ← Additional asset styles
│   ├── fonts/                    ← Web fonts (Alumni Sans)
│   ├── img/
│   │   └── bg/                   ← Background images
│   └── js/
│       ├── revolution/           ← Revolution Slider scripts
│       └── revolution-addons/
│           └── panorama/         ← Panorama addon
│
├── Contents/
│   └── Files/
│       ├── BlogResim/            ← Blog post images
│       ├── OrnekUrunResim/       ← Sample product images
│       ├── ProjeResim/           ← Project images
│       └── SliderResim/          ← Homepage slider images
│
├── docs/                         ← Documents / downloadable files
├── image/
│   └── trash/                    ← ⚠️ Unused/leftover images (cleanup needed)
├── img/                          ← ⚠️ Secondary image folder (consolidation needed)
│
├── AZ/                           ← Azerbaijani language root
│   ├── index.html                ← AZ Homepage
│   ├── bloglar/
│   ├── elaqe/
│   ├── layiheler/
│   ├── numune-mehsullar/
│   ├── haqqimizda/
│   │   ├── keyfiyyat-siyasetimiz/
│   │   ├── missiya-ve-vizyonumuz/
│   │   └── scz-metali-taniyin/
│   └── ixtisaslarimiz/
│       ├── boya/
│       ├── qaynaq/
│       ├── bukum/
│       │   ├── cnc-abkant-buku/
│       │   ├── cnc-silindr-buku/
│       │   ├── cnc-profil-buku/
│       │   ├── cnc-boru-buku/
│       │   └── mesh/
│       └── kesim/
│           ├── cnc-lazer-kesim/
│           ├── cnc-router-kesim/
│           ├── cnc-punch/
│           ├── giyotin-qayci/
│           └── perfore/
│
├── EN/                           ← English language root (⚠️ see §10 — case issue)
│   ├── index.html
│   ├── about-us/
│   │   ├── get-to-know/
│   │   ├── our-mission-vision/
│   │   └── quality-policy/
│   ├── blog/
│   │   ├── 16/expo-2019/
│   │   └── 18/cnc-fiber-laser-cutting/
│   ├── blogs/
│   ├── contact/
│   ├── projects/
│   ├── sample-products/
│   └── expertice/                ← ⚠️ Typo: should be "expertise"
│       ├── bending/
│       │   ├── cnc-abkant-press/
│       │   ├── cnc-pipe-bending/
│       │   ├── cnc-profile-bending/
│       │   ├── cnc-roll-bending/
│       │   └── mesh/
│       ├── coating/
│       ├── welding/
│       └── cutting/
│           ├── cnc-lazer-cutting/
│           ├── cnc-router-cutting/
│           ├── cnc-punch/
│           ├── guillotine-shearing/
│           └── perforation/
│
├── TR/                           ← Turkish language root (⚠️ see §10 — case issue)
│   ├── index.html
│   ├── bloglar/
│   ├── iletisim/
│   ├── projeler/
│   ├── ornek-urunler/
│   ├── hakkimizda/
│   │   ├── kalite-politikamiz/
│   │   ├── misyon-ve-vizyonumuz/
│   │   └── scz-metali-taniyin/
│   └── uzmanliklarimiz/
│       ├── boya/
│       ├── kaynak/
│       ├── bukum/
│       │   ├── cnc-abkant-bukum/
│       │   ├── cnc-valjcovaya-gibka/
│       │   ├── cnc-gibka-profilya/
│       │   ├── cnc-gibka-trub/
│       │   └── mesh/
│       └── kesim/
│           ├── cnc-lazer-kesim/
│           ├── cnc-router-kesim/
│           ├── cnc-punch/
│           ├── giyotin-makas/
│           └── perfore/
│
└── RU/                           ← Russian language root (new — added by Hakan)
    ├── index.html
    ├── blog/
    ├── kontakty/
    ├── proekty/
    ├── obrazcy-produkcii/
    ├── o-nas/
    │   ├── missiya-i-videniye/
    │   ├── politika-kachestva/
    │   └── uznayte-scz-metal/
    └── uslugi/
        ├── pokrytiye/
        ├── svarka/
        ├── gibka/
        │   ├── cnc-abkant-press/
        │   ├── cnc-gibka-profilya/
        │   ├── cnc-gibka-trub/
        │   ├── cnc-valjcovaya-gibka/
        │   └── mesh/
        └── rezka/
            ├── cnc-lazernaya-rezka/
            ├── cnc-router-rezka/
            ├── cnc-punch/
            ├── gilotinnaya-rezka/
            └── perforaciya/
```

---

## 7. Image Inventory

### 7.1 Image Folders

| Folder | Purpose | Status |
| --- | --- | --- |
| `assets/img/bg/` | Background images (section backgrounds) | 🔴 HD replacement pending |
| `Contents/Files/SliderResim/` | Homepage slider images | 🔴 HD replacement pending |
| `Contents/Files/ProjeResim/` | Project gallery images | 🔴 HD replacement pending |
| `Contents/Files/OrnekUrunResim/` | Sample product images | 🔴 HD replacement pending |
| `Contents/Files/BlogResim/` | Blog post cover images | 🔴 HD replacement pending |
| `img/` | General/misc images | ⚠️ Audit needed |
| `image/trash/` | Leftover unused images | ⚠️ Delete before deployment |

---

### 7.2 Per-Page Image Log

> ⚠️ This table will be completed during the image replacement phase before April 23, 2026.

| Page | Language | Image Count | Images Replaced | HD Source | Status |
| --- | --- | --- | --- | --- | --- |
| Home (Hero Slider) | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| SCZ Metalı Tanıyın | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Keyfiyyət Siyasətimiz | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Missiya və Vizyonumuz | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Kəsim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Lazer Kəsim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Router Kəsim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Punch | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Giyotin Qayçı | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Perfore | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Əyim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Abkant Əyim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Silindr Əyim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Profil Əyim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| CNC Boru Əyim | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Mesh | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Qaynaq | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Boya | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Layihələr | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Nümunə Məhsullar | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Bloqlar | ALL | TBD | 🔴 Pending | TBD | 🔴 |
| Əlaqə | ALL | TBD | — | — | ✅ No images |

---

## 8. Features & Functionality

| # | Feature | Description | Status |
| --- | --- | --- | --- |
| 1 | **Language Switcher** | Toggle between AZ / EN / TR / RU on all pages | ✅ Working |
| 2 | **Revolution Slider** | Full-width hero image slider on homepage | ✅ Working |
| 3 | **Google Maps Embed** | Interactive map on Contact page | ✅ Fixed |
| 4 | **Contact Form** | Enquiry/contact form on Əlaqə page | 🟡 To verify |
| 5 | **Mobile Navigation** | Hamburger menu for mobile/tablet viewports | 🟡 To verify |
| 6 | **Responsive Layout** | Mobile-first responsive design across all pages | 🟡 Final check pending |
| 7 | **Image Gallery / Lightbox** | Project and sample product image galleries | 🟡 To verify |
| 8 | **WhatsApp / Social Links** | Links to SCZ Metal official social accounts | ✅ Updated |
| 9 | **Smooth Scroll / Animations** | CSS/JS scroll animations inherited from reference site | 🟡 To verify |
| 10 | **Panorama Addon** | Revolution Slider panorama addon present in JS | 🟡 Check if used |

---

## 9. SEO Specification

| Element | Status | Notes |
|---|---|---|
| `<title>` tags | ✅ Updated | All pages updated for SCZ Metal |
| `<meta name="description">` | ✅ Updated | Rewritten for SCZ Metal services |
| `<meta name="keywords">` | ✅ Updated | CNC, metal, welding, cutting keywords |
| Open Graph (`og:title`, `og:description`, `og:image`) | ✅ Updated | SCZ Metal branding applied |
| `lang` attribute on `<html>` | 🟡 Verify | Should be `az`, `en`, `tr`, `ru` per page |
| Canonical URLs | 🔴 Not confirmed | Check for duplicate content from EN/en/En folders |
| `robots.txt` | 🔴 Not confirmed | Verify exists and is correct |
| `sitemap.xml` | 🔴 Not confirmed | Generate before deployment |
| Image `alt` tags | 🔴 Pending | Add after HD image replacement |

---

## 10. Known Issues & Technical Notes

| # | Issue | Severity | Notes |
|---|---|---|---|
| 1 | **EN folder case variants** (`/EN/`, `/en/`, `/En/`) | 🔴 High | Three case variants of the English folder exist. On Linux servers (Hostinger) paths are case-sensitive — this will cause 404 errors. Consolidate to one canonical folder (recommend `/en/`) and redirect others. |
| 2 | **TR folder case variants** (`/TR/`, `/tr/`) | 🔴 High | Same issue as above. Consolidate to `/tr/`. |
| 3 | **`expertice` folder typo** (EN) | 🟡 Medium | Should be `expertise`. Fix slug and update all internal links. |
| 4 | **`image/trash/` folder** | 🟡 Medium | Contains leftover unused images from reference site. Delete before deployment to keep server clean. |
| 5 | **Duplicate `img/` and `assets/img/` folders** | 🟡 Medium | Two separate image folders exist. Audit and consolidate before deployment. |
| 6 | **Blog post subfolders** (`/16/`, `/18/`) | 🟡 Low | Old blog post pages from reference site. Confirm if these are needed or should be removed. |
| 7 | **Old project subfolders** (`/2/`, `/6/`, `/7/`...) | 🟡 Low | Old project pages from reference site. Confirm if these are SCZ Metal projects or leftover data. |

---

## 11. Change Log

All changes applied by Hakan across all language versions unless stated otherwise.

| # | Category | Change | Status |
|---|---|---|---|
| 1 | Branding | Logo replaced — Solmaz Aluminyum → SCZ Metal MMC | ✅ Done |
| 2 | Branding | All brand name text replaced site-wide | ✅ Done |
| 3 | Branding | Brand images and banners replaced | ✅ Done |
| 4 | Typography | Font changed from Teko → Alumni Sans | ✅ Done |
| 5 | Translation | Azerbaijani (AZ) version — complete | ✅ Done |
| 6 | Translation | Russian (RU) version — added from scratch | ✅ Done |
| 7 | Translation | English (EN) grammatical revision | 🟡 In Progress |
| 8 | Translation | Turkish (TR) grammatical revision | 🟡 In Progress |
| 9 | Content | All page texts revised for SCZ Metal | 🟡 In Progress |
| 10 | Contact | Phone, email, address updated to SCZ Metal info | ✅ Done |
| 11 | Contact | Social media links updated to SCZ Metal accounts | ✅ Done |
| 12 | Bug Fix | Google Maps embed fixed on Contact page | ✅ Done |
| 13 | SEO | Meta titles, descriptions, keywords updated | ✅ Done |
| 14 | SEO | Open Graph tags updated | ✅ Done |
| 15 | Media | HD image replacement — all pages | 🔴 Pending |
| 16 | Structure | Full page layout & structure revision | 🟡 In Progress |

---

## 12. Pending Tasks

| # | Task | Priority | Due |
|---|---|---|---|
| 1 | Resolve EN/en/En folder case conflict | 🔴 Critical | Before deploy |
| 2 | Resolve TR/tr folder case conflict | 🔴 Critical | Before deploy |
| 3 | Replace all images with HD versions | 🔴 High | Apr 23 |
| 4 | Complete EN grammatical revision | 🔴 High | Apr 23 |
| 5 | Complete TR grammatical revision | 🔴 High | Apr 23 |
| 6 | Fix `expertice` → `expertise` typo in EN slug | 🟡 Medium | Before deploy |
| 7 | Delete `image/trash/` folder | 🟡 Medium | Before deploy |
| 8 | Consolidate `img/` and `assets/img/` | 🟡 Medium | Before deploy |
| 9 | Add `alt` tags to all images | 🟡 Medium | Apr 23 |
| 10 | Generate `sitemap.xml` | 🟡 Medium | Before deploy |
| 11 | Verify `robots.txt` | 🟡 Medium | Before deploy |
| 12 | Full mobile responsiveness check | 🟡 Medium | Apr 23 |
| 13 | Cross-browser compatibility check | 🟡 Medium | Apr 23 |
| 14 | Upload to Hostinger `public_html` | 🔴 High | Apr 23 |
| 15 | Final client review & sign-off | 🔴 High | Apr 23 |

---

## 13. Delivery & Sign-Off

| Field | Details |
|---|---|
| **Prepared by** | Hakan |
| **Client** | SCZ Metal MMC |
| **Website** | scz.az |
| **Document Version** | v1.0 — Draft |
| **Report Date** | April 16, 2026 |
| **Target Delivery** | April 23, 2026 |

---

| | Signature | Date |
|---|---|---|
| **Developer (Hakan)** | ___________________________ | ___________ |
| **Client (SCZ Metal MMC)** | ___________________________ | ___________ |

---

*Document will be updated to v1.1 — Final upon delivery completion on April 23, 2026.*
