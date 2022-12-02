<!-- 线上环境（阿里云） -->

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
| path.target | http://argus-net.wavewisdom-bj.com | 代理的目标地址 |
| path.changeOrigin | true | 代理后是否改变原来的域名 |

```json
{
  "/net-web": {
    "target": "http://argus-net.wavewisdom-bj.com",
    "changeOrigin": true
  },
  "/preonline": {
    "target": "http://test-argus-net.wavewisdom-bj.com",
    "pathRewrite": {"^/preonline" : "/"}, 
    "changeOrigin": true
  },
  "/storage": {
    "target": "https://egg-oss.oss-cn-beijing.aliyuncs.com", 
    "pathRewrite": {"^/storage" : "/"}, 
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
| db | wavewisdom | 数据库  |

```json
{
  "host": "dds-m5e9bd9dc44a8d241517-pub.mongodb.rds.aliyuncs.com",
  "port": 3717,
  "user": "root",
  "pwd": "Wave2MongoDB",
  "db": "wavewisdom"
}
```
*** 
>oss

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| accessKeyId | LTAIzDElaEFpMOfr | 阿里云应用accessKey |
| accessKeySecret | Ux4z6rHLEOod8tUpfoou9b8yFLGB4C | 阿里云应用accessSecret |
| host | https://egg-oss.oss-cn-beijing.aliyuncs.com | oss的地址 |
| dir | egg/ | 文件夹路径 |
| region | oss-cn-beijing | oss所在区域 |
| bucket | egg-oss | oss的bucket,类似磁盘分区 |


```json
{
    "accessKeyId": "LTAIzDElaEFpMOfr",
    "accessKeySecret": "Ux4z6rHLEOod8tUpfoou9b8yFLGB4C",
    "host": "https://egg-oss.oss-cn-beijing.aliyuncs.com",
    "dir": "egg/",
    "region": "oss-cn-beijing",
    "bucket": "egg-oss"
}
```
***

>wechat

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| appid | wxf730cbfdf582f904 | 微信公众号appid |
| secret | c23294abcd2572d9b997a01757c6f6f7 | 微信公众号secret |
| mchid | 1536974971 | 商户号 |
| partnerKey | 0de6ca12936b84417bd92878257060fd | 微信支付安全密钥 |

```json
{
  "account": {
    "appid": "wxf730cbfdf582f904",
    "secret": "c23294abcd2572d9b997a01757c6f6f7",
    "mchid": "1536974971",
    "partnerKey": "0de6ca12936b84417bd92878257060fd"
  }
}
```
***

>facepp

| 属性 | 数据 | 释义 |
| ------ | ------ |------ |
| api_key | QUKMWhKgFgOeyJT6J-zjeLEdmdvtUOcc | 旷世api_key |
| api_secret | CfsRx8gnvyU5Pv3hKnAclwZgapujzt6x | 旷世api_secret |

```json
{
  "api_key": "QUKMWhKgFgOeyJT6J-zjeLEdmdvtUOcc",
  "api_secret": "CfsRx8gnvyU5Pv3hKnAclwZgapujzt6x"
}
```
***
