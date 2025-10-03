import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-foreground relative">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Mis Proyectos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Aquí puedes ver algunos de mis trabajos más destacados en diseño UX/UI.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <div
                  key={project}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Proyecto {project}</h3>
                  <p className="text-muted-foreground">
                    Descripción del proyecto {project} con enfoque en UX/UI design.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}





