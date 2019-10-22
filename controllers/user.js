const UserModel = require('../model/User')
class UserCtl {
  async find(ctx) {  //返回所以用户列表[{},{}...]
    ctx.body = await UserModel.find({})
  }
  async findById(ctx) { //返回当前用户{}
    let user = await UserModel.findById(ctx.params.id, { name: 1, _id: 0 })
    if (!user) ctx.throw(404, '用户不存在')
    ctx.body = user
  }
  async create(ctx) { //新建用户 返回当前新用户
    ctx.verifyParams({
      name: { type: 'string', required: true },
      age: { type: 'number', required: true }
    })
    // 拿到ctx.request.body检验过的对象
    ctx.body = await UserModel.create(ctx.request.body)
  }
  async update(ctx) { //返回被修改(更新)的对象{}
    ctx.verifyParams({
      name: { type: 'string', required: true }
    })
    // (id,update,option={new:false}) 默认是false,返回原始数据。new返回修改后的数据
    let user = await UserModel.findByIdAndUpdate(ctx.params.id, ctx.request.body,{new:true})
    if (!user) ctx.throw(404, '用户不存在')
    ctx.body = user
  }
  async del(ctx) {
    let user = await UserModel.findByIdAndDelete(ctx.params.id)
    if (!user) ctx.throw(404, '用户不存在')
    ctx.status = 204 //删除用户成功，但是不返回任何内容

  }

}
module.exports = new UserCtl()
