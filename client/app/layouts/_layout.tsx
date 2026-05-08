import { Link, Navigate, Outlet } from "react-router";
import { Header } from "~/components";
import { useAuthContext } from "~/providers";
import { Button } from "~/shared/ui";

const Layout = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed mt-6 top-6 z-50 w-full">
        <Header className="container">
          <Button size="lg" asChild>
            <Link to="/login">Dołącz do nas</Link>
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
