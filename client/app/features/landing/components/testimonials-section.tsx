import { Quote, Star } from "lucide-react";
import { cn } from "~/utils";

const testimonials = [
  {
    quote:
      "To była najlepsza atrakcja wieczoru. Goście świetnie się bawili widząc swoje zdjęcia na ekranie, a my mamy 400 zdjęć więcej niż od fotografa!",
    author: "Kasia i Marek",
    event: "Wesele w Pałacu, Czerwiec 2024",
    rating: 5,
  },
  {
    quote:
      "Byliśmy w szoku, jak łatwo goście skanowali kody. Nawet babcia wysłała zdjęcie! AI świetnie poprawiło fotki robione przy nocnym świetle.",
    author: "Magda i Tomek",
    event: "Wesele w Stodole, Sierpień 2024",
    rating: 5,
  },
  {
    quote:
      "Wiadomości wideo to totalny hit. Mamy nagrania od znajomych, których nie zdążyliśmy nawet uściskać w tym całym zamieszaniu. Pamiątka na całe życie.",
    author: "Aleksandra i Jan",
    event: "Hotel Grand, Wrzesień 2024",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-2xl text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4">
            Klienci <span className="text-black/85">nas uwielbiają.</span>
          </h2>
          <p className="text-black/85 font-medium italic">
            Zobacz, jak Moments odmieniło ich najważniejszy dzień.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col p-8 rounded-2xl border border-gray-100",
                "shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 relative",
              )}
            >
              <div className="absolute -top-5 left-8 p-3.5 rounded-xl bg-primary shadow-lg shadow-primary/20">
                <Quote className="text-white" size={18} fill="white" />
              </div>

              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(t.rating)].map((_, starI) => (
                  <Star
                    key={starI}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="flex-1 mb-8">
                <p className="text-black/85 leading-relaxed italic font-medium">
                  "{t.quote}"
                </p>
              </blockquote>

              <div className="pt-6 border-t">
                <p className="font-black text-primary text-lg tracking-tight">
                  {t.author}
                </p>
                <p className="text-xs font-bold text-black/85 uppercase tracking-widest mt-1">
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
