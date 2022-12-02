# Wave-egg

Wave-egg是官网CMS平台，采用doracms+vue技术实现。该项目具有以下功能特性：
- 官网页面的展示
- 官网后台管理平台



## 项目结构介绍

```
wave-egg
├── Doracms
├── frontend
├── deploy
├── doc
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

|      目录名      | 作用                       | 描述                                                        |
| :--------------: | :------------------------- | :----------------------------------------------------------|
|       Doracms    | 包含Doracms相关文件         | 该目录用于存放Doracms面相关文件                                 |
|      frontend      | 包含前端页面相关文件      | 该目录用于存放web页面相关文件                                  |                             |
|      deploy      | 包含部署相关Docker文件      | 该目录用于放置Dockfile以及各版本的docker-compose.yml文件       |
|       doc        | 包含模块的配置信息          | 该目录用于放置各版本的ACM/NACOS相关的业务配置信息               |                                 |
|    Dockerfile    | 构建Docker镜像的文件       | 该文件用于编译构建Docker镜像                                   |
|   package.json   | 项目模块信息               | 该文件定义了这个项目所需要的各种模块,以及项目的配置信息           |
| package-lock.json| 项目模块版本号以及来源信息  | 该文件用于记录当前状态下实际安装的各个npm package的具体来源和版本号|
|    README.md     | 模块介绍                  | 该文件用于讲述本模块的基本信息、项目层级、构建操作                |


## 构建

本项目构建过程
1. 使用deploy目录下的 Docker-Compose 文件启动服务