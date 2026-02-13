# 🎨 Prompt: Build Responsive Web App dengan Fokus UI/UX Flow

## 📋 Overview Request

Saya ingin membuat web application **[PilahYuk]** yang merupakan platform untuk **[penjemputan sampah dengan sistem reward, tracking real-time driver, dan subscription tiers (Gratis, Reguler, Premium)]**.

**Prioritas Utama:** UI/UX Flow + Responsive Design (Mobile, Tablet, Laptop)

---

## 🎯 Core Requirements

### 1. Platform Multi-Device
- ✅ **Mobile First** (360px - 768px) - Primary focus
- ✅ **Tablet** (768px - 1024px) - Optimized layout
- ✅ **Desktop/Laptop** (1024px+) - Full experience
- ✅ Smooth transitions antar breakpoints
- ✅ Touch-friendly untuk mobile/tablet
- ✅ Hover states untuk desktop

### 2. Tech Stack (Recommended)
```
Framework: Next.js 15+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
UI Components: shadcn/ui
Icons: Lucide React
State: React Hooks (useState, useEffect)
```

---

## 🎨 Design Philosophy

### Visual Excellence
1. **Modern & Premium Look**
   - Gradient backgrounds (subtle, tidak norak)
   - Glassmorphism untuk cards
   - Smooth shadows dengan multiple layers
   - Rounded corners (xl, 2xl untuk cards)
   
2. **Color Palette**
   ```css
   Primary: HSL-based green/eco theme
   - eco-50 to eco-900 (gradasi)
   Secondary: Complementary (amber/orange/purple)
   Accent: Untuk CTAs dan highlights
   Neutral: Gray scale untuk teks
   ```

3. **Typography**
   - Font: Inter / Plus Jakarta Sans
   - Hierarchy jelas (h1: 2xl-4xl, body: sm-base)
   - Line height comfortable (1.5-1.7)
   - Weight variations (medium, semibold, bold)

### Micro-Interactions & Animations
```typescript
// Contoh pattern yang diinginkan:
- Fade in on scroll/mount
- Smooth hover states (scale, shadow, color)
- Loading states dengan skeleton
- Progress indicators (animated)
- Pulse effects untuk real-time updates
- Stagger animations untuk lists
```

---

## 📱 Page Structure & Flow

> **INSTRUKSI:** Sesuaikan dengan kebutuhan aplikasi Anda. Berikut contoh flow untuk app penjemputan sampah:

### 1. Landing/Home Page
**Mobile Layout:**
```
┌─────────────────┐
│  Header         │ ← Sticky, blur background
├─────────────────┤
│  Hero Section   │ ← Full viewport, CTA prominent
│  - Title        │
│  - Subtitle     │
│  - CTA Button   │
├─────────────────┤
│  Stats/Social   │ ← 3 kolom, scroll horizontal
│  Proof          │
├─────────────────┤
│  Features       │ ← Vertical stack, icons besar
│  (Cards)        │
├─────────────────┤
│  How It Works   │ ← Numbered steps, timeline
├─────────────────┤
│  Bottom Nav     │ ← Fixed, 4-5 icons
└─────────────────┘
```

**Tablet Layout:**
```
┌─────────────────────────┐
│  Header                 │
├─────────────────────────┤
│  Hero (60% height)      │
│  Stats (3 columns)      │
├──────────┬──────────────┤
│ Feature  │  Feature     │ ← 2 kolom
│    1     │     2        │
├──────────┼──────────────┤
│ Feature  │  Feature     │
│    3     │     4        │
└─────────────────────────┘
```

**Desktop Layout:**
```
┌────────────────────────────────────┐
│  Header (left logo, right nav)     │
├─────────────────┬──────────────────┤
│  Hero Text      │  Hero Visual     │ ← 50/50 split
│  + CTA          │  (illustration)  │
├─────────────────┴──────────────────┤
│  Stats (4 columns, centered)       │
├──────┬──────┬──────┬───────────────┤
│ Feat │ Feat │ Feat │ Feat          │ ← 4 kolom
│  1   │  2   │  3   │  4            │
└──────┴──────┴──────┴───────────────┘
```

### 2. Request/Order Page
**Flow:** Form multi-step dengan progress indicator
```typescript
Steps:
1. Pilih Layanan (cards selectable)
2. Pilih Jadwal (calendar + time slots)
3. Detail Alamat (map integration optional)
4. Konfirmasi (summary + submit)

Mobile: Full screen per step
Tablet/Desktop: Sidebar progress + main form
```

### 3. Tracking Page
**Komponen:**
- Map view (fake or real Google Maps)
- Driver info card (foto, rating, kontak)
- Timeline status (vertical mobile, horizontal tablet+)
- Real-time ETA badge
- Action buttons (Call, Chat)

### 4. Pricing Page
**Layout:**
```
- Promo banner (gradient, animated)
- Stats bar (social proof)
- Pricing cards (3 tiers, vertical stack mobile)
  - Popular badge untuk middle tier
  - Feature comparison list
  - Collapsible full comparison table
  - WTP/popularity indicator (bar chart)
- FAQ accordion
```

### 5. Profile/Rewards Page
**Sections:**
- Points balance (big card with gradient)
- Tier status (bronze/silver/gold)
- Transaction history (list with pagination)
- Referral code share
- Settings/Logout

---

## 🧩 Component Architecture

### Shared Components
```
components/
├── ui/                    # shadcn/ui base
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── header.tsx             # Top navigation
├── bottom-nav.tsx         # Mobile bottom nav
├── pricing-card.tsx       # Reusable card
├── feature-card.tsx
├── timeline.tsx
└── stats-badge.tsx
```

### UI Pattern Guidelines
1. **Cards:**
   ```tsx
   - Padding: p-4 to p-6
   - Border radius: rounded-xl to rounded-2xl
   - Shadow: shadow-lg dengan hover:shadow-eco-lg
   - Border: border-2 untuk selected state
   - Background: bg-white atau gradient
   ```

2. **Buttons:**
   ```tsx
   Primary: gradient-eco dengan shadow
   Secondary: outline dengan hover fill
   Size: h-12 (mobile), h-14 (desktop)
   Icon + Text: gap-2, icon w-5 h-5
   ```

3. **Input Fields:**
   ```tsx
   - Height: h-12 minimum
   - Focus ring: ring-2 ring-eco-500
   - Error state: border-red-500
   - Helper text di bawah
   ```

---

## 📐 Responsive Guidelines

### Breakpoints
```css
sm: 640px   /* Phone landscape */
md: 768px   /* Tablet portrait */
lg: 1024px  /* Tablet landscape / small laptop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

### Layout Patterns
```tsx
// Mobile: Stack vertical
<div className="flex flex-col gap-4">

// Tablet: 2 kolom
<div className="flex flex-col md:flex-row md:gap-6">

// Desktop: Grid 3-4 kolom
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Padding responsif
className="px-4 md:px-6 lg:px-8 py-4 md:py-6"

// Text responsif
className="text-2xl md:text-3xl lg:text-4xl"

// Container max width
className="max-w-7xl mx-auto"
```

### Touch Targets (Mobile)
- Minimum 44x44px untuk buttons
- Spacing antar elements: min 8px
- Swipe gestures untuk carousels
- Bottom sheet untuk modals

---

## ⚡ Animation Patterns

### Page Transitions
```tsx
import { motion } from "framer-motion";

// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

### Hover Effects
```tsx
// Card hover
className="transition-all duration-300 hover:scale-105 hover:shadow-2xl"

// Button hover
className="transition-all hover:translate-y-[-2px] hover:shadow-lg"

// Icon pulse
<motion.div
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
```

### Loading States
```tsx
// Skeleton loader
<div className="animate-pulse bg-gray-200 h-4 rounded" />

// Spinner
<div className="animate-spin rounded-full border-t-2" />

// Progress bar
<motion.div
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  className="h-2 bg-eco-500 rounded-full"
/>
```

---

## 🎯 UX Best Practices

### Navigation
- ✅ Sticky header dengan scroll blur effect
- ✅ Bottom nav untuk mobile (max 5 items)
- ✅ Breadcrumbs untuk nested pages (tablet+)
- ✅ Back button di header untuk sub-pages
- ✅ Active state indicators yang jelas

### Feedback
- ✅ Loading states untuk async actions
- ✅ Success/error toast notifications
- ✅ Disabled state untuk buttons
- ✅ Validation errors inline (real-time)
- ✅ Confirmation modals untuk destructive actions

### Performance
- ✅ Lazy load images dengan placeholder
- ✅ Code splitting per route
- ✅ Optimize animations (GPU-accelerated properties)
- ✅ Skeleton screens saat loading
- ✅ Debounce untuk search/filter

### Accessibility
- ✅ Semantic HTML (header, nav, main, footer)
- ✅ Alt text untuk images
- ✅ ARIA labels untuk icons
- ✅ Keyboard navigation support
- ✅ Color contrast minimum WCAG AA

---

## 🚀 Implementation Checklist

### Phase 1: Setup & Foundation
- [ ] Init Next.js project dengan TypeScript
- [ ] Setup Tailwind CSS + custom theme
- [ ] Install dependencies (shadcn/ui, framer-motion, lucide)
- [ ] Create color palette dan CSS variables
- [ ] Setup global styles dan fonts

### Phase 2: Layout & Navigation
- [ ] Header component (responsive)
- [ ] Bottom navigation (mobile only)
- [ ] Footer component
- [ ] Layout wrapper dengan container

### Phase 3: Pages (Mobile First)
- [ ] Landing page + hero section
- [ ] Features section dengan cards
- [ ] Pricing page dengan comparison
- [ ] Request/Order flow (multi-step form)
- [ ] Tracking page dengan map
- [ ] Profile/Dashboard

### Phase 4: Polish & Optimization
- [ ] Add micro-interactions
- [ ] Loading states & skeletons
- [ ] Error handling & validation
- [ ] Responsive refinement (tablet, desktop)
- [ ] Performance audit
- [ ] Accessibility audit

### Phase 5: Testing
- [ ] Test di Chrome DevTools (responsive mode)
- [ ] Test di device asli (iOS, Android)
- [ ] Test tablet (iPad, Android tablet)
- [ ] Test desktop (various screen sizes)
- [ ] Cross-browser testing

---

## 📝 Example Component Request

```
Contoh instruksi spesifik untuk AI:

"Buatkan pricing page dengan layout berikut:
- 3 tier cards (Free, Regular, Premium)
- Mobile: vertical stack, full width cards
- Tablet: 3 kolom grid, gap-4
- Desktop: 3 kolom grid centered, max-w-6xl
- Middle tier (Regular) ada badge "Most Popular"
- Setiap card punya:
  - Icon gradient di atas
  - Harga besar di tengah
  - Feature list dengan checkmark/cross icons
  - CTA button (gradient untuk popular tier)
  - Hover effect: lift + shadow
- Di bawah ada comparison table (collapsible)
- Animasi: cards fade in dengan stagger delay
- Framer Motion untuk animations
- Semua text harus readable (min 14px mobile)"
```

---

## 🎨 Design Token Reference

```css
/* globals.css - Custom variables */
:root {
  /* Colors */
  --eco-50: hsl(142, 70%, 97%);
  --eco-100: hsl(142, 65%, 92%);
  --eco-500: hsl(142, 71%, 45%);
  --eco-600: hsl(142, 76%, 36%);
  
  /* Shadows */
  --shadow-eco: 0 10px 15px -3px rgba(34, 197, 94, 0.1);
  --shadow-eco-lg: 0 20px 25px -5px rgba(34, 197, 94, 0.15);
  
  /* Border radius */
  --radius-card: 1rem;
  --radius-button: 0.75rem;
  
  /* Spacing */
  --container-padding: 1rem;
  --section-gap: 3rem;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 1.5rem;
    --section-gap: 5rem;
  }
}
```

---

## ✨ Extra Tips untuk Premium Look

1. **Gradients:**
   ```css
   /* Subtle backgrounds */
   bg-gradient-to-b from-eco-50 to-white
   
   /* Bold CTAs */
   bg-gradient-to-r from-eco-500 to-eco-600
   
   /* Overlay effects */
   bg-gradient-to-t from-black/60 to-transparent
   ```

2. **Glassmorphism:**
   ```css
   backdrop-blur-lg bg-white/80 border border-white/20
   ```

3. **Shadow Layers:**
   ```css
   shadow-[0_4px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)]
   ```

4. **Smooth Transitions:**
   ```css
   transition-all duration-300 ease-out
   ```

---

## 📞 Final Notes

**Fokus Utama:**
- 🎯 Mobile experience harus PERFECT (80% users mobile)
- 🎨 Visual harus WOW di first impression
- ⚡ Interactions harus smooth & responsive
- 🔄 Flow harus intuitive, minimal friction
- 📱 Touch targets harus comfortable

**Deliverables yang Diharapkan:**
- ✅ Fully responsive di semua devices
- ✅ Smooth animations tanpa lag
- ✅ Clean code structure (reusable components)
- ✅ Consistent design language
- ✅ Production-ready (deploy ke Vercel)

---

**Template ini siap digunakan! Tinggal:**
1. Replace [NAMA APLIKASI] dan [DESKRIPSI]
2. Adjust page structure sesuai kebutuhan
3. Tambahkan fitur spesifik aplikasi Anda
4. Copy prompt ini ke AI assistant Anda

**Happy building! 🚀**
