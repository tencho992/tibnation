const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );
  passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:2121/auth/google/callback",
    passReqToCallback: true
  },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let existingUser = await User.findOne({ 'google.id': profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        console.log('Creating new user...');
        const user = new User({
          userName: profile.displayName,
          email: profile.emails[0].value,
          points: 0,
          google: {
            id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          },
          method: 'google'
        });
        await user.save();
        return done(null, user);
      } catch (error) {
        return done(error, false)
      }
    }
  ));
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: "secretKey",
      },
      async (jwtPayload, done) => {
        try {
          const user = jwtPayload.user;
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
