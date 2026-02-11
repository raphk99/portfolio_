"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className="fixed top-8 right-8 md:top-12 md:right-12 z-50">
      <ul className="flex gap-8 md:gap-12">
        {["experience", "projects", "contact"].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-purple-primary ${
                activeSection === section
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
