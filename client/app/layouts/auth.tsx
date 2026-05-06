import {
  Coins,
  FolderLock,
  HelpCircle,
  LogOut,
  PlusCircle,
  User,
  Zap,
} from "lucide-react";
import { Link, Navigate, Outlet } from "react-router";
import { Header, Navigation } from "~/components";
import { useAuthContext } from "~/providers";
import type { NavigationConfig } from "~/shared/types";
import { Button } from "~/shared/ui";

const navigationConfig: NavigationConfig = [
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

const Auth = () => {
  const { user, logout } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky mt-6 top-6 z-50 w-full">
        <Header className="container">
          <Navigation config={navigationConfig} />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-xl group transition-colors hover:bg-primary/10">
              <Coins size={18} className="text-primary animate-pulse" />
              <span className="font-bold text-sm text-primary">
                {user.credits || 0}{" "}
                <span className="hidden lg:inline text-[10px] uppercase tracking-wider opacity-70">
                  kredytów
                </span>
              </span>
            </div>

            <div className="h-6 w-px bg-primary/15 mx-2" />

            <Button
              variant="ghost"
              asChild
              size="icon-lg"
              className="hover:bg-primary/10 hover:text-primary text-primary"
            >
              <Link to="/user">
                <User size={22} />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon-lg"
              className="hover:bg-primary/10 hover:text-primary text-primary"
              onClick={() => logout()}
            >
              <LogOut size={22} />
            </Button>
          </div>
        </Header>
      </div>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
