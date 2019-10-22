let obj = { name: 'zs', age: 10, gender: 'male' ,_v:104545}
let {_v,...rest}=obj
console.log(rest) //{ name: 'zs', age: 10, gender: 'male' }