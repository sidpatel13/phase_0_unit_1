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
