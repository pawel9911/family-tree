import { Navigate, Outlet } from "react-router";
import { Header } from "~/components";
import { useAuthContext } from "~/providers";
import { Button } from "~/shared/ui";
import { Coins, LogOut } from "lucide-react";

const Auth = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container">
        <Header>
          <Button size="lg" variant="secondary" asChild>
            <p>
              <Coins /> {user.credits}
            </p>
          </Button>
          <Button size="icon-lg" asChild>
            <a href="/api/logout">
              <LogOut />
            </a>
          </Button>
        </Header>
      </div>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
