import { type LucideIcon } from "lucide-react";

export interface ContentLink {
  title: string;
  description?: string;
  icon?: LucideIcon;
  href: string;
}

export interface ContentCard {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  href: string;
}

interface ItemWithContent {
  title: string;
  content: {
    card: ContentCard;
    links: ContentLink[];
  };
  href?: never;
}

interface ItemSimple {
  title: string;
  href: string;
  content?: never;
}

export type MainNavConfig = (ItemWithContent | ItemSimple)[];

export type FooterNavConfig = {
  links: {
    title: string;
    items: ContentLink[];
  }[];
  socials: ContentLink[];
};
