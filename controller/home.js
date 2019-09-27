const HomeService = require('../service/home');

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
  },
  home: async (ctx, next) => {
    ctx.response.body = '<h1>home page</h1>';
  },
  homeParams: async (ctx, next) => {
    let {id, name} = ctx.params;
    ctx.response.body = `<h1>home page ${id} - ${name}</h1>`;
  },
  user: async (ctx, next) => {
    await ctx.render('home/login')
  },
  login: async (ctx, next) => {
    let {name, password} = ctx.request.body;
    let data = await HomeService.login(name, password);
    ctx.response.body = data;
  }
}