"use client";

import { useEffect, useRef, useState } from "react";

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
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    const measure = () => {
      const containerEl = containerRefs.current[currentIndex];
      const parent = containerRef.current;
      if (!containerEl || !parent) return;

      const parentRect = parent.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setFocusRect({
        x: containerRect.left - parentRect.left,
        y: containerRect.top - parentRect.top,
        width: containerRect.width,
        height: containerRect.height,
      });
    };

    // Medir después del layout (importante en móvil)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(measure);
    });
    return () => cancelAnimationFrame(id);
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
          <div
            key={`${word}-${index}`}
            ref={(el) => {
              containerRefs.current[index] = el;
            }}
            className={`inline-block shrink-0 whitespace-nowrap px-2 py-1 transition-colors duration-300 ${
              manualMode ? "cursor-default" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="block transition-all duration-300"
              style={{
                filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
                transitionDuration: `${animationDuration}s`,
              }}
            >
              {word}
            </span>
          </div>
        );
      })}

      <div
        className="absolute pointer-events-none box-border"
        style={{
          left: focusRect.x,
          top: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
          transition: `left ${animationDuration}s ease-in-out, top ${animationDuration}s ease-in-out, width ${animationDuration}s ease-in-out, height ${animationDuration}s ease-in-out, opacity ${animationDuration}s ease-in-out`,
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
      </div>
    </div>
  );
};

export default TrueFocus;
