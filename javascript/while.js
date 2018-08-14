//WHILE LOOP

//where do you start
//where do you end
//what changes between each time the loop run
//what's the condition by which we run the loop

var count = 2;

while (count <= 65536) {
    console.log(count);
    count *= 2;
}


// DO-WHILE LOOP


var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold;
do {
    conesSold = (Math.floor(Math.random() * 5) + 1);
    if (conesSold <= allCones) {//not selling more than what's in inventory.
        allCones -= conesSold; //allCones = allCones - conesSold;
        console.log("I started with " + (allCones + conesSold) + ". Cones sold " + conesSold + ". Cones left   " + allCones);
    }else if (conesSold > allCones) {
        console.log("Can't sell you " + conesSold + ", I only have " + allCones);
    }
}while (allCones !== conesSold);
    console.log("I have " + allCones + ". I sold " + conesSold);
    console.log("Yay! I sold them all!!");

//

