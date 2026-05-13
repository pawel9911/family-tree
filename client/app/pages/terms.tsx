import {
  AlertCircle,
  Ban,
  CreditCard,
  EyeOff,
  FileText,
  Gavel,
  RefreshCw,
  Scale,
  ScrollText,
  Settings,
  ShieldAlert,
} from "lucide-react";
import { SectionHeader } from "~/components";
import type { HeaderRouteHandle } from "~/shared/types";

export const handle: HeaderRouteHandle = {
  variant: "sticky",
};

const TermsPage = () => {
  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="text-left mb-12 space-y-4">
          <div className="flex items-start gap-4 mb-3">
            <div className="inline-flex p-3 rounded-2xl bg-secondary/10 text-primary">
              <ScrollText size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary">
                Regulamin Świadczenia <br />
                <span className="text-black/85">usług elektronicznych</span>
              </h1>
              <p className="text-sm font-bold text-black/85 uppercase tracking-widest">
                Serwisu Moments • Ostatnia aktualizacja: 13 maja 2026 r.
              </p>
            </div>
          </div>

          <p className="text-black/85 font-medium italic text-lg max-w-2xl pt-2 leading-relaxed">
            Przed rozpoczęciem korzystania z Serwisu każdy użytkownik jest
            zobowiązany do uważnego zapoznania się z niniejszym Regulaminem.
          </p>
        </div>

        <div className="space-y-16 text-black/85 leading-relaxed text-base">
          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader icon={FileText} title="§ 1. Postanowienia ogólne" />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Niniejszy Regulamin określa zasady korzystania z serwisu
                internetowego Wedding Moments, dostępnego pod adresem{" "}
                <span className="text-primary font-bold">
                  [Adres URL Twojej strony]
                </span>{" "}
                (dalej jako: "Serwis").
              </p>
              <p>
                Właścicielem i administratorem Serwisu jest{" "}
                <span className="text-primary font-bold">
                  [Nazwa Twojej Firmy / Imię i Nazwisko]
                </span>{" "}
                z siedzibą w [Miejscowość, Ulica, Kod Pocztowy], NIP: [Numer
                NIP], REGON: [Numer REGON] (dalej jako: "Usługodawca").
              </p>
              <p>
                Kontakt z Usługodawcą jest możliwy za pośrednictwem adresu
                e-mail:{" "}
                <a
                  href="mailto:[Twój e-mail kontaktowy]"
                  className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary transition-all"
                >
                  [Twój e-mail kontaktowy]
                </a>
                {""} .
              </p>
            </div>
          </section>

          <section>
            <SectionHeader icon={Scale} title="§ 2. Definicje" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0 md:pl-14">
              <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-sm text-black/85">
                <p className="font-bold text-primary mb-1">
                  Organizator (Para Młoda)
                </p>
                <p>
                  Osoba fizyczna posiadająca pełną zdolność do czynności
                  prawnych, która zarejestrowała Konto w Serwisie w celu
                  utworzenia galerii ślubnej.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-sm text-black/85">
                <p className="font-bold text-primary mb-1">Gość</p>
                <p>
                  Osoba fizyczna, która uzyskuje dostęp do Galerii za
                  pośrednictwem dedykowanego kodu QR lub linku udostępnionego
                  przez Organizatora.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-sm text-black/85">
                <p className="font-bold text-primary mb-1">Galeria</p>
                <p>
                  Cyfrowa przestręń w Serwisie przypisana do konkretnego
                  wydarzenia, służąca do gromadzenia i wyświetlania Zdjęć oraz
                  Wiadomości Wideo.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-sm text-black/85">
                <p className="font-bold text-primary mb-1">Kredyty</p>
                <p>
                  Wewnętrzna jednostka rozliczeniowa Serwisu, służąca
                  bezpośrednio do aktywacji lub przedłużania Pakietów Usług.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader
              icon={Settings}
              title="§ 3. Usługi świadczone drogą elektroniczną"
            />

            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Usługodawca świadczy za pośrednictwem Serwisu następujące
                usługi:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  "Prowadzenie Konta Organizatora.",
                  "Udostępnianie narzędzi do tworzenia cyfrowych Galerii ślubnych.",
                  "Generowanie personalizowanych kodów QR.",
                  "Obsługę funkcji Live Slideshow (wyświetlanie zdjęć na żywo).",
                  "Automatyczny retusz zdjęć przy użyciu algorytmów sztucznej inteligencji (AI Photo Retouch).",
                  "Przechowywanie i możliwość pobierania plików multimedialnych.",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-primary pt-2">
                Umowa o świadczenie usługi prowadzenia Konta zawierana jest na
                czas nieokreślony z chwilą poprawnej rejestracji.
              </p>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader icon={CreditCard} title="§ 4. Pakiety i płatności" />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Korzystanie z podstawowych funkcji Serwisu może wymagać zakupu
                jednego z Pakietów: Standard, Premium lub Premium Pro, zgodnie z
                aktualnym cennikiem.
              </p>
              <p>
                Ceny podane w Serwisie są cenami brutto i zawierają należne
                podatki.
              </p>
              <p>
                Płatności realizowane są za pośrednictwem operatora płatności
                elektronicznych{" "}
                <span className="text-primary font-bold">
                  [Wpisz dostawcę, np. Stripe / Przelewy24 / PayU]
                </span>
                {""}.
              </p>
              <p>
                Usługa zostaje uruchomiona natychmiast po zaksięgowaniu wpłaty
                przez operatora płatności. Do każdego zakupu wystawiana jest
                faktura elektroniczna, przesyłana na adres e-mail Organizatora.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader
              icon={ShieldAlert}
              title="§ 5. Prawa i obowiązki użytkowników"
            />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Użytkownik zobowiązuje się do korzystania z Serwisu w sposób
                zgodny z prawem, dobrymi obyczajami oraz niniejszym Regulaminem.
              </p>

              <p className="p-4 bg-secondary/10 border border-primary/10 rounded-xl text-primary text-sm font-medium">
                <strong>Zabrania się</strong> przesyłania do Serwisu treści
                (zdjęć, filmów) o charakterze bezprawnym, wulgarnym,
                pornograficznym, naruszającym dobra osobiste osób trzecich lub
                prawa autorskie.
              </p>
              <p>
                Organizator ponosi odpowiedzialność za udostępnienie kodu QR
                osobom trzecim.
              </p>
              <p>
                Gość przesyłający zdjęcie do Galerii oświadcza, że posiada pełne
                prawa autorskie do tego pliku oraz zgodę osób na nim wizerunkowo
                utrwalonych na jego publikację w ramach danej Galerii.
              </p>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader
              icon={EyeOff}
              title="§ 6. Moderacja i usuwanie treści"
            />
            <p className="text-black/85 font-medium text-sm pl-0 md:pl-14">
              Usługodawca nie monitoruje na bieżąco wszystkich zdjęć dodawanych
              przez Gości, jednak zastrzega sobie prawo do natychmiastowego
              usunięcia materiałów naruszających § 5 ust. 2 po otrzymaniu
              wiarygodnego zgłoszenia (procedura Notice and Take Down).
              Organizator posiada pełne uprawnienia do samodzielnego usuwania
              dowolnych zdjęć i filmów ze swojej Galerii w każdym momencie.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeader
              icon={RefreshCw}
              title="§ 7. Odstąpienie od umowy (zwroty)"
            />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Konsumentowi (Organizatorowi) przysługuje prawo do odstąpienia
                od umowy zawartej na odległość w terminie 14 dni bez podawania
                przyczyny, pod warunkiem, że Usługodawca nie rozpoczął
                faktycznego świadczenia usługi za wyraźną zgodą Konsumenta.
              </p>
              <div className="p-4 bg-secondary/10 border border-primary/10 rounded-xl text-primary text-sm font-medium">
                <strong>Ważne:</strong> Zgodnie z art. 38 pkt 13 ustawy o
                prawach konsumenta, prawo do odstąpienia od umowy o dostarczanie
                treści cyfrowych nie przysługuje, jeżeli spełnianie świadczenia
                rozpoczęło się za wyraźną zgodą Konsumenta przed upływem terminu
                do odstąpienia od umowy (np. aktywacja pakietu i wygenerowanie
                kodu QR).
              </div>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader icon={AlertCircle} title="§ 8. Reklamacje" />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Użytkownik ma prawo do złożenia reklamacji w przypadku
                niewłaściwego działania Serwisu.
              </p>
              <p>
                Reklamacje należy składać drogą mailową na adres:{" "}
                <span className="text-primary font-bold">
                  [Twój e-mail kontaktowy]
                </span>
                {""}.
              </p>
              <p>
                Usługodawca rozpatrzy reklamację w terminie do 14 dni od dnia
                jej otrzymania i poinformuje Użytkownika o decyzji drogą
                elektroniczną.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader icon={Ban} title="§ 9. Odpowiedzialność" />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>
                Usługodawca dokłada wszelkich starań, aby zapewnić bezawaryjne
                działanie Serwisu, jednak nie ponosi odpowiedzialności za
                przerwy techniczne wynikające z siły wyższej lub awarii
                niezależnych od Usługodawcy (np. brak dostępu do internetu na
                sali weselnej).
              </p>
              <p>
                Usługodawca nie odpowiada za jakość zdjęć przesyłanych przez
                Gości (np. słaba jakość aparatu w telefonie).
              </p>
            </div>
          </section>

          <section className="group relative p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-2xl">
            <SectionHeader icon={Gavel} title="§ 10. Postanowienia końcowe" />
            <div className="text-black/85 font-medium text-sm pl-0 md:pl-14 space-y-2">
              <p>Regulamin wchodzi w życie z dniem publikacji w Serwisie.</p>
              <p>
                Usługodawca zastrzega sobie prawo do zmian w Regulaminie z
                ważnych przyczyn (np. zmiany w prawie, wprowadzenie nowych
                funkcji). O zmianach Organizatorzy zostaną powiadomieni mailowo
                z 14-dniowym wyprzedzeniem.
              </p>
              <p>
                W sprawach nieuregulowanych niniejszym Regulaminem mają
                zastosowanie przepisy Kodeksu Cywilnego oraz Ustawy o
                świadczeniu usług drogą elektroniczną.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
