var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homework1', { title: 'homework1' });
});

module.exports = router;
