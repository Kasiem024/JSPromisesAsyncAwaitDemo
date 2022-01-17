var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'JS Promises Async Await Demo' });
});

router.get('/data', function(req, res, next) {
    res.send(require('../data/data.json'));
});

module.exports = router;