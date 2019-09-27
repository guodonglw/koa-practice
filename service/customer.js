const Customer = require('../model/mysql/custom');
const { Op } = require('sequelize');

module.exports = {
  getAllCustomers: async () => {
    return Customer.findAndCountAll({
      attributes: ['id', 'name', 'sex'],  // 查询部分字段
      order: [
        ['id', 'DESC']
      ]
    })
  },

  getCustomerById: async (id) => {  // 根据用户id进行查询
    return Customer.findAll({
      where: {
        id: id
      }
    })
  },

  getCustomerByName: async (name) => {  // 根据用户名称查询
    return Customer.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`  // 支持模糊查询
        }
      }
    })
  },

  updateCustomer: async (id, customer) => {  // 更新数据
    const item = await module.exports.getCustomerById(id)  // 先根据id查询数据
    if (item) {  // 存在则更新
      return Customer.update(customer, {
        where: {
          id: id
        }
      });
    } else {  // 不存在抛出异常
      throw new Error(`the customer with id ${id} is not exist`)
    }
  },

  createCustomer: async (customer) => {  // 创建数据
    return Customer.create(customer);
  },

  deleteCustomer: async (id) => {  // 删除数据
    const customer = await module.exports.getCustomerById(id);
    if (customer) {
      return Customer.destroy({
        where: {
          id: id
        }
      });
    }
  }
}