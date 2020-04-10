var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool Uh', name: 'Jade', condition: true, anyArray: [4,5,6]});
});

module.exports = router;
