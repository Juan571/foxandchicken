var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/juego', function(req, res, next) {
  res.render('juego', { title: 'Juego' });
});


module.exports = router;
