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
// Var adam = {
          object={};
}

2. Give adam a name property with the value "Adam".
Var adam = {
          object={};
          name:"Adam";
}


3. Add a spouse property to terah and assign it the value of adam.

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown",

}


4. Change the value of the terah weight property to 125.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  eyeColor: "brown",
  spouse: adam;
}



5. Remove the eyeColor property from terah.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  spouse: adam;
}


6. Add a spouse property to adam and assign it the value of terah.
Var adam = {
  object:{};
  name:"Adam";
  spouse: terah;
}

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: adam;
  children: function() {
        object={};
  }
}
***check children


8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: adam;
  children: function() {
        object={};
            carson: function(object) {
                  object= {'Carson'};  
        }
  }

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: adam;
  children: function() {
        object={};
        carson: function(object) {
                  object= {'Carson'};  
        }
        carter: function(object) {
                  object= {'Carson'};
        }
  }


10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  spouse: adam;
  children: function() {
        object={};
        carson: function(object) {
                  object= {'Carson'};  
        }
        carter: function(object) {
                  object= {'Carter'};
        }
        colton: function(object) {
                  object= {'Colton'};
        }
  }



11. Add a children property to adam and assign it the value of terah children.

  Var adam = {
  object:{};
  name:"Adam";
  spouse: terah;
  children: function() {
        object={};
        carson: function(object) {
                  object= {'Carson'};  
        }
        carter: function(object) {
                  object= {'Carter'};
        }
        colton: function(object) {
                  object= {'Colton'};
        }
}
*/

// __________________________________________
// Write your code below.
function Adam(spouse) {
    if (spouse == "Terah") {
      return spouse
    } else {
      return "Sorry wrong Spouse name!"
    }
  }

  var adam = {
  object:{},
  name:"Adam",
  spouse: Adam("Terah"),
  children: {
          carson : {
            name: "Carson"
          },
          carter: {
            name: "Carter"
          },
          colton: {
            name: "Colton"
          }
  }         
};

function Terah(spouse) {
    if (spouse == "Adam") {
      return spouse;
    } else {
      return "Sorry, not the spouse" + spouse;
    }
  }

var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: Terah("Adam"),
  children: {
          carson : {
            name: "Carson"
          },
          carter: {
            name: "Carter"
          },
          colton: {
            name: "Colton"
          }
  }     
};
  






// __________________________________________
// Reflection: Use the reflection guidelines
// 
// 
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
