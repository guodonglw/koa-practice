const path = require('path');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const staticFiles = require('koa-static');
const miSend = require('./miSend');
const errorCatch = require('./errorCatch');
const mongoRelated = require('./mongoRelated');
const session = require('koa-session');
const { sessionConfig } = require('../config/config');
const corsRelated = require('./corsRelated');
const miLog = require('./miLog');
const miHttpError = require('./miHttpError');
const miRule = require('./miRule');

module.exports = (app) => {
  app.use(miHttpError({
    errorPageFolder: path.resolve(__dirname, "../errorPage")
  }));  // 后面中间件中有错误且没有自行拦截处理，则被该中间件捕获处理

  app.use(corsRelated());  // 跨域设置中间件

  app.use(staticFiles(path.resolve(__dirname, "../public"), {
    maxAge: 30*24*60*60*1000
  }));  // 加载公共资源（静态资源）

  app.use(views(path.resolve(__dirname, '../views')));  // 渲染视图资源

  app.use(bodyParser());  // 挂载body解析中间件

  app.use(miSend());  // 挂载简易版koa-json

  app.use(miLog());  // 挂载logjs日志打印中间件

  app.use(errorCatch());  // 错误捕获中间件

  app.keys = ['test'];  // 设置签名的cookie密钥
  app.use(session(sessionConfig, app));  // 设置session中间件

  // 在需要写入session的位置，调用ctx.session = {test: 'test'}即可设置session

  miRule({  // 向app上挂载controller下的文件
    app,
    rules: [
      {
        // 指定controller文件夹下的js文件，挂载到app.controller属性上
        folder: path.join(__dirname, '../controller'),
        name: 'controller'
      },
      {
        // 指定service文件夹下的js文件，挂载到app.service属性上
        folder: path.join(__dirname, '../service'),
        name: 'service'
      }
    ]
  });

  app.use(mongoRelated());  // 连接mongo相关中间件，使用数据库为mongo时需调用该中间件(该中间件在路由中进行调用也可以)
}