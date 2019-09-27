const path = require('path');
const nunjucks = require('nunjucks');

module.exports = (opts = {}) => {
  const env = opts.env || process.env.NODE_ENV || 'development';
  const folder = opts.errorPageFolder;
  const templatePath = path.resolve(__dirname, './error.html');
  let filename = 'other';
  return async (ctx, next) => {
    try {
      await next();
      if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
    } catch (e) {
      let status = parseInt(e.status);  // 状态码
      if (status >= 400) {
        switch (status) {
          case 400:
          case 404:
          case 500:
            filename = status;
            break;
          default:
            filename = 'other'
        }
      } else {
        status = 500;
        filename = status;
      }
      const filePath = folder ? path.join(folder, `${filename}.html`) : templatePath;

      // 处理完成后渲染对应的模板文件
      try {
        nunjucks.configure(folder ? folder : __dirname);  // 指定视图目录
        const data = nunjucks.render(filePath, {
          env: env,
          status: e.status || e.message.NODE_ENV,
          error: e.message,
          stack: e.stack // 错误堆栈信息
        });
        ctx.status = status;
        ctx.body = data;
      } catch (e) {
        ctx.throw(500, `错误页面渲染失败:${e.message}`);  // 出现异常时直接抛出，让最外层捕获
      }
    }
  }
}