// alert("hellow");
// document.getElementById("demo").innerHTML = "My First JavaScript";
// console.log("arman");
function cal(username){
    this.username=username;
}
function detail(username,email,password){
    cal.call(this,username)
    this.email=email
    this.password=password
}
const student=new detail("Arman","xyz@gmail.com",12345)
// console.log(student);
var person1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
};

// Using the call method to invoke the fullName function of person1 with the context of person2
var janeFullName = person1.fullName.call(person2);

console.log(janeFullName); // Output: "Jane Smith"





