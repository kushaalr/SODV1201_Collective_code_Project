var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.render('services.pug', { title: 'services' });
});

module.exports = router;
