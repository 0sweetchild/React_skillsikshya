// function addNumbers(a, b) {
//   let sum = a + b;
//   return sum;
// }

// Traditional Function Syntax

// const addNumbers1 = (a, b) => a + b;
// Arrow function / Modern way / Es6 Feature to define a function

// const calculateAge = (birthYear) => {
//   let date = new Date();
//   let currentYear = date.getFullYear();
//   let ageCalculated = currentYear - birthYear;
//   return ageCalculated;
// };

// console.log(calculateAge(1999));
// calculateAge(1999);

// const squareNumber = (a) => a * a;
// console.log(squareNumber(8));

// Template Literal
// let collegeName = "Sahid Smarak";
// let address = "Kritipur";
// console.log(
//   "My college name is" +
//     " " +
//     collegeName +
//     "" +
//     "and it is located at" +
//     " " +
//     address,
// );
// concatenation

// let message = `My college name is ${collegeName} and it is located at ${address}, it was established ${2026 - 1991} years ago `;
// console.log(message);

// Object Destructuring

// let person = {
//   name: "Ramesh",
//   age: 21,
//   address: {
//     city: "Kathmandu",
//     wardNo: 22,
//     province: "Bagmati",
//   },
// };

// const { name, age } = person;
// // person.name
// console.log(name);

// Array Destructuring
// const colors = ["red", "blue"];
// const [firstColor, secondColor] = colors;

// console.log(firstColor);

// Spread Operator

// let oddNumbers = [1, 3, 5, 7, 9];
// let evenNumbers = [2, 4, 6, 8];
// let allNumbers = [...oddNumbers, ...evenNumbers];
// console.log(allNumbers);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// const dog = new Animal("Rex");
// // Dog is a object, created from a class.
// dog.speak();

// let dog = {
//   name: "Rex",
// };
