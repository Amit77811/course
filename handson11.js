function greetUser(){
    console.log("Hello World");
}

function greetUser1(name){
    console.log("Hello "+name);
}

greetUser1("Abhijeet");

function showCheckInTime(name,time){
    console.log("Hello "+name + ", your check-in time is "+ time);
}
showCheckInTime("Amit","10:00 AM");

function welcomeUser(name,platform){
    console.log("Hello "+name+", Welcome to our "+platform);
}
welcomeUser("Riddhi","Home");
welcomeUser("Rahul","Website");
welcomeUser("Deepak","office");

function sum(a,b){
    const c = a+b;
    return c;
}

const sum1 = sum(10,5);
const sum2 = sum(10,50);

console.log({sum1,sum2});


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


function sum6(a=0,b=0,c=0){
    return a+b+c;
}
console.log({sum6: sum6(2,10)});
console.log({sum6: sum6(1,3,10)});

//======== Nested function =======

function shop(price){
    // if price is more than 1000, discount is 10%, else no discount
    const discount = calculateDiscount(price);
    const finalPrice = price - discount;
    return finalPrice;
}

function calculateDiscount(price){
    if(price > 1000){
        return price * 0.10; // 10% discount
    } else {
        return 0;
    }
}

console.log("Final price is: " + shop(1500)); // 1500 - 150 = 1350
console.log("Final price is: " + shop(800));  // no discount, final = 800








