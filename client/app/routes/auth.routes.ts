import { route } from "@react-router/dev/routes";

export const authRoutes = [
  route("/dashboard", "./pages/dashboard.tsx"),
  route("/payments", "./pages/payments-pages/payments.tsx"),
  route("/payments/confirm", "./pages/payments-pages/payments-confirm.tsx"),
];
