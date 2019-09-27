const { getAllCustomers, getCustomerById, getCustomerByName, updateCustomer, createCustomer, deleteCustomer } = require('../service/customer');

module.exports = {
  getAllCustomers: async (ctx, next) => {
    let customers = await getAllCustomers();
    ctx.type = 'application/json';  // 通过json输出
    ctx.body = {
      status: 0,
      data: customers
    };
  },

  getCustomerById: async (ctx, next) => {
    let customer = await getCustomerById(ctx.params.id);
    ctx.type = 'application/json';
    ctx.body = {
      status: 0,
      data: customer
    };
  },

  getCustomerByName: async (ctx, next) => {
    let customer = await getCustomerByName(ctx.params.name);
    ctx.type = 'application/json';
    ctx.body = {
      status: 0,
      data: customer
    };
  },

  updateCustomer: async (ctx, next) => {
    let id = ctx.params.id;
    let customer = ctx.request.body;
    await updateCustomer(id, customer);
    ctx.type = 'application/json';
    ctx.body = {
      status: 0
    };
  },

  createCustomer: async (ctx, next) => {
    let customer = ctx.request.body;
    await createCustomer(customer);
    ctx.type = 'application/json';
    ctx.body = {
      status: 0
    };
  },

  deleteCustomer: async (ctx, next) => {
    await deleteCustomer(ctx.params.id);
    ctx.type = 'application/json';
    ctx.body = {
      status: 0
    };
  }
}