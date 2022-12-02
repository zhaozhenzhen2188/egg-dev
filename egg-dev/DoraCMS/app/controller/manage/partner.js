/**
 * 合作伙伴
 */
const Controller = require('egg').Controller;

class PartnerController extends Controller {
  async addInfo () {
    const {
      ctx,
      service
    } = this;
    try {
      let fields = ctx.request.body || {};
      const formObj = {
        desc: fields.desc,
        invite: fields.invite,
        cooperateArr: fields.cooperateArr,
        bannerImg: fields.bannerImg,
        recSchool: fields.recSchool,
        recSociety: fields.recSociety
      }
      await ctx.service.partner.create(formObj);
      ctx.helper.renderSuccess(ctx);
    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }
  async getInfo() {
    const {
      ctx,
      service
    } = this;
    try {
      let payload = ctx.query;
      let partnerInfo = await ctx.service.partner.find(payload);

      ctx.helper.renderSuccess(ctx, {
        data: partnerInfo
      })
    } catch (err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

  async updateInfo(ctx) {
    try {
      let fields = ctx.request.body || {};
      const formObj = {
        desc: fields.desc,
        invite: fields.invite,
        cooperateArr: fields.cooperateArr,
        bannerImg: fields.bannerImg,
        recSchool: fields.recSchool,
        recSociety: fields.recSociety
      }
      await ctx.service.partner.update(ctx, fields._id, formObj);
      ctx.helper.renderSuccess(ctx);

    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }

}

module.exports = PartnerController;
