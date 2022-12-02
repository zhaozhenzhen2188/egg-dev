/**
 * 申请合作
 */
const Controller = require('egg').Controller;

class ApplyController extends Controller {
  async applyPartner () {
    const {
      ctx,
      service
    } = this;
    try {
      let fields = ctx.request.body || {};
      const formObj = {
        name: fields.name,
        addr: fields.addr,
        username: fields.username,
        phone: fields.phone,
        email: fields.email,
        remarks: fields.remarks,
        time: fields.time,
        ip: fields.ip,
        createTime: fields.createTime
      }
      await ctx.service.apply.create(formObj);
      ctx.helper.renderSuccess(ctx);
    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async getList() {
    const {
      ctx,
      service
    } = this;
    try {
      let payload = ctx.query;
      let applyInfo = await ctx.service.apply.find(payload);

      ctx.helper.renderSuccess(ctx, {
        data: applyInfo
      })
    } catch (err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async deleteOne(ctx) {
    try {
      let targetIds = ctx.query.ids;
      await ctx.service.apply.removes(ctx, targetIds);
      ctx.helper.renderSuccess(ctx);

    } catch (err) {
      ctx.helper.renderFail(ctx, {
          message: err
      });
    }
  }

}

module.exports = ApplyController;
