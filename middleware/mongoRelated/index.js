const { connect, close } = require('../../model/mongo')

module.exports = () => {
  return async (ctx, next) => {
    await connect();  // 处理请求前，建立连接
    await next();  // 处理请求
    await close()  // 处理请求后，关闭连接
  }
}
