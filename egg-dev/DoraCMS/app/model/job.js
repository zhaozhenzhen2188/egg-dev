/**
 * 招聘
 */
module.exports = app => {
  const mongoose = app.mongoose
  var shortid = require('shortid');
  var path = require('path');
  var Schema = mongoose.Schema;
  var moment = require('moment')
  var JobSchema = new Schema({
    _id: {
     type: String,
     default: shortid.generate
    },
    type: { type: String, default: "1" }, // 案例类别
    position: String,
    station: String,
    methods: String,
    require: String,
    priority: String,
    duty: String,
    jobTime: String,
    salary:  { type: String, default: "面议" },
    content: String,
    education: String,
    major: String,
    skill: String,
    ability: String,
    experience: String,
    mount: String,
    gender: { type: String, default: '2'},
    place: String,
    email: String,
    remark: String,
    date: { type: Date, default: Date.now },
    sortId: {
      type: Number,
      default: 0
    }
  })
  return mongoose.model("Job", JobSchema, 'jobs');
}


