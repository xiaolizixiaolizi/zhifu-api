class UserCtl {
  find(ctx) {  //返回所以用户列表[{},{}...]
    ctx.body = '获取用户列表' //返回所以用户列表[{},{}...]
  }
  findById(ctx) { //返回当前用户{}
    ctx.body = `获取特定用户${ctx.params.id}` //返回当前用户{}
  }
  create(ctx){ //新建用户
    ctx.body = '新建用户' //返回新建用户{}
  }
  update(ctx){
    ctx.body = '修改用户' //返回被修改(更新)的对象{}
  }
  del(ctx){
    ctx.status = 204 //删除用户成功，但是不返回任何内容
  
  }
  
}
module.exports=new UserCtl()
