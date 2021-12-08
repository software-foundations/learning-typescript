"use strict";
exports.__esModule = true;
var myName = "Bruno";
var num = 1;
var condition = true;
var mySymbol = Symbol('any symbol');
var arrayOfNumbers = [1, 2, 3];
var arrayOfNumbers2 = [1, 2, 3];
// objects
// ? -> means optional
var myObject = {
    name: 'Bruno',
    age: 25
};
// functions
function calc_sum(x, y) {
    return x + y;
}
var calc_sum2 = function (x, y) { return x + y; };
console.log(typeof myName);
console.log(typeof num);
console.log(typeof condition);
console.log(typeof mySymbol);
console.log(typeof arrayOfNumbers);
console.log(typeof arrayOfNumbers2);
console.log(typeof myObject);
console.log(myObject);
console.log(typeof calc_sum);
console.log(calc_sum(1, 2));
console.log(typeof calc_sum2);
console.log(calc_sum2(1, 2));
// Module mode
exports["default"] = 1;
