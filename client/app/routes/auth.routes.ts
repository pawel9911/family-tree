import { route } from "@react-router/dev/routes";

export const authRoutes = [
  route("/dashboard", "./routes/dashboard.tsx"),
  route("/payments", "./routes/payments.tsx"),
  route("/payments/confirm", "./routes/payments-confirm.tsx"),
];
