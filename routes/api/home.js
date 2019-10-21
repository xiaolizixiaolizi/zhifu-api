const Router = require('koa-router')
const router = new Router()
const {index}=require('../../controllers/home')


// router.get('/',ctx=>{
//   index(ctx)
// })
// 更简化
router.get('/',index)

module.exports=router