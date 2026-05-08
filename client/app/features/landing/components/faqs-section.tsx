import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "~/shared/ui";
import { HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "~/utils";

const faqs = [
  {
    question: "Czy goście muszą pobierać aplikację?",
    answer:
      "Absolutnie nie! Wystarczy zwykły aparat i przeglądarka. Goście skanują kod QR i od razu dodają zdjęcia. To klucz do wysokiej frekwencji.",
  },
  {
    question: "Jak długo zdjęcia są dostępne w galerii?",
    answer:
      "Zależnie od pakietu, od 3 miesięcy do nielimitowanego czasu. Zawsze możesz pobrać wszystko jednym kliknięciem w pełnej jakości HQ.",
  },
  {
    question: "Czy mogę moderować zdjęcia przed wyświetleniem?",
    answer:
      "Tak, masz pełną kontrolę. Możesz akceptować każde zdjęcie przed jego pojawieniem się na dużym ekranie lub pozwolić na pełny automat.",
  },
  {
    question: "Co jeśli na sali jest słaby zasięg internetu?",
    answer:
      "Aplikacja działa w trybie offline-ready. Zdjęcia zostaną wysłane automatycznie, gdy tylko telefon złapie stabilniejsze połączenie.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex p-3.5 rounded-xl bg-secondary/10 text-primary mb-5">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4">
                Wszystko, co <br />
                <span className="text-black/85">warto wiedzieć.</span>
              </h2>
              <p className="text-black/85 font-medium italic mb-10">
                Masz wątpliwości? Przygotowaliśmy odpowiedzi na pytania, które
                najczęściej zadają nam Klienci.
              </p>

              <div className="p-6 rounded-xl bg-secondary/10 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm mb-1">
                    Potrzebujesz pomocy?
                  </p>
                  <p className="text-xs text-black/85 mb-3">
                    Jesteśmy dostępni na czacie 24/7
                  </p>

                  <Button size="sm" variant="link" className="font-black">
                    Zadaj pytanie
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "group border border-gray-100 rounded-2xl shadow-lg transition-all duration-300",
                    "data-[state=open]:border-primary/25",
                  )}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-primary text-sm font-bold transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                        {index + 1}
                      </span>
                      <span className="text-lg font-bold text-primary tracking-tight">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 px-12 text-black/85 leading-relaxed text-base font-medium">
                    <div className="pt-2 border-t">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
