function test() {
  console.log(this);
}
test.call(null);
// Output: null
// Explanation: The `call` method sets the value of `this` inside the 
// function to the first argument passed to it.