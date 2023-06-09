const hello = ["kishore",12,"milk","tea","coffer","boost"]
// console.log(hello);
// console.log(hello.slice(2,5));
const a = hello.slice(0,1)
console.log(a);
const b = hello.slice(2,3)
console.log(b);
const c = hello.slice(4,5)
console.log(c);

let result = []
result.push(a[0])
result.push(b[0])
result.push(c[0])
console.log(result);
console.log(result.reverse())

const value = "The Laureus Spirit of Sport Award is an award honouring those individual athletes or teams who"
console.log(value.length);
console.log(value.indexOf("Sport"))
console.log(value.indexOf("award"))
console.log(value.slice(22,45))
