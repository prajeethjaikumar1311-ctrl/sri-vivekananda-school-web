# Sri Vivekananda Nursery and Primary School — Official Website

> **Singarapettai – 635 307, Tamil Nadu, India**  
> *Quality Education • Good Discipline • Holistic Development*  
> Managed by **JSP Educational Trust** — *"Nothing is Impossible"*

---

## Overview

This repository contains the official modern, responsive web application for **Sri Vivekananda Nursery and Primary School**, located in SKR Nagar, Singarapettai – 635 307.

The website is crafted to serve parents, prospective families, teachers, students, and visitors. It highlights foundational education for **Pre-KG to Standard V**, trilingual curriculum (Tamil, English, Hindi), specialized spoken English and handwriting coaching, computer education, yoga, karate, safe campus bus transit, school celebrations, and current **Admissions 2026–2027** guidelines.

All visual content on this website uses the **authentic official school photographs**—including the campus building, aerial drone perspectives, classroom courtyards, educational tours to Paravasa Ulagam and Mahabalipuram, Pongal festival celebrations, yellow school bus fleet, and official leadership seals.

---

## Key Features & Highlights

1. **Sticky Modern Header & Navigation:**
   - Official circular Sri Vivekananda logo maintaining exact aspect ratio.
   - Quick navigation to Home, About Us, Academics, Facilities, Activities, Admissions, and Contact.
   - Prominent **"ADMISSIONS OPEN"** CTA button.
   - Mobile-responsive navigation drawer with touch-friendly layout.

2. **Top Announcement Bar:**
   - Admissions pill for academic year 2026–2027.
   - Direct clickable school phone numbers and official email address.
   - Informational link to Tamil Nadu RTE resource portal (`righttoeducation.in/resources/states/tamil-nadu`).

3. **Visually Engaging Hero Section:**
   - High-definition photograph of the 3-storey school building in Singarapettai with subtle dark blue overlay.
   - Core school tagline: *"Quality Education • Good Discipline • Holistic Development"*.
   - Direct CTAs for admissions and campus exploration.

4. **10 Why Choose Us Pillars:**
   - Quality Education, Good Discipline, Trilingual Learning, Spoken English, Computer Training, Extracurricular Activities, Yoga & Karate, School Bus Facility, Purified Drinking Water, and Spacious Learning Environment.

5. **Trilingual Academic Framework:**
   - Dedicated breakdown for each stage: Pre-KG, LKG, UKG, Standard I, II, III, IV, and Standard V.
   - Balanced focus on Tamil (mother tongue), English (global communication), and Hindi (national language).

6. **Authentic Campus Facilities & Transportation:**
   - Clean photo cards showcasing airy classrooms, open playground, purified water system, and safe school bus fleet.
   - Dedicated bus transit section with verified routes note.

7. **Respected Leadership Section:**
   - **Chairman:** R. Jayakumar (*M.Sc., M.Phil., B.Ed., DPCS., DIM.*) featuring official JSP Educational Trust seal and educational vision.
   - **Correspondent:** Mrs. C. Sathiya Jayakumar (*M.Sc. (Psy), M.Sc. (MB), M.Ed., M.Phil.*) featuring official JSP Educational Trust seal and early education care focus.

8. **Admissions 2026–2027 & RTE Section:**
   - Official admissions poster display.
   - Comprehensive checklist of 6 required documents (Birth Certificate, Community Certificate, Income Certificate, Aadhaar Card, Passport Photos, Address Proof).
   - Dedicated **RTE Admission Information** card with verified age criteria (01-08-2022 to 31-07-2023) and 1km residential guideline.

10. **Contact & Online Enquiry Form:**
    - Clickable phone links (`tel:`), email links (`mailto:`), and direct WhatsApp chat button.
    - Verified school phone numbers: `99656 36999`, `95971 91909`, `73733 31600`, `95971 91929`.
    - Verified email: `vivekanandaspt@gmail.com`.
    - Validated admission enquiry form.

11. **Mobile Optimization & Accessibility:**
    - Floating bottom mobile bar for fast access to Call, WhatsApp, and Admissions.
    - Smooth scroll-to-top button.
    - Full keyboard focus support, semantic HTML, and `prefers-reduced-motion` compliance.

---

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Tooling:** Vite 6
- **Styling:** Tailwind CSS v4 + Tailwind Typography
- **Icons:** Lucide React
- **Routing:** Wouter (Zero-dependency client-side SPA routing)
- **Deployment Platform:** Vercel / Static Web Host

---

## Project Structure

```
Sri-Vivekananda-School-Website-1/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo/            # School logo & JSP Trust seal
│       ├── leadership/      # Chairman portrait
│       ├── campus/          # Wide building, courtyard, aerial views
│       ├── events/          # Annual Day, Pongal celebration
│       ├── students/        # Paravasa Ulagam & outdoor trips
│       ├── transport/       # Official school yellow buses
│       ├── activities/      # Extracurricular activities
│       └── admissions/      # Admissions & RTE posters
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── TopAnnouncementBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── LightboxModal.tsx
│   │   ├── FloatingMobileCTA.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Breadcrumbs.tsx
│   ├── data/                # Centralized school configuration
│   │   └── schoolData.ts    # Single source of truth for text & media
│   ├── sections/            # Modular page sections
│   │   ├── HeroSection.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AcademicsSection.tsx
│   │   ├── FacilitiesSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── ActivitiesSection.tsx
│   │   ├── SchoolLifeSection.tsx
│   │   ├── AdmissionsSection.tsx
│   │   ├── TransportationSection.tsx
│   │   ├── EventsSection.tsx
│   │   └── ContactSection.tsx
│   ├── pages/               # Individual SPA routes
│   │   ├── HomePage.tsx     # Homepage
│   │   ├── AboutPage.tsx
│   │   ├── AcademicsPage.tsx
│   │   ├── FacilitiesPage.tsx
│   │   ├── ActivitiesPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx              # Router shell & top-level layout
│   ├── index.css            # Global typography & color variables
│   └── main.tsx             # React DOM entry point
├── index.html               # Semantic HTML shell with SEO meta tags & Schema.org JSON-LD
├── vite.config.ts           # Vite bundler configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment & SPA routing rewrites
└── package.json             # NPM package scripts & dependencies
```

---

## How to Install & Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x, 20.x, or 22+ recommended)
- `npm` (comes with Node.js) or `pnpm`

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Sri-Vivekananda-School-Website-1.git
cd Sri-Vivekananda-School-Website-1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the website with instant hot module reloading.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## How to Deploy on Vercel

This repository is pre-configured for **zero-configuration deployment on Vercel**:

1. Push this repository to GitHub.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Import your `Sri-Vivekananda-School-Website-1` GitHub repository.
5. Vercel will automatically detect:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your official school website will go live in less than a minute!
7. The included `vercel.json` ensures that deep links like `/about`, `/academics`, `/facilities`, `/activities`, `/admissions`, and `/contact` resolve smoothly without 404 errors.

---

## Updating School Information & Content

All textual content, contact details, leadership credentials, and lists are centralized in:

📂 `src/data/schoolData.ts`

- **Phone numbers or emails:** Update `schoolData.phoneNumbers` or `schoolData.emails`.
- **Academic classes & highlights:** Update `academicClasses`.
- **School facilities:** Update `facilitiesList`.
- **Activities & programs:** Update `activitiesList`.
- **Admissions document requirements:** Update `admissionChecklist`.
- **RTE guidelines:** Update `rteAdmissionInfo`.

---

## SEO & Accessibility Compliance

- **Primary Title:** `Sri Vivekananda Nursery and Primary School, Singarapettai`
- **Meta Description:** Official website with complete academic, admission, bus transport, and campus details.
- **Structured Data:** Includes Schema.org `School` / `EducationalOrganization` JSON-LD for enhanced Google Search discovery.
- **Alt Text:** Every image is tagged with descriptive, authentic alt text.
- **Search Engines:** Indexed via `public/robots.txt` and `public/sitemap.xml`.
- **Contrast Ratios:** Compliant with WCAG standards for optimal readability.

---

## License & Copyright

© 2026 **Sri Vivekananda Nursery and Primary School**, SKR Nagar, Singarapettai – 635 307. All Rights Reserved. Managed under **JSP Educational Trust**.
