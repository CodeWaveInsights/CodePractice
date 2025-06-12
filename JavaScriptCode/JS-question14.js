console.log(a)
console.log(b)
console.log(typeof a)
console.log(typeof b)

var a = 10;
let b = 20;

// Output: undefined
// Explanation: In JavaScript, variable declarations using `var` are hoisted
//  to the top of their scope, but their assignments are not.
// Therefore, `a` is hoisted and declared but not initialized, resulting in `undefined`.
// The `let` declaration is also hoisted, but it is not initialized until the line where it is defined, so it remains in a "temporal dead zone" until then.