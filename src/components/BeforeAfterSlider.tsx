"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Raw Space (Before)",
  afterLabel = "Bitspace Luxury (After)",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  const beforeOpacity = Math.max(0, Math.min(1, (sliderPosition - 15) / 15));
  const afterOpacity = Math.max(0, Math.min(1, (85 - sliderPosition) / 15));

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-luxury-sand/20"
    >
      {/* After Image (Full Base) */}
      <Image
        src={afterImage}
        alt="After Transformation"
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
        priority
      />

      <div 
        style={{ opacity: afterOpacity, pointerEvents: afterOpacity === 0 ? "none" : "auto", transition: "opacity 0.15s ease-out" }}
        className="absolute right-6 top-6 z-10 glass-card-dark text-[10px] tracking-[0.2em] text-luxury-charcoal px-4 py-2 uppercase font-medium"
      >
        {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-y-0 left-0 w-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt="Before Transformation"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div 
          style={{ opacity: beforeOpacity, pointerEvents: beforeOpacity === 0 ? "none" : "auto", transition: "opacity 0.15s ease-out" }}
          className="absolute left-6 top-6 z-10 glass-card text-[10px] tracking-[0.2em] text-luxury-charcoal px-4 py-2 uppercase font-medium"
        >
          {beforeLabel}
        </div>
      </div>

      {/* Slider Bar & Drag Handle */}
      <div
        className="absolute inset-y-0 z-20 w-[1px] bg-luxury-white"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-luxury-white/80 bg-luxury-charcoal/80 flex items-center justify-center shadow-lg transition-transform duration-300 ${
            isDragging ? "scale-110" : ""
          }`}
        >
          {/* Custom minimal arrow handle */}
          <div className="flex space-x-1 items-center">
            <span className="text-[10px] text-luxury-white">◄</span>
            <span className="text-[10px] text-luxury-white">►</span>
          </div>
        </div>
      </div>
    </div>
  );
}
