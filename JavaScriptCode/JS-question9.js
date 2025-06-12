let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);

// Output: [1, 2, 3, 4]
// Explanation: In JavaScript, arrays are reference types. When you assign `b = a`, both `a` and `b` point to the same array in memory.
//  Therefore, when you modify `b` by pushing a new element (4), it also modifies `a`, resulting in both arrays being `[1, 2, 3, 4]`. 