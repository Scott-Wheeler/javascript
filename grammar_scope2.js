/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var input;
if (input === undefined) {
  console.log("true")
} else {
  console.log("false")
}

// undefined is false in boolean context
var myArray = [];
if (!myArray[0]) console.log("true")

// undefined converts to NaN in numeric context
var a;
a + 2; // Evaluates to NaN

// null is false in boolean and 0 in numeric
var n = null;
console.log(n * 32);

