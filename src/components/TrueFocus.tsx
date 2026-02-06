"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "hsl(var(--primary))",
  glowColor = "hsl(var(--primary) / 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}: {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    const el = wordRefs.current[currentIndex];
    if (!el || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = el.getBoundingClientRect();
    const padding = 8;

    setFocusRect({
      x: activeRect.left - parentRect.left - padding,
      y: activeRect.top - parentRect.top - padding,
      width: activeRect.width + padding * 2,
      height: activeRect.height + padding * 2,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(currentIndex);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className={`relative inline-flex items-baseline gap-x-4 sm:gap-x-6 ${className}`}
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={`${word}-${index}`}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`inline-block whitespace-nowrap transition-all duration-300 ${
              manualMode ? "cursor-default" : ""
            }`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transitionDuration: `${animationDuration}s`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute pointer-events-none box-border"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: `0 0 14px ${glowColor}`,
        }}
      >
        <span
          className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2"
          style={{ borderColor }}
        />
        <span
          className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2"
          style={{ borderColor }}
        />
        <span
          className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2"
          style={{ borderColor }}
        />
        <span
          className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2"
          style={{ borderColor }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;
