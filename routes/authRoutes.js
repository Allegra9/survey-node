const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ all: "all good, we just getting started here!" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //with the code now:
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => res.redirect("/surveys") //then redirect
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
