import { Facebook, Instagram, PinIcon } from "lucide-react";
import type { FooterNavConfig } from "../types/navigation.type";

export const footerNavConfig: FooterNavConfig = {
  links: [
    {
      title: "Produkt",
      items: [
        {
          title: "Funkcje",
          href: "#",
        },
        {
          title: "Cennik",
          href: "#",
        },
        {
          title: "Inspiracje",
          href: "#",
        },
        {
          title: "Jak to działa",
          href: "#",
        },
      ],
    },
    {
      title: "Pomoc",
      items: [
        {
          title: "Regulamin",
          href: "/terms",
        },
        {
          title: "Prywatność",
          href: "/privacy",
        },
        {
          title: "Kontakt",
          href: "#",
        },
        {
          title: "Pomoc techniczna",
          href: "#",
        },
      ],
    },
  ],
  socials: [
    { icon: Instagram, title: "Instagram", href: "#" },
    { icon: Facebook, title: "Facebook", href: "#" },
    { icon: PinIcon, title: "Pinterest", href: "#" },
  ],
};
