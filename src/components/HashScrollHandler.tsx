"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Tras navegar a `/#sección` desde otra ruta, hace scroll al ancla en la home.
 */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;

    const run = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: hash === "#about" || hash === "#tools" ? "center" : "start",
        });
      }
    };

    const t = window.setTimeout(run, 50);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
