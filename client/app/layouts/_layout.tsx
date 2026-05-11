import { Facebook, Instagram, PinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router";
import { Footer, Header } from "~/components";
import { useAuthContext } from "~/providers";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";

const footerConfig = {
  links: [
    {
      label: "Produkt",
      items: [
        {
          label: "Funkcje",
          href: "#",
        },
        {
          label: "Cennik",
          href: "#",
        },
        {
          label: "Inspiracje",
          href: "#",
        },
        {
          label: "Jak to działa",
          href: "#",
        },
      ],
    },
    {
      label: "Pomoc",
      items: [
        {
          label: "Regulamin",
          href: "/terms",
        },
        {
          label: "Prywatność",
          href: "/privacy",
        },
        {
          label: "Kontakt",
          href: "#",
        },
        {
          label: "Pomoc techniczna",
          href: "#",
        },
      ],
    },
  ],
  socials: [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: PinIcon, label: "Pinterest", href: "#" },
  ],
};

const Layout = () => {
  const { user } = useAuthContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
          isScrolled
            ? "translate-y-6 opacity-100"
            : "-translate-y-full opacity-0",
        )}
      >
        <Header className="container">
          <Button size="lg" asChild>
            <Link to="/register">Dołącz do nas</Link>
          </Button>
        </Header>
      </div>
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer footerConfig={footerConfig}>
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
      </Footer>
    </div>
  );
};

export default Layout;
