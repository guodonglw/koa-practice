const log4js = require('log4js');
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]; 
const baseInfo = require('./baseInfo');
const access = require('./access');

module.exports = (options) => {
  const contextLogger = {};
  const appenders = {};
  const opts = Object.assign({}, baseInfo, options || {});
  const { env, appLogLevel, dir, serverIp, projectName } = opts;
  const commonInfo = {projectName, serverIp};
  appenders.cheese = {
    type: 'dateFile',
    filename: `${dir}/task`,
    pattern:  '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }
  // if (env === 'dev' || env === 'development') {  // 开发环境
  //   appenders.out = {
  //     type: 'console'
  //   }
  // }
  let config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  }
  const logger = log4js.getLogger('cheese');
  log4js.configure(config);
  return async (ctx, next) => {
    const start = Date.now();
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](access(ctx, message, commonInfo))  // 修改logger记录的内容（统一log的格式）
      }
    });
    ctx.log = contextLogger;
    await next();
    const responseTime = Date.now() - start;
    logger.info(`响应时间为${responseTime/1000}s`)
  }
}