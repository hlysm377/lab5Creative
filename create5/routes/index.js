var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('Profile');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/profiles', function(req,res,next) {
  var profile = new Profile(req.body);
  profile.save(function(err,profile){
    if(err) { return next(err);}
    res.json(profile);
  });
});

router.get('/profiles',function(req,res,next) {
  Profile.find(function(err,profiles){
    if(err) { return next(err);}
    res.json(profiles);
  });
});

router.param('profile', function(req, res, next, id) {
  var query = Profile.findById(id);
  query.exec(function (err, profile){
    if (err) { return next(err); }
    if (!profile) { return next(new Error("can't find profile")); }
    req.profile = profile;
    return next();
  });
});

//find the param that has that as the id vv
router.get('/profiles/:profile',function(req,res) {
  res.json(req.profile);
});

router.put('/profiles/:profile/upvote', function(req,res,next){
  req.profile.upvote(function(err,profile) {
    if(err){return next(err);}
    res.json(profile);
  });
});

router.delete('/profiles/:profile', function(req, res) {
  console.log("in Delete");
  req.profile.remove();
  res.sendStatus(200);
});

module.exports = router;
