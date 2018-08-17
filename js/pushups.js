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


// function squaredParameters(a, b, c){
//     var aSquared = a * a;
//     var bSquared = b * b;
//     var cSquared = c * c;
//
//     if(aSquared + bSquared === cSquared){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//     return
// }



// WRITE A FUNCTION THAT TAKES A STRING AND RETURNS THE FIRST WORD WITH THE GREATEST NUMBER OF REPEATED LETTERS.

function countReps(word){
    var mostReps = 0;//initialize variable to hold the number of repeated letters in a word

    for(var i= 0; i < word.length; i++) {// i iterates the word first time
        var reps = 1;//initialize variable reps with a value to begin with

        for(var j= 0; j < word.length; j++){//j iterates the word second time
            if(i !== j && word[i].toLowerCase() === word[j].toLowerCase()) { //compares i and j letters && word[i] and word[j]
                reps++;//increments number of reps
            }
        }
        if(reps > mostReps){//compares the previous "if" output reps and compares to mostReps variable;
            mostReps = reps;//if the reps is greater than the previous mostReps, then reps becomes the mostReps
        } //if 2 is > 1, then 2 becomes the new number of most reps
    }
    return mostReps;//give the final mostReps number per argument.
}


console.log(countReps("greenery"));
console.log(countReps("tennessee"));
console.log(countReps("aluminium"));
console.log(countReps("Mississippi"));