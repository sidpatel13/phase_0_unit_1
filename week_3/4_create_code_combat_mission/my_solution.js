// I worked [by myself, with:] on this challenge

// Your mission description:
// Kill the evil monkey
// Rescue the Princess
// Bring her back to the castle

// Pseudocode
// move towards evil monkey
// dodge attack
// attack!
// 
// ask princess('Are you ok?')
// ask princess ('Follow me')
//
//
// walk back to the castle
// say('goodbye princess, nice rescuing you')


// Initial Code
//Part 1 of code
var me = new Object();

me.moveTowardsMonkey();

function Dodge(monkeyAttack) {
	if (monkeyAttack = true) {
		me.moveLeft();
	}
};

me.moveTowardsMonkey();
me.attackNearbyEnemy();

//Part 2 of code

me.moveTowardsPrincess();
me.say('Are you ok?');
me.say('Follow me!');

//Part 3 of code

me.moveTowardsCastle();
me.say('goodbye princes, nice rescuing you!')


// Refactored Code
//I would stick with the original code because it is simple and does not need any more additions or subtractions to it.





// Reflection
// What parts of your strategy worked? What problems did you face?
// It helped that I created a simple strategy that allowed me create actions that can make sense to someone reading the code.
// I didn't encounter too many problems.
//What questions did you have while coding? What resources did you find to help you answer them?
// I relied on the JavaScript material to answer my questions, mainly regarding how to create new variables and assign them to be objects.
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I learned how the methods and functions we use to manipulate objects work.
//Did you learn any new skills or tricks?
//How confident are you with each of the learning objectives?
//Really confident.
//Which parts of the challenge did you enjoy?
//Writing code
//Which parts of the challenge did you find tedious?
// None!
// 
// 
// 
// 
// 
// 
