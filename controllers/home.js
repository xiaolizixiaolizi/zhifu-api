// exports.index = (ctx) => {
//   ctx.body = '这是首页'
// }
class HomeCtl {
  index(ctx){
    ctx.body='这是首页'
    
  }
}
module.exports=new HomeCtl()