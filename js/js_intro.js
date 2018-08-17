"use strict";
var myName = prompt("What is your name?");

function birthday(name) { //named function//
    var birthdayMessage = "Happy Birthday! " + name + "!!!";
    console.log(birthdayMessage);
}


// var birthdayMessage - function (input) { this an anonymous function
//
// }


birthday("James");
birthday("Taylor");
birthday("Shawna");



function yell(input) {
    return input.toUpperCase()
}

// 4 pieces fo a function
// 1) "function", 2) the name of the function, 3) parameters in parentheses, body

// Step 2 is to call the function
alert(yell("WHAT UP MOTHERFUCKA"))

// EVERY function has a return value (no return value/value is undefined

fucntion add(a, b) {
    return a + b;
}