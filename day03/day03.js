// console.log("Arman");
function closure(){
    let x = 10;
    return function(){
        let n=12;
        console.log(n);
        console.log(x);
    }
}
var innerFunc = closure();
innerFunc();
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
