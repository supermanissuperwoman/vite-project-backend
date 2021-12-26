var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
let data = []
var GoodsSchema = mongoose.Schema({
  name: String,
  color: String,
});
var Fruit = mongoose.model("fruit", GoodsSchema);
mongoose.connect("mongodb://127.0.0.1:27017/goods");
Fruit.find({}, (err, doc) => {
  if (err) {
    console.log("err", err);
  }
  console.log("doc", doc);
  data = doc
});

/* GET home page. */
router.post("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body);
  res.send(data)
  
  
});

module.exports = router;
