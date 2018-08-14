// "use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
//
// var name = prompt("What is your name?");
// function sayHello(name) {
//     return "Hello, " + name;
//
// }
// console.log(sayHello(name));
//
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
// var helloMessage = sayHello("James");
// console.log(helloMessage);
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
// var myName = sayHello("James")
// console.log(myName)
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
//
// function isTwo(input){
//     return input === 2;
// }
// console.log(isTwo(random));
// console.log("The random number was " + random);
//
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// var bill = prompt("What is your bill?");
// var tipRate = prompt("What's the percentage you want to tip? (ex: 10% = 0.10)");
//
// function calculateTip(bill, tiprate){
//       return bill * tiprate
// }
//
// var result = calculateTip(bill, tipRate);
// console.log("The tip is $" + result)
//
// console.log("should return " + calculateTip(45, 0.50));
// console.log("should return " + calculateTip(105, 0.50));
// console.log("should return " + calculateTip(1145, 0.50));
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
// alert("Your tip is $" + result.toFixed(2))
//
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// var originalPrice = prompt("What is the price of your purchase?")
// var discountPercent = prompt("Apply the discount. (between 0 and 1. ex: 20% = 0.20 ")
//
// function applyDiscount(originalPrice, discountPercent) {
//     return originalPrice - (originalPrice * discountPercent);
// }
//
// var result = applyDiscount(originalPrice, discountPercent);
//
// console.log("Your discounted price is $" + result.toFixed(2))
// alert("Your discounted price is $" + result.toFixed(2))

/** Make a function named isOdd(number)*/
function isOdd(number) {
    return number %2 !== 0;
}
console.log(isOdd("8"));

/** Make a function named isEven(number)*/
function isEven(number) {
    return number %2 == 0;
}
console.log(isEven("7"));


/** Make a function named identity(input) that returns the input exactly as provided.*/
    function identity(input) {
    return input === input;
}
console.log(identity("honor"));


/** Make a function named isFive(input)*/

function isFive(input) {
    var number = parseFloat(input)
    return number;
}
console.log(isFive("5"));

/** Make a function named addFive(input) that adds five to some input.*/


function addFive(input) {
    return parseFloat(input) + 5;
}
console.log(addFive("5"));

/** Make a function named isMultipleOfFive(input)*/

function isMultipleOfFive(input){
    return parseFloat(input) * 5;
}
console.log(isMultipleOfFive("5"));


/** Make a function named isThree(input)*/

function isThree(input){
    return input;
}
console.log(isThree("1"));
/** Make a function named isMultipleOfThree(input)*/

function isMultipleOfThree(input){
    return input;
}
console.log(isMultipleOfThree("1"));

/** Make a function named isMultipleOfThreeAndFive(input)*/

function isMultipleOfThreeAndFive(input) {
    var multiple35 = input;
    return multiple35;
}
console.log(isMultipleOfThreeAndFive())

/** Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n*/

function isMultipleOf(target, n){
    var targetNumber = parseFloat(target)
    var nNumber = parseFloat(n);
    var evenMultiple = targetNumber / nNumber;
    return evenMultiple % 2 == 0;
}
isMultipleOf(36, 6);
console.log("The number is " + isMultipleOf(36, 5));

/** Make a function named isTrue(boolean)*/

function isTrue(boolean){
    var booleanValue = boolean
    return booleanValue === "boolean";
}

alert(isTrue("on"));

/** Make a function named isFalse(boolean)*/
/** Make a function named isTruthy(input) // remember that values other than true will behave like true*/
/** Make a function named isFalsy(input) // remember that values other than false behave like false*/
/** Make a function named isVowel(letter)*/
/** Make a function named isConsonant(letter)*/
/** Make a function named isCapital(letter)*/
/** Make a function named isLowerCase(letter)*/
/** Make a function named hasLowerCase(string) that returns if a string has any lower cased*/
/** Make a function named isSpace(letter) that returns if a character is a space character*/
/** Make a function named isZero(number)*/
/** Make a function named notZero(input) that returns true if..*/
/** Write a function named lowerCase(string)*/
/** Write a function named double(n) that returns a number times two*/
/** Write a function named triple(n) that returns a number times 3*/
/** Write a function named quadruple(n) that returns a number times 4*/
/** Write a function named half(n) that returns 1/2 of the provided input*/
/** Write a function named subtract(a, b) that returns a minus b*/
/** Write a function named multiply(a, b) that returns the product of a times b*/
/** Write a function named divide(a, b) that returns a divided by b*/
/** Write a function named remainder(a, b) that returns the remainder after dividing a by b*/
/** Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b*/
/** Write a function named cube(n) that returns n * n * n*/
/** Write a function named squareRoot(n) that returns the square root of the input*/
/** Write a function named cubeRoot(n) that returns the cube root of the input*/
/** Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.*/
/** Write a function named degreesToRadians(number)*/
/** Write a function named radiansToDegrees(number)*/
/** Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.*/
/** Make a function named trim(string) that removes empty spaces before and after the input.*/
/** Make a function named areEqual(input1, input2) that returns if both inputs have the same value*/
/** Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.*/
/** Make a function named not(input) returns the input with a flipped boolean*/
/** Make a function named notNot(input) that the negation of the negation of the input.*/
/** Make a function named and(predicate1, predicate2) that returns the logical operation of AND*/
/** Make a function named or(predicate1, predicate2) that returns the logical operation of OR*/
/** Write a function called reverseString(string) that reverses a string*/
/** Make a function named absoluteValue(number) that returns the absolute value of a numberMake a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.*/