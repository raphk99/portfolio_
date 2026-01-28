# Industrial Blueprint Portfolio

A high-end, single-page personal portfolio for a Software Engineer with a "Design-Engineer" aesthetic.

## Features

- **Scroll-Triggered Animation**: 192-frame mechanical keyboard explosion animation in the hero section
- **Industrial Blueprint Theme**: Dark blue (#042048) background with cyan (#00FFFF) accents
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth scroll experience
- **Advanced Animations**: GSAP with ScrollTrigger for professional animations
- **Responsive Design**: Fully responsive across all devices
- **Technical Schematic Timeline**: Professional experience displayed as a blueprint
- **Interactive Projects**: Bento grid with hover animations and live status indicators
- **Contact Form**: Blueprint-styled contact form with API endpoint

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Font**: JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio_
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio_/
├── app/
│   ├── layout.tsx          # Root layout with fonts and grid
│   ├── page.tsx            # Main page composing all sections
│   ├── globals.css         # Global styles
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API endpoint
├── components/
│   ├── Hero.tsx            # Scroll sequence animation
│   ├── Experience.tsx      # Timeline with CV data
│   ├── Projects.tsx        # Bento grid projects
│   ├── Contact.tsx         # Contact form
│   └── GridOverlay.tsx     # SVG blueprint grid
├── hooks/
│   ├── useLenis.ts         # Smooth scroll hook
│   └── useScrollSequence.ts # Frame sequencing logic
└── public/
    └── frames/             # 192 animation frames
```

## Performance Optimizations

- **Image Preloading**: All 192 animation frames are preloaded with progress indicator
- **Canvas Rendering**: Optimized canvas rendering for smooth 60fps animation
- **Code Splitting**: Components are lazy-loaded where appropriate
- **Responsive Images**: Different scroll distances for mobile vs desktop
- **GSAP RAF Sync**: ScrollTrigger synced with Lenis for smooth performance

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  blueprint: {
    bg: "#042048",    // Background color
    cyan: "#00FFFF",  // Accent color
  },
}
```

### Animation Easing

All animations use professional easing curves defined in the Tailwind config:
- `power4.out` - Default animations
- `expo.out` - Emphasis animations
- `power2.out` - Subtle animations

### Contact Form

To enable actual email sending, integrate with an email service in `app/api/contact/route.ts`:
- SendGrid
- Resend
- Nodemailer
- AWS SES

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## License

© 2026 Raphael Kalonji. All rights reserved.
