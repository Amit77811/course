// ================ functions ==================
//  functions are defined as resuable blocks of code
// DRY principle : Do not repeat yourself


// function definition or function declaration
function greetUser(){
    console.log("Hello World");
}

// calling or invoking a function
greetUser();
greetUser(); 
greetUser(); 
greetUser(); 
console.log("Bye World"); 
console.log("Bye World"); 
greetUser(); 
greetUser(); 
greetUser();

//parameterized function
function greetUser1(name){
    console.log("Hello "+name);
}

// "Amit" is argument passed to the function 
greetUser1("Amit");

function showCheckInTime(name,time){
    console.log("Hello "+name + ", your check-in time is "+ time);
}
showCheckInTime("Amit","10:00 AM");

// Q: write a single funcyion to print these lines while using only one console.log
// Hello Riya, Welcome to our App
// Hello Pratik, Welcome to our Website
// Hello Deep, Welcome to our office
function welcomeUser(name,platform){
    console.log("Hello "+name+", Welcome to our "+platform);
}
welcomeUser("Riya","App");
welcomeUser("Pratik","Website");
welcomeUser("Deep","office");

function sum(a,b){
    const c = a+b;
    return c;
}

const sum1 = sum(12,5);
const sum2 = sum(120,50);
const sum3 = sum(1,5);

console.log({sum1,sum2,sum3});


// Q: write a function to find the greatest of 2 numbers

function greatestOf2Numbers(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let great= greatestOf2Numbers(12,5);
console.log({great});

// using ternary operator
function greatestOf2Numbers1(a,b){
    return a > b ? a : b;
}
great= greatestOf2Numbers1(12,5);
console.log({great});

// H.W: write a function to find the Minimum of 2 numbers
function minimumOf2Numbers(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}
let min= minimumOf2Numbers(12,5);
console.log({min});

// using ternary operator
function minimumOf2Numbers1(a,b){
    return a < b ? a : b;
}
min= minimumOf2Numbers1(12,5);
console.log({min});

const sum4 = sum(5);
console.log({sum4});// prints NaN as b is undefined and 5 + undefined = NaN


// giving default values to parameters
// function sum2(a=0,b=0){
//     return a+b;
// }.xz

// write a function to calculate sum of 2 numbers & 3 numbers 
// Ex: sum(2,10) => 12
// Ex: sum(1,3,10) => 14

function sum6(a=0,b=0,c=0){
    return a+b+c;
}
console.log({sum6: sum6(2,10)});
console.log({sum6: sum6(1,3,10)});

//======== Nested function =======

//function to issue book
function library(issuedDate){
    // if book is issued 10 or less days then fine is 0
    //  else fine is (3rs per day after 10 days)=[(number of days of issued books) - 10] * 3
    const daysOfIssuance = calculateDays(issuedDate);
if(daysOfIssuance > 10){
    fine = (daysOfIssuance - 10) * 3;
}
else{
    fine = 0;
}
return fine;
}

function calculateDays(issuedDate){
    return 25 - issuedDate;
}

console.log("Total fine is: "+ library(2));//23-10=13*3=39
console.log("Total fine is: "+ library(12));//13-10=3*3=9
console.log("Total fine is: "+ library(22));//3 -> fine=0

//  how console.log handles different number of arguments
// console.log(1,2,3,4,4);
// console.log(1);
// console.log();

// Rest Operator: combines all the values inside it and make an array
//  ALWAYS  comes at last position in function parameter
function sumN(a, b, ...c){
    console.log(a, b, c);
}

sumN(1,3,1,3);




