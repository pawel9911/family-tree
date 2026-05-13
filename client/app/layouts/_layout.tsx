import { Link, Navigate, Outlet } from "react-router";
import { Footer, Header } from "~/components";
import { useAuthContext } from "~/providers";
import { footerNavConfig } from "~/shared/config";
import { Button } from "~/shared/ui";

const Layout = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="container">
        <Button size="lg" asChild>
          <Link to="/register">Dołącz do nas</Link>
        </Button>
      </Header>
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer config={footerNavConfig}>
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
