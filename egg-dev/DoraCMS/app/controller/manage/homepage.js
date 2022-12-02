/**
 * 招聘
 */
const Controller = require('egg').Controller;

class homepageController extends Controller {
  async getInfo() {
    const {
      ctx,
      service
    } = this;
    try {
      let payload = ctx.query;
      let homepageList = await ctx.service.homepage.find(payload, {
        query: ctx.query
      });

      ctx.helper.renderSuccess(ctx, {
        data: homepageList
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
        bannerArr: fields.bannerArr,
        productArr: fields.productArr,
        technologyArr: fields.technologyArr,
        caseArr: fields.caseArr,
      }
      await ctx.service.homepage.update(ctx, fields._id, formObj);
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
        position: fields.position,
        bannerArr: fields.bannerArr,
        productArr: fields.productArr,
        technologyArr: fields.technologyArr,
        caseArr: fields.caseArr,
      }
      await ctx.service.homepage.create(formObj);
      ctx.helper.renderSuccess(ctx);
    } catch(err) {
      ctx.helper.renderFail(ctx, {
        message: err
      });
    }
  }
}

module.exports = homepageController;
