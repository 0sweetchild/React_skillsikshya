// this was invented after 2015 being and evaluation of JS
function addNumbers(a, b) {
    let sum = a + b;
    return sum; 
}

// tradition al way of writing function

const addNumbers2 = (a, b) => a+ b; // arrow function

const calculateAge = (birthYear) => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = currentYear - birthYear;
    return age;
} // arrow function

console.log(calculateAge(2003)); // calling the arrow function
calculateAge(2003); // calling the arrow function



const squareNumber = (a) ==> a*a ;
console.log(squareNumber(8));


// templet literal
let collegeName = "ssc";
console.log("my college name is ");

const {name, age} = person;
// person.name


console.log(firstColor);



//spread operator
/Spread Operator
let oddNumbers = [1, 3, 5];
let evenNumbers = [2, 4, 6];
let allNumbers = [...oddNumbers, ...evenNumbers];


console.log(allNumbers); // [1, 3, 5, 2, 4, 6]
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){ 
        console.log(${this.name} barks.);
    }
}

const dog = new Animal("Rex");
dog.speak(); // Rex barks.