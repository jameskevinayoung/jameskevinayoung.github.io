(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

var names = ["James", "Kevin", "Alexander", "Young"];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

console.log("Name 1: " + names[0]);
console.log("Name 2: " + names[1]);
console.log("Name 3: " + names[2]);
console.log("Name 4: " + names[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {//the array is plural; the function is the argument; the function parameter is singular
        console.log(name);
    })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var first = function (input) {
        console.log(input[0]);
    }
    var second = function(input) {
        console.log(input[1]);
    }
    var last = function(input) {
        console.log(input[3]);
    }

    // function first(input){
    //     if(Array.isArray(input)) {
    //         return input[0];
    //     }
    // }
    // function second(input){
    //     if(Array.isArray(input)) {
    //         return input[1];
    //     }
    // }
    // function last(input){
    //     if(Array.isArray(input)) {
    //         return input[input.length - 1];
    //     }
    // }



    first(names);
    second(names);
    last(names);

    names.push("Jakai","Amare");
    console.log(names);
    names.unshift("Kareem", "Marcus");
    console.log(names);
})();