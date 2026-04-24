import { Link, Navigate, Outlet } from "react-router";
import { Header } from "~/components";
import { useAuthContext } from "~/providers";
import { Button } from "~/shared/ui";
import { Coins, LogOut, User } from "lucide-react";

const Auth = () => {
  const { user, logout } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full backdrop-blur-md">
        <div className="container mx-auto">
          <Header>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full group transition-colors hover:bg-primary/10">
                <Coins size={18} className="text-primary animate-pulse" />
                <span className="font-bold text-sm text-primary">
                  {user.credits || 0}{" "}
                  <span className="text-[10px] uppercase tracking-wider opacity-70">
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
      </div>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
