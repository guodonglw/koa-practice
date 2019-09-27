module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (ex) {
      ctx.type = 'application/json';
      ctx.body = {
        status: -1,
        message: ex.message
      }
    }
  }
}