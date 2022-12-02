/**
 * 招聘
 */
module.exports = app => {
  const mongoose = app.mongoose
  var shortid = require('shortid');
  var Schema = mongoose.Schema;
  var HomepageSchema = new Schema({
    _id: {
     type: String,
     default: shortid.generate
    },
    bannerArr: Array, // 首页banner
    productArr: Array,
    technologyArr: Array,
    caseArr: Array,
  })
  return mongoose.model("Homepage", HomepageSchema, 'homepages');
}


