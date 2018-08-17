var userNumber;

do {
        userNumber = parseInt(prompt("Guess an odd number between 1 and 50?"))
        if (userNumber %2 !== 0) {
            parseInt(prompt("Guess an odd number between 1 and 50?"));
        }else {
            alert("thank you for selecting an Odd number")
        }
    } while (userNumber < 50);
    alert("Your number " + userNumber + " , is odd !!!")



// function fizzBuzz(num){
//     for (var i = 1; i <= num; i++) {
//         if(i % 5 === 0 && i % 3 === 0) {
//             console.log("FIZZBUZZ")
//         }else if(i % 3 === 0){
//             console.log("FIZZ");
//         }else if(i % 5 === 0){
//             console.log("BUZZ");
//         }else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(16)
// fizzBuzz(32)
// fizzBuzz(64)
// fizzBuzz(128)

