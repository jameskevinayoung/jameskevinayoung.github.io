/**
 * Challenge #0
 * Define a function named countOccurrences(array, item) that takes two arguments. The first argument is the array your
 * want to search. The second argument is the value you wish to count. If there are no occurrences of the value in the
 * array, then return 0.
 *
 * countOccurrences(bugs, "ant") should return 3;
 * countOccurrences(fruits, "apple") should return 3
 * countOccurrences(bugs, "mosquito") should return 2
 */
var fruits = ["apple", "banana", "orange", "apple", "pineapple"]
console.log(fruits);
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
console.log(bugs);

function countOccurrences(array, item) {
    var count = 0;//this variable tells us where we start
    array.forEach(function (element) { //loop cycles through the array by using a function
        if (element === item) { //the condition provides a comparison of the information and returns an occurrence
            count++; //will add additional occurrences to the previous hit.

        }
    });
    return count; //returns the entire response
}

    /** for(var i= 0; i < array.length; i++){//create a loop to iterate
        if(array[i] === item){//if there is a condition in english, there's an if condition make a comparison
            console.log(count);
        }else {
            return 0;//provides an output
        }
    }
    return indices;
*/
console.log("this is the number of occurrences for the bug ant; " + countOccurrences(bugs, "ant"))
console.log("this is the number of occurrences for the fruit apple; " + countOccurrences(fruits, "apple"))
console.log("this is the number of occurrences for the bug mosquito; " + countOccurrences(bugs, "mosquito"))


/**
 Challenge #1:

 Define a function named allIndexesOf that takes in two arguments.
 The first argument should be the array to search and the second argument should be the value you want to search for.
 If the item does not exist in the provided array, return an empty array;

 Given:
 var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
 allIndexesOf(fruits, "apple") should return the array [0, 3]
 allIndexesOf(fruits, "guava") should return the array []
 allIndexesOf(fruits, "pineapple") should return [4]
*/

//write a function with and name it allIndexesOf that contains two arguments;


function allIndexesOf(array, value){//create function named allIndexes that takes two arguments/parameters
    var indexes = [] ; //creating an empty array (brand new list)

    array.forEach(function(element, index){ //forEach example of a loop to go through the list
        if(element === value) {//conditionally element is the same as the value
            indexes.push(index);//add that to the blank indexes
        }
    });

    /**for (var i = 0; i < array.length; i++) { //for loop example to go through the list
        if (array[i] === value) { //conditionally if the element of the array is the same as the value parameter
            indexes.push(i); //add that index position to my empty array.
        }
    }
    */
    return indexes; //give me all of those positions in an array
}

console.log("this is all the indexes of the fruit apple: " + allIndexesOf(fruits, "apple"));
console.log("this is all the indexes of the fruit guava: " + allIndexesOf(fruits, "guava"));
console.log("this is all the indexes of the fruit pineapple: " + allIndexesOf(fruits, "pineapple"));
console.log("this is all the indexes of the bug ant: " + allIndexesOf(bugs, "ant"));
console.log("this is all the indexes of the bug mosquito: " + allIndexesOf(bugs, "mosquito"));


/**

 * Challenge #2
 * Define a function named removeAll(array, value) that takes in two arguments.
 * The first argument should be an array and the second argument should be a value you wish to

 * Given:
 * var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

 * removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]

 * removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]

 * removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrences.

*/


//create a function called removeAll with two arguments/parameters.

function removeAll(array, value){//this is my named function with two parameters.
    var index = []; //create an index that has an empty array
    array.forEach(function(element) {//forEach loop example
       if(value !== element){
           index.push(element);
       }
    });

    /**for(var i = 0; i < array.length; i++) {//create a for loop that starts from 0 and iterates the array length
        if(array[i] === value) {//conditionally if the element of the array is the same as the value parameter
            index.push(i);//push that index position to my empty array. make sure .push has "()".
        }
    }
     */
    return index;    //return to me all of the indexes of that value in the index array
}

console.log("this is the array removing ant: " + removeAll(bugs, "ant"));
console.log("this is the array removing mosquito: " + removeAll(bugs, "mosquito"));
console.log("this is the array removing roach: " + removeAll(bugs, "roach"));




/**
 * MAKE an array of 20 random numbers between 1 and 6
 *
 *
 *
 *
 */
    //1: make a random variable using the Math.floor formula


function randomizeArray() {//create a function that provides 20 random numbers 1-6
    Math.floor((Math.random() * 6) + 1);//number randomizer
    var array = [];//creates an array
    for(var i = 0; i < 20; i++) {
        array.push();

    }
    console.log(randomizeArray());
    // array.forEach(function(num) {
    //     if(num %2 === 0){
    //         console.log(num + " is even!");
    //     }else{
    //         console.log(num + " is odd!");
    //     }
    // })// for each num in the array either its even or odd.
    // console.log(random);
}


// forEach(function(num){
//     if(num %2 === 0){
//         console.log(num + " is even!")
//     }else if(num %2 !== 0){
//         console.log(num + " is odd!")
//     }else {
//
//     }
// });

Challenges:

    Create a file named dom-challenge.html

0. The html should have a h1 that says "Hello World".

1. Add code that loops through an array of background images every 2 seconds. For example, make a list of background images to be a turtle,
    a lion, a tiger, a bear, a field of grain, a beach, a river, and a lake.




