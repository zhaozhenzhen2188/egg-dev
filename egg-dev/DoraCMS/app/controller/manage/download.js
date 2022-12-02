/**
 * 下载管理
 */
const Controller = require('egg').Controller;

class DownloadController extends Controller {
  async list() {
    const {
      ctx,
      service
    } = this;
    try {
      let payload = ctx.query;
      let downloadList = await ctx.service.download.find(payload, {
        query: ctx.query
      });

      ctx.helper.renderSuccess(ctx, {
        data: downloadList
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
      let targetItem = await ctx.service.download.item(ctx, {
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
        name: fields.name,
        addr: fields.addr,
        img: fields.img,
        createTime: new Date()
      }
      await ctx.service.download.update(ctx, fields._id, formObj);
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
        name: fields.name,
        addr: fields.addr,
        img: fields.img,
        createTime: new Date()
      }
      await ctx.service.download.create(formObj);
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
      await ctx.service.download.removes(ctx, targetIds);
      ctx.helper.renderSuccess(ctx);

    } catch (err) {
      ctx.helper.renderFail(ctx, {
          message: err
      });
    }
  }
}

module.exports = DownloadController;
