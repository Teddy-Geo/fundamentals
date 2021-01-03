// Values and Variables
const country = "Bulgaria";
const continent = "Europe";
let population = 7000000;

console.log(country, continent, population);

// Data Types
const isIsland = true;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//let, const, var
const officialLanguage = 'bulgarian';

//Basic Operators
console.log(population/2);
console.log(population + 1);

let populationFinland = 6000000;
console.log(population > populationFinland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);


// Strings and Template Literals
let description = country + ' is in ' + continent + ', and its ' + population + ' million speaks ' + officialLanguage;
console.log(description);

let descriptionNew = `${country} is in ${continent}, and it's ${population} million speaks ${officialLanguage}`;
console.log(descriptionNew);

const firstName = 'Teo';
const job = 'writer';
const birthYear = 1991;
const currentYear = 2037;

const teo = "I'm " +firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!'
console.log(teo);

const teoNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(teoNew);
// Taking Decisions: if / else Statements
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving 🚗');
} else{
  const yearsLeft = 18 - age;
console.log(`You have ${yearsLeft} years left to start driving 🚗`);
}

const dateOfBirth = 2012;
let century;
if(dateOfBirth <= 2000){
  century = 20;
} else {
  century = 21;
}
console.log(century);

if(population > averagePopulation){
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} below average`);
}

/* 
 CHALLENGE #1 
    Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
*/
/*
 Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
 */
 /* 
 Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */
const marksHeight = 1.69;
const johnsHight = 1.95;
const marksMass = 78;
const johnsMass = 92;

/* const marksHeight = 1.88;
const johnsHight = 1.76;
const marksMass = 95;
const johnsMass = 85;
 */

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHight ** 2;

const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);
 /* 
 Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
 */
if ( marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher then John's (${johnsBMI})`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher then Mark's (${johnsBMI})`)
}

