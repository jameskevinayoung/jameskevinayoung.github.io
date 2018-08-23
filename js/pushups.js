//PUSH UPS
//create a function that takes a sentence
/**function findLongestWord(sentence){//create a function that takes a sentence
    var sentenceSplit =  sentence.split(" ");// Split the string into an array of strings
    console.log(sentenceSplit)
    var longestWord = 0;//Initiate a variable that will hold the length of the longest word

    for(var i = 0; i < sentenceSplit.length; i++){//create a loop that iterates through the string
        if (sentenceSplit[i].length > longestWord){//if the iteration is longer than longest word var
            longestWord = sentenceSplit[i].length;//this is the new value of the longest word
        }
    }
    return longestWord;//returns the longest word
}
console.log(findLongestWord("I like going out to parties with friends or watching TV."));

console.log(findLongestWord("To be or not to be that is the question"));
*/

//returns the longest word


// function squareParameters(a, b, c){
//     var aSquared = a * a;
//     var bSquared = b * b;
//     var cSquared = c * c;
//
//     if(aSquared + bSquared === cSquared){
//         console.log(aSquared + " + " + bSquared + " = " + cSquared);
//     }else{
//         console.log(false);
//     }
//
// }
//
// squareParameters(3, 4, 5);
// squareParameters(5, 7, 3);
// squareParameters(0, 9, 8);


// WRITE A FUNCTION THAT TAKES A STRING AND RETURNS THE FIRST WORD WITH THE GREATEST NUMBER OF REPEATED LETTERS.

// function countReps(word){
//     var mostReps = 0;//initialize variable to hold the number of repeated letters in a word
//
//     for(var i= 0; i < word.length; i++) {// i iterates the word first time
//         var reps = 1;//initialize variable reps with a value to begin with
//
//         for(var j= 0; j < word.length; j++){//j iterates the word second time
//             if(i !== j && word[i].toLowerCase() === word[j].toLowerCase()) { //compares i and j letters && word[i] and word[j]
//                 reps++;//increments number of reps
//             }
//         }
//         if(reps > mostReps){//compares the previous "if" output reps and compares to mostReps variable;
//             mostReps = reps;//if the reps is greater than the previous mostReps, then reps becomes the mostReps
//         } //if 2 is > 1, then 2 becomes the new number of most reps
//     }
//     return mostReps;//give the final mostReps number per argument.
// }
//
//
// console.log(countReps("greenery"));
// console.log(countReps("tennessee"));
// console.log(countReps("aluminium"));
// console.log(countReps("Mississippi"));



//multiply function that takes 2 parameters num1 and num2 where you multiply the two parameters without the "*" key. make a loop:

// function multiplication(x, y){
//     let product = 0;
//     for(let i = 0; i < y - 1; i++){
//         product += x;
//     }
//     return product
// }
// console.log(multiplication(3, 4));
//
// function exponentiate(x, y){
//     let product = 1;
//     for(let i = 0; i < y - 1; i++){
//         product *= x;
//     }
//     return product
// }
// console.log(exponentiate(3, 4));


// function factorial(x){
//
//     if(x === 0 || x === 1 ){//prevents having a negative number or zero number
//         return 1;
//     }
//     for (var i = x - 1; i > 0; i--){//variable starts at the number - 1 and decrements
//         x *= i;//making the x = to the number times the i
//     }
//     return x;
// }
//
// console.log(factorial(10)); //3,628,800;; my function originally returned an extra 0 without the minus 1
//
// function summation(x){
//     for(var i= x-1; i > 0; i--){
//         console.log(x + " + " + i);
//         x += i;
//     }
//     return x;
// }
//
// // var summation = function(num) {//teacher's example
// //     var sum = 0;//initializes the variable
// //     for (var i = num; i > 0; i--){//don't need minus 1 in the i variable
// //         sum += i;
// //
// //     }
// //     return sum;
// // };
//
//
// console.log(summation(5));
// console.log(summation(7));
// console.log(summation(9));




// STUDY HALL 8/22/18
/**
 * WRITE A FUNCTION
 * TAKES A STRING
 * RETURNS STRING W/ "PY" IN FRONT
 * IF ALREADY STARTS W/ "PY", RETURN ORIGINAL STRING
 */
//--------------------------------------------------------
// function prependTo(word){
//     word.toLowerCase();
//     if(word.substring(0,2) === "py"){
//         return word;
//     }else {
//         return "py" + word;
//     }
// }
// console.log(prependTo("pyromania"));
// console.log(prependTo("animal"));
//--------------------------------------------------------



