var express = require('express');
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

var app = express();

var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.serializeUser(function(user, done) { // TODO: Read about this
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "https://receptive-sprout.glitch.me/auth/github/callback"
  }, 
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      return done(null, profile); // TODO: this would change to a userID stored in mongoDB
    });
  }                               
));

// configure Express | TODO: Learn some of these and read more into what I actually need
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials()); // TODO: Whats this do?!
app.use(bodyParser.urlencoded({ extended: true })); // TODO: Read this documentation
app.use(bodyParser.json()); // TODO: Read this documentation
app.use(methodOverride()); // TODO: Understand this documentation
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); // TODO: Read documentation, learn about session data
app.use(passport.initialize()); // TODO: Read Documentation
app.use(passport.session()); // TODO: Read Documentation
app.use(express.static(__dirname + '/public')); // TODO: Understand this

app.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

app.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {user: req.user});
});

app.get('/login', function(req, res) {
  res.render('login', { user: req.user });
});

app.get('/auth/github',
        passport.authenticate('github', {scope: ['user:email'] }),
        function(req, res) {} // No function needed as this redirects to github and then comes back in auth/github/callback
);

app.get('/auth/github/callback', // Return from github, if failure then redirect back to login
        passport.authenticate('github', {failureRedirect: '/login' }),
        function(req, res) {
          res.redirect('/');
        }
);

app.get('/logout', function(req, res) { // Simple logout
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};

// keep this
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
