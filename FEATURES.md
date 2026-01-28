# Portfolio Features Overview

## 🎨 Design System

### Industrial Blueprint Theme
- **Background**: `#042048` (Deep navy blue)
- **Accent**: `#00FFFF` (Cyan)
- **Font**: JetBrains Mono (monospace)
- **Grid**: 100px cell SVG overlay at 5% opacity
- **Aesthetic**: Technical schematic / Engineering blueprint

### Animation Philosophy
- **Easing**: power4.out (default), expo.out (emphasis)
- **Smooth Scrolling**: Lenis with 1.2s duration
- **Scroll-Driven**: GSAP ScrollTrigger throughout
- **Hardware Accelerated**: transform3d for 60fps

## 📱 Sections

### 1. Hero - Scroll-Triggered Animation Sequence
**Implementation**: Canvas-based frame sequence
**Animation Frames**: 192 PNG images
**Scroll Range**: 3000px (desktop), 1500px (mobile)

**Features**:
- Progressive image preloading with % indicator
- Real-time canvas rendering based on scroll position
- Bidirectional playback (forward/reverse)
- Three text overlays with staggered fade animations:
  - "Raphael Kalonji" (0-25% scroll)
  - "Building Digital Precision" (25-50% scroll)
  - "Design-Engineer • Full-Stack Developer" (50-75% scroll)

**Technical Details**:
```javascript
// Frame calculation
const frame = Math.round(scrollProgress * 191);

// Canvas scaling
const scale = Math.min(
  canvas.width / image.width,
  canvas.height / image.height
);
```

### 2. Experience - Technical Timeline
**Layout**: Vertical timeline with cyan connecting line

**Experiences** (from CV):
1. **Datapolitic** (Sept 2024 - Dec 2024)
   - ETL pipeline development
   - RAG system integration
   - Front-end architecture refactor
   
2. **Efficientis** (Sept 2023 - Jan 2024)
   - Real-time ETL synchronization
   - Role-based dashboards
   - ML model integration
   
3. **cours-en-visio** (June 2019 - Aug 2019)
   - Python REST API
   - Relational database design
   - Stripe payment integration

**System Architecture Grid**:
- Creative Coding (GSAP, WebGL, Canvas)
- UI Architecture (React, Next.js, Design Systems)
- Machine Learning (RAG, ETL, Data Engineering)

**Interactive Elements**:
- Cyan glow on timeline dot hover
- Border color transition on card hover
- Scroll-triggered fade-in animations
- Tech stack badges

### 3. Projects - Bento Grid Showcase
**Layout**: 2-column grid (desktop), stacked (mobile)

**Project 1: Sax**
- **Type**: Educational Platform
- **Description**: Interactive alto saxophone learning
- **Tech Stack**: React, Next.js, Audio API, TypeScript
- **Special Effect**: Animated border drawing on hover
  ```javascript
  // SVG stroke-dasharray animation
  gsap.to(border, {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: "power4.out"
  });
  ```

**Project 2: Mask**
- **Type**: Digital Museum
- **Description**: African masks heritage showcase
- **Tech Stack**: Three.js, React, WebGL, Blender
- **Special Effect**: Pulsing "LIVE" status indicator
  ```javascript
  // Continuous scale pulse
  gsap.to(indicator, {
    scale: 1.4,
    opacity: 0.6,
    repeat: -1,
    yoyo: true
  });
  ```

### 4. Contact - Professional Form
**Layout**: 2-column grid with form + info

**Form Fields**:
- Name (text, required)
- Email (email, validated)
- Message (textarea, min 4 rows)

**Direct Contact**:
- Email: kalonjiraphael@gmail.com
- Phone: +33 6 95 22 65 68
- GitHub: github.com/raphk99
- LinkedIn: linkedin.com/in/raphael-kalonji

**API Endpoint**: `/api/contact`
- POST request handler
- Field validation
- Email regex check
- Ready for SendGrid/Resend integration

## 🚀 Performance Optimizations

### Image Loading
- **Strategy**: Progressive preloading
- **Progress**: Visual indicator (0-100%)
- **Canvas Rendering**: Only on frame change
- **Optimization**: Scale calculation for responsive display

### Scroll Performance
- **Lenis**: Smooth 60fps scrolling
- **GSAP**: RAF-synced ScrollTrigger
- **Mobile**: Reduced scroll distances (50% of desktop)
- **Will-change**: Applied to animated elements

### Code Splitting
- **Dynamic Imports**: Lenis loaded client-side only
- **Components**: Hero/Experience/Projects/Contact separated
- **Hooks**: Reusable logic extracted

### Accessibility
- **Focus Styles**: Cyan outline on focus-visible
- **Reduced Motion**: Respects prefers-reduced-motion
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Form fields properly labeled

## 📊 Technical Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Build**: Webpack (Next.js default)

### Animation
- **GSAP**: 3.12.5 (ScrollTrigger plugin)
- **Lenis**: 1.3.17 (smooth scroll)
- **Canvas API**: Native browser

### Development
- **Package Manager**: npm
- **Linting**: ESLint (Next.js config)
- **Type Checking**: TypeScript strict mode

## 🎯 Browser Targets

### Desktop
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

## 📦 Bundle Size (Estimated)

- **JS Bundle**: ~200KB (gzipped)
- **CSS**: ~15KB (gzipped)
- **Fonts**: ~30KB (JetBrains Mono subset)
- **Images**: ~20MB (192 animation frames)
- **Total First Load**: ~20.3MB

### Optimization Opportunities
- Convert PNGs to WebP (-60% size)
- Implement lazy loading for frames (-90% initial load)
- Add image compression (lossless)
- Use Next.js Image optimization

## 🔧 Configuration Files

### Essential
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Theme customization
- `next.config.js` - Next.js settings
- `postcss.config.js` - CSS processing

### Optional
- `.env.example` - Environment variables template
- `.gitignore` - Git exclusions
- `.npmrc` - npm configuration
- `robots.txt` - SEO directives

## 🎨 Customization Points

### Quick Changes
1. **Colors**: `tailwind.config.ts` → colors.blueprint
2. **Font**: `app/globals.css` → @import url
3. **Grid Size**: `components/GridOverlay.tsx` → width/height
4. **Scroll Speed**: `hooks/useLenis.ts` → duration
5. **Animation Timing**: Individual component files → gsap.to() duration

### Content Updates
1. **Experiences**: `components/Experience.tsx` → experiences array
2. **Projects**: `components/Projects.tsx` → project cards
3. **Skills**: `components/Experience.tsx` → systemArchitecture + skills array
4. **Contact**: `components/Contact.tsx` → form fields + links
5. **Metadata**: `app/layout.tsx` → metadata export

### Advanced Customization
1. Add more project cards
2. Implement case study pages
3. Add blog section
4. Integrate CMS (Sanity, Contentful)
5. Add analytics (Google Analytics, Vercel Analytics)

---

**All features implemented and ready to deploy!**
