"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200; // Number of stars
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Size between 1-4px
          opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2-1
          speed: Math.random() * 2 + 0.5, // Speed between 0.5-2.5
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Central purple glow - removed */}

      {/* Static glow orbs - removed */}

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => {
          const distance = Math.sqrt(
            Math.pow(star.x - mousePosition.x, 2) + 
            Math.pow(star.y - mousePosition.y, 2)
          );
          
          const moveDistance = isHovering ? Math.max(0, 50 - distance) / 10 : 0;
          const moveAngle = Math.atan2(star.y - mousePosition.y, star.x - mousePosition.x);
          
          const newX = star.x + Math.cos(moveAngle) * moveDistance;
          const newY = star.y + Math.sin(moveAngle) * moveDistance;

          return (
            <div
              key={star.id}
              className="absolute rounded-full bg-white transition-all duration-300 ease-out"
              style={{
                left: `${newX}%`,
                top: `${newY}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: isHovering ? Math.min(1, star.opacity + 0.3) : star.opacity,
                boxShadow: isHovering 
                  ? `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 6}px rgba(255, 255, 255, 0.4)`
                  : `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
                transform: isHovering ? 'scale(1.2)' : 'scale(1)',
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))',
              }}
            />
          );
        })}
      </div>

    </div>
  );
};

export default StarryBackground;
