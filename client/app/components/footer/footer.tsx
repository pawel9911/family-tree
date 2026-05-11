import { Link } from "react-router";
import Logo from "~/assets/logo.png";
import type { ContentLink } from "~/shared/types";
import { cn } from "~/utils";

interface FooterProps {
  children: React.ReactNode;
  footerConfig: {
    links: {
      title: string;
      items: ContentLink[];
    }[];
    socials: ContentLink[];
  };
}

export const Footer = ({
  children,
  footerConfig: { links, socials },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary">
      <div className="container">
        {children}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <img
                src={Logo}
                className="max-h-12 w-auto brightness-0 invert"
                alt="logo"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed max-w-xs italic">
              Tworzymy cyfrowe pamiątki z najważniejszych dni w życiu. Wasze
              emocje, nasza technologia.
            </p>
          </div>

          {links.map((link, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
                {link.title}
              </h4>
              <ul className="space-y-3">
                {link.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
              Dołącz do nas
            </h4>
            <div className="flex gap-3 mb-8">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={cn(
                    "p-2.5 rounded-lg bg-white/5 border border-white/10 text-white transition-all",
                    "hover:bg-white hover:text-primary hover:-translate-y-1",
                  )}
                  aria-label={social.title}
                >
                  {social.icon ? <social.icon size={20} /> : social.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <p className="text-center text-sm text-white">
            © {currentYear} Moments. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
