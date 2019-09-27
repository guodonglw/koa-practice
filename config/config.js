const { store } = require('../middleware/redisRelated')

module.exports = {
  mysql: {  // mysql相关配置
    database: '',
    username: '',
    password: '',
    host: '',
    port: 3306,
    dialect: 'mysql'
  },

  mongo: {  // mongo相关配置
    database: 'mongodb://localhost/test'
  },

  sessionConfig: {  // session相关配置
    key: 'mySessionKey',  // cookie中的key
    maxAge: 1000 * 30,  // 失效时间，单位ms
    overwrite: true,  // 能否被覆盖，默认为true
    httpOnly: true,  // 是否禁止客户端修改cookie，默认为true
    signed: true,  // 签名是否开启，与app.keys对应
    // store: store  // 添加store配置，支持redis
  }
}