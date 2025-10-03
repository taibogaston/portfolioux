"use client";

import { useEffect, useState, useMemo, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarryBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Memoize stars generation - only create once
  const stars = useMemo(() => {
    const newStars: Star[] = [];
    const starCount = 80; // Reduced from 200 to 80 for better performance
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // Size between 1-3px (reduced)
        opacity: Math.random() * 0.6 + 0.3, // Opacity between 0.3-0.9
        speed: Math.random() * 1 + 0.5, // Speed between 0.5-1.5
      });
    }
    
    return newStars;
  }, []);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const throttledMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime >= frameInterval) {
        handleMouseMove(e);
        lastTime = now;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", throttledMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Interactive Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => {
          // Calculate distance from mouse to star
          const deltaX = star.x - mousePosition.x;
          const deltaY = star.y - mousePosition.y;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          // Calculate movement based on distance and hover state
          const maxDistance = 40; // Maximum distance for interaction
          const moveStrength = isHovering ? Math.max(0, (maxDistance - distance) / maxDistance) : 0;
          
          // Calculate movement direction (away from mouse)
          const moveDistance = moveStrength * 15; // Maximum movement distance
          const moveAngle = Math.atan2(deltaY, deltaX);
          
          const newX = star.x + Math.cos(moveAngle) * moveDistance;
          const newY = star.y + Math.sin(moveAngle) * moveDistance;
          
          return (
            <div
              key={star.id}
              className="absolute rounded-full bg-white will-change-transform"
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
                transition: 'all 0.3s ease-out',
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))',
              }}
            />
          );
        })}
      </div>

      {/* Add some CSS-based animated stars for extra effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="star-field-1"></div>
        <div className="star-field-2"></div>
        <div className="star-field-3"></div>
      </div>
    </div>
  );
};

export default StarryBackground;
