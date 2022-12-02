/**
 * 申请合作
 */
module.exports = app => {
  const mongoose = app.mongoose
  var shortid = require('shortid');
  var Schema = mongoose.Schema;
  var ApplySchema = new Schema({
    _id: {
     type: String,
     default: shortid.generate
    },
    name: String,
    addr: String,
    username: String,
    phone: String,
    email: String,
    remarks: String,
    time: String,
    ip: String,
    createTime: Number
  })
  return mongoose.model("Apply", ApplySchema, 'applys');
}


