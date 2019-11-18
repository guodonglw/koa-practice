const Router = require('koa-router');
const router = new Router();

module.exports = (app) => {
  // 测试时可用该部分，不涉及数据库的使用
  router.get('/', app.controller.home.index);
  router.get('/home', app.controller.home.home);
  router.get('/home/:id/:name', app.controller.home.homeParams);
  router.get('/user', app.controller.home.user);
  router.post('/user/login', app.controller.home.login);

  // customer + mysql相关示例代码接口
  router.get('/customer', app.controller.customer.getAllCustomers);  // 获取所有用户
  router.get('/customer/:id', app.controller.customer.getCustomerById);  // 根据id查询用户
  router.get('/customer/name/:name', app.controller.customer.getCustomerByName);  // 根据用户名查询用户
  router.put('/customer/:id', app.controller.customer.updateCustomer);  // 更新数据
  router.post('/customer', app.controller.customer.createCustomer);  // 增加用户
  router.delete('/customer/:id', app.controller.customer.deleteCustomer);  // 删除数据

  // course + mongodb相关示例代码接口
  // app.use(mongoMiddleware());  // 根据需要选择该中间件以及放到适当的位置(该处mongoMiddleware是一个指代，具体请看middle中对于mongo中间件的调用)
  router.get('/course', app.controller.course.getCourseList);  // 获取所有数据
  router.get('/course/:id', app.controller.course.getCourseById);  // 根据id查询数据
  router.post('/course', app.controller.course.addCourse);  // 新增数据
  router.put('/course/:id', app.controller.course.updateCourse);  // 修改数据
  router.delete('/course/:id', app.controller.course.removeCourse);  // 删除数据

  app.use(router.routes()).use(router.allowedMethods())
}