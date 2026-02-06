"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image placeholder animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text content animation
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-24 px-4 md:px-8 lg:px-16 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div
            ref={imageRef}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden group"
          >
            {/* Border frame */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-purple-primary/30 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-primary/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-primary/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-primary/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-primary/40" />
            </div>

            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/5">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-primary/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-white/30 text-sm font-light">Image placeholder</p>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div ref={textRef} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Crafting Digital
                <span className="block text-purple-primary">Experiences</span>
              </h2>

              <div className="w-16 h-px bg-purple-primary/40" />
            </div>

            <div className="space-y-4 text-white/60 text-base md:text-lg font-light leading-relaxed">
              <p>
                I'm passionate about software development and the transformative
                power it holds. My mission is to help brands{" "}
                <span className="text-purple-primary font-normal">
                  show their true colors
                </span>
                —to express their unique identity and vision through exceptional
                digital experiences.
              </p>

              <p>
                Every line of code, every interface, every interaction is an
                opportunity to{" "}
                <span className="text-purple-primary font-normal">
                  develop your brand
                </span>{" "}
                in the best way possible—with precision, creativity, and purpose.
              </p>
            </div>

            {/* Subtle accent line */}
            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-purple-primary rounded-full animate-pulse" />
                <p className="text-white/40 text-sm font-light tracking-wide uppercase">
                  Building with purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
