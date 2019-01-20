var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * google login
 */
router.get('/login/google', passport.authenticate("google", {
    scope: ["profile", "email"]
}));

router.get('/login/callback/google', passport.authenticate("google", { failureRedirect: '/' }), (req, res, next) => {
    res.render('login', { title: 'Google Login Success'})
});

/**
 * facebook login
 */
router.get('/login/facebook', passport.authenticate("facebook"));

router.get('/login/callback/facebook', passport.authenticate("facebook", { failureRedirect: '/' }), (req, res, next) => {
    res.render('login', { title: 'Facebook Login Success'})
});

module.exports = router;
