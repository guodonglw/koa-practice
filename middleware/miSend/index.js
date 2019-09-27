module.exports = () => {
  function render(json) {
    this.set("Content-type", "application/json");
    this.body = JSON.stringify(json)
  }

  return async (ctx, next) => {
    ctx.send = render.bind(ctx);
    await next();
  }
}