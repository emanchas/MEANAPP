var users =
require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);
  
  app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
    }));

  
  app.get('/forgotpass', function(req, res) {
  res.render('forgotpass', {
    user: req.user
  });
});

app.get('/account', function(req, res) {
  res.render('account', {
    user: req.user
  });
});

app.get('/browse', function(req, res) {
  res.render('browse', {
    user: req.user
  });
});
  
app.get('/delete', function(req, res) {
  res.render('delete', {
    user: req.user
  });
});

app.get('/deleted', function(req, res) {
  res.render('deleted', {
    user: req.user
  });
});  
  
  app.get('/signout', users.signout);
};