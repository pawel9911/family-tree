import { Link } from "react-router";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";

export const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div
        className={cn(
          "relative w-full h-full overflow-hidden shadow-inner",
          "bg-slate-50/50 flex items-center justify-center",
        )}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://portal.janachowska.pl/wp-content/uploads/2019/05/slubne-wpadki.jpg"
            className="w-full h-full object-cover opacity-[0.35] grayscale"
            alt="Soft wedding background"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="flex items-center justify-center mb-10 gap-4 text-lg font-bold text-black/85 uppercase tracking-widest">
            <span className="w-1/6 h-0.5 bg-linear-to-r from-transparent to-primary/90" />
            {""}
            Zaufało nam już ponad 500 klientów
            {""}
            <span className="w-1/6 h-0.5 bg-linear-to-r from-primary/90 to-transparent" />
          </p>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary leading-none mb-6">
            Wszystkie wspomnienia <br />
            <span className="text-black/85">w jednym miejscu.</span>
          </h1>

          <p className="text-lg md:text-xl text-black/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Zgromadź wspomnienia od wszystkich gości w pełnej rozdzielczości.
            Pozwól swoim przeżyciom ożyć w wyjątkowej galerii.
          </p>

          <Button
            size="lg"
            className="h-16 px-12 text-xl font-bold rounded-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform"
            asChild
          >
            <Link to="/register">Rozpocznij za darmo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
