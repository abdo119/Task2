var express = require('express');

var  db = require("../models");
const User = db.user;
var router = express.Router();
/* GET home page. */
router.post('/', async function(req, res, next) {
  let email = req.body.email;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  const user = User.build({firstName:firstName,lastName:lastName,email:email});
  await user.save();
  res.render('success');
});
router.get('/', function (req, res, next) {
  res.render('form');
});
router.get('/users/table', function (req, res, next) {
  User.findAll().then(function (user){
    res.render('table',{"users":user});
  })
});


module.exports = router;
