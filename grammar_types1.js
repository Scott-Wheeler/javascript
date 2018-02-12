/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Data structures and types

// ECMAScript defines 7 data types: 6 primitives and Object
// 6 primitives: Boolean, null, undefined, Number, String, Symbol
// Symbol (new in ECMAScript 2015) is a data type whose instances are unique and immutable
// Objects and functions

// + converts number to string
x = "the answer is " + 42; // "the answer is 42"
'37' + 7; // "377"
'37' - 7; // 30
'1.1' + '1.1'; // '1.11.1'

// convert a number in a string to a number
console.log(parseInt("42"));
console.log(parseFloat("42.2"));
(+'1.1') + (+'1.1');  // 2.2
+'1.1' + +'1.1';  // 2.2


// Literals
// Array, Boolean, Floating-point, Integers, Object, RegExp, String

// An array literal is a list of zero or more expressions enclosed in [] and is an object initializer
var coffees = ['French Roast', 'Colombian', 'Kona'];
/* if an array is created using a literal in a top-level script, JavaScript interprets the array
   each time it evaluates the expression containing the array literal. In addition, a literal used
   in a function is created each time the function is called.
*/

// extra commas denote undefined elements, except for trailing commas
// however it is better to explicitly declare the undefined elements
var fish =  ['Lion', , 'Angel']; // ['Lion', undefined, 'Angel']
var myList = ['home', , 'school', ]; // ['home', undefined, 'school']
var myList = [, 'home', , 'school']; // [undefined, 'home', undefined, 'school']
var myList = ['home', , 'school', , ]; // ['home', undefined, 'school', undefined]

// The Boolean object is a wrapper around the primitive Boolean data type.
// true, false

// integers
// no leading 0 is base 10, leading 0 or 0o or 0O is octal, leading 0x is hex, leading 0b is binary
/*
0, 117 and -345 (decimal, base 10)
015, 0001 and -0o77 (octal, base 8) 
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binary, base 2)
*/

// floating point
// consists of a decimal integer with may be signed, a point, a fraction, and/or exponent
// [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
3.1415926
-.123456789
-3.1E+12
.1e-23

// object literal
// a list of zero or more pairs of property names and values enclosed in {}
// do not use an object literal at the beginnning of a statement because it will be interpreted as a block
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

var car = { manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda' };
console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
console.log(car.manyCars['b']); // Jeep

// object property names can be any string including the empty string
// if it wouldn't be a valid identifier then it must be enclosed in quotes and can't be accessed with dot notation

var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}

//console.log(unusualPropertyNames.''); // SyntaxError: missing name after . operator
console.log(unusualPropertyNames['']); // An empty string
//console.log(unusualPropertyNames.!);  // SyntaxError: missing name after . operator
console.log(unusualPropertyNames['!']); // Bang!


// enhanced object literals
// in ES2015, object literals are extended to support:
  // setting the prototype at construction
  // shorthand for foo: foo
  // defining methods
  // making super calls
  // computing property names with expressions

var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for handler: handler
  handler,
  // Methods
  toString() {
    // Super calls
    return 'd ' + super.toString();
  },
  // Computed (dynamic) property names
  [ 'prop_' + (() => 42)() ]: 42
};


// RegExp literal
var re = /ab+c/;


// String literal
// can use String object methods and properties
console.log("Scrambles".length)

// in EC2015, ` can be used for interpolation and such. Template Literal 
// basic literal
`In JavaScript '\n' is a line-feed.`
// multiline strings
`In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`
// string interpolation
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`
// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);


// escaping in strings is normal
/*
\0 	Null Byte
\b 	Backspace
\f 	Form feed
\n 	New line
\r 	Carriage return
\t 	Tab
\v 	Vertical tab
\' 	Apostrophe or single quote
\" 	Double quote
\\ 	Backslash character
\XXX 	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
\xXX 	The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
\uXXXX 	The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\u{XXXXX} 	Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.
*/

