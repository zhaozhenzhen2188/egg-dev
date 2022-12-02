/**
 * 招聘
 */
module.exports = app => {
  const mongoose = app.mongoose
  var shortid = require('shortid');
  var path = require('path');
  var Schema = mongoose.Schema;
  var moment = require('moment')
  var DownloadSchema = new Schema({
    _id: {
     type: String,
     default: shortid.generate
    },
    createTime: Date,
    name: String,
    addr: String,
    img: String,
  })

  DownloadSchema.set('toJSON', {
    getters: true,
    virtuals: true
  });
  DownloadSchema.set('toObject', {
      getters: true,
      virtuals: true
  });

  DownloadSchema.path('createTime').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss");
  });

  return mongoose.model("Download", DownloadSchema, 'downloads');
}


