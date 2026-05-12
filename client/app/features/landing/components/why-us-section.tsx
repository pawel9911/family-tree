import { Monitor, Sparkles, Video, Download } from "lucide-react";
import { cn } from "~/utils";

const features = [
  {
    title: "Live Slideshow",
    benefit: "Interakcja",
    description: "Zdjęcia gości na żywo na ekranach sali.",
    icon: <Monitor size={20} strokeWidth={2.5} />,
  },
  {
    title: "AI Retouch",
    benefit: "Magia",
    description: "Automatyczna korekta światła i kolorów.",
    icon: <Sparkles size={20} strokeWidth={2.5} />,
  },
  {
    title: "Wideo",
    benefit: "Emocje",
    description: "Krótkie filmy zamiast księgi gości.",
    icon: <Video size={20} strokeWidth={2.5} />,
  },
  {
    title: "Jakość HQ",
    benefit: "Finał",
    description: "Pobieranie galerii bez straty jakości.",
    icon: <Download size={20} strokeWidth={2.5} />,
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary font-bold italic uppercase mb-4">
            Dlaczego my?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4">
            Świętujcie. My zadbamy o <br />
            <span className="text-black/85">każde wspomnienie.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center"
              >
                <div
                  className={cn(
                    "relative z-10 w-16 h-16 rounded-full bg-white border border-gray-100 shadow-xl",
                    "flex items-center justify-center text-primary transition-all duration-500",
                    "group-hover:-translate-y-3 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20",
                    "mb-8",
                  )}
                >
                  {f.icon}
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-150 transition-all duration-700" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">
                    {f.benefit}
                  </span>
                  <h3 className="text-xl font-bold text-primary tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-black/85 leading-relaxed px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {f.description}
                  </p>
                </div>

                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-100 group-hover:bg-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
