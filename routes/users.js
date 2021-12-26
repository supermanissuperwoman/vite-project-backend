var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send([1,2,3])
  // res.render('index', {
  //   helloword:'hello world'
  // });
});

module.exports = router;
