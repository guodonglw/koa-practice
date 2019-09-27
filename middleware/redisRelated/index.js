/*
const redis = require('redis'); 
const client = redis.createClient(6379, '');  // 连接本地redis服务
const { promisify } = require('util');  // 引入promisify
const hgetallAsync = promisify(client.hgetall).bind(client);

module.exports = {
  store: {
    get: async (key, maxAge) => {  // 从redis获取session
      return await hgetallAsync(key)
    },

    set: (key, sess, maxAge) => {  // 在redis中存储session
      client.hmset(key, sess)
    },

    destroy: (key) => {  // 销毁redis中的session
      client.hdel(key)
    }
  }
}
*/
