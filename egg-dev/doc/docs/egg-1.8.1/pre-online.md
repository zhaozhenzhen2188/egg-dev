<!-- 预线上环境（阿里云） -->

### 1、端口
```
port: 8080
```

### 2、ACM配置信息

#### 2.1 配置参数

| 属性 | 数据 | 释义 |
| ------ | ------ |-----|
| Group | food.egg | 项目的名称，采用"根项目.子项目"的命名方式 |
| data ID | mongodb, oss, proxy, wechat, facepp | 配置的类别，采用具体配置属性的命名，例如：mongodb、oss等 |


#### 2.2 配置内容
>proxy

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| path | /net-web | 需要代理请求的路径 |
| path.target | http://test-argus-net.wavewisdom-bj.com | 代理的目标地址 |
| path.changeOrigin | true | 代理后是否改变原来的域名 |

```json
{
  "/net-web": {
    "target": "http://test-argus-net.wavewisdom-bj.com",
    "changeOrigin": true
  },
  "/fdfs": {
    "target": "http://test-fastdfs-tracker-nginx.wavewisdom-bj.com",
    "changeOrigin": true
  },
  "/preonline": {
    "target": "http://test-argus-net.wavewisdom-bj.com",
    "pathRewrite": {"^/preonline" : "/"}, 
    "changeOrigin": true
  },
  "/storage": {
    "target": "https://egg-oss-test.oss-cn-beijing.aliyuncs.com",
    "pathRewrite": { "^/storage": "/" },
    "changeOrigin": true
  }
}
```
*** 
>mongodb

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| host | dds-m5e9bd9dc44a8d241517-pub.mongodb.rds.aliyuncs.com | 接入方式|
| port | 3717 | 端口|
| user | root | 连接账号 |
| pwd | Wave2MongoDB | 连接密码 |
| db | doracms2 | 数据库  |

```json
{
  "host": "dds-m5e9bd9dc44a8d241517-pub.mongodb.rds.aliyuncs.com",
  "port": 3717,
  "user": "root",
  "pwd": "Wave2MongoDB",
  "db": "doracms2"
}
```
*** 
>oss

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| accessKeyId | LTAIhO9MGPPeNLq5 | 阿里云应用accessKey |
| accessKeySecret | I91vxOvaLrC7JhEExjQFYpUiXNuTNM | 阿里云应用accessSecret |
| host | https://egg-oss-test.oss-cn-beijing.aliyuncs.com | oss的地址 |
| dir | egg/ | 文件夹路径 |
| region | oss-cn-beijing | oss所在区域 |
| bucket | egg-oss-test | oss的bucket,类似磁盘分区 |


```json
{
  "accessKeyId": "LTAIhO9MGPPeNLq5",
  "accessKeySecret": "I91vxOvaLrC7JhEExjQFYpUiXNuTNM",
  "host": "https://egg-oss-test.oss-cn-beijing.aliyuncs.com",
  "dir": "egg/",
  "region": "oss-cn-beijing",
  "bucket": "egg-oss-test"
}
```
***

>wechat

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| appid | wx502f102da8d495b1 | 微信公众号appid |
| secret | d486cafdd75f8c9da7d931e0e3d5c0bc | 微信公众号secret |
| mchid | test | 商户号 |
| partnerKey | test | 微信支付安全密钥 |

```json
{
  "account": {
    "appid": "wx502f102da8d495b1",
    "secret": "89c1edc292ba3fe74aa6b4f72fa6f3f1",
    "mchid": "test",
    "partnerKey": "test"
  }
}
```
***

>facepp

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| api_key | aNGgpPMoM_Akv4uJp2g90vXOfYnaDTx9 | 旷世api_key |
| api_secret | WO5ga5spd2BkhSNK8z--SPb_IZTM-WKl | 旷世api_secret |

```json
{
  "api_key": "aNGgpPMoM_Akv4uJp2g90vXOfYnaDTx9",
  "api_secret": "WO5ga5spd2BkhSNK8z--SPb_IZTM-WKl"
}
```
***
