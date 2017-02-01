var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vendors', {
    pageID: 'Vendors',
    title: 'Murray Downtown Farmers Market'
  });
});

module.exports = router;
