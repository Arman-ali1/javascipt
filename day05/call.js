let object1={
    name:"Ali",
    Username:"Axb123",
    age:20,
    db:[],
    city:"Bangalore",
    fun1:function(name,age){
        console.log(`Name of persion " ${name} " and Username is " ${this.Username} " Age="${age} "`);
        this.db.push({name:`${name}`,Username:`${this.Username}`,age:`${age}`});
        return true
    }
}
console.log(object1);
console.log(object1.db);
console.log(object1.fun1("Arman",12));
console.log(object1.db);
let obj=object1.fun1

obj.call(object1,"sssssssssss",13);
console.log(object1.db);

let object3={
    name:"Ali3",
    Username:"3Axb123",
    age:20,
    db:[]
}
let obj2=object1.fun1
console.log("=================obj3");
obj2.call(object3,"Allllll",15)