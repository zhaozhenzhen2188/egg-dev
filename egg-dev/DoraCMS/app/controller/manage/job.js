/**
 * 招聘
 */
const Controller = require('egg').Controller;
const {
  jobRule
} = require('@validate')

const xss = require("xss");
const _ = require('lodash');
const {
    siteFunc
} = require('@utils');
const nodemailer = require('nodemailer');

class JobController extends Controller {
  async list() {
    const {
      ctx,
      service
    } = this;
    try {
      let payload = ctx.query;
      let queryObj={};
      if(ctx.query.type){
        queryObj.type=ctx.query.type;
      }
      let jobList = await ctx.service.job.find(payload, {
        // 2022.11.9 bug 解决，将query改成空对象，后台招聘信息第二页
        // query: ctx.query
        // query: {} && {type:ctx.query.type}
        // query: {type:ctx.query.type}
        query: queryObj

      });

      ctx.helper.renderSuccess(ctx, {
        data: jobList
      })
    } catch (err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async getOne() {
    const {
      ctx,
      service
    } = this;
    try {
      let _id = ctx.query.id;
      let targetItem = await ctx.service.job.item(ctx, {
          query: {
              _id: _id
          }
      });

      ctx.helper.renderSuccess(ctx, {
          data: targetItem
      });

    } catch (err) {
        ctx.helper.renderFail(ctx, {
            message: err
        });
    }
  }

  async updateOne(ctx) {
    try {
      let fields = ctx.request.body || {};
      const formObj = {
        type: fields.type,
        position: fields.position,
        station: fields.station,
        methods: fields.methods,
        require: fields.require,
        priority: fields.priority,
        duty: fields.duty,
        jobTime: fields.jobTime,
        salary:  fields.salary,
        content: fields.content,
        education: fields.education,
        major: fields.major,
        skill: fields.skill,
        ability: fields.ability,
        experience: fields.experience,
        mount: fields.mount,
        gender: fields.gender,
        place: fields.place,
        email: fields.email,
        remark: fields.remark,
        date: fields.date,
        sortId: fields.sortId
      }
      await ctx.service.job.update(ctx, fields._id, formObj);
      ctx.helper.renderSuccess(ctx);

    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async addOne(ctx) {
    try {
      let fields = ctx.request.body || {};
      const formObj = {
        type: fields.type,
        position: fields.position,
        station: fields.station,
        methods: fields.methods,
        require: fields.require,
        priority: fields.priority,
        duty: fields.duty,
        jobTime: fields.jobTime,
        salary:  fields.salary,
        content: fields.content,
        education: fields.education,
        major: fields.major,
        skill: fields.skill,
        ability: fields.ability,
        experience: fields.experience,
        mount: fields.mount,
        gender: fields.gender,
        place: fields.place,
        email: fields.email,
        remark: fields.remark,
        date: fields.date,
        sortId: fields.sortId
      }
      await ctx.service.job.create(formObj);
      ctx.helper.renderSuccess(ctx);
    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async deleteOne(ctx) {
    try {
      let targetIds = ctx.query.ids;
      await ctx.service.job.removes(ctx, targetIds);
      ctx.helper.renderSuccess(ctx);

    } catch (err) {
      ctx.helper.renderFail(ctx, {
          message: err
      });
    }
  }

  async sendMail () {
    const {
      ctx,
      service
  } = this;
   try {
     let sysConfigs;
     const systemConfigs = await ctx.service.systemConfig.find({
      isPaging: '0'
     });

     if (_.isEmpty(systemConfigs)) {
       throw new Error(ctx.__('validate_error_params'));
     } else {
       sysConfigs = systemConfigs[0];
     }


     if (!sysConfigs.siteEmailServer) {
       throw new Error("请先在系统配置中配置邮箱信息！");
     }
     // 发送邮件
     let defaultConfig = {
      service: sysConfigs.siteEmailServer,
      auth: {
          user: sysConfigs.siteEmail,
          pass: ctx.helper.decrypt(sysConfigs.siteEmailPwd, this.app.config.encrypt_key)
      }
     }
    if (sysConfigs.siteEmailServer.indexOf("smtp.") == 0) {
        defaultConfig = {
            host: sysConfigs.siteEmailServer,
            port: 465,
            auth: {
                user: sysConfigs.siteEmail,
                pass: ctx.helper.decrypt(sysConfigs.siteEmailPwd, this.app.config.encrypt_key)
            }
        }
    }


     let fields = ctx.request.body || {};
     let file = ctx.request.files[0]

    // let stream = await ctx.getFileStream();  
    // let fields = stream.fields || {}
     
     let transporter = nodemailer.createTransport(defaultConfig)

     let mailOptions = {
       from: sysConfigs.siteEmail, // sender address
       to: fields.applyEmail, // list of receivers
       subject: '招聘简历', // Subject line
       html: '姓名：' + fields.applyName + '<br/>手机号：' + fields.applyPhone + '<br/>应聘职位：' + fields.applyPosition,// html body
       attachments: [
         {
           filename: file.filename,
          // content: file.filepath,
           path: file.filepath
         }
       ]
     };
      console.log("邮箱",mailOptions)
     let doSend = () => {
      return new Promise((reslove, reject) => {
          transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                  console.log('邮件发送失败：' + error);
                  reject('邮件发送失败');
              } else {
                  console.log('Message sent: ' + info.response);
                  reslove('邮件发送成功');
              }
          });
       })
    }

    let sendResult = await doSend();

    ctx.helper.renderSuccess(ctx, {
      data: sendResult
    });

   } catch(err) {
     ctx.helper.renderFail(ctx, {
        message: err
      });
   }
  }

}

module.exports = JobController;
