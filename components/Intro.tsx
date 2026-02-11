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

          </div>

          {/* Right side - Text content */}
          <div ref={textRef} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Building Digital
                <span className="block text-purple-primary">Precision</span>
              </h2>

              <div className="w-16 h-px bg-purple-primary/40" />
            </div>

            <div className="space-y-4 text-white/60 text-base md:text-lg font-light leading-relaxed">
              <p>
                Hello, I'm Raphael Kalonji, passionate about leveraging cutting-edge software to solve
                complex{" "}
                <span className="text-purple-primary font-normal">
                  business challenges
                </span>
                . My focus is on engineering scalable, high-performance
                solutions that drive operational efficiency and measurable
                growth.
              </p>

              <p>
                Beyond just writing code, I architect digital ecosystems that
                align with your{" "}
                <span className="text-purple-primary font-normal">
                  strategic goals
                </span>
                —ensuring every feature delivers real value, enhances user
                retention, and secures a competitive advantage.
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
