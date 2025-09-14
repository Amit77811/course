//write a finction to find the average of three numbers
function averageOfThreeNumbers(a,b,c){
    return (a+b+c)/3;
}
console.log(averageOfThreeNumbers(3.5,6,9));//Time complexity O(1)

//factorial of a number using function
function factioral(n){
    if(n==0 || n==1){
        return 1;
    }
    let fact = 1;
    for(let i =2;i<=n;i++){
        fact*=i;
    }
    return fact;
}
console.log(factioral(5));//time complexity O(n)

//write a program for nCr
//nCr = n!/(r!*(n-r)!)


function factioral(n){
    if(n==0 || n==1){
        return 1;
    }
    let fact = 1;
    for(let i =2;i<=n;i++){
        fact*=i;
    }
    return fact;
}
function nCr(n,r){
    return factioral(n)/(factioral(r)*factioral(n-r));
}
console.log(nCr(5,2));//time complexity O(n)

// function that is going to be  called for multiple users
// to check if they can vote based on age

function canVote(userName, userAge){
    if(userAge>=18) console.log(userName+" can vote");
    else console.log(userName+" cannot vote");
}
canVote(20,"Rahul");
canVote(17,"Ankit");

// ============ Arrays =============

// Note: Arrays are non-primitive data types


//a collection of similar data types,that can be  managed using a single variable


// const arr1 = [1,2,3,4,5,6,7,8];
// n=arr1.length;

// let sum = sumOfArray(arr1);
// console.log({sum});

// function sumOfArray(arr1){
//     let n =arr1.length;
//     sum = 0;
//     for(let i=0;i<n;i++){
//         sum+=arr1[i];
//     }
//     return sum;
// }

//absolute function in JS//
// console.log(Math.abs(-4));

//find absolute diff of (sum of all odd elements) and (sum of all even elements) in an array

const arr = [1,2,3,4,5,6,7,8];
n = arr.length;
let absdiff = absoluteDiff(arr);
console.log({absdiff});

function absoluteDiff(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i =0; i<n;i++){
        if(arr[i]%2==0) sumEven+=arr[i];
        else sumOdd+=arr[i];
    }
    return Math.abs(sumEven-sumOdd);
}

// fizz buzz problem using arrays

const arr2 = [3,5,15,9,10,18,20,25,30]
n = arr2.length;

fizzBuzz(arr2);


function fizzBuzz(arr2) {
    for(let i =0;i<n;i++){
        if(arr2[i]%3==0 && arr2[i]%5==0) console.log("FizzBuzz");
        else if(arr2[i]%3==0) console.log("Fizz");
        else console.log("Buzz")
    }
}



// insertion in arrays

let arr3 = [1,2,3,4,5];

arr3.push(6);//inserts at the end
arr3.unshift(0);//inserts at the beginning

// console.log({arr3});

// HW: how to insert multiple elements at a time in an array using push and unshift
arr3.push(7,8,9);
console.log({arr3});
arr3.unshift(-2,-1);
console.log({arr3});

const arr4 = [10,20,30,40,50];
arr4[0] = 100; //updates the value at index 0

// deletions in arrays
// deletion at end
arr4.pop();
//Hw: find out what it returns


//deletion at beginning
arr4.shift();
//Hw: find out what it returns


// searching in arrays
//HW: write a function to return  the index of target element if found else return -1

let arr5 = [10,20,30,40,50];
function searchInArray(arr5, target){
    for(let i =0;i<arr5.length;i++){
        if(arr5[i]==target) return i;
    }
    return -1;
}
let index = searchInArray(arr5,10);
console.log({index});

// using indexOf function
let index2 = arr5.indexOf(30);
console.log({index2});// returns -1 if not found

//inbuilt method to find the last index of an element
let arr6 = [10,20,30,40,50,30,60];
let index3 = arr6.lastIndexOf(30);
console.log({index3});// returns -1 if not found

// inbuilt method to check if an element is present in an array
console.log(arr5.includes(50));// returns true or false
console.log(arr5.includes(100));

// find and update  the value of element in an array using indexOf and includes
let arr7 = [10,20,30,40,50];
let target = 10;
let newValue = 14;
if(arr7.includes(target)){
    let index = arr7.indexOf(target);
    arr7[index] = newValue;
}

console.log({arr7});