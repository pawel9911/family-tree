const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");

require("./services/passport");

mongoose.connect(require("./config/keys").mongoURI);

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/client"));

  const path = require("node:path");
  app.get("/*path", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "client", "index.html"),
    );
  });
}

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [require("./config/keys").cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/paymentsRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
