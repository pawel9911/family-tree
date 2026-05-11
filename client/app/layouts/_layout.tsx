import { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router";
import { Header } from "~/components";
import { useAuthContext } from "~/providers";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";

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
    </div>
  );
};

export default Layout;
