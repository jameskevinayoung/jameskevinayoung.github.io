(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        //Object Literal Notation
    /**
     * var person = {
        firstName: " James",
        lastName: "Young"
        };
     console.log(person.firstName);
     console.log(person.lastName);
    */


     var person = {}; //create the object in a variable
     person.firstName = "James"; //create firstName property
     console.log(person.firstName);
     person.lastName = "Young"; //create lastName property
     console.log(person.lastName);





    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //Object Literal Notation example
   /** var person = {
        firstName: " James",
        lastName: "Young"
        sayHello: function(){
            console.log("Hello from " + this.firstName + " " + this.lastName + "!")
        }

        };
}*/

    person.sayHello = function () {//create a sayHello function to person object
        return "Hello from " + this.firstName + " " + this.lastName + "!";//returns firstName and lastName
    };
    console.log(person.sayHello());// log function


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [//create the shoppers object
        {//create the properties "name" and "amount" for each shopper
            name: 'Cameron',
            amount: 180,
        },

        {
            name: 'Ryan',
            amount: 250,
        },
        {
            name: 'George',
            amount: 320,
        }
    ];

    shoppers.discountOffer = function () {//create a method to iterate through each shopper

        shoppers.forEach(//create a loop to go through each shopper
            function (shopper) {//with a function goes through each shopper's array.
                var discount = shopper.amount * .12;//a variable the discount formula

                if (shopper.amount > 200) {//create conditional statements that compare the amount to the minimum of the  discount offer
                    console.log(shopper.name + " spent $" + shopper.amount.toFixed(2) + ". Got a discount of $" + discount.toFixed(2) + " for a total of $" + (shopper.amount - discount).toFixed(2));
                } else {
                    console.log(shopper.name + " spent $" + shopper.amount.toFixed(2) + ", but didn't get a discount");
                }
            }
        );


    };

    shoppers.discountOffer();//invoke the method.

    /** forEach example array.forEach(function(element, index, array){});
     * shoppers.forEach(function(shopper){
     *     console.log(shopper); //just to see all of the shoppers
     *     var total;
     *     var discount;
     *     if(shopper.amount > 200){
     *         discount = shopper.amount * .12;
     *         total = shopper.amount - discount;
     *     }else {
     *         total = shopper.amount;
     *     }
     *     console.log(shopper.name + " spent $" + shopper.amount.toFixed(2) + ". Got a discount of $" + discount.toFixed(2) + " for a total of $" + total.toFixed(2));)
     *
     * });
     */




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books =[//create the object array
        {//this object has an array of properties
            title: "The Salmon of Doubt",
            author: {//this property is an object with its own array of property
                firstName: "Douglas",
                lastName: "Adams",
            }
        },
        {
            title: "Black Privilege: Opportunity Comes To Those Who Create It ",
            author:{
                firstName: "Charlamagne",
                lastName: "Da God"
            }
        },
        {
            title: "Tailspin",
            author: {
                firstName: "Sandra",
                lastName: "Brown",
            }

        },
        {
            title: "Crazy Rich Asians",
            author: {
                firstName: "Kevin",
                lastName: "Kwan"
            }
        },
        {
            title: "Origin",
            author:{
                firstName: "Dan",
                lastName: "Brown"
            }
        }
    ];//logging
    console.log(books[0].title);
    console.log(books[1].title);
    console.log(books[2].title);
    console.log(books[3].title);
    console.log(books[4].title);
    console.log(books[0].author.firstName + " " +books[0].author.lastName);
    console.log(books[1].author.firstName + " " +books[1].author.lastName);
    console.log(books[2].author.firstName + " " +books[2].author.lastName);
    console.log(books[3].author.firstName + " " +books[3].author.lastName);
    console.log(books[4].author.firstName + " " +books[4].author.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

books.forEach(function(book, index){//forEach loop on object books; have the function contain the book and index parameters
    console.log("Book #" + (index+1));//
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
});



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();