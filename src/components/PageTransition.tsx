"use client";

import { motion, AnimatePresence } from "framer-motion";
import { coverRevealVariants } from "@/lib/animations";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true);
      setCurrentPath(pathname);
      
      // Hide transition after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Match animation duration

      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath]);

  return (
    <>
      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Cover/Reveal transition overlay - only show during transitions */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="page-transition-cover"
            variants={coverRevealVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 pointer-events-none z-60"
          >
            <div className="w-full h-full bg-gradient-to-b from-purple-700/80 to-black/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
