import { QrCode, Camera, Wand2 } from "lucide-react";
import { cn } from "~/utils";

const steps = [
  {
    title: "Wygeneruj kod QR",
    description:
      "Wydrukuj personalizowany kod i postaw go na stołach. Dopasuj go do swojego stylu.",
    icon: <QrCode className="text-white" size={24} />,
  },
  {
    title: "Goście robią zdjęcia",
    description:
      "Nie muszą instalować żadnej aplikacji. Skanują kod, robią zdjęcie lub nagrywają wideo i gotowe!",
    icon: <Camera className="text-white" size={24} />,
  },
  {
    title: "Magia dzieje się sama",
    description:
      "Zdjęcia natychmiast trafiają do wspólnej galerii, są retuszowane przez AI i wyświetlane na żywo na ekranie.",
    icon: <Wand2 className="text-white" size={24} />,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-2xl text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4">
            Trzy kroki do{" "}
            <span className="text-black/85">wspólnych wspomnień</span>
          </h2>
          <p className="text-black/85 font-medium italic">
            Prościej się nie da – zaprojektowane z myślą o każdym gościu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl border border-gray-100",
                "shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
              )}
            >
              <span className="absolute top-6 right-8 text-4xl font-black text-primary/25 select-none">
                0{index + 1}
              </span>

              <div className="inline-flex p-4 rounded-xl bg-primary shadow-lg mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-black/85 leading-relaxed text-sm font-medium">
                {step.description}
              </p>

              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/20 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
