"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector(".contact-content"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "SENDING..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "MESSAGE SENT SUCCESSFULLY",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "FAILED TO SEND. PLEASE TRY AGAIN.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 py-24 px-4 md:px-8 lg:px-16 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full contact-content">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
            Interested in collaboration or have a project in mind? Let's build
            something remarkable together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border border-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-light text-white/40 mb-2 tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 focus:border-purple-primary px-2 py-3 text-white font-light outline-none transition-all duration-300 placeholder:text-white/30"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-light text-white/40 mb-2 tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 focus:border-purple-primary px-2 py-3 text-white font-light outline-none transition-all duration-300 placeholder:text-white/30"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-light text-white/40 mb-2 tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-white/10 focus:border-purple-primary px-2 py-3 text-white font-light outline-none transition-all duration-300 placeholder:text-white/30 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full bg-transparent border border-purple-primary/50 text-purple-primary hover:bg-purple-primary hover:text-white py-4 font-light tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Sending..." : "Send Message →"}
              </button>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`text-center font-light text-sm ${
                    status.type === "success"
                      ? "text-purple-primary"
                      : status.type === "error"
                      ? "text-red-400"
                      : "text-white/60"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            {/* Direct Contact */}
            <div className="border border-white/5 p-8 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Direct Contact
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <div className="text-xs font-light text-white/40 mb-2 tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:kalonjiraphael@gmail.com"
                    className="text-white hover:text-purple-primary transition-colors font-light text-base group flex items-center gap-2"
                  >
                    kalonjiraphael@gmail.com
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="text-xs font-light text-white/40 mb-2 tracking-wider">
                    Phone
                  </div>
                  <a
                    href="tel:+33695226568"
                    className="text-white hover:text-purple-primary transition-colors font-light text-base group flex items-center gap-2"
                  >
                    +33 6 95 22 65 68
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border border-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Connect
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/raphk99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group border-b border-white/5 hover:border-purple-primary/50 pb-4 transition-all duration-300"
                >
                  <span className="text-white group-hover:text-purple-primary transition-colors font-light">
                    GitHub
                  </span>
                  <span className="text-purple-primary text-xl">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/raphael-kalonji-536251231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group border-b border-white/5 hover:border-purple-primary/50 pb-4 transition-all duration-300"
                >
                  <span className="text-white group-hover:text-purple-primary transition-colors font-light">
                    LinkedIn
                  </span>
                  <span className="text-purple-primary text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 font-light text-sm">
            © 2026 Raphael Kalonji. Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
