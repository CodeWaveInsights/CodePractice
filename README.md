**1. What will be output of following code**

let a=[1,2,5];
let b = a;
b[0]=100;

console.log(a); // #Output: [100, 2, 5] 
console.log(b); // Output: [100, 2, 5]
explanation: The output will be [100, 2, 5] because arrays in JavaScript are reference types.

**2. What is the output of the following code?**

console.log([]+[]);

Explanation: The output of the code `console.log([] + []);` is an empty string (`""`).
JavaScript converts them to strings. Since both arrays are empty, the result is an empty string.
This behavior is due to the fact that arrays in JavaScript are objects, and when you try to concatenate  
them, JavaScript calls the `toString()` method on each array, which returns an empty string for empty arrays.
Therefore, the final result is an empty string.

