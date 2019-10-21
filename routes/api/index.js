// 批量注册路由到app上脚本
const fs = require('fs')
// fs.readdirSync(__dirname) [ 'home.js', 'index.js', 'users.js' ]
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file == 'index.js') return
    // ifreturn下面代码不执行
    let router=require('./'+file) //暴露出导出的router
    app.use(router.routes()).use(router.allowedMethods())
  })
}
