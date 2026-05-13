import { Coins, LogOut, User } from "lucide-react";
import { Link, Navigate, Outlet } from "react-router";
import { Header, Navigation } from "~/components";
import { useAuthContext } from "~/providers";
import { mainNavConfig } from "~/shared/config";
import { Button } from "~/shared/ui";

const Auth = () => {
  const { user, logout } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="container" variant="sticky" forceVisible>
        <Navigation config={mainNavConfig} />
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
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
