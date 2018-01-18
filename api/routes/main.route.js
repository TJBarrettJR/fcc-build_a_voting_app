module.exports = function(app) {
  require('./user.route.js')(app);
  
  app.get('*', function(req, res) { // TODO: Probably need to adjust this once I learn more about routing
    console.log("Got here");
    res.redirect('/');
  });
}