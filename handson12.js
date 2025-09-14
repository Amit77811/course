
// Factorial of a number using function
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(6)); 


// Program for nCr
// nCr = n! / (r! * (n-r)!)
function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log(nCr(6, 3)); 

//prog for nPr
//nPr = n!/(n-r)!
function nPr(n, r) {
    return factorial(n) / factorial(n - r);
}
console.log(nPr(6, 3)); 


// Function to check voting eligibility
function canVote(userName, userAge) {
    if (userAge >= 18) console.log(userName + " can vote");
    else console.log(userName + " cannot vote");
}
canVote("Rahul", 22);
canVote("Ankit", 16);


// Find absolute difference between sum of odd and even elements in an array
const numbers1 = [2, 5, 7, 10, 13, 18];
let absDiff = absoluteDiff(numbers1);
console.log({ absDiff });

function absoluteDiff(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) sumEven += arr[i];
        else sumOdd += arr[i];
    }
    return Math.abs(sumEven - sumOdd);
}


// FizzBuzz problem using arrays
const numbers2 = [3, 5, 15, 8, 12, 20, 25, 30];
fizzBuzz(numbers2);

function fizzBuzz(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) console.log("FizzBuzz");
        else if (arr[i] % 3 == 0) console.log("Fizz");
        else if (arr[i] % 5 == 0) console.log("Buzz");
        else console.log(arr[i]);
    }
}


// Insertion in arrays
let numbers3 = [11, 22, 33, 44];
numbers3.push(55);        // insert at end
numbers3.unshift(0);      // insert at beginning
numbers3.push(66, 77, 88);
numbers3.unshift(-22, -11);
console.log({ numbers3 });


// Update array element
const numbers4 = [100, 200, 300, 400];
numbers4[2] = 350;
console.log({ numbers4 });


// Deletions in arrays
console.log(numbers4.pop());   // returns last element removed
console.log(numbers4.shift()); // returns first element removed


// Searching in arrays (custom function)
let numbers5 = [15, 25, 35, 45, 55];
function searchInArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}
let foundIndex = searchInArray(numbers5, 35);
console.log({ foundIndex });


// Using indexOf, lastIndexOf, includes
let numbers6 = [10, 20, 30, 40, 30, 50];
console.log(numbers6.indexOf(40));     // 3
console.log(numbers6.lastIndexOf(30)); // 4
console.log(numbers6.includes(20));    // true
console.log(numbers6.includes(99));    // false


// Find and update value in array
let numbers7 = [5, 15, 25, 35, 45];
let targetValue = 25;
let newValue = 28;
if (numbers7.includes(targetValue)) {
    let idx = numbers7.indexOf(targetValue);
    numbers7[idx] = newValue;
}
console.log({ numbers7 });
