"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverRevealCardProps {
  image: string;
  title: string;
  description: string;
  labels?: string[];
  className?: string;
  children?: React.ReactNode;
}

const HoverRevealCard = ({ 
  image, 
  title, 
  description, 
  labels = [], 
  className = "",
  children 
}: HoverRevealCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsRevealed(!isRevealed);
    }
    if (e.key === 'Escape') {
      setIsRevealed(false);
    }
  };

  // Handle click/tap
  const handleClick = () => {
    if (isMobile) {
      setIsRevealed(!isRevealed);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative w-full h-full overflow-hidden rounded-2xl cursor-pointer ${className}`}
      onMouseEnter={() => !isMobile && setIsRevealed(true)}
      onMouseLeave={() => !isMobile && setIsRevealed(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${title}`}
      aria-expanded={isRevealed}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Existing hover effects - preserved */}
      <div className="absolute inset-0 bg-white/5 border border-white/10 transition-all duration-500 ease-out group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/20 group-hover:-translate-y-2" />
      
      {/* Shine Effect - preserved */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Spacer to push content to bottom */}
        <div className="flex-1"></div>
        
        {/* Default content (always visible) */}
        <div className="p-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 h-14">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 h-20">
            {description}
          </p>
        </div>

        {/* Custom children content */}
        {children && (
          <div className="px-6 pb-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
            {children}
          </div>
        )}
      </div>

      {/* Reveal Overlay with Blur */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-20"
          >
            {/* Dark overlay with blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Revealed content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="relative z-30 h-full flex flex-col justify-center items-center p-6 text-center"
            >
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-2xl font-bold text-white mb-4"
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-white/90 mb-6 leading-relaxed max-w-sm"
              >
                {description}
              </motion.p>

              {/* Labels */}
              {labels.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex flex-wrap gap-2 justify-center"
                >
                  {labels.map((label, index) => (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30"
                    >
                      {label}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              {/* Mobile close hint */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="mt-4 text-white/60 text-sm"
                >
                  Toca para cerrar
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus indicator */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 ring-offset-2 ring-offset-transparent focus-within:ring-primary/50 transition-all duration-200 pointer-events-none" />
    </div>
  );
};

export default HoverRevealCard;
