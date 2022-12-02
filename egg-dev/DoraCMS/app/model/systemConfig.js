/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */

module.exports = app => {

    const mongoose = app.mongoose;
    var shortid = require('shortid');
    var Schema = mongoose.Schema;
    var CryptoJS = require("crypto-js");

    var SystemConfigSchema = new Schema({
        _id: {
            type: String,

            'default': shortid.generate
        },
        date: {
            type: Date,
            default: Date.now
        },
        siteName: {
            type: String,
            default: '前端开发俱乐部'
        },
        ogTitle: {
            type: String,
            default: ''
        },
        siteLogo: {
            type: String,
            default: '/static/themes/dorawhite/images/logo.png'
        }, // 站点logo
        shortcut: {
            type: String,
            default: '/static/themes/favicon.ico'
        },
        siteDomain: {
            type: String,
            default: 'https://www.html-js.cn'
        },
        siteDiscription: {
            type: String,
            default: '前端开发'
        },
        siteKeywords: String,
        siteAltKeywords: String, // 标签内的alt关键字
        siteEmailServer: String,
        siteEmail: String,
        siteEmailPwd: {
            type: String,
            set(data) {
                return CryptoJS.AES.encrypt(data, app.config.encrypt_key).toString();
            }
        },
        registrationNo: {
            type: String,
            default: ''
        },
        mongodbInstallPath: String,
        databackForderPath: String,
        showImgCode: {
            type: Boolean,
            default: false
        }, // 是否显示验证码
        bakDatabyTime: {
            type: Boolean,
            default: false
        }, // 是否自动备份数据
        bakDataRate: {
            type: String,
            default: '1'
        }, // 数据备份频率
        statisticalCode: {
            type: String,
            default: ''
        }, // 百度统计链接
        siteEmailContact: {
            type: String,
            default: ''
        }, // 商务合作邮箱
        sitePhoneContact: {
            type: String,
            default: ''
        },  // 商务合作电话
        siteHotLine: {
            type: String,
            default: ''
        },  // 服务热线
        siteCompanyAddr: {
            type: String,
            default: ''
        }, // 公司地址
        siteQrcode1: {
            type: String,
            default: ''
        }, // 二维码1
        siteQrcode2: {
            type: String,
            default: ''
        }, // 二维码2
        siteQrcodeText1: {
            type: String,
            default: ''
        }, // 二维码文字1
        siteQrcodeText2: {
            type: String,
            default: ''
        }, // 二维码文字2
        siteCopyrightInfo: {
            type: String,
            default: ''
        }, // 版权信息
    });

    return mongoose.model("SystemConfig", SystemConfigSchema, 'systemconfigs');

}