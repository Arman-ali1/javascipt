//Types of Array on the basis  of implementation
//continious/Packed, Holey Array Both have 3 types 

//1. SMI(small integer)

const arr=[1,2,3,4,5,6]
//2-Packed double Elements
arr.push(9.1);
//it become-[1,2,3,4,5,6,9.1]
//3-packed elements
arr.push('23');
//holey elements
arr[123]=12
const a=[1,2,3,4,5]
a.push(9.1);
a.push('7')
a[123]=12
console.log(a[20]);
console.log(a[202]);