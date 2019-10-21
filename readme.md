```js
const Koa = require('koa')
const Router=require('koa-router')
const app = new Koa()
const testRouter=new Router({prefix:'/test'})

 // 注册路由
 app.use(testRouter.routes())
```

## koa中间件



```js
// 中间键本质是一个函数
const auth=async(ctx,next)=>{
  console.log(ctx.url) // /test?name=zs&age=10
  console.log(ctx.path) // /test
  if(ctx.path!=='/test'){
    ctx.throw(401,'没有授权')
  }
  await next()
}
```

## ctx对象参数

```js
http://localhost:3000/test?name=zs&age=10
console.log(ctx.url) // /test?name=zs&age=10
console.log(ctx.path) // /test
console.log(ctx.query) //{ name: 'zs', age: '10' }
console.log(ctx.request.body) //{ name: 'li', age: 10, gender: 'male' }post参数koa-bodyparser

http://localhost:3000/test/454eret6515/100
console.log(ctx.params) //{ id: '454eret6515', page: '100' } get/post/put都有params 

配置
testRouter.post('/:id/:page',auth,ctx=>{
    console.log(ctx.url) // /test/454eret6515/100
    console.log(ctx.params) //{ id: '454eret6515', page: '100' }
    ctx.body=ctx.params
})
```

## restful返回值和状态码

### 204请求成功，但是不不返回任何响应

```js
testRouter.get('/',ctx=>{
     
      ctx.body='获取用户列表' //返回所以用户列表[{},{}...]
    })

    testRouter.get('/:id',ctx=>{
      ctx.body=`获取特定用户${ctx.params.id}` //返回当前用户{}
    })
    testRouter.post('/add',ctx=>{
      ctx.body='新建用户' //返回新建用户{}
    })
    testRouter.put('/:id',ctx=>{
      ctx.body='修改用户' //返回被修改的对象{}
    })
    testRouter.delete('/:id',ctx=>{
      ctx.status=204 //删除成功，但是不返回任何内容
     
    })
```

## route&&controllers文件夹

![1571647381945](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1571647381945.png)



## 错误处理

防止程序挂掉

方便代码调试

告诉用户错误信息

### 状态码

204请求成功，但是不不返回任何响应

404 客户端资源为找到



### koa自带错误处理

ctx.throw(状态码，’message')

404错误返回Not Found



### 错误处理中间件npm i koa-json-error -S

