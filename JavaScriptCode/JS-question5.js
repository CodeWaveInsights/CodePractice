const obj1={a: 1};
const obj2={a: 1};
console.log(obj1 === obj2); // Output: false
console.log(obj1 == obj2); // Output: false

/*
Explanation: In JavaScript, objects are compared by reference, not by value. 
Even though obj1 and obj2 have the same properties and values, they are two distinct objects in memory.
Therefore, both strict equality (===) and loose equality (==) return false.
*/