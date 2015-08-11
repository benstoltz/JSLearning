// Variables, Scope, and Memory!!!



// to determine the typeof for a reference type use instanceof

var person = {}; // same as: var person = new Object();

console.log(person instanceof Object); // True
console.log(person instanceof Array);  // False

console.log("____________________________________");


// Scope chain: What a particular context has access too. Usually itself and all parent scopes.


// Three execution contexts in below code: global context, local context of changeColor(), and local context of swapColors()

var color = "blue";

function changeColor() {
    var anotherColor = "red";

    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;

        // color, anotherColor, and tempColor are all accessible here
    }

    // color and anotherColor are accessible here, but not tempColor
    swapColors();
}

// Only color is accessible here

changeColor();


console.log("____________________________________");


// Two ways to augment the scope chain:

// catch block in a try-catch statement
// a with statement


// Both add a var object to the front of the scope chain. With statement, the specified object is added to the scope chain; for the
// catch statement , a new var object is created and contains a declaration for the thrown error object.:

function buildUrl() {
    var qs = "?debug=true";

    with(location) {
        var url = href + qs;
    }

    return url;
}

console.log("____________________________________");


// in ecmascript 5 there is no block level scoping, however in ecmascript6 there is with the let and const keywords.

