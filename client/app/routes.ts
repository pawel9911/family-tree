import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { authRoutes } from "./routes/auth.routes";

export default [
  layout("./layouts/_layout.tsx", [
    index("./routes/home.tsx"),
    route("*", "./routes/not-found.tsx"),
  ]),

  layout("./layouts/auth.tsx", authRoutes),
] satisfies RouteConfig;
