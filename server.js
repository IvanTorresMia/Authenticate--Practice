// requiring packages
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStradegy = require("passport-facebook").Strategy;
const keys = require("./config");
const chalk = require("chalk");
const { Strategy } = require("passport");

// this will reset everytime you log in with, it's taking the place of the data base that I will use later.
let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
// Facebook strategy
passport.use(
  new FacebookStradegy(
    {
      clientID: keys.FACEBOOK.ClientId,
      clientSecret: keys.FACEBOOK.clientSecret,
      callBackUrl: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
    //   This user object will be what I will later replace with a back end that is sequelize. 
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

const app = express();
app.use(cors());
app.use(passport.initialize());

// This get's called when the button to log in with facebook is clicked. 
app.get("/auth/facebook", passport.authenticate("facebook"));
// Then it calls the callback URL that we told facebook to use, which will essentially re direct it to the profile page. 
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", (req, res) => {
    res.redirect("/profile");
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT);