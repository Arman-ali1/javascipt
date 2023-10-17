
function bindfun(){
    console.log(`name==${this.name} and  city==${this.city}`);
}


let obj={
    name:"Alii",
    city:"Bangalore"
}
let bfun=bindfun.bind(obj);
bfun()
// obj.binfFun()
