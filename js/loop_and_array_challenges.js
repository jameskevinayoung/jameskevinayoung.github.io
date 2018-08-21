/** make a function called randomIntBetween(min,max) that returns a random number between
  *the min and max. "aka between 2 values" */
//What are my math functions that I will be using?
// Math.floor();
// Math.random();
// Math.min();
// Math.max();


function randomIntBetween(min, max) {//create the named function with parameters min, and max
    min = Math.ceil(min);//function returns the smallest integer greater than or equal to a given number.
    max = Math.floor(max);//function returns the largest integer less than or equal to a given number.
    return Math.floor((Math.random() * (max - min)) + min);//return the randomNumber variable between the specified values.
    // The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max **MDN Web Docs**
}

console.log(randomIntBetween(1,10));


/** make a function that () returns either 0 or 1, randomly.
 make a function that () returns an integer between 1 and 6.
 make a function that () returns
 make a function that () returns a random interger between 1 and 20.
 make a function that () returns a random interger between 1 and 12.
 make a function that () returns a random interger between 1 and 4.*/

function randomiZeroOne(){//a function that randomizes a 0 or 1
    return Math.round(Math.random());//return the random number between 0 and 1; round that number up or down
}

console.log(randomiZeroOne());

