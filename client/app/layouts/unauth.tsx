import { LayoutDashboard, X } from "lucide-react";
import {
  Link,
  Navigate,
  Outlet,
  useMatches,
  useNavigate,
  type UIMatch,
} from "react-router";
import { useAuthContext } from "~/providers";
import type { UnauthRouteHandle } from "~/shared/types";
import { Button } from "~/shared/ui";

type UnauthRouteMatch = UIMatch<unknown, UnauthRouteHandle>;

const Unauth = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const matches = useMatches() as UnauthRouteMatch[];

  const currentHandle = matches.find((m) => m.handle)?.handle;

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <Link to="/" className="flex items-center gap-2 relative z-10 w-fit">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <LayoutDashboard className="text-primary" size={28} />
          </div>
          <span className="font-black italic uppercase tracking-tighter text-white text-3xl">
            Wedding moments
          </span>
        </Link>

        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
            {currentHandle?.title}
          </h1>
          <p className="text-primary-foreground/80 font-medium text-lg max-w-md italic">
            {currentHandle?.description}
          </p>
        </div>

        <div className="relative z-10 flex gap-8 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span>© 2026 Wedding moments</span>
          <Link to="/privacy">Polityka prywatności</Link>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute top-8 right-8">
          <Button
            size="icon-lg"
            onClick={() => navigate("/")}
            className="group"
          >
            <X
              size={24}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
          </Button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Unauth;
