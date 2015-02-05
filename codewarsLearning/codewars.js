// write the function isAnagram
var isAnagram = function(test, original) {
    "use strict";
    return (test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''));
};

console.log(isAnagram("foefet", "toffee"));

