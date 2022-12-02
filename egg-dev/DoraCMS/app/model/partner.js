/**
 * 招聘
 */
module.exports = app => {
  const mongoose = app.mongoose
  var shortid = require('shortid');
  var Schema = mongoose.Schema;
  var PartnerSchema = new Schema({
    _id: {
     type: String,
     default: shortid.generate
    },
    desc: String, // 案例类别
    invite: String,
    cooperateArr: Array,
    bannerImg: String,
    recSchool: Boolean,
    recSociety: Boolean
  })
  return mongoose.model("Partner", PartnerSchema, 'partners');
}


