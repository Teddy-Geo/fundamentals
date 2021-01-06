// Values and Variables
const country = "Bulgaria";
const continent = "Europe";
let population = 70000000;

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

// Type Conversion and Coercion
// conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(23));
//coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' - '10' + 3);
console.log('23' * 2);
console.log('23' > '16');

let n = '1' + 1;
n = n - 1;
console.log(n);

//Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Teo'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
  console.log(`don't spend it all`);
} else {
  console.log(`you should get a job`);
}

let height;
if(height){
  console.log('hight is defined');
} else {
  console.log('hight is UNDEFINED');
}

// Equality Operators: == vs. ===
 const ageTeo = 18;
if(ageTeo === 18) console.log('You become an adult');

const favoriteNum = Number(prompt(`What's your favorite number?`));
console.log(favoriteNum);
console.log(typeof(favoriteNum));

if(favoriteNum === 23){ //'23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if(favoriteNum === 7){
  console.log('7 is even better number');
} else {
  console.log('Sorry no matching number');
}

if(favoriteNum !== 23) console.log('Why not 23?');

/////////////////////////

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) console.log('Only one border!');
else if(numNeighbours > 1) console.log('More the one border!');
else console.log('No borders!');


// Logical Operators
if(officialLanguage === 'english' && population < 50000000 && !isIsland) console.log('You should live in Bulgaria :)');
else console.log('Bulgaria does not meet your criteria :('); 

if(officialLanguage === 'english' || population < 50000000 && isIsland) console.log('You should live in Bulgaria :)');
else console.log('Bulgaria does not meet your criteria :('); 

//  "The switch Statement"
const day = 'wednesday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan');
    console.log('Go to');
    break;
    case 'tuesday':
      console.log('Prepare meal');
      console.log('Prepare bed');
      break;
      case 'wednesday':
      case 'thursday':
        console.log('Write code');
        break;
        case 'friday':
          console.log('Record video');
          break;
        case 'saturday':
        case 'sunday':
          console.log('Rest');
          break;
  default:
    console.log('Not a valid day');
    break;
}

const allLanguages = 'spanish';

switch (allLanguages) {
  case 'chines':
    case 'mandarin':
      console.log('MOST number of native speakers!');
    break;
    case 'spanish':
      console.log( '2nd place in number of native speakers');
      break;
      case 'english':
        console.log('3rd place');
        break;
        case 'hindi':
          console.log('Number 4');
          break;
          case 'arabic':
            console.log('5th most spoken language');
            break;
  default:
    console.log('Great language too');
    break;
}
// The Conditional (Ternary) Operator
const userAge = 23;
// userAge >= 18 ? console.log('You can drink 🍸') : console.log('You can drink 🥛');

const drink = userAge >= 18 ? '🍸' : '🥛';
console.log(`You can drink ${drink}`);

const average = population > 33000000 ? 'above' : 'below';
console.log(`Bulgarian population is ${average} average`);

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


/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below */
const dolphinsAvarage = (96 + 108 + 89)/ 3;
const koalasAvarage = (88 + 91 + 110)/ 3;

/* 2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score) */

if(dolphinsAvarage > koalasAvarage) console.log(`Dolphins average score of ${dolphinsAvarage} is grater then Koala's average score of ${koalasAvarage}. Congratulations to Dolphins, they win!!!`);
else if (dolphinsAvarage === koalasAvarage) console.log(`There is a draw! `);
else console.log(`Koalas average score of ${koalasAvarage} is grater then Dolphin's average score of ${dolphinsAvarage}. Congratulations to Koalas, they win!!!`);

/* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks */
const dolphinsNextAverage = (97 + 112 + 81)/3;
const koalasNextAverage = (109 + 95 + 86)/3;

if(dolphinsNextAverage >= 100 && dolphinsNextAverage > koalasNextAverage){
  console.log(`Dolphin wins with ${dolphinsNextAverage}!`);
} else if(koalasNextAverage >= 100 && koalasNextAverage> dolphinsNextAverage){
  console.log(`Koalas wins with ${koalasNextAverage}`);
} else {
  console.log(`No one wins both scores averages are less than 100, Koalas - ${koalasNextAverage} and Dolphins ${dolphinsNextAverage}`);
}
/* 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy */
const dolphinsFinalAverage = (97 + 112 + 101)/3;
const koalasFinalAverage = (109 + 95 + 106)/3;

if(dolphinsFinalAverage === koalasFinalAverage && koalasFinalAverage >= 100 && dolphinsFinalAverage >= 100) console.log (`The conditions for draw are met`);
/* Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */


//Coding Challenge #4
/* Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%. */

/*  Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement § (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/
const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is 
${bill + tip}`);
