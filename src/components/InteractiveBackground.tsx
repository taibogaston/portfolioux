"use client";

import { useEffect, useState } from "react";

const InteractiveBackground = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div 
        className={`interactive-bg transition-all duration-1000 ease-out ${
          isHovering ? "active" : ""
        }`}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`floating-orb orb-${i + 1} ${
              isHovering ? "active" : ""
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Tech pattern overlay */}
      <div 
        className={`tech-grid-overlay transition-opacity duration-1000 ${
          isHovering ? "opacity-100 active" : "opacity-30"
        }`}
      />
    </div>
  );
};

export default InteractiveBackground;
