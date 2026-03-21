import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex-1 w-full pt-32 pb-20 container mx-auto px-6 sm:px-[var(--site-gutter-x)] text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Proyecto no encontrado</h1>
      <p className="text-muted-foreground mb-8">
        Ese proyecto no existe o el enlace es incorrecto.
      </p>
      <Link
        href="/#projects"
        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
      >
        Volver a proyectos
      </Link>
    </main>
  );
}
