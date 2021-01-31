// requiring packages
const express = require("express"); //requiring express
const cors = require("cors"); // requiring cors for auth
const passport = require("passport"); // requiring passport for auth.
const FacebookStradegy = require("passport-facebook").Strategy; // getting the facebook strategy
const keys = require("./config"); // here are the client keys and secrets
const chalk = require("chalk"); // just cause color.
const { Strategy } = require("passport"); // might have missed something here 


// this will reset everytime you log in with, it's taking the place of the data base that I will use later.
let user = {}; //Not sure why this is not being called or being read, so it might not work and I will figure out how to fix it. 

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

// this is our app component which is our library that is being used 
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

// here we are listening to our port 3000
// either we take our process enviroment or port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT);

