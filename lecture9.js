//factorial of a number
let fact = 5;
let factorial = 1;
while (fact > 0) {
    factorial = factorial * fact;
    fact--;
}
console.log(factorial);

//num is prime or not

let num = 15;
let count = 0;
for(let i = 1; i <= num; i++){
    if(num % i == 0 ){
        count++;
    }
}
const msg = count > 2 ? "not prime" : "prime";
console.log(msg);

// numbers between 100 and 200 which are divisible by 17 & stop the loop when you find the first number
for(let i = 100; i<=200; i++){
    if(i % 17 == 0){
        break;
    }
    console.log(i);
}

//print the square of all nums except  nums divisible by 17 from 1 to 100
for(let i = 1; i <= 100; i++){
    if(i % 17 == 0){
        continue; // skips the current iteration
    }
    console.log(i,i * i);
}

//print the odd numbers from 1 to 200 divisible by 5 using  continue
for(let i =1; i<=200;i++){
    if(i % 2 == 0 || i % 5 != 0){
        continue;
    }
    console.log(i);
}
// print 1st 10 odd num from 1 to 200 divisible by 5
let count1 = 0;
for(let i = 1; i <= 200; i++){
   if(i % 2 == 0 || i % 5 != 0){
    continue;
   }
   console.log(i);
   count1++;
   if(count1 == 10){
    break;
   }
} 


// Nested loops

// write a prg to prin 10 '*'
let starString = "";
for(let i = 0; i < 10; i++){
    starString+= "*"
}
console.log(starString);

// write above code 10 times
for(let i=0;i<10;i++){
    let starString = "";
    for(let j = 0; j < 10; j++){
    starString+= "*"
}
console.log(starString);
}


//print below pattern 
//  1 2 3 4 5 6
//  1 2 3 4 5 6
//  1 2 3 4 5 6
//  1 2 3 4 5 6
//  1 2 3 4 5 6
//  1 2 3 4 5 6

// let pattern = "";
for(let i=0;i<6;i++){
    let pattern = "";
    for(let j=0;j<6;j++){
        pattern += (j+1) + " ";
    }
    console.log(pattern);
}


// let pattern = "";
//  for(let j=0;j<6;j++){
//         pattern += (j) + " ";
//     }
//     console.log(pattern);


// HW
// print below patterns

// A
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
//  1 2 3 4 5 6

let n = 6;
for(let i=0;i<=n;i++){
let row = "";
 for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
    

//B
// *****
//  ****
//   ***
//    **
//     *

let n1 = 5; 

for (let i = n1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//do while loop
// do{
//     console.log("Hi, I am do while loop");
// }while(false);

// let response;
// let responseCounter = 0;

// do{
//     response = prompt("do you want to continue ?" + responseCounter);
//     console.log({response});
//     responseCounter++;
// }while(response == "yes" || response == "yes");