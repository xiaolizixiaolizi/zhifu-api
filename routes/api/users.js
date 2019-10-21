const Router = require('koa-router')
const router = new Router({ prefix: '/test' })
const {find,findById,create,update,del}=require('../../controllers/user')

router.get('/',find) //查找所有用户
 
router.get('/:id',findById) //返回当前用户{}

router.put('/:id',update) ///返回被修改的对象{}

router.post('/add',create)  //返回新建用户{}


router.delete('/:id',del)

module.exports = router
