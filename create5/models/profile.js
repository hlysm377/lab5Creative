var mongoose = require('mongoose');
var ProfileSchema = new mongoose.Schema({
  name:String,
  pic:{type:String,default:"https://n6-img-fp.akamaized.net/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg"},
  status:{type:String,default:"Hello"}
});

/*ProfileSchema.methods.upvote = function(cb) {
  this.upvotes+= 1;
  this.save(cb);
};*/

mongoose.model('Profile', ProfileSchema);


