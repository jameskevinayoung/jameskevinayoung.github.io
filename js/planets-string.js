(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     **/

    var planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);

    var delimeter = "</li><li>";
    var planetList = "<ul><li>" + planetsArray.join(delimeter) + "</li></ul>"
    document.body.innerHTML = planetList;

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

//     function listOfPlanets() {
//         for (var i = 0; i < 2; i++) {
//             if(i === 0) {
//                 console.log("<ul>");
//                 planetsArray.forEach(function(element){
//                     console.log("<li>" + element + "</li>")
//                 })
//             }else {
//                 console.log("</ul>");
//                 break;
//             }
//         }
//     }
// listOfPlanets();


//// START WITH YOUR  ARRAY OF PLANETS

//// CREATE AN OPENING <UL> TAG
//// ITERATE <LI> AND </LI> TAGS AROUND EACH ITEM IN THE ARRAY. TO DO THIS I NEED A FUNCTION TO PROCESS IT
function listPlanets(){
    console.log("<ul>");
        planetsArray.forEach(function(element){
            console.log("<li>" + element + "</li>");
        })
        console.log("</ul>");
}
listPlanets()

//// CREATE A CLOSING </UL> TAG


})();

//FIZZBUZZ PRACTICE
//     for (var i = 1; i <= 25; i++) {//create for loop
//         if (i % 15 == 0) { //this is the lowest common multiple for 3 and 5
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 == 0) {//second condition for fizz
//             console.log("Fizz");
//         }
//         else if (i % 5 == 0) {//third condition for buzz
//             console.log("Buzz");
//         }
//         else {//log all other numbers
//             console.log(i);
//         }
//     }

