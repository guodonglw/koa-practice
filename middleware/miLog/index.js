const logger = require('./logger');

module.exports = () => {
  return logger()
}

// 项目中打印log，可以调用ctx.log.info('test')