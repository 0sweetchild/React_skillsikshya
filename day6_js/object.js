
// let person = {

//     name :"Ramesh",
//     age: 32,
//     address : "kathmandu",
//     greet : function(){
//         console.log("welcome", this.name);
//     },
// };


// console.log(person.name);
// console.log(person["address"]);

// // here name, addresses are called keys, properties 
// // and ramesh 32 kathmandu are called values 
// // Object has multiple key value pair, seperated by ","
// // here greet is called "Method"




let person = {
    name: "Ramesh",
    age: 32,
    address: "kathmandu",

    greet: function() {
        console.log("welcome", this.name);
    },
};

console.log(person.name);
console.log(person["address"]);

// Keys are called properties
// Ramesh, 32, kathmandu are values
// greet is a method and it has following way to call  person.greet()
