/ I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 //Rescue Mission
// moveDown * 2
// moveRight
// moveUp * 2
// moveRight * 2
// moveDown
// attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
// Up
// Right
// Left
// Up
// Attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
//Drink Me
// Right
// Attack
// Right
// Down
// Up
// Right
// Attack


this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy(); 
 
//Taunt the guards
// Right
// BustDownDoor
// Right
// Say('Hey there!')
// Left * 2
// say('Attack!')
// Right
// say('Follow me.')
// Right * 2
// Up
// Right
// say ('You are the ugliest thing ever')
// Down
// Right
// Up
// Right

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("You are the ugliest thing ever");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a trap
// Down * 2
// Down * 2
// say('Hey fool')
// Up * 2
// say('Attack')



this.moveDown();
this.moveDown();
this.say('Hey fool');
this.moveUp();
this.moveUp();
this.say('attack');

//Taunt
// say(taunt) * 4

this.say("Hey!");
this.say('hey idiot');
this.say('yeah you dumbass');
this.say('Come over and die');

//Cowardly Taunt
//move right up
//say(taunt)
//move away
//move away
//say('lure them in here')


this.moveXY(50, 16);
this.say('Ogres are idiots');
this.moveXY(63, 20);
this.moveXY(70, 10);
this.say("I can lure them in here.");

//Commanding Followers




this.moveXY(49, 66); 	//Move towards your troops
this.moveXY(60, 63);	//Move towards troops
this.moveXY(75, 63);	//Move towards troops
this.say("Hail, friends!"); //Rally them together
this.say('Follow me');		//Tell them to follow you
this.moveXY(61,40);			//Move towards enemy
this.say('attack');			//Command troops to attack

//Mobile Artillery
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Attack
this.moveXY(44, 36);	// Move into next range
this.attackXY(67, 55);	// Attack
this.attackXY(64, 50);	// Attack at other enemy
this.attackXY(48, 64);	// Attack another enemy
this.attackXY(47, 53);	// Attack another enemy



// Reflection:

//What parts of your strategy worked? What problems did you face?
// At first, I was moving based on where my character was facing. So say I was turning right to go
// down the path. I would type in right when the command to use would be down. 
// But after I figured out that moving each way has a fixed command: Vertical (Use Up and Down),
// Horizontal (Left and Right), it became quicker to write the code.


//What questions did you have while coding? What resources did you find to help you answer them?
// I just needed to know the syntax for my pseudocode I'd written. For that I relied on looking at some examples
// of the commands.


//What concepts are you having trouble with, or did you just figure something out? If so, what?
// None so far. 


//Did you learn any new skills or tricks?
// Yes, it was interesting seeing how to take an object and manipulate it using a function or method.
// For example, this.attackXY(48, 64) takes the object and combines two functions (attack and moveXY) 
// to create a new function to allow our object to attack a specific point on the map.  

//How confident are you with each of the learning objectives?
// Confident. I think this activity wanted us to see what objects are and how you can manipulate them to do things.

//Which parts of the challenge did you enjoy?
// It was fun attacking some of the enemies using projectile launchers. You wouldn't kill everyone, so
// the enemy left would come attacking you. Need to attack a different coordinate as the enemy was now
// moving. Calibrating correctly to hit the enemy again was fun. 

//Which parts of the challenge did you find tedious?
//Writing many of the commands to move our object was tedious. You would need to write each command on a new line.
	

// Reflection:
//	
