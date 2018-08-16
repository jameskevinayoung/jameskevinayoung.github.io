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


function squaredParameters(a, b, c){
    var aSquared = a * a;
    var bSquared = b * b;
    var cSquared = c * c;

    if(aSquared + bSquared === cSquared){
        console.log((aSquared + bSquared) + " = " + );
    }else{
        console.log(false);
    }
    return
}