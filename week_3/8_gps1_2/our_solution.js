// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Sid Patel
//  2. Adam Hardy


// 1. "YOU SIGNED... WHO?!"
function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote; 

}

var Adam = new Client("Adam", 31, "Hi there");


// 2. "Here they Come!"

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristinBell = new Client("Kristin Bell",33, "Do you wanna build a snowman?");
var jimCarrey = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// now put these people into the clients array






// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

clients = [adamSandler, kristinBell, jimCarrey, shooterMcGavin];
console.log(clients[3]);


// 4. "SHOW 'EM OFF!"
for (var i = 0; i < clients.length; i++) {
  console.log(clients[i].name);
  console.log(clients[i].age);
  console.log(clients[i].quote);
};




// ** BONUS **


//  Your Reflection:
//What parts of your strategy worked? What problems did you face?
//I think brainstorming together with my partner before approaching writing the code was very important.
//I think we went in with the game plan and we relied on each others suggestions.
//We also stuck to our roles as drivers and navigators well. I think we didn't always have a lot of time to look
//things up so it was important to talk to each other to figure out the changes to make to the code.
//What questions did you have while coding? What resources did you find to help you answer them?
//I think questions usually pertained to "where exactly I should start". The first problem you can represent "adam",31,
//and "Hi there" as values of variables, but instead we used a function. I think asking for help was important and relying
//on each other and the instructor helped. 
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I think these concepts were the building blocks of more complex things you can do with them. Those are areas I'll need to work on.
//Did you learn any new skills or tricks?
//How confident are you with each of the learning objectives?
//I have a good amount of confidence with each of the learning objectives.
//Which parts of the challenge did you enjoy?
//I think navigating was fun, especially since Adam was such a great driver. I felt he was already knew how to do parts of
//the problem on his own, but didn't overstep any boundaries and allowed me to guide him. 
//Which parts of the challenge did you find tedious?
//I think testing our code to ensure it would work was a bit tedious especially since we had little syntax errors.
