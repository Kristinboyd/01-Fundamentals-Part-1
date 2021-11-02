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
// const firstName = 'Kristin';
// const job = 'Software Developer';
// const birthYear = 1992;
// const currentYear = 2021;
// // String example
// const kristin =
//   "I'm " +
//   firstName +
//   ', a ' +
//   (currentYear - birthYear) +
//   ' year old ' +
//   job +
//   '!';
// console.log(kristin);
// // Template Literal example
// const kristinNew = `I'm ${firstName}, a ${currentYear -
//   birthYear} year old ${job}!`;
// console.log(kristinNew);

// Taking Decisions: if/else Statements
// *************************************************************
// const age = 15;
// const isOldEnough = age >= 16;
// // One way
// if (isOldEnough) {
//   console.log('Kristin can start driving license');
// }
// // Another way
// if (age >= 16) {
//   console.log('Kristin can start driving license');
// } else {
//   const yearsLeft = 16 - age;
//   console.log(
//     `Kristin is not old enough to start driving license. She has ${yearsLeft} years left.`
//   );
// }
// const birthYear = 1992;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Coding Challenge #2
// *************************************************************
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiMark, bmiJohn);
// if (bmiMark > bmiJohn) {
//   console.log(
//     `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})!`
//   );
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
// }

// Type Conversion and Coercion
// *************************************************************
// Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(Number(`Kristin`)); // NaN
// console.log(typeof NaN); // shows that NaN is still a number type
// console.log(String(23), 23);
// // Type Coercion
// console.log(`I am ` + 23 + ` years old`);
// // the plus symbol auto converts all numbers to strings
// console.log('23' - '10' - 3); // returns 10
// console.log(`23` + `10` + 3); // return string concatination 23103
// console.log(`23` * `2`); // returns 46
// console.log(`23` / `2`); // returns 11.5
// console.log(`23` > `18`); // returns true
// let n = `1` + 1;
// n = n - 1;
// console.log(n); // solution returns 10

// Truthy and Falsy Values
// **************************************************************
// 5 falsey values 0, ' ', undefined, null, NaN
// console.log(Boolean(0)); // returns false
// console.log(Boolean(undefined)); // returns false
// console.log(Boolean('Kristin')); // returns true beacuse it is not empty
// console.log(Boolean({})); // returns true
// const money = 110; // if money is 0 it will return falsy
// if (money) {
//   console.log(`Don' spend it all ;)`);
// } else {
//   console.log(`You should get a job!`);
// }
// const height = 123;
// if (height) {
//   console.log(`YAY! Height is defined`);
// } else {
//   console.log(`Height is UNDEFIND`);
// }

// Equality Operators == vs ===
// ***************************************************************
// === does not perform type coercion, just performs comparision, strict
// const age = 18;
// if (age === 18) {
//   console.log(`You are 18 years old! (strict)`);
// }
// // or
// if (age === 18) console.log(`You are 18 years old! (strict)`);
// // == performs type coercion, loose, avoid as often as possible
// '18' == 18; // returns true
// if (age == 18) console.log(`You are 18 years old! (loose)`);

// const favorite = Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// // strings always print in white
// if (favorite === 23) {
//   console.log(`cool! 23 is an amazing number!`);
// } else if (favorite === 7) {
//   console.log(`7 is also a cool number!`);
// } else {
//   console.log(`number is not 23 or 7!`);
// }

// if (favorite !== 23) {
//   console.log(`Why not 23?`);
// }

// Boolean Logic
// ****************************************************************
// AND logic && >>> they all must be TRUE to work
// OR logic || >>> one must be TRUE to work
// NOT logic ! >>> one must be FALSE to work

// Locical Operators
// ****************************************************************

const hasDriversLicense = true; // A variable
const hasGoodVision = true; // B variable

console.log(hasDriversLicense && hasGoodVision); // returns true
console.log(hasDriversLicense || hasGoodVision); // returns true
console.log(!hasDriversLicense, !hasGoodVision); // returns false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log(`Kristin is able to drive`);
} else {
  console.log(`Someone else should drive`);
} // returns Krisitn is able to drive if true

// const isTired = true; // C variable
// console.log(hasDriversLicense || hasGoodVision || isTired); // returns true

// const isTired = false; // C variable
// console.log(hasDriversLicense && hasGoodVision && isTired); // returns false

const isTired = true; // C variable
console.log(hasDriversLicense && hasGoodVision && !isTired); // returns false