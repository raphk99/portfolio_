"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  year: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Datapolitic",
    role: "Développeur Fullstack",
    period: "Sept 2024 - Dec 2024",
    year: "2024",
    highlights: [
      "Designed & implemented end-to-end ETL pipeline for French public tender indexing",
      "Developed RAG system integration leading to 2 upsell opportunities",
      "Complete front-end architecture refactor with reusable components & automated testing",
      "Contributed to strategic ideation & feature prioritization",
    ],
  },
  {
    company: "Efficientis",
    role: "Développeur Fullstack",
    period: "Sept 2023 - Jan 2024",
    year: "2023",
    highlights: [
      "Built real-time ETL synchronization pipeline for user ticket data",
      "Optimized system performance with strict data security protocols & rate limiting",
      "Developed role-based access control dashboards with OWASP protection",
      "Integrated ML model for automated recommendations & decision support",
    ],
  },
  {
    company: "cours-en-visio",
    role: "Développeur Fullstack",
    period: "June 2019 - Aug 2019",
    year: "2019",
    highlights: [
      "Created Python REST API for comprehensive quiz management system",
      "Designed & deployed relational database for question tracking",
      "Built monitoring dashboards connected to existing reporting API",
      "Integrated Stripe payment module with PCI-DSS compliance",
    ],
  },
];

const systemArchitecture = [
  { label: "Creative Coding", tech: "GSAP • WebGL • Canvas" },
  { label: "UI Architecture", tech: "React • Next.js • Design Systems" },
  { label: "Machine Learning", tech: "RAG • ETL Pipelines • Data Engineering" },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".timeline-item");
    const architectureItems = sectionRef.current.querySelectorAll(".arch-item");

    items.forEach((item, index) => {
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
    });

    architectureItems.forEach((item, index) => {
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
              {/* Year marker */}
              <div className="absolute left-0 md:left-16 top-0 text-purple-primary text-sm font-light">
                {exp.year}
              </div>

              {/* Purple dot */}
              <div className="absolute left-[-4px] md:left-[92px] top-2 w-2 h-2 bg-purple-primary rounded-full transition-all duration-300 hover:scale-150" />

              {/* Content */}
              <div className="group">
                <div className="border-l border-white/5 hover:border-purple-primary/30 transition-all duration-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-purple-primary transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-white/40 font-light mt-1 md:mt-0">
                      {exp.period}
                    </span>
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
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
            System Architecture
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
