import { Outlet } from "react-router";
import { Header } from "~/components";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container">
        <Header />
      </div>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
