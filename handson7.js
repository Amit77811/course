let name1 = "Deep";
let name2 = "Ram";
let marks1 = 60;
let marks2 = 59;

let winner_Marks;
let winner_Name;
if(marks1 > marks2){
    winner_Name = name1;
    winner_Marks = marks1;
}else{
    winner_Name = name2;
    winner_Marks = marks2;
}
console.log(winner_Name, "has scored more marks:", winner_Marks);


// 2nd method
let winner1_Name = name1;
let winner1_Marks = marks1;

if(marks2 > marks1){
    winner1_Name = name2;
    winner1_Marks = marks2;
}
console.log(winner1_Name, "has scored more marks:", winner1_Marks);


// ternary operator

//no. is even or not

let num = 515;
// 1st method
let res = (num % 2 === 0) ? "Even" : "Odd";
console.log(num, "is", res);

// 2nd method
num % 2 === 0 ? console.log(num, "is Even") : console.log(num, "is Odd");

//check if a number is positive or negative
let n = -21;
// 1st method
let res2 = n > 0 ? "Positive" : "Negative";
console.log(n, "is", res2);

// 2nd method
n > 0 ? console.log(n, "is Positive") : console.log(n, "is Negative");

// nested ternary operator
//num is neg , pos, neg
let no = 0;
let res3 = (no > 0) ? "positive" : (no < 0) ? "negative" : "zero";
console.log("num3 is", res3);


// switch case examples

let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day is: " + dayName);

let num1 = 7;

switch(true) {
    case (num1 < 5):
        console.log("Number is less than 5");
        break;
    case (num1 >= 5 && num1 <= 10):
        console.log("Number is between 5 and 10");
        break;
    default:
        console.log("Number is greater than 10");
}


let color = "purple";

switch(color) {
    case "red":
        console.log("Color is red");
        break;
    case "green":
        console.log("Color is green");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color not recognized");
}
