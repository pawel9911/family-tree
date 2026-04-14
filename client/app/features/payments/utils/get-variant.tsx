import type { PaymentsVariant } from "../types";

export const getVariant = (variant: PaymentsVariant) => {
  switch (variant) {
    case "PRO": {
      return {
        title: "Premium Pro",
        subTitle: "Pełny reportaż w czasie rzeczywistym",
        credits: 100,
        description:
          "Najwyższa wydajność i interakcja. Pozwól gościom stać się częścią reportażu i wyświetlaj ich zdjęcia na żywo.",
        checklist: [
          <>
            <strong>Live Slideshow</strong> na ekranach podczas wesela
          </>,
          <>
            Automatyczny <strong>retusz zdjęć AI</strong> dla gości
          </>,
          <>
            <strong>Nielimitowany czas</strong> przechowywania galerii
          </>,
          <>
            Możliwość przesyłania <strong>wiadomości wideo</strong>
          </>,
        ],
      };
    }
    case "PREMIUM": {
      return {
        title: "Premium",
        subTitle: "Złoty środek dla tradycyjnych wesel",
        credits: 50,
        description:
          "Najpopularniejszy wybór dla wesel do 120 osób. Zadbaj o to, by żadne spojrzenie i toast nie umknęły Twojej uwadze.",
        checklist: [
          <>
            Zdjęcia w pełnej rozdzielczości <strong>HQ</strong>
          </>,
          <>
            Galeria aktywna przez <strong>cały rok</strong>
          </>,
          <>
            Możliwość pobrania <strong>całego albumu</strong> jednym kliknięciem
          </>,
          "Priorytetowe wsparcie techniczne",
        ],
      };
    }

    default: {
      return {
        title: "Standard",
        subTitle: "Dla kameralnych uroczystości",
        credits: 10,
        description:
          "Idealny, aby przetestować system i zebrać najważniejsze ujęcia od najbliższej rodziny.",
        checklist: [
          <>
            Personalizowany <strong>kod QR</strong> do wydruku
          </>,
          <>
            Galeria aktywna przez <strong>30 dni</strong>
          </>,
          "Bezpieczne przechowywanie zdjęć",
        ],
      };
    }
  }
};
