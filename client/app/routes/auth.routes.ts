import { route } from "@react-router/dev/routes";

export const authRoutes = [
  route("/dashboard", "./pages/dashboard.tsx"),
  route("/payments", "./pages/payments-pages/payments.tsx"),
  route("/payments/summary", "./pages/payments-pages/payments-summary.tsx"),
  route("/payments/confirm", "./pages/payments-pages/payments-confirm.tsx"),
  route("/user", "./pages/user/user-panel.tsx"),
];
