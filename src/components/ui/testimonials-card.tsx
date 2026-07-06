"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export interface TestimonialItem {
  /** Unique identifier for the card (optional, will default to name or index) */
  id?: string | number;
  /** Name of the client */
  name: string;
  /** Quote text from the client */
  text: string;
  /** Image URL/path of the client's home or project */
  avatar: string;
  /** Optional role/location of the client */
  role?: string;
}

interface TestimonialsCardProps {
  /** Array of testimonial items to display */
  testimonials: TestimonialItem[];
  /** Additional CSS classes for the container */
  className?: string;
  /** Width of the card stack (default: 420) */
  width?: number;
  /** Whether to show navigation arrows (default: true) */
  showNavigation?: boolean;
  /** Whether to show the counter (default: true) */
  showCounter?: boolean;
  /** Whether to enable auto-play (default: false) */
  autoPlay?: boolean;
  /** Auto-play interval in ms (default: 5000) */
  autoPlayInterval?: number;
}

export function TestimonialsCard({
  testimonials,
  className,
  width = 450,
  showNavigation = true,
  showCounter = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialsCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeItem = testimonials[activeIndex];

  // Auto-play effect
  React.useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setDirection(1);
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex(activeIndex - 1);
    }
  };

  // Pre-calculated rotation offsets: extremely subtle (0.5 to 1.5 degrees) for premium architectural feel
  const rotations = useMemo(() => [1, -1.5, 0.5, -0.8], []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex items-center justify-center py-6 px-4 md:px-8", className)}>
      <div
        className="relative grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-x-20 gap-y-10 w-full items-center"
        style={{ perspective: "1500px", maxWidth: `${width * 2}px` }}
      >
        {/* Left Side: House Image Card Stack */}
        <div className="relative w-full aspect-[4/3] md:aspect-[4.5/4] shrink-0">
          <AnimatePresence custom={direction}>
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              // We only render cards that are current or ahead in the stack for visual layering
              if (index < activeIndex) return null;

              return (
                <motion.div
                  key={item.id || item.name + index}
                  className={cn(
                    "absolute inset-0 w-full h-full overflow-hidden border border-white/10 shadow-2xl rounded-2xl bg-black/40",
                    isActive ? "z-30 cursor-default" : "pointer-events-none"
                  )}
                  initial={{
                    x: offset * -20,
                    y: offset * 10,
                    z: -80 * offset,
                    scale: 1 - offset * 0.04,
                    rotateZ: rotations[index % rotations.length] * (offset + 1),
                    opacity: 1 - offset * 0.25,
                  }}
                  animate={
                    isActive
                      ? {
                          x: [offset * -20, direction === 1 ? -120 : 120, 0],
                          y: [offset * 10, 0, 0],
                          z: [-100, 100, 0],
                          scale: [1 - offset * 0.04, 1.02, 1],
                          rotateZ: [rotations[index % rotations.length], direction === 1 ? -3 : 3, 0],
                          opacity: 1,
                        }
                      : {
                          x: offset * -20,
                          y: offset * 10,
                          z: -80 * offset,
                          rotateZ: rotations[index % rotations.length] * (offset + 1),
                          scale: 1 - offset * 0.04,
                          opacity: 1 - offset * 0.25,
                        }
                  }
                  exit={{
                    x: direction === 1 ? -280 : 280,
                    y: 10,
                    z: -120,
                    scale: 0.9,
                    rotateZ: direction === 1 ? -6 : 6,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // Custom architectural smooth easing
                  }}
                >
                  {/* House project image */}
                  <img
                    src={item.avatar}
                    alt={`${item.name}'s project`}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                  {/* Subtle overlay shading for stack depth */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Side: Text Area & Navigation */}
        <div className="flex flex-col justify-between h-full min-h-[300px] py-2 relative">
          {/* Quote Icon Background decoration */}
          <div className="absolute -top-10 -left-6 opacity-[0.03] text-[#E6E1DA] pointer-events-none">
            <Quote size={180} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex-grow flex flex-col justify-center">
            {/* Top Row: Counter */}
            {showCounter && (
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#F4A300] mb-6">
                Project {activeIndex + 1} of {testimonials.length}
              </div>
            )}

            {/* Testimonial Text & Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.name + activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Quote Text */}
                <p className="text-lg md:text-xl text-[#E6E1DA] font-sans font-normal leading-relaxed mb-8">
                  "{activeItem.text}"
                </p>

                {/* Divider Line */}
                <div className="w-12 h-[1px] bg-[#F4A300]/40 mb-5" />

                {/* Client Meta Info */}
                <div>
                  <h4 className="text-[#E6E1DA] font-sans font-bold text-xs uppercase tracking-widest">
                    {activeItem.name}
                  </h4>
                  {activeItem.role && (
                    <p className="text-[#F4A300] font-sans text-[10px] uppercase tracking-[0.25em] font-medium mt-1.5">
                      {activeItem.role}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Navigation Buttons */}
          {showNavigation && testimonials.length > 1 && (
            <div className="flex gap-4 mt-8 relative z-10">
              <button
                disabled={activeIndex === 0}
                onClick={handlePrev}
                className={cn(
                  "flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300",
                  activeIndex === 0
                    ? "opacity-25 border-white/20 text-[#E6E1DA]/40 cursor-not-allowed"
                    : "border-[#F4A300]/30 hover:border-[#F4A300] text-[#F4A300] bg-transparent hover:bg-[#F4A300]/10 hover:scale-105 active:scale-95"
                )}
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                disabled={activeIndex === testimonials.length - 1}
                onClick={handleNext}
                className={cn(
                  "flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300",
                  activeIndex === testimonials.length - 1
                    ? "opacity-25 border-white/20 text-[#E6E1DA]/40 cursor-not-allowed"
                    : "border-[#F4A300]/30 hover:border-[#F4A300] text-[#F4A300] bg-transparent hover:bg-[#F4A300]/10 hover:scale-105 active:scale-95"
                )}
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
