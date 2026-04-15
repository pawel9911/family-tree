const passport = require("passport");

const authRoutes = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard");
    },
  );

  app.post("/api/logout", (req, res) => {
    req.logout();
    res.status(204).send();
  });

  app.get("/api/me", (req, res) => {
    res.send(req.user);
  });
};

module.exports = authRoutes;
