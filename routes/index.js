var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
  // Check validity of values
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', "Invalid password").isLength({min: 4}).equals(req.body.confirmPassword); // specify what paremeters and fields do we want to check

  var errors = req.validationErrors();
  console.log("OPS")
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');

});

module.exports = router;
