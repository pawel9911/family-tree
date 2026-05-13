import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { authRoutes } from "./routes/auth.routes";

export default [
  layout("./layouts/_layout.tsx", [
    index("./pages/home.tsx"),
    route("/privacy", "./pages/privacy.tsx"),
    route("/terms", "./pages/terms.tsx"),
  ]),

  layout("./layouts/unauth.tsx", [
    route("/login", "./pages/login.tsx"),
    route("/register", "./pages/register.tsx"),
  ]),

  layout("./layouts/auth.tsx", authRoutes),

  route("*", "./pages/not-found.tsx"),
] satisfies RouteConfig;
