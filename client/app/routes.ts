import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/_layout.tsx", [
    index("./routes/home.tsx"),
    route("*", "./routes/not-found.tsx"),
  ]),

  layout("./layouts/auth.tsx", [route("/dashboard", "./routes/dashboard.tsx")]),
] satisfies RouteConfig;
