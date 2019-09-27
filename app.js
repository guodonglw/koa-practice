const koa = require('koa');
const router = require('./router');
const middleware = require('./middleware');
const app = new koa();

middleware(app);  // 挂载相关中间件
router(app);  // 加载路由中间件

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});

app.on('error', (err, ctx) => {  // 全局监视，防止未捕获的异常导致代码异常退出
  if (ctx && !ctx.headerSent && ctx.status < 500) {
    ctx.status = 500;
  };
  if (ctx && ctx.log && ctx.log.error) {
    if (!ctx.state.logged) {
      ctx.log.error(err.stack)
    }
  }
})