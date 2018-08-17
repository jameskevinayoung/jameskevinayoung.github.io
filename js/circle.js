(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * (circle.radius * circle.radius);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var result = this.getArea();

            // If doRounding is true, round the result to the nearest integer.

            if(doRounding === true){
                console.log(Math.round(result));
            }else {
                console.log(this.getArea());
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