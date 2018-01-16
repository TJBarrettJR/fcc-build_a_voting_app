module.exports = function(app) {
  require('./user.route.js')(app);
  
  app.get('/', function(req, res) {
    res.sendFile('/app/public/index.html');
  });
}