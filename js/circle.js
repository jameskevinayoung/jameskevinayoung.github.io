(function() {
    "use strict";

    // create a circle object
    // JKY: STUMPED? THAT'S OK. REMEMBER "DON'T OVER THINK THE PROCESS" DO WHAT THE INSTRUCTIONS ARE ASKING
    var circle = {//this is the circle object
        radius: 3,//this is the radius property of the circle. "circle.radius"

        getArea: function () {//this is a method property for circle. " circle.getArea"
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * (this.radius * this.radius);
            //this is a local variable within the getArea method of circle.

            return area; // TODO: return the proper value
        },// this returns the value of the variable that can be used when this method is later is assigned.

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let result = this.getArea();//this variable is assigned the value of the getArea method.
            //You use the "this.getArea" because the method is being referenced in this circle object.

            // If doRounding is true, round the result to the nearest integer.

            if(doRounding){
                console.log(Math.round(result));
            }else {
                console.log(this.getArea());//
            }


            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5; //just change the object.property
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();