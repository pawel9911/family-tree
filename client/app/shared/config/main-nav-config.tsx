import { FolderLock, HelpCircle, PlusCircle, Zap } from "lucide-react";
import type { MainNavConfig } from "../types/navigation.type";

export const mainNavConfig: MainNavConfig = [
  {
    title: "Projekty",
    content: {
      card: {
        title: "Wariant PRO",
        description:
          "Zyskaj 1000 kredytów. Dodawaj zdjęcia i ciesz się własną galerią.",
        buttonText: "Kup PRO",
        icon: Zap,
        href: "/payments/summary?variant=PRO",
      },
      links: [
        {
          title: "Nowy projekt",
          description: "Zacznij tworzyć od zera",
          href: "/projects/new",
          icon: PlusCircle,
        },
        {
          title: "Twoje projekty",
          description: "Zarządzaj swoją biblioteką",
          href: "/projects",
          icon: FolderLock,
        },
        {
          title: "Pomoc & FAQ",
          description: "Rozwiązania najczęstszych problemów",
          href: "/help",
          icon: HelpCircle,
        },
      ],
    },
  },
  {
    title: "Oferta",
    href: "/payments",
  },
];
