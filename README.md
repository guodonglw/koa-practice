# koa与node开发实战
该项目是根据《koa与node开发实战》搭建的基于koa2的后端系统，采用了RESTful路由形式，在代码中给出了基本示例，用sequelize连接mysql进行增删改查示例以及用mongoose连接mongodb进行增删改查基本操作的示例，可以方便大家快速对接自己的项目（实际使用可以只保留和自己使用相关的数据库代码）。
该项目具有较好的项目结构，已经做了较好的解耦，所以后期维护成本较低，比较容易迭代开发。

# 项目结构
.
├── app.js                       // 入口文件<br/>
├── config                       // 配置文件(mysql和mongo等配置)<br/>
│   └── config.js<br/>
├── controller                   // router后controller<br/>
│   ├── course.js<br/>
│   ├── customer.js<br/>
│   └── home.js<br/>
├── errorPage<br/>
│   ├── 400.html<br/>
│   ├── 404.html<br/>
│   ├── 500.html<br/>
│   └── other.html<br/>
├── LICENSE<br/>
├── logs<br/>
│   └── task.-2019-09-27.log<br/>
├── middleware                   // 中间件示例(将中间件在此处统一管理)<br/>
│   ├── corsRelated<br/>
│   │   └── index.js<br/>
│   ├── errorCatch<br/>
│   │   └── index.js<br/>
│   ├── index.js                 // 中间件入口文件<br/>
│   ├── miHttpError<br/>
│   │   ├── error.html<br/>
│   │   └── index.js<br/>
│   ├── miLog<br/>
│   │   ├── access.js<br/>
│   │   ├── baseInfo.json<br/>
│   │   ├── index.js<br/>
│   │   └── logger.js<br/>
│   ├── miRule<br/>
│   │   └── index.js<br/>
│   ├── miSend<br/>
│   │   └── index.js<br/>
│   ├── mongoRelated<br/>
│   │   └── index.js<br/>
│   └── redisRelated<br/>
│       └── index.js<br/>
├── model                        // 模型(经过orm封装的数据库模型)<br/>
│   ├── mongo<br/>
│   │   ├── course.js<br/>
│   │   └── index.js<br/>
│   └── mysql<br/>
│       ├── custom.js<br/>
│       └── index.js<br/>
├── package.json                 // 项目所需模块依赖文件<br/>
├── package-lock.json<br/>
├── public                       // 存放公共资源<br/>
├── README.md                    // readme文档<br/>
├── router.js                    // app后router(路由)(路由中将controller挂载到了app对象上，请查看miRule中间件)<br/>
├── service                      // controller后service(进行数据库操作的逻辑)<br/>
│   ├── course.js<br/>
│   ├── customer.js<br/>
│   └── home.js<br/>
└── views                        // 后端需要渲染的视图<br/>
    └── home<br/>
        └── login.html<br/>

# 项目运行
```
安装项目所需依赖
npm install

运行项目
node app.js (如果本地安装了nodemon,可以用npm start启动项目)
```

# 作者测试
作者本地测试由postman，加自己的服务器数据库对接口进行了测试，由于时间有限，所以测试可能不到位，大家实际使用，请根据自己的需求修改

# 感谢
感谢《koa与node开发实战》，该项目内容全部根据该书籍进行代码组织和编写，有看不懂的可以查看该书，如果网上下载不到，可以给作者留言。