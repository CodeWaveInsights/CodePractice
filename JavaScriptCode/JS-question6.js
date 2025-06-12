let x = 10;
let y = (x++, x + 1, x * 2);
console.log(y);

// Output: 22
// Explanation: In this code, the comma operator is used. The expression `(x++, x + 1, x * 2)` evaluates each of its operands from left to right and returns the value of the last operand.
// Here, `x++` increments `x` to 11, then `x + 1` evaluates to 12, and finally `x * 2` evaluates to 22.
// Therefore, the value of `y` is 22, and that is what gets printed to the console.