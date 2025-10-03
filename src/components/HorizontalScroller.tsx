"use client";

import { useRef, useEffect, ReactNode, useState } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScroller = ({ children, className = "" }: HorizontalScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      // Si estamos en el límite izquierdo y scrolleamos hacia la izquierda
      if (scrollLeft <= 0 && e.deltaY < 0) {
        return; // Permitir scroll vertical
      }
      
      // Si estamos en el límite derecho y scrolleamos hacia la derecha
      if (scrollLeft >= maxScrollLeft && e.deltaY > 0) {
        return; // Permitir scroll vertical
      }
      
      // Si hay espacio para scroll horizontal, interceptar
      e.preventDefault();
      e.stopPropagation();
      
      // Scroll horizontal suave
      const scrollAmount = e.deltaY * 0.8;
      container.scrollLeft += scrollAmount;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!container.contains(document.activeElement)) return;
      
      const scrollAmount = 400;
      
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          container.scrollLeft -= scrollAmount;
          break;
        case "ArrowRight":
          e.preventDefault();
          container.scrollLeft += scrollAmount;
          break;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHovered]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex gap-6 overflow-x-auto overflow-y-visible scroll-smooth pb-4 pl-[50vw] pr-[50vw] ${className}`}
        style={{
          scrollSnapType: "x mandatory",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          width: "100%",
          maxWidth: "100vw",
          cursor: "default",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;
