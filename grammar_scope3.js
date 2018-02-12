/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// block statement scope
if (true) {
  var x = 5;
}
console.log(x) // x is 5

if (true) {
  let y = 5;
}
console.log(y) // ReferenceError: y is not defined


// variable hoisting -- can refer to a variable declared later (!)
// hoisted variables return a value of undefined even if initialized

// Example 1
console.log(x === undefined); // true
var x = 3;

// is interpreted as:
var x;
console.log(x === undefined); // true
x = 3;


// Example 2
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

// is interpreted as:
var myvar = 'my value';

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();

// because of hoisting, var statements should be at the top of the function
// let does not hoist

console.log(x); // ReferenceError
let x = 3;


// for functions, declarations are hoisted and function expressions are not

// function declaration
foo(); // "bar"

function foo() {
  console.log('bar');
}

// function expression
baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};