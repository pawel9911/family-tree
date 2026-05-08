import { Link } from "react-router";
import Logo from "~/assets/logo.png";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";
import { footerLinks, socials } from "../../config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary">
      <div className="container">
        <div className="py-16 border-b border-white/10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Gotowi, by uwiecznić{" "}
            <span className="opacity-50 italic">Wasz dzień?</span>
          </h2>
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-bold bg-white text-primary hover:bg-gray-100! hover:scale-105"
            asChild
          >
            <Link to="/register">Rozpocznij za darmo</Link>
          </Button>
          <p className="mt-6 text-white text-sm font-medium uppercase tracking-widest">
            Dołącz do ponad 500 klientów
          </p>
        </div>

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

          {footerLinks.map((footerLink, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
                {footerLink.label}
              </h4>
              <ul className="space-y-3">
                {footerLink.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
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
                  aria-label={social.label}
                >
                  {social.icon}
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
