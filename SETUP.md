# Portfolio Setup & Launch Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

If you encounter any issues, try:
```bash
npm install --legacy-peer-deps
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

### 3. Build for Production

```bash
npm run build
npm start
```

## What's Included

### ✅ Hero Section
- **192-frame scroll-triggered animation** of mechanical keyboard explosion
- Smooth canvas rendering with optimized performance
- Progressive image loading with progress indicator
- Text overlays that fade in/out based on scroll progress
- Fully responsive with different scroll ranges for mobile/desktop

### ✅ Experience Timeline
- Professional timeline with **3 work experiences** from your CV:
  - Datapolitic (Sept 2024 - Dec 2024)
  - Efficientis (Sept 2023 - Jan 2024)
  - cours-en-visio (June 2019 - Aug 2019)
- Cyan accent hover effects
- Technical schematic design with connecting lines
- System Architecture section highlighting your key interests

### ✅ Projects Section
- **2 showcase projects** in a bento grid layout:
  - **Sax**: Educational platform for alto saxophone
  - **Mask**: Digital museum for African masks
- Animated border drawing effect on hover (GSAP)
- Live status indicator with pulsing animation
- Tech stack badges for each project

### ✅ Contact Section
- Functional contact form with validation
- Blueprint-styled inputs with cyan focus states
- Direct contact information (email + phone)
- Social links (GitHub + LinkedIn)
- API endpoint at `/api/contact` ready for email integration

### ✅ Design & Animations
- **Industrial Blueprint Theme**: #042048 background, #00FFFF accents
- SVG grid overlay (100px cells)
- Lenis smooth scrolling
- GSAP ScrollTrigger animations throughout
- JetBrains Mono monospace font
- Professional easing curves (power4.out, expo.out)

## File Structure

```
portfolio_/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles + Lenis CSS
│   ├── not-found.tsx           # 404 page
│   └── api/contact/route.ts    # Contact form endpoint
├── components/
│   ├── Hero.tsx                # Scroll sequence animation
│   ├── Experience.tsx          # Timeline + System Architecture
│   ├── Projects.tsx            # Project showcase cards
│   ├── Contact.tsx             # Contact form + info
│   └── GridOverlay.tsx         # Blueprint grid background
├── hooks/
│   ├── useLenis.ts             # Smooth scroll integration
│   └── useScrollSequence.ts    # Frame preloading logic
├── public/
│   ├── frames/                 # 192 animation frames
│   └── robots.txt              # SEO
└── Configuration files...
```

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  blueprint: {
    bg: "#042048",
    cyan: "#00FFFF",
  },
}
```

### Content
- **Experience**: Edit `components/Experience.tsx` - experiences array
- **Projects**: Edit `components/Projects.tsx` - project details
- **Contact**: Edit `components/Contact.tsx` - contact info

### Email Integration
To enable actual email sending, update `app/api/contact/route.ts`:
```typescript
// Uncomment and configure your preferred service:
// - SendGrid: npm install @sendgrid/mail
// - Resend: npm install resend
// - Nodemailer: npm install nodemailer
```

## Performance Features

- **Canvas Optimization**: Only redraws when frame changes
- **Progressive Loading**: Images load with progress indicator
- **Responsive Scroll Distances**: 3000px desktop, 1500px mobile
- **Hardware Acceleration**: Transform3d for smooth animations
- **Code Splitting**: Components lazy-loaded where beneficial
- **Font Optimization**: Google Fonts with display=swap

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The portfolio works on any platform supporting Next.js 14:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Troubleshooting

### Build Issues
If you encounter build errors:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Try `npm run build` again

### Animation Not Loading
- Ensure all 192 frames are in `public/frames/`
- Check browser console for errors
- Frames should be named: `A_precise_vertical_1080p_202601261238_001.png` through `192.png`

### Smooth Scroll Not Working
- Lenis loads dynamically on client side
- Check browser console for import errors
- Try refreshing the page

## Next Steps

1. **Add Your Content**: Update experiences, projects, and contact info
2. **Add Project Images**: Replace emoji placeholders with real images
3. **Configure Email**: Set up SendGrid or Resend for contact form
4. **SEO**: Update metadata in `app/layout.tsx`
5. **Deploy**: Push to Vercel or your preferred platform

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Documentation](https://github.com/studio-freight/lenis)

---

**Built with precision. © 2026 Raphael Kalonji**
