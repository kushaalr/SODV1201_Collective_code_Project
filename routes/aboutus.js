var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.render('aboutus.pug', { title: 'About Us' });
});

module.exports = router;
