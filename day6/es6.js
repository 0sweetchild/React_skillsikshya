// ES6 was introduced after 2015 and is the modern way to write JavaScript
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}

// Arrow function
const addNumbers2 = (a, b) => a + b;

const calculateAge = (birthYear) => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = currentYear - birthYear;
    return age;
};

console.log(addNumbers(10, 20));
console.log(addNumbers2(5, 7));
console.log(calculateAge(2003));
calculateAge(2003);

const squareNumber = (a) => a * a;
console.log(squareNumber(8));

// Template literal
let collegeName = "SSC";
console.log(`My college name is ${collegeName}`);

// Destructuring
const person = { name: "John", age: 22 };
const { name, age } = person;
console.log(name, age);

const colors = ["red", "green", "blue"];
const firstColor = colors[0];
console.log(firstColor);

// Spread operator
let oddNumbers = [1, 3, 5];
let evenNumbers = [2, 4, 6];
let allNumbers = [...oddNumbers, ...evenNumbers];

console.log(allNumbers); // [1, 3, 5, 2, 4, 6]

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Animal("Rex");
dog.speak(); // Rex barks.