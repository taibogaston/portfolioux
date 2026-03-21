"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Herramientas", href: "#tools" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const goToSection = (href: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: href === "#about" || href === "#tools" ? "center" : "start",
        });
      }
    } else {
      router.push("/" + href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background dark:bg-black transition-all duration-300"
    >
      <div className="container mx-auto px-6 sm:px-[var(--site-gutter-x)]">
        {/* Tres zonas: logo | nav | menú — evita solapamiento con logo absoluto + nav centrado */}
        <div className="flex h-16 min-h-16 items-center gap-3">
          <div className="flex min-w-0 flex-1 justify-start">
            <Link
              href="/"
              className="flex min-w-0 max-w-full shrink-0 items-center gap-2 sm:gap-3"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="shrink-0 text-lg font-bold text-primary sm:text-xl"
              >
                Maitena
              </motion.span>
              {/* Subtítulo desde xl: en lg solo "Maitena" + links sin solaparse */}
              <div className="hidden items-center gap-1 text-sm text-muted-foreground xl:flex xl:text-base">
                <Palette className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">UX/UI Designer</span>
              </div>
            </Link>
          </div>

          <nav className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-6 2xl:gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSection(item.href)}
                className="whitespace-nowrap text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary xl:text-base"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="flex min-w-0 flex-1 justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg bg-muted p-3 transition-colors duration-200 hover:bg-accent lg:hidden touch-manipulation"
              aria-label="Abrir o cerrar menú"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Menú móvil / tablet — hamburger hasta lg inclusive */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-border/40 border-t bg-background dark:bg-black lg:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={() => goToSection(item.href)}
                    className="block w-full text-left px-4 py-3 min-h-[44px] flex items-center text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200 touch-manipulation"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

