// alert("Welcome to my Website!");
//
// var colorInput = prompt("What's your favorite color?");
// console.log("The user entered " + colorInput);
// alert("Great, " + colorInput + " is my favorite color too!");

//** var moviePrice = 3;
//**
//** var littleMermaidDays = prompt("How many days did you rent Little Mermaid?");
//** console.log("littleMermaidDays = " + littleMermaidDays + " days");
//** var brotherBearDays = prompt("How many days did you rent Brother Bear?");
//** console.log("brotherBearDays = " + brotherBearDays + " days");
//** var herculesDays = prompt("How many days did you rent Hercules?");
//** console.log("herculesDays = " + herculesDays + " days" );


//** var totalDays = parseInt(brotherBearDays) + parseInt(littleMermaidDays) + parseInt(herculesDays);
//** console.log(typeof totalDays);
//** console.log("results = " + totalDays + " days");

//** var grandTotal = totalDays * moviePrice;
//** console.log("Grand total = $" + totalDays * moviePrice);
//** alert("You owe us $" + grandTotal + ". Now pay up!");


// alert("Hey you are a software developer now!")
// var googleContract = prompt("Google wants to pay you HOW MUCH?");
// console.log("$" + googleContract + " at Google");
// var amazonContract = prompt("Amazon wants to pay you HOW MUCH?");
// console.log("$" + amazonContract + " at Amazon");
// var facebookContract = prompt("Facebook wants to pay you HOW MUCH?");
// console.log("$" + facebookContract + " at Facebook");
//
// var googleHours = prompt("For how many hours at Google?");
// console.log("These are your contract hours: " + googleHours)
// var amazonHours = prompt("For how many hours at Amazon?");
// console.log("These are your contract hours: " + amazonHours)
// var facebookHours = prompt("For how many hours Facebook?");
// console.log("These are your contract hours: " + facebookHours)
//
// var weeklyTotal = (googleContract * googleHours) + (amazonContract * amazonHours) + (facebookContract * facebookHours);
// alert("You'll get paid $" + weeklyTotal + " at the end of one week! Can I borrow a $100?")


// var loggedIn = false;
// var admin = true;
// var author = false;
// var editArticle = loggedIn && (admin || author);


var username = prompt("pick a username");
var password = prompt("please put a password");

var passwordIsLongEnough = password.length >= 8;
var passwordContainUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
// var usernameWhitespace = username.trim() != username;
// var passwordWhitespace = password.trim() != password;
var noWhiteSpace = username == username.trim() && password == password.trim();

var goodCredentials = passwordIsLongEnough && !passwordContainUsername && usernameIsShortEnough && noWhiteSpace;
if(goodCredentials) {
    alert("Your account has been created!")
} else {
    alert("You fucked up somewhere!")
}