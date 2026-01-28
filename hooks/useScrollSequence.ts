"use client";

import { useState, useEffect, useRef } from "react";

interface UseScrollSequenceProps {
  frameCount: number;
  framePathTemplate: (index: number) => string;
}

export default function useScrollSequence({
  frameCount,
  framePathTemplate,
}: UseScrollSequenceProps) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Preload all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePathTemplate(i);
      
      img.onload = () => {
        loadedCount++;
        setLoadProgress((loadedCount / frameCount) * 100);
        
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
    setImages(loadedImages);
  }, [frameCount, framePathTemplate]);

  return { images, imagesLoaded, loadProgress };
}
