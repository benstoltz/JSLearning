// single line comment

/*
Multi line comment
weee
 */


// strict mode changes parsing/execution model for JS.

function doSomething(a, b) {
    "use strict";
    return a * b;
}
console.log(doSomething(3, 4));

// local to the scope declared in
var message = 'hi';
//global scope
frank = 100;

//declare series of variables like:

var message = "hi",
    found = false,
    age = 29;

//undefined type variable declared without being initialized

var bob;
console.log(bob === undefined);
// typeof returns undefined on both uninitialized and undeclared variables

console.log(typeof bob);
console.log(typeof humpty);

// Null type. Null value is an empty object pointer: reason why typeof returns "object"

var car = null;
console.log(typeof car);

/*
When defining a var that is meant to later hold an object, it is advisable to initialize the var to null as opposed
to nothing. Then you can explicitly check for the value null to determine if the var has been filled with an object ref
at a later time
 */

if (car !== null) {
    //do something
    car = "hi there";
}

console.log(null == undefined); // undefined derivative of null so superficially equal to null.
console.log(null === undefined);


var message = 'Hello World!';

var messageAsBoolean = Boolean(message);

// Boolean conversions are important because flow-control, such as if, auto perform Boolean conversion ie:

if (message) {
    console.log("Value is true");
}









