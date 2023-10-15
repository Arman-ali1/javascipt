// console.log("Arman");
// function closure(){
//     let x = 10;
//     return function(){
//         let n=12;
//         console.log(n);
//         console.log(x);
//     }
// }
// var innerFunc = closure();
// innerFunc();
// function a(){
//     var aa=10;
//     function b(){
//         let n=12;
//         console.log(aa);
//     }
//     return b;
//     // console.log(n);
// }

// const as=a();
// console.log(as.n);
// as();
/*//Types of Array on the basis  of implementation
//continious/Packed, Holey Array Both have 3 types 

//1. SMI(small integer)

const arr=[1,2,3,4,5,6]
//2-Packed double Elements
arr.push(9.1);
//it become-[1,2,3,4,5,6,9.1]
//3-packed elements
arr.push('23');
//holey elements
arr[123]=12*/
// const a=[1,2,3,4,5]
// a.push(9.1);
// a.push('7')
// a[123]=12
// console.log(a[20]);
// console.log(a[202]);
// A regular function that takes three arguments
// function add(x, y, z) {
//     return x + y + z;
//   }
  
//   // Curried version of the add function
//   function curriedAdd(x) {
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       };
//     };
//   }
  
  // Using the curried function
//   const add5 = curriedAdd(5);
//   const add5and6 = add5(6);
//   const result = add5and6(7); // Result is 18
  var outerFunction = ()=>{
    let counter = 34;
    return function() {
        return ++counter;
        }
    };
    
const res=  outerFunction();
const fres=res();
console.log("res",fres);
  

