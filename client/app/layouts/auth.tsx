import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "~/providers";

const Auth = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-4xl">Auth layout</h1>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
