"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useLenis from "@/hooks/useLenis";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [isScrambling, setIsScrambling] = useState(false);

  // Initialize Lenis smooth scroll
  useLenis();

  // Scramble text animation
  useEffect(() => {
    const scrambleText = (
      element: HTMLElement,
      finalText: string,
      duration: number = 1.5,
      callback?: () => void
    ) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const textLength = finalText.length;
      let iteration = 0;
      const totalIterations = duration * 30; // 30 fps

      const interval = setInterval(() => {
        element.textContent = finalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        iteration += textLength / totalIterations;

        if (iteration >= textLength) {
          clearInterval(interval);
          element.textContent = finalText;
          if (callback) callback();
        }
      }, 33); // ~30fps

      return () => clearInterval(interval);
    };

    const animateHero = () => {
      const tl = gsap.timeline();

      // Fade in container
      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      // Logo animation: Full name appears, then scrambles to initials
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            onStart: () => {
              if (logoRef.current) {
                // Show full name first
                scrambleText(logoRef.current, "Raphael Kalonji", 1.2, () => {
                  // Wait a moment, then scramble to initials
                  setTimeout(() => {
                    if (logoRef.current) {
                      setIsScrambling(true);
                      scrambleText(logoRef.current, "RK", 0.8, () => {
                        setIsScrambling(false);
                      });
                    }
                  }, 800);
                });
              }
            },
          },
          "+=0.2"
        );
      }

      // Headline animation
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            onStart: () => {
              if (headlineRef.current) {
                scrambleText(headlineRef.current, "Building Digital Precision", 1.8);
              }
            },
          },
          "-=0.8"
        );
      }
    };

    const timer = setTimeout(animateHero, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <div
          ref={logoRef}
          className="text-white text-lg md:text-xl font-medium tracking-wider opacity-0"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Raphael Kalonji
        </div>
      </div>

      {/* Main Headline - Bottom Left */}
      <div className="absolute bottom-16 left-8 md:bottom-20 md:left-12 z-10 max-w-4xl">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none tracking-tight opacity-0"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Building Digital Precision
        </h1>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <div className="flex items-center gap-3 text-white/30 text-xs tracking-wider">
          <div className="w-px h-12 bg-white/20" />
          <span className="rotate-90 origin-center whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
            SCROLL
          </span>
        </div>
      </div>
    </div>
  );
}
