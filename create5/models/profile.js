var mongoose = require('mongoose');
var ProfileSchema = new mongoose.Schema({
  title:String,
  upvotes:{type: Number, default:0}
});

ProfileSchema.methods.upvote = function(cb) {
  this.upvotes+= 1;
  this.save(cb);
};

mongoose.model('Profile', ProfileSchema);


