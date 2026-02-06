"use client";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
