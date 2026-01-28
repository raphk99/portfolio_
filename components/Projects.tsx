"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const saxBorderRef = useRef<SVGRectElement>(null);
  const maskBorderRef = useRef<SVGRectElement>(null);
  const liveIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate cards on scroll
    const cards = sectionRef.current.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Pulsing animation for live indicator
    if (liveIndicatorRef.current) {
      gsap.to(liveIndicatorRef.current, {
        scale: 1.4,
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  // Border draw animation for Sax project
  const handleSaxHover = (isEntering: boolean) => {
    if (!saxBorderRef.current) return;

    if (isEntering) {
      gsap.fromTo(
        saxBorderRef.current,
        { strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(saxBorderRef.current, {
        strokeDashoffset: 2000,
        duration: 1,
        ease: "power4.in",
      });
    }
  };

  // Border draw animation for Mask project
  const handleMaskHover = (isEntering: boolean) => {
    if (!maskBorderRef.current) return;

    if (isEntering) {
      gsap.fromTo(
        maskBorderRef.current,
        { strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(maskBorderRef.current, {
        strokeDashoffset: 2000,
        duration: 1,
        ease: "power4.in",
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Sax */}
          <div
            className="project-card group relative min-h-[500px] overflow-hidden"
            onMouseEnter={() => handleSaxHover(true)}
            onMouseLeave={() => handleSaxHover(false)}
          >
            {/* SVG Border Animation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                ref={saxBorderRef}
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="#4413F4"
                strokeWidth="1"
                strokeDasharray="2000"
                strokeDashoffset="2000"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Content */}
            <div className="relative h-full flex flex-col p-8 border border-white/5 group-hover:border-transparent transition-all duration-300">
              {/* Project Image Placeholder */}
              <div className="flex-1 mb-6 relative overflow-hidden bg-gradient-to-br from-purple-primary/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <svg 
                    className="w-16 h-16 mb-4 mx-auto" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    style={{ color: '#4413F4' }}
                  >
                    <path d="M9 9a3 3 0 1 1 6 0" />
                    <path d="M12 12v9" />
                    <path d="M6 17h.01" />
                    <path d="M18 17h.01" />
                    <path d="M7 17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
                    <path d="M15 9V7a3 3 0 0 0-6 0v2" />
                    <path d="M9 3v2" />
                    <path d="M15 3v2" />
                  </svg>
                  <div className="text-white/20 text-sm font-light">
                    Project Visual
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2 group-hover:text-purple-primary transition-colors">
                  Sax
                </h3>
                <p className="text-purple-primary/70 text-sm font-light mb-4 tracking-wide">
                  Education Platform
                </p>
                <p className="text-white/60 mb-6 font-light leading-relaxed">
                  Interactive educational platform designed to teach alto
                  saxophone through structured lessons, real-time feedback, and
                  progress tracking. Features adaptive learning paths and
                  multimedia content.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Next.js", "Audio API", "TypeScript"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-light border border-white/10 text-white/40"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://raphk99.github.io/sax/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-transparent border border-purple-primary/50 text-purple-primary hover:bg-purple-primary hover:text-white transition-all duration-300 text-sm font-light inline-block"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Mask */}
          <div
            className="project-card group relative min-h-[500px] overflow-hidden"
            onMouseEnter={() => handleMaskHover(true)}
            onMouseLeave={() => handleMaskHover(false)}
          >
            {/* SVG Border Animation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                ref={maskBorderRef}
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="#4413F4"
                strokeWidth="1"
                strokeDasharray="2000"
                strokeDashoffset="2000"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Content */}
            <div className="relative h-full flex flex-col p-8 border border-white/5 group-hover:border-transparent transition-all duration-300">
              {/* Live Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-2 border border-purple-primary/30">
                <div className="relative">
                  <div
                    ref={liveIndicatorRef}
                    className="absolute inset-0 w-2 h-2 bg-purple-primary rounded-full"
                  />
                  <div className="w-2 h-2 bg-purple-primary rounded-full" />
                </div>
                <span className="text-purple-primary text-xs font-light tracking-wider">
                  Live
                </span>
              </div>

              {/* Project Image Placeholder */}
              <div className="flex-1 mb-6 relative overflow-hidden bg-gradient-to-br from-purple-primary/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <svg 
                    className="w-16 h-16 mb-4 mx-auto" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    style={{ color: '#4413F4' }}
                  >
                    <path d="M12 3v18" />
                    <path d="M7 7h10" />
                    <path d="M7 11h10" />
                    <path d="M8 15l8-4" />
                    <path d="M8 19h8" />
                    <circle cx="5" cy="5" r="2" />
                    <circle cx="19" cy="5" r="2" />
                    <path d="M12 5V3" />
                    <path d="M5 12a7 7 0 0 0 14 0" />
                  </svg>
                  <div className="text-white/20 text-sm font-light">
                    Project Visual
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2 group-hover:text-purple-primary transition-colors">
                  Mask
                </h3>
                <p className="text-purple-primary/70 text-sm font-light mb-4 tracking-wide">
                  Digital Museum
                </p>
                <p className="text-white/60 mb-6 font-light leading-relaxed">
                  Immersive digital museum showcasing the rich heritage of
                  African masks. Features high-resolution 3D models, historical
                  context, and interactive exploration of cultural significance.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Three.js", "React", "WebGL", "Blender"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-light border border-white/10 text-white/40"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://raphk99.github.io/carved_spirits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-transparent border border-purple-primary/50 text-purple-primary hover:bg-purple-primary hover:text-white transition-all duration-300 text-sm font-light inline-block"
                  >
                    Visit Museum →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
