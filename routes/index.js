var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
  username: String,
  year: Number,
  height: Number,
});
var Users = mongoose.model("Users", UserSchema);

/* GET home page. */
router.post("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body);
  Users.find({}, (err, doc) => {
    if (err) {
      console.log("err", err);
    }
    console.log("doc", doc);
  });
  res.send("hello");
});

module.exports = router;
