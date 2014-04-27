// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
 var adam = {}


2. Give adam a name property with the value "Adam".
 adam.name = "Adam"

3. Add a spouse property to terah and assign it the value of adam.

terah.spouse = adam

4. Change the value of the terah weight property to 125.
terah.weight = 125



5. Remove the eyeColor property from terah.

delete terah.eyeColor


6. Add a spouse property to adam and assign it the value of terah.

adam.spouse = terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

terah.children = {}


8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

terah.children.carson = {name:Carson}

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".


terah.children.carter = {name:Carter}


10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

terah.children.colton = {name:Colton}



11. Add a children property to adam and assign it the value of terah children.

adam.children = terah.children
 
*/

// __________________________________________
// Write your code below.

 var adam = {};
 adam.name = "Adam";
 terah.spouse = adam;
 terah.weight = 125;
 delete terah.eyeColor;
 adam.spouse = terah;
 terah.children = {};
 terah.children.carson = {name:'Carson'};
 terah.children.carter = {name:'Carter'};
 terah.children.colton = {name:'Colton'};
 adam.children = terah.children;
 






// __________________________________________
// Reflection: Use the reflection guidelines
// 
// What parts of your strategy worked? What problems did you face?
// I tried to test my code in the command line as much as I can. The main problem was debugging the code.
// Also, in certain instances the test would not run. For example, I had trouble assigning the spouse property to variable adam.
// What questions did you have while coding? What resources did you find to help you answer them?
// I used google to get answers to questions like "how to access values of other variables within you properties". 
// Some of the answers helped, for others I had to go through examples of object literals.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I think the one concept I still can't figure out is how to assign a property in one variable a value of another variable.
// Did you learn any new skills or tricks?
// How confident are you with each of the learning objectives?
// I'm somewhat confident. I still think there is so much more I can learn about JavaScript and assigning different values to
// properties in object literal notation. I tried using functions within properties in object literals, but I can use more help.
// Which parts of the challenge did you enjoy?
// Writing the pseudocode was fun.
// Which parts of the challenge did you find tedious?
// Debugging was kind of a pain, since little syntax error can stop your code from running properly.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
