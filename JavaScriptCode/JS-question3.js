//What will be the output of the following code?

(function (){
    var  a= b =5;

})();
console.log(a); // Output: ReferenceError: a is not defined
console.log(b); // Output: 5
console.log(typeof a); // Output: undefined
console.log(typeof b); // Output: number
