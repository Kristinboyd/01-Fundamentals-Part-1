// Beginning Fundamentals Part One
// ************************************************************
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log('Kristin:');
// console.log(29);
// let firstName = 'Molly';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// let job1 = 'programmer';
// let job2 = 'teacher';
// console.log(myFirstJob);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'kristin');

// // Math Operators ***************************************************************
// const now = 2021;
// const ageKristin = now - 1992;
// const ageMolly = now - 2014;
// console.log(ageKristin, ageMolly);
// console.log(ageKristin * 2, ageMolly / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// const firstName = 'Kristin';
// const lastName = 'Boyd';
// console.log(firstName + ' ' + lastName);

// // Assignment Operators
// *************************************************************
// let x = 10 + 5; // 15
// x += 10; // x = x = 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x - 1
// console.log(x);

// // Comparison Operators <, >, >=, <=
// *************************************************************
// console.log(ageKristin > ageMolly);
// console.log(ageKristin >= 18);
// const isFullAge = ageKristin >= 18;

// Coding Challenge #1
// *************************************************************
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

// Strings and Template Literals
// *************************************************************
const firstName = 'Kristin';
const job = 'Software Developer';
const birthYear = 1992;
const currentYear = 2021;
const kristin =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  ' year old ' +
  job +
  '!';
console.log(kristin);

const kristinNew = `I'm ${firstName}, a ${currentYear -
  birthYear} year old ${job}!`;
console.log(kristinNew);
