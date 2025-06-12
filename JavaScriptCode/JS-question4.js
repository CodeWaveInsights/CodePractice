console.log("What will be the output of the following code?");
console.log(1<2<3); // Output: true
console.log(3>2>1); // Output: false

/* Explanation:
1 < 2 < 3 is evaluated as (1 < 2) < 3, which becomes true < 3. In JavaScript, true is treated as 1, so 1 < 3 is true.
3 > 2 > 1 becomes (3 > 2) > 1, which results in true > 1. Since true is 1, the comparison becomes 1 > 1, which is false
*/