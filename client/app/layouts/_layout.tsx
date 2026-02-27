import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
