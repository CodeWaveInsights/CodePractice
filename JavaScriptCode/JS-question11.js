let a = 5;
let b = '5';

if (a == b) {
  console.log('Equal');
} else {
  console.log('Not Equal');
}

// Output: Equal
// Explanation: The `==` operator performs type coercion, converting `b` to a number before comparison.
//  Since both `a` and `b` are equal in value after coercion, the output is 'Equal'.