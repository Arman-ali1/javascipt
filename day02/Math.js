console.log(Math.PI);
let py=Math.PI;
const arman={
    name:'arman',
    age:23,
    isAvailable:true
}
console.log(arman.age);
arman.password=123
console.log(arman);
console.log(Object.getOwnPropertyDescriptor(arman,"name"));
arman.name="ali"
console.log(arman);

Object.defineProperty(arman,"name",{
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(arman,"name"));
arman.name="khan"
console.log(arman);
let mt=Math.PI;
console.log(mt);
console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
// Object.defineProperty(Math,"PI",{
//     writable:true
// })
console.log(Object.getOwnPropertyDescriptor(Math,"PI"));