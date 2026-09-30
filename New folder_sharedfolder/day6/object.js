let person = {
  name: "Ramesh",
  age: 32,
  address: {
    city: "Kathmandu",
    wardNo: 10,
    province: "Bagmati",
  },
  calculateBirthYear: function () {
    year = 2026 - this.age;
    console.log(year);
  },
  greet: function () {
    console.log("Welcome", this.name);
  },
};
console.log(person.address.province);

// person.address;
// person.greet();
// person.calculateBirthYear();

// console.log(person.name); // dot notation
// console.log(person["address"]); // bracket notation
// person.address = "Pokhara";
// console.log(person["address"]); // bracket notation

// here, name, age, address are called keys, properties
// and Ramesh, 32, Kathmandu are called values.
// Object has multiple key-value pair, separated by ","
// here, greet is called "Method" and it has following way to call.
// person.greet()
