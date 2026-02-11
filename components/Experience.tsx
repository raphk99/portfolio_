"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";
import { experiences } from "@/data/experiences";

const systemArchitecture = [
  { label: "Creative Coding", tech: "GSAP • WebGL • PlayCanvas • Blender" },
  { label: "UI Architecture", tech: "React • Next.js • Design Systems" },
  { label: "Machine Learning", tech: "RAG • ETL Pipelines • Data Engineering" },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".timeline-item");
      const architectureItems = sectionRef.current?.querySelectorAll(".arch-item");

      items?.forEach((item, index) => {
        // Animation
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "top center",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Mobile Tooltip Visibility Logic
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveId(experiences[index].id);
            } else {
              setActiveId((prev) => (prev === experiences[index].id ? null : prev));
            }
          },
        });
      });

      architectureItems?.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-purple-primary/20" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item relative mb-16 md:mb-20 pl-8 md:pl-32"
            >
              {/* Year marker - hidden on mobile */}
              <div className="absolute left-12 top-0 hidden md:block text-purple-primary text-sm font-light">
                {exp.year}
              </div>

              {/* Purple dot */}
              <div className="absolute left-[-4px] md:left-[92px] top-2 w-2 h-2 bg-purple-primary rounded-full transition-all duration-300 hover:scale-150" />

              {/* Content */}
              <Link href={`/experience/${exp.id}`} className="block group cursor-pointer">
                <div className="border-l border-white/5 group-hover:border-purple-primary/30 transition-all duration-500 pl-6 relative">
                  <div
                    className={`absolute top-0 right-0 transition-opacity duration-300 text-xs text-purple-primary/70 font-light flex items-center gap-2 ${
                      activeId === exp.id ? "opacity-100" : "opacity-0"
                    } md:opacity-0 md:group-hover:opacity-100`}
                  >
                    <span>Click to know more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-purple-primary transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-purple-primary text-base font-light mb-4">
                    {exp.role}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-white/60 text-sm flex items-start font-light"
                      >
                        <span className="text-purple-primary/50 mr-3 mt-1">—</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* System Architecture */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemArchitecture.map((item, index) => (
              <div
                key={index}
                className="arch-item group relative overflow-hidden"
              >
                <div className="border border-white/10 hover:border-blueprint-cyan transition-all duration-500 p-8 h-full bg-blueprint-bg/30 backdrop-blur-sm">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blueprint-cyan/0 group-hover:border-blueprint-cyan transition-all duration-500" />
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blueprint-cyan transition-colors font-mono">
                    {item.label}
                  </h3>
                  <p className="text-blueprint-cyan/60 text-sm font-mono leading-relaxed">
                    {item.tech}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-blueprint-cyan group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Footer */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "JavaScript",
              "TypeScript",
              "C++",
              "React",
              "Vue.js",
              "Next.js",
              "Docker",
              "Kubernetes",
              "Elasticsearch",
              "PostgreSQL",
              "GSAP",
              "Playwright",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-xs font-light border border-white/10 hover:border-purple-primary/50 hover:text-purple-primary transition-all duration-300 text-white/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
