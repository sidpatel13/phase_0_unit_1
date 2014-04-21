// Part 1
function Sum(array){
var array = [1,2,3,4,5,6,7,8,9,10];
var total = 0;

 for(i = 0; i < array.length;i++){
total += parseInt(array[i],10);  
 };
 return total;
};

Sum(Array);

// Part 2
function Mean(array) {
var array = [1,2,3,4,5,6,7,8,9,10];	
var total = 0;

for(i = 0; i < array.length;i++){
total += parseInt(array[i],10);  
 };
 return total/(array.length);
};

Mean(Array);

// Part 3
function countRepeat(array) {
    var solo = {};

    for(var i = 0; i < array.length; i++) {
        solo[array[i]] = (solo[array[i]] || 0) + 1;
    } 

    var max = { val: array[0], count: 1 };
    for(var v in solo) {
        if(max.count < solo[v]) { max = { val: v, count: solo[v] }; }
    }  

    return max.val;
}

var array = [1,2,3,4,5,6,7,8,9,10,10];
countRepeat(array);

//Reflection
//What parts of your strategy worked? What problems did you face?
//Going over for loops and creating functions helped. We faced a problem understanding some of the pseudocode and 
//how it would translate to actual code. I think figuring out what tools you can use to solve the problem is important. 
//What questions did you have while coding? What resources did you find to help you answer them?
//I think for Part 3 we needed to figure out how to store our values in a hash and institute a counter to find the mode.
//We knew we would need to use a loop, but visualizing the problem and translating it to code was important. I think 
//stackoverflow discussions were important in showing us how we can use a counter. Some of the JavaScript resources for data structures,
// arrays, functions, and loops helped. The links were in this week's folder.
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//Thanks to a lot of help from my peers I was able to understand Part 3, but I'm still having trouble with understanding different ways
//we can create a counter, iterate an array, construct a function etc. It will be interesting to see how someone else solved these problems.
//Did you learn any new skills or tricks?
//I've started visualizing what certain parts of the code do in my head. That has been a useful strategy in working through code and
//understanding what it can do. Looking at it in parts is useful.
//How confident are you with each of the learning objectives?
//I'm somewhat confident. I think I can definitely use more practice on JavaScript problems such as the one we did here.
//I think it may be cool to see some code reviews of how others see a certain piece of code translated it their head.
//Which parts of the challenge did you enjoy?
//I think creating some of the for loops and functions was fun.
//Which parts of the challenge did you find tedious?
//I think writing code exactly how it was shown in the pseudocode was a bit challenging and tedious. 

