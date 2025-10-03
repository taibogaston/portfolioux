"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
  pauseTime?: number;
  className?: string;
  loop?: boolean;
}

const TypewriterText = ({ 
  text, 
  speed = 100, 
  eraseSpeed = 50,
  delay = 0, 
  pauseTime = 2000,
  className = ""
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    // Pause after typing is complete
    if (!isErasing && currentIndex >= text.length) {
      const pauseTimer = setTimeout(() => {
        setIsErasing(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    // Start typing again after erasing is complete
    if (isErasing && currentIndex <= 0) {
      setIsErasing(false);
      setCurrentIndex(0);
      setDisplayedText("");
      return;
    }

    const timer = setTimeout(() => {
      if (isErasing) {
        // Erasing
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else {
        // Typing
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, isErasing ? eraseSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, isErasing, text, speed, eraseSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
