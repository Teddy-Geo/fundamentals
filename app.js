'use strict';

let hasDrivingLicense = false;
const passTest = true;

if (passTest) hasDrivingLicense = true;
if (hasDrivingLicense) console.log('I can drive');

/* Reserved word for js */
//const interface = 'audio';
//const private = 786;
//const if = 86;


/* Functions */
function logger() {
  console.log('My name is Teo');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(6, 1));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
