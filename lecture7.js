// let name1 = "Suresh";
// let name2 = "Ramesh";
// let marks1 = 30;
// let marks2 = 40;

// // 1st method

// // let winner_Name;
// // let winner_Marks;

// // if(marks1 > marks2){
// //     winner_Name = name1;
// //     winner_Marks = marks1;
// // }else{
// //     winner_Name = name2;
// //     winner_Marks = marks2;
// // }
// // console.log(winner_Name, "has scored more marks:", winner_Marks);


// // 2nd method
// let winner_Name = name1;
// let winner_Marks = marks1;

// if(marks2 > marks1){
//     winner_Name = name2;
//     winner_Marks = marks2;
// }
// console.log(winner_Name, "has scored more marks:", winner_Marks);

// ternary operator

//no. is even or not
let num = 11;

// 1st method
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(num, "is", result);

// 2nd method
num % 2 === 0 ? console.log(num, "is Even") : console.log(num, "is Odd");

//check if a number is positive or negative
let num2 = -5;
// 1st method
let result2 = num2 > 0 ? "Positive" : "Negative";
console.log(num2, "is", result2);

// 2nd method
num2 > 0 ? console.log(num2, "is Positive") : console.log(num2, "is Negative");

// nested ternary operator
//num is neg , pos, neg
let num3 = 0;
let result3 = (num3 > 0) ? "positive" : (num3 < 0) ? "negative" : "zero";
console.log("num3 is", result3);


// Homework: Try all yesterdays questions using ternary operator

// 1. Even or Odd
let n = 4;
console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);

// 2. Adult or Minor
let age = 25;
console.log(age >= 18 ? "Adult" : "Minor");

// 3. Half even or odd
// let num = 54;
// let half = num / 2;
// console.log(half % 2 === 0 ? `${half} is even` : `${half} is odd`);

// 4. == vs ===
let a = "10";
const b = 20;
let d = 20;
console.log(a == b ? "Both a & b are equal" : "a & b are not equal");
console.log(b === d ? "Both b & d have same value and datatype" : "b & d are not identical");

// 5. Grading system
let score = 76;
let grade = (score >= 80) ? "Grade: A" : (score >= 60) ? "Grade: B" : (score >= 40) ? "Grade: C" : "Fail";
console.log(grade);

// 6. Age & gender check
let age1 = 2;
let gender = "male";
console.log(age1 >= 18 ? (gender === "male" ? "Mature Boy" : "Mature Girl") : "Minor");

// 7. Winner or Loser ticket
let ticket_Num = 11;
console.log(ticket_Num === 11 || ticket_Num === 101 ? "Winner" : "Loser");

// 8. User login & subscription
let user = true;
let subscription = true;
console.log(user ? (subscription ? "User is logged in and has a subscription" : "User is logged in but doesn't have a subscription") : "User is not logged in");

// 9. Good or bad number
let num1 = 10;
console.log(num1 !== 17 ? "Good number" : "Bad number");

// 10. Palindrome check for 3-digit number
let p = 121;
console.log(Math.floor(p / 100) === p % 10 ? `${p} is a palindrome` : `${p} is not a palindrome`);

// 11. Decimal or Integer
let q = 10;
console.log(q % 1 !== 0 ? `${q} is a decimal number` : `${q} is Integer number`);

// 12. Math.ceil
let a1 = Math.ceil(11.01);
console.log(a1);  // This one is already simple, ternary not needed


// 1st method
let winner_Name1 = (marks1 > marks2) ? name1 : name2;
let winner_Marks2 = (marks1 > marks2) ? marks1 : marks2;
console.log(winner_Name1, "has scored highest marks:", winner_Marks2);

// print greatest among 3 numbers
let num4 = 20;
let num5 = 120;
let num6 = 40;

let greatest = (num4 > num5) ? ((num4 > num6) ? num4 : num6) : ((num5 > num6) ? num5 : num6);
console.log("Greatest number is:", greatest);


// Explore : multiple statements inside a true/false part of ternary operator

//max among 2 & 3 numbers usins Math.max()
// console.log(Math.max(num4, num5, num6));

// print 1-7 into week days
// let day = 6;
// let dayName = (day === 1) ? "Monday" :
//               (day === 2) ? "Tuesday" :
//               (day === 3) ? "Wednesday" :
//               (day === 4) ? "Thursday" :
//               (day === 5) ? "Friday" :
//               (day === 6) ? "Saturday" :
//               (day === 7) ? "Sunday" : "Invalid day";
// console.log("Day", day, "is", dayName);

// //switch case
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // Grading system using switch case
// let score = 70

// switch(true){
//     case score >= 80:
//         console.log("Grade A");
//         break;
//     case score >= 60:
//         console.log("Grade B");
//         break;
//     case score >= 40:
//         console.log("Grade C");
//         break;
//     default:
//         console.log("Fail");
// }
