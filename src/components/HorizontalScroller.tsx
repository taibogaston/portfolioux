"use client";

import { useRef, useEffect, ReactNode, useState } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
  onScrollToStart?: () => void;
}

const HorizontalScroller = ({ children, className = "", onScrollEnd, onScrollToStart }: HorizontalScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isInSection) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;

      // Si estamos en el inicio (primera card) y scrolleamos hacia arriba
      if (scrollLeft <= 10 && e.deltaY < 0) {
        // Permitir scroll vertical hacia la sección anterior
        onScrollToStart?.();
        return;
      }

      // Si estamos en el final y scrolleamos hacia abajo
      if (scrollLeft >= maxScrollLeft - 10 && e.deltaY > 0) {
        // Permitir scroll vertical hacia la siguiente sección
        onScrollEnd?.();
        return;
      }

      // Para cualquier otra posición, hacer scroll horizontal
      e.preventDefault();
      e.stopPropagation();

      // Scroll horizontal más rápido
      const scrollAmount = e.deltaY * 3;
      container.scrollLeft += scrollAmount;
    };

    // Detectar cuando el contenedor está en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInSection(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isInSection, onScrollEnd, onScrollToStart]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
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
