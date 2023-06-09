const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const jwt = require('jsonwebtoken')

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });


  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account",
  });
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    points: 0
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/profile");
        });
      });
    }
  );
};
exports.deleteUser = async (req, res) => {
  try {
    //delete user
    //target by id
    await User.remove({ _id: req.params.id });
    console.log("Deleted Post");
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
};
exports.updateUser = async (req, res) => {
  try {
    //create var that hold new data
    let newUserName = req.body.newUserName
    // console.log(newUserName)
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { userName: newUserName }, 
      }
    );
    res.redirect('/settings')
  } catch (err) {
    res.redirect("/settings");
  }
};
exports.updateEmail = async (req, res) => {
  try {
    let newEmail = req.body.newEmail
    //console.log(newEmail)
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { email: newEmail },
      }
    );
    res.redirect('/settings')
  } catch (err) {
    res.redirect("/settings");
  }
};
exports.googleCallback = (req, res) => {
    jwt.sign( 
      { user: req.user },
      "secretKey", //callback token
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return res.json({
            token: null,
          });
        } 
        res.cookie('jwtToken', token, {
          httpOnly: true, // Prevent JavaScript access to the cookie
          maxAge: 3600000, // Cookie expiration time (in milliseconds)
          // add other cookie options if needed
        });
        res.redirect("/profile");
      });
  }


