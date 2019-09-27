const path = require('path');
const fs = require('fs');

module.exports = (opts) => {
  let { app, rules = [] } = opts;
  // 如果缺少实例app，则抛出错误
  if (!app) {
    throw new Error('the app params is necessary')
  }
  // 提取出app实例对象中的属性名
  const appKeys = Object.keys(app);
  rules.forEach((item) => {
    let { folder, name } = item;
    // 如果app实例中已经存在传入的属性名，则抛出错误
    if (appKeys.includes(name)) {
      throw new Error(`the name of ${name} already exists!`);
    }
    let content = {};
    // 读取指定文件夹dir下的所有文件并遍历
    fs.readdirSync(folder).forEach(filename => {
      let extname = path.extname(filename);  // 取出文件的后缀
      if (extname === '.js') {  // 只处理.js文件
        let name = path.basename(filename, extname);  // 从文件中去掉后缀
        // 读取文件中的内容并赋值绑定
        content[name] = require(path.join(folder, filename))
      }
    });

    app[name] = content;
  })
}