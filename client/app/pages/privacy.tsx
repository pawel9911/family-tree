import {
  Brain,
  Calendar,
  Cookie,
  Mail,
  ScrollText,
  Shield,
  Users,
} from "lucide-react";
import { SectionHeader } from "~/components";
import type { HeaderRouteHandle } from "~/shared/types";

export const handle: HeaderRouteHandle = {
  variant: "sticky",
};

const PrivacyPage = () => {
  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="text-left mb-12 space-y-4">
          <div className="flex items-start gap-4 mb-3">
            <div className="inline-flex p-3 rounded-2xl bg-secondary/10 text-primary">
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary">
                Polityka Prywatności <br className="lg:hidden" />
                <span className="text-black/85">i plików cookies</span>
              </h1>
              <p className="text-sm font-bold text-black/85 uppercase tracking-widest">
                Serwisu Moments • Ostatnia aktualizacja: 13 maja 2026 r.
              </p>
            </div>
          </div>

          <p className="text-black/85 font-medium italic text-lg max-w-2xl pt-2 leading-relaxed">
            "Cenimy Twoją prywatność. Poniższy dokument określa zasady
            przetwarzania danych osobowych oraz wykorzystywania plików cookies w
            serwisie Moments."
          </p>
        </div>

        <div className="space-y-16 text-black/85 leading-relaxed text-base">
          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader
              icon={Mail}
              title="1. Kto jest administratorem Twoich danych?"
            />
            <div className="pl-0 md:pl-14 space-y-3 font-medium text-black/85">
              <p>
                Administratorem danych osobowych jest{" "}
                <span className="text-primary font-bold">
                  [Nazwa Twojej Firmy / Imię i Nazwisko]
                </span>{" "}
                z siedzibą w [Miejscowość, Ulica, Kod Pocztowy], NIP: [Numer
                NIP], REGON: [Numer REGON] (dalej jako: "Administrator").
              </p>
              <p className="pt-2">
                Kontakt w sprawach związanych z prywatnością jest możliwy pod
                adresem e-mail:{" "}
                <a
                  href="mailto:[Twój e-mail kontaktowy]"
                  className="text-primary font-bold underline decoration-primary hover:decoration-primary transition-all"
                >
                  [Twój e-mail kontaktowy]
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeader
              icon={Users}
              title="2. Jakie dane zbieramy i w jakim celu?"
              variant="secondary"
            />

            <div className="grid grid-cols-1 gap-6 pl-0 md:pl-14">
              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-2">
                <h3 className="text-lg font-bold text-primary">
                  A. Konta Par Młodych (Zarejestrowani Użytkownicy)
                </h3>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Dane:</strong> E-mail, imię,
                  nazwisko, nazwa wydarzenia, dane do faktury (NIP, adres).
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Cel:</strong> Rejestracja
                  konta, realizacja zamówień (pakiety Standard, Premium, Pro),
                  rozliczenia księgowe oraz kontakt techniczny.
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Podstawa prawna:</strong>{" "}
                  Art. 6 ust. 1 lit. b RODO (wykonanie umowy) oraz Art. 6 ust. 1
                  lit. c RODO (obowiązek prawny – wystawianie faktur).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-2">
                <h3 className="text-lg font-bold text-primary">
                  B. Goście Weselni (Uczestnicy Wydarzeń)
                </h3>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Dane:</strong> Zdjęcia,
                  nagrania wideo, metadane plików (data wykonania zdjęcia).
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Cel:</strong> Świadczenie
                  usługi cyfrowej galerii, obsługa funkcji Live Slideshow,
                  automatyczny retusz zdjęć przez sztuczną inteligencję (AI
                  Photo Retouch).
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Podstawa prawna:</strong>{" "}
                  Art. 6 ust. 1 lit. a RODO (dobrowolna zgoda wyrażona poprzez
                  przesłanie zdjęcia/wideo za pomocą kodu QR).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-2">
                <h3 className="text-lg font-bold text-primary">
                  C. Newsletter i Kontakt (Formularze)
                </h3>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Dane:</strong> Adres e-mail,
                  imię.
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Cel:</strong> Odpowiedź na
                  zapytania, marketing bezpośredni.
                </p>
                <p className="text-sm text-black/85">
                  <strong className="text-primary">Podstawa prawna:</strong>{" "}
                  Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes
                  Administratora).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader title="3. Kto ma dostęp do Twoich danych? (Odbiorcy danych)" />

            <div className="text-black/85 font-medium space-y-4">
              <p>
                Twoje dane przekazujemy tylko podmiotom, które gwarantują
                najwyższy poziom bezpieczeństwa:
              </p>
              <ul className="space-y-3 pl-6">
                {/* Customowy marker w stylu checklisty z Twojego kodu */}
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Dostawcy usług IT i hostingu (przechowywanie galerii zdjęć
                    na bezpiecznych serwerach).
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Systemy płatności online (obsługa transakcji za pakiety).
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Biuro rachunkowe (fakturowanie i podatki).</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>
                    Inni goście danego wesela – zdjęcia przesłane przez gości są
                    widoczne dla innych uczestników tego samego wydarzenia
                    (posiadających kod QR) oraz Pary Młodej.
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-secondary/10 border border-primary/10 text-primary text-sm font-bold">
                Ważne: Administrator nie sprzedaje ani nie udostępnia Twoich
                danych podmiotom trzecim w celach marketingowych.
              </div>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader
              icon={Brain}
              title="4. Przetwarzanie przez sztuczną inteligencję (AI Photo Retouch)"
            />
            <p className="pl-0 md:pl-14 text-black/85 font-medium">
              W pakiecie Premium Pro serwis wykorzystuje algorytmy sztucznej
              inteligencji wyłącznie w celu automatycznej korekty jakości zdjęć
              (światło, ostrość, kolory). Algorytmy AI nie służą do
              profilowania, identyfikacji tożsamości osób na zdjęciach
              (biometria) ani do podejmowania zautomatyzowanych decyzji
              wywołujących skutki prawne.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeader
              icon={Calendar}
              title="5. Jak długo przechowujemy dane?"
              variant="secondary"
            />
            <div className="pl-0 md:pl-14 text-black/85 font-medium space-y-3">
              <p>
                Czas przechowywania zależy od wybranego pakietu i przeznaczenia
                danych:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-gray-100 text-sm">
                  <p className="font-bold text-primary uppercase text-xs tracking-wider mb-1">
                    Pakiet Standard
                  </p>
                  <p>Usuwanie automatyczne po 30 dniach od wydarzenia.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-100 text-sm">
                  <p className="font-bold text-primary uppercase text-xs tracking-wider mb-1">
                    Pakiet Premium
                  </p>
                  <p>Usuwanie automatyczne po 365 dniach (cały rok).</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-100 text-sm">
                  <p className="font-bold text-primary uppercase text-xs tracking-wider mb-1">
                    Pakiet Pro
                  </p>
                  <p>
                    Bezterminowo do decyzji o usunięciu konta przez Parę Młodą.
                  </p>
                </div>
              </div>
              <p className="text-sm text-black/85 pt-2">
                Dane księgowe (faktury): Przechowywane przez 5 lat zgodnie z
                przepisami prawa podatkowego.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader
              icon={ScrollText}
              title="6. Twoje prawa (zgodnie z RODO)"
              variant="secondary"
            />
            <div className="pl-0 md:pl-14 text-black/85 font-medium space-y-2">
              <p>W każdym momencie masz prawo do:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
                <li>Sprostowania (poprawiania) swoich danych.</li>
                <li>
                  <strong className="text-primary">
                    Usunięcia danych ("prawo do bycia zapomnianym")
                  </strong>{" "}
                  – w tym natychmiastowego usunięcia swojego zdjęcia z galerii
                  weselnej.
                </li>
                <li>Ograniczenia przetwarzania danych.</li>
                <li>Cofnięcia zgody na przetwarzanie w dowolnym momencie.</li>
                <li>
                  Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                  (UODO).
                </li>
              </ul>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader
              icon={Cookie}
              title="7. Pliki cookies i technologie śledzące"
            />
            <div className="pl-0 md:pl-14 text-black/85 font-medium space-y-3 text-sm">
              <p>Nasza strona używa plików cookies (ciasteczek) w celach:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-primary">
                    Technicznych (niezbędnych):
                  </strong>{" "}
                  Utrzymanie sesji zalogowanego użytkownika, działanie koszyka
                  zakupowego.
                </li>
                <li>
                  <strong className="text-primary">Analitycznych:</strong>{" "}
                  Badanie ruchu na stronie (np. Google Analytics) w celu
                  ulepszania działania serwisu.
                </li>
              </ul>
              <p className="pt-2 text-black/85">
                Możesz w każdej chwili zmienić ustawienia cookies w swojej
                przeglądarce internetowej lub całkowicie je zablokować.
              </p>
            </div>
          </section>

          <section className="space-y-4 border-t border-gray-100 pt-8">
            <SectionHeader title="8. Zmiany w Polityce Prywatności" />

            <p className="text-black/85 font-medium">
              Administrator zastrzega sobie prawo do wprowadzania zmian w
              niniejszej Polityce Prywatności w przypadku rozwoju technologii
              lub zmian w prawie. Nowa wersja dokumentu będzie publikowana na
              tej stronie wraz z datą aktualizacji.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
