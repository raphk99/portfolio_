"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ExperienceItem } from "@/data/experiences";
import { gsap } from "gsap";

export default function ExperienceDetails({ experience }: { experience: ExperienceItem }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".case-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Sections animation
      gsap.fromTo(
        ".case-section",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#experience"
          className="inline-flex items-center text-white/50 hover:text-purple-primary transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Experience
        </Link>

        {/* Header */}
        <header className="case-header mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              <Link
                href="/#experience"
                className="hover:text-purple-primary transition-colors cursor-pointer"
              >
                {experience.company}
              </Link>
            </h1>
            <span className="text-xl text-purple-primary font-mono">
              {experience.year}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/60">
            <span className="text-xl text-white">{experience.role}</span>
            <span className="hidden md:block">•</span>
            <span className="font-light">{experience.period}</span>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid gap-16">
          {/* Company Description */}
          <section className="case-section">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-purple-primary mr-4"></span>
              The Mission
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              {experience.description}
            </p>
          </section>

          {/* Detailed Tasks & Results */}
          <section className="case-section">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-purple-primary mr-4"></span>
              Key Challenges & Solutions
            </h2>
            <div className="grid gap-8">
              {experience.detailedTasks.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/5 index p-8 rounded-sm hover:border-purple-primary/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.task}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    <span className="text-purple-primary font-medium mr-2">
                      Result:
                    </span>
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Tech Stack */}
            {experience.techStack && (
              <section className="case-section">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-[1px] bg-purple-primary mr-4"></span>
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {experience.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 text-purple-primary/80 text-sm font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Lessons Learned */}
            <section className="case-section">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-purple-primary mr-4"></span>
                Key Takeaways
              </h2>
              <ul className="space-y-4">
                {experience.lessons.map((lesson, index) => (
                  <li key={index} className="flex gap-4 text-white/70 font-light">
                    <span className="text-purple-primary font-bold mt-1">
                      0{index + 1}
                    </span>
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
