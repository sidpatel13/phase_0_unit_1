/// I paired with Ian Vincent Shuff on this challenge.



// Pseudocode
// secretNumber = 7
// password = 'just open the door'
// allowedIn = false
// members = ['John']


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John','Frank','Ian','Mary'];






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I thought about putting it like this:
function Info(secretNumber,password, allowedIn, members) {

            this.secretNumber = secretNumber;
            this.password = password;
            this.allowedIn = allowedIn;
            this.members = members;



}

var Info = Info(7, 'just open the door', false, ['John','Frank','Ian','Mary']);
//Allows us to change values of secretNumber, password, allowedIn, and members and call function again
//But, it is more code than our original code. So perhaps we should stick to our original code.
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?
  // Most important thing was taking a look at the tests and checking for what variables needed to be declared
  // what should be the values assigned to them.
//What questions did you have while coding? What resources did you find to help you answer them?
//I wasn't sure initially what the problem was asking us to do. Like write the code for the tests to pass. I was
//confused by some of the terminology on the tests. I used google+ and pairing with my partner to solve this
//quickly and efficienty.
//What concepts are you having trouble with, or did you just figure something out? If so, what?
  //When I was refactoring the code and writing a function to call the values to pass the test, I had
  //to look up how to declare it and call a new function with the needed info. That gave me a bit of trouble.
//Did you learn any new skills or tricks?
//How confident are you with each of the learning objectives?
//I'm pretty confident about the learning objectives.
//Which parts of the challenge did you enjoy?
  //Writing the function above was fun.
//Which parts of the challenge did you find tedious?
// Trying to figure out each part of the test was a bit tedious.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

