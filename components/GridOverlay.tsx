"use client";

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="minimal-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="#4413F4"
              strokeWidth="0.3"
              opacity="0.015"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#minimal-grid)" />
      </svg>
    </div>
  );
}
