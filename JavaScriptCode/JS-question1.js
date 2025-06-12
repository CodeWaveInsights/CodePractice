//What will be the output of the following code?

let a=[1,2,5];
let b = a;
b[0]=100;

console.log(a);
console.log(b); // Output: [100, 2, 5]
// Output: [100, 2, 5] explanation:
// The output will be [100, 2, 5] because arrays in JavaScript are reference types.

