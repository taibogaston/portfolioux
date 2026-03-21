"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS, getProjectIndexBySlug } from "@/data/projects";

type ProjectNavCarouselProps = {
  currentSlug: string;
};

/** Caracteres visibles del nombre del próximo proyecto (el completo va en title/aria) */
const NEXT_TITLE_MAX_CHARS = 18;

function truncateNextTitle(title: string, maxChars: number): string {
  const t = title.trim();
  if (t.length <= maxChars) return t;
  return `${t.slice(0, maxChars).trimEnd()}…`;
}

/**
 * Izquierda: flecha → proyecto anterior (si existe) + nombre del proyecto actual; indentación como logo Maitena.
 * Derecha: enlace al próximo proyecto (solo nombre + flecha).
 */
export default function ProjectNavCarousel({ currentSlug }: ProjectNavCarouselProps) {
  const idx = getProjectIndexBySlug(currentSlug);
  if (idx < 0) return null;

  const current = PROJECTS[idx];
  const immediatePrev = idx > 0 ? PROJECTS[idx - 1] : null;
  const immediateNext = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <div className="mb-3 w-full sm:mb-5">
      {/* Una sola fila en móvil: título (flex-1) + siguiente (shrink-0). Pantallas muy angostas: solo flecha. */}
      <div className="flex w-full min-w-0 flex-row flex-nowrap items-baseline justify-between gap-3 sm:gap-6">
        <div className="min-w-0 flex-1">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="min-w-0 pb-3 sm:pb-4"
          >
            {immediatePrev ? (
              <div className="relative w-full max-w-[min(100%,28rem)]">
                <Link
                  href={`/projects/${immediatePrev.slug}`}
                  className="absolute right-full top-1/2 mr-1 flex -translate-y-1/2 items-center rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-primary sm:p-2 touch-manipulation"
                  aria-label={`Proyecto anterior: ${immediatePrev.title}`}
                >
                  <ChevronLeft
                    className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                    strokeWidth={2}
                    aria-hidden
                  />
                </Link>
                <div className="project-nav-title-glow project-nav-title-glow--start max-w-[min(100%,28rem)]">
                  <h1 className="hyphens-auto break-words text-left text-lg font-bold leading-tight tracking-tight text-foreground text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                    {current.title}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="project-nav-title-glow project-nav-title-glow--start max-w-[min(100%,28rem)]">
                <h1 className="hyphens-auto break-words text-left text-lg font-bold leading-tight tracking-tight text-foreground text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                  {current.title}
                </h1>
              </div>
            )}
          </motion.div>
        </div>

        {immediateNext ? (
          <div className="shrink-0">
            <div className="max-w-[min(46vw,13rem)] min-w-0 sm:max-w-[13rem]">
              <Link
                href={`/projects/${immediateNext.slug}`}
                className="flex flex-nowrap items-center justify-end gap-1.5 rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-primary sm:gap-2 sm:p-2 touch-manipulation"
                aria-label={`Siguiente proyecto: ${immediateNext.title}`}
                title={immediateNext.title}
              >
                <span className="min-w-0 truncate text-right text-sm font-medium max-[340px]:hidden sm:text-base">
                  {truncateNextTitle(immediateNext.title, NEXT_TITLE_MAX_CHARS)}
                </span>
                <ChevronRight
                  className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                  strokeWidth={2}
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
