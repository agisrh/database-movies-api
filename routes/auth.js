let express = require('express');
let randomstring = require("randomstring");
let User = require('./../models/user')
let router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {layout:false, title: 'register to get token key'})
});

router.post('/', function(req, res ,next) {  
  let token = randomstring.generate({
    length: 64,
    charset: 'alphanumeric'
  });
  newUser = new User({
    email: req.body.email,
    username: req.body.name,
    token: token
  })
  newUser.save(function(err) {
    if (err) {
      res.json({
        status: 'failed',
        message: 'email or username already in use.'
      })
    } else {
      res.json({
        status: 'success',
        key_token: token,
        message: 'success to sign up, go make your first request using your key token!'
      })
    }
  })
})

module.exports = router;
