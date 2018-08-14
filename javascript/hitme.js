// var hitMe = function(){
//     return Math.floor((Math.random() * 11) + 1)
// }
//
// var count = 0;
// if (confirm("Do you want to play a game?")) {
//     while (count <= 21) {
//         if (confirm("Your score is " + count + ". Do you want another card?")) {
//             count += hitMe();
//         }else {
//             break;
//         }
//     }
//     if (count > 21) {
//         alert("You busted!!!");
//     }else {
//         alert("your score is " + count);
//     }
// }

// if(confirm("Do you want to play a game?")) {
//     var magicNumber = Math.floor((Math.random() * 11) + 1);
//     var ourGuess; //we didn't put a value to the variable here because we want to define the variable in the loop
//
//     do {
//         ourGuess = parseInt(prompt("Guess a number between 1 and 100?"))
//         if (ourGuess < magicNumber) {
//             alert("Your guess is too low.");
//         }else if (ourGuess > magicNumber) {
//             alert("Your guess is too high.");
//         }
//     } while (ourGuess !== magicNumber)
//     alert("Congrats, You've guessed it!!!")
// }


for (var count = 0; count< 10; count++) {
    console.log(count);
}

for (var i = 10; i > 0; i--) {
    console.log(i);
    if (i == 6){
        break;
    }

} //Stops at 6

for (var i = 0; i > 0; i--){
    if (i == 6) continue;
    console.log(i);
}//Skips 6



//DISSECTING A FOR LOOP

// for (initialization; condition; increment) {
//     //code here
// }
// for (start; stop; step) {code here}

