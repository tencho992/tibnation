module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(req)
    if (req.isAuthenticated()) {
      return next();
    }
    // jwt.verify(req.cookies.jwtToken, "secretKey", (error, decoded))

    else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
