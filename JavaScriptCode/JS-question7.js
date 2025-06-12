console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

/*
Explanation: The output of the code will be:
A           
D
C
B
The synchronous code runs first, logging 'A' and 'D'.
Promise callbacks (microtasks) are executed before setTimeout (macrotasks). So 'C' is logged before 'B'.
*/