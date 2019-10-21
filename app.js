const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const db = require('./db')
const error = require('koa-json-error')

  ; (async () => {
    // 等待数据库连接成功
    await db
    app.use(error({
      postFormat(err, { stack, ...rest }) {
        return process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
      }

    })) //错误处理中间件
    app.use(bodyParser())
    require('./routes/api/index')(app) // 批量注册路由注册路由

  })()


let port = process.env.PORT || 3000
app.listen(port, err => {
  if (err) {
    return console.log('服务器启动错误', err)
  }
  console.log(`服务器正常启动在${port}`)
})