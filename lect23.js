// ================= Recursion ========== //
//printing n to 1
function printnto1(n){
    if(n <= 0) return;
    console.log(n);
    printnto1(n-1);
}
let res= printnto1(4);
console.log(res);


//printing 1 to n
function print1ton(n){
    if(n<=0) return;
    print1ton(n-1);
    console.log(n);
}
let res1= print1ton(10);
console.log(res1);


//print Hello World n times
function printHelloWorld(n){

    if(n===0) return;
    console.log("Hello World");
    printHelloWorld(n-1);
}
let res2 = printHelloWorld(5);
console.log(res2);

//print 1234554321

function print(n, current = 1){
    if(current > n) return;
    console.log(current);
    print(n,current+1);
    console.log(current);
    
}
let res3 = print(5);
console.log(res3);

// print 5432112345

function print1(n){
    if(n === 0) return;
    console.log(n);
    print1(n-1);
    console.log(n);
}
let res4 = print1(5);
console.log(res4);

// print sum of first  n natural numbers
function sum(n){
    if(n===0) return 0;
    return n + (sum(n-1));
}
let res5 = sum(10);
console.log(res5);

// find a power of a number
function power(x,n){
    if(n === 0) return 1;
    return x * power(x,n-1);
}
let res6 = power(2,5);
console.log(res6);

// reverse the string

function reversestring(s){
    if(s.length === 0) return "";
    return s.charAt(s.length-1) + reversestring(s.substring(0,s.length-1));
}
let res7 = reversestring("Hello");
console.log(res7);

// factorial of n

function factorial(n){
    if(n===0)return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));
