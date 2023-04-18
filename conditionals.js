// exercise 1 conditionals.js
const raining = false;
const temperature = 42;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// exercise 2 conditionals.js
const isCitizen = true;
const age = 26;

if (isCitizen && age >18){
  console.log("You are eligible to vote.");
}

//exercise 3 conditionals.js
if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}

//exercise 4 conditionals.js
if (!raining){
  console.log("Leave your umbrella at home!");
}