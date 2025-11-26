# KANARA Baby Spa Home Care - Design Guidelines

## Design Approach
**Premium Maternal Care Reference**: Draw inspiration from luxury baby care brands like Mustela, The Honest Company, and premium spa services - emphasizing soft femininity, trust, and professionalism.

## Brand Identity & Color Palette

**Primary Colors:**
- Pink Soft: #F8C9D4 (primary brand color, CTAs, accents)
- White Off: #FFFDFE (backgrounds, cards)
- Rose Gold Soft: #D4A5A5 (secondary accents, borders)
- Nude Soft: #F5E8E0 (section backgrounds, alternating sections)
- Brown Soft: #8A6E63 (headlines, important text)

**Color Usage:**
- Backgrounds alternate between White Off and Nude Soft for visual rhythm
- CTAs use Pink Soft with white text
- Section headers in Brown Soft
- Subtle Rose Gold borders and decorative elements

## Typography System

**Font Families:**
- Playfair Display: All headlines and section titles (serif, premium, elegant)
- Poppins: Body text, descriptions, cards (sans-serif, clean, modern)
- Quicksand: Decorative text, special callouts, pricing badges

**Hierarchy:**
- H1 Hero: Playfair Display, 3.5rem desktop / 2.5rem mobile, Brown Soft
- H2 Section Headers: Playfair Display, 2.5rem desktop / 2rem mobile, Brown Soft
- H3 Card Titles: Poppins SemiBold, 1.5rem, Brown Soft
- Body: Poppins Regular, 1rem, soft gray (#6B6B6B)
- Decorative: Quicksand Medium, 0.875rem, Rose Gold Soft

## Layout & Spacing

**Spacing System:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 desktop / py-12 mobile
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-6

**Grid Patterns:**
- Services: 4-column grid desktop / 2-column tablet / 1-column mobile
- Testimonials: 3-column grid desktop / 1-column mobile
- Gallery: Masonry grid with 3-4 columns desktop
- Packages: 3-column pricing cards

## Page Structure & Sections

**1. Hero Section** (100vh)
- Large hero background image: soft-toned baby spa scene with pastel treatment
- Center-aligned content with generous whitespace
- Headline + subheadline + dual CTAs ("Booking Sekarang" primary, "Lihat Paket" secondary)
- Subtle floral graphic elements in corners

**2. About KANARA**
- Two-column layout: brand story text + soft image collage
- Warm, personal tone with founder story or mission
- Decorative floral divider

**3. Layanan Utama** (Services)
- 4-card grid showcasing Baby Spa, Massage, BAPIL, Therapy
- Each card: soft icon, title, short description, subtle Rose Gold border
- Hover: gentle scale + soft shadow elevation

**4. Kenapa Memilih Kami** (Why Choose Us)
- 3-column feature grid with icons
- Emphasize: certified therapists, safety protocols, home comfort, premium equipment
- Background: Nude Soft section

**5. Paket & Price List**
- 3 pricing tiers in card format
- Each card: package name, price, features list, CTA button
- Highlight most popular package with Pink Soft border
- Decorative price badges using Quicksand font

**6. Testimoni**
- 3-column testimonial cards with parent photos (or baby icons)
- Include name, rating stars, review text
- Soft card shadows with White Off background

**7. Galeri**
- Masonry grid gallery (3-4 columns)
- Soft pastel-toned baby spa images
- Zoom-in hover effect with overlay

**8. Cara Booking** (Booking Instructions)
- Step-by-step visual process (1-2-3 steps)
- WhatsApp integration prominent
- Quick booking form alternative

**9. Area Layanan & Jam Operasional**
- Two-column: service area map/list + operating hours
- Contact information clearly displayed

**10. CTA Closing**
- Full-width section with Pink Soft background
- Large headline + primary CTA button
- Trust indicators (certified, trusted, 100+ happy families)

**11. Footer**
- Multi-column: about, services quick links, contact, social media
- Brown Soft text on Nude Soft background
- Minimal floral footer decoration

## Component Library

**Buttons:**
- Primary: Pink Soft background, white text, rounded-full, px-8 py-3
- Buttons on images: backdrop-blur background with white/light treatment
- Hover: subtle bounce animation (scale 1.05)
- No custom hover states for blurred buttons over images

**Cards:**
- Soft shadows: shadow-md to shadow-lg
- Rounded corners: rounded-2xl
- Background: White Off
- Border: optional 1px Rose Gold Soft
- Hover: scale(1.02) + shadow elevation

**Icons:**
- Use Heroicons library via CDN
- Soft, rounded style matching feminine aesthetic
- Size: 2rem to 3rem for feature icons

**Forms:**
- Input fields: rounded-lg, border Rose Gold Soft, focus:Pink Soft
- Soft padding: px-4 py-3
- Poppins font for inputs

## Images

**Hero Image:** Full-width background image showing serene baby spa scene - soft lighting, pastel tones, professional setting with therapist and baby in calm environment

**Supporting Images:**
- About section: Warm, authentic photos of therapists with babies
- Services: Close-up shots of baby massage, spa treatments with soft focus
- Gallery: 8-12 curated images of babies during treatments, happy parents, clean spa setup
- All images should have pastel color treatment and soft, warm lighting

## Animations & Interactions

**AOS Library Configuration:**
- Duration: 600-800ms
- Easing: ease-out-cubic
- Offset: 100px

**Animation Types:**
- Sections: fade-up on scroll
- Cards: fade-in with stagger
- Gallery images: fade-in with zoom-in hover
- Buttons: subtle bounce on hover
- Hero elements: sequential fade-in on load

**Interaction States:**
- Card hover: transform scale(1.02), shadow-xl
- Button hover: transform scale(1.05), subtle bounce
- Gallery hover: zoom-in (1.1), soft overlay
- Link hover: color transition to Pink Soft

## Design Principles

**Clean Luxury:** Abundant whitespace, premium typography, restrained use of decorative elements

**Feminine & Warm:** Soft color palette, rounded corners throughout, gentle shadows, nurturing imagery

**Trust & Safety:** Professional imagery, clear certifications, authentic testimonials, transparent pricing

**Mobile-First:** Responsive grid systems, touch-friendly button sizes (min 44px), readable mobile typography

**Accessibility:** Maintain WCAG AA contrast ratios, clear focus states, semantic HTML structure

This landing page creates a premium, trustworthy experience that reassures parents while showcasing KANARA's expertise in baby care services.