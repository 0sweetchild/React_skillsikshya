// if (true){
//     do something
// }



// let marks = 55; // Fixed the spelling of 'marks'

// if (marks < 40) {
//     console.log("Try Again");
// } else if (marks < 60) {
//     console.log("You've got 1st division");
// }

//Switch Case

let date = new Date();
let day = date.getDay();
console.log(day);

switch(day){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;          
        
}