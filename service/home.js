module.exports =  {
  login: async (name, pwd) => {
    let data;
    if (name === 'ikcamp' && pwd === '123456') {
      data = `hello ${name}!`;
    } else {
      data = '账号信息错误';
    }
    return data
  }
}