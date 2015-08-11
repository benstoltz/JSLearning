// single line comment

/*
Multi line comment
weee
 */

console.log("______________________");
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
console.log("______________________");
//undefined type variable declared without being initialized

var bob;
console.log(bob === undefined);
// typeof returns undefined on both uninitialized and undeclared variables

console.log(typeof bob);
console.log(typeof humpty);

console.log("______________________");

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

console.log("______________________");

// Booleans

var message = 'Hello World!';

var messageAsBoolean = Boolean(message);

// Boolean conversions are important because flow-control, such as if, auto perform Boolean conversion ie:

if (message) {
    console.log("Value is true");
}

console.log("______________________");
// Use isNaN() to check whether something is NaN

console.log(isNaN(NaN));
console.log(isNaN(10)); //False because number
console.log(isNaN('10')); // False can be converted into a number
console.log(isNaN("blue")); //True because string/can not be converted into a number
console.log(isNaN(true)); // False because converts to 1.


// can convert values to string with either toString(), String(), or by adding an empty string "".
var num = 10;
console.log(num.toString());
var value1 = 10;
console.log(String(value1)); // calls the objects toString() method (with no arguments). Returns "null" or "undefined" for those types

console.log(10 + "");


console.log("______________________");

// Prefix increment/decrement will preform the increment or decrement prior to the statement being run. The postfix version will run FOLLOWING
// the specific statement.


var age = 29;
var anotherAge = --age + 2;

console.log(age);
console.log(anotherAge);


var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; // If changed to a postfix then would evaluate to 22.
var num4 = num1 + num2;

console.log(num3);
console.log(num4);


console.log("______________________");
// Logical NOT (!)

console.log(!false); //true
console.log(!"blue"); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!"");  //true
console.log(!123456); //false

console.log("______________________");
// Using two ! simulates using the Boolean() function on a value.

console.log(!!false); //false
console.log(!!"blue"); //true
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!"");  //false
console.log(!!123456); //true


// logical AND uses && Evaluates true if BOTH operands evaluate to true. If the first operand determines the result the second is never evaluated.

//var found = true;
//var result = (found && someUndeclaredVariable);
//console.log(result); // fails because someUndeclaredVariable doesn't exist

var found = false;
var result = (found && someUndeclaredVariable);
console.log(result); // returns false and works because found evaluates/determines the result.



// Logical OR represented by || works similar to AND. If the first operand is True the second never evaluates

// also can be used to store default values


//var myObject = preferredObject || backupObject;  // If preferredObject has a value it is stored, however if it is false then the backup object is stored.



// Conditional operator

var num1 = 132;
var num2 = 42;

// variable = boolean_expression ? true_value : false_value

var max = (num1 > num2) ? num1 : num2;
console.log(max);

console.log("______________________");

// do-while loop, done when you want the body to execute at least once. Post-test.


var i = 0;
do {
    i += 2;
    console.log(i);
} while (i < 10);


console.log("______________________");


// For-in loop is used to enumerate the properties of an object


//for (var propName in window) {
//    console.log(propName);
//}

console.log("______________________");

// Functions can take as many arguments as you want to pass in. They are represented internally as an array.


function doAdd() {
    if (arguments.length == 1) {
        console.log(arguments[0] + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
}

doAdd(10); // 20
doAdd(30, 20);  // 50

















