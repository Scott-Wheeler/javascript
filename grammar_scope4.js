/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// globals are properties of the global 'window' object

var glob1 = "global variable";

console.log(window.glob1);

// can access global variables declared in one window or frame from
// another window or frame by specifying the window or frame name.
// ex: if a variable called phoneNumber is declared in a document,
// can refer to this variable from an iframe as parent.phoneNumber


// Constants
const PI = 3.14;

// scoping for constants is the same as for 'let'

// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL ALSO CAUSE AN ERROR
function f() {
  const g = 5;
  var g;
  // statements...
}

// the properties of constant objects are mutable:
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';


