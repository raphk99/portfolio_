import type { Metadata } from "next";
import "./globals.css";
import GridOverlay from "@/components/GridOverlay";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Raphael Kalonji - Software Engineer",
  description: "Building Digital Precision - Portfolio of a Design-Engineer specializing in full-stack development, creative coding, and UI architecture.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Design Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Creative Coding",
    "GSAP",
    "Web Development",
  ],
  authors: [{ name: "Raphael Kalonji" }],
  creator: "Raphael Kalonji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raphaelkalonji.com",
    title: "Raphael Kalonji - Software Engineer",
    description: "Building Digital Precision - Portfolio of a Design-Engineer",
    siteName: "Raphael Kalonji Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Kalonji - Software Engineer",
    description: "Building Digital Precision - Portfolio of a Design-Engineer",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GridOverlay />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
