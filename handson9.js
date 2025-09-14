//factorial code
let fact = 5;
let factorial = 1;
while (fact > 0) {
    factorial = factorial * fact;
    fact--;
}
console.log(factorial);

//prime number code
let n = 217;
let c = 0;
for(let i = 1; i <= n; i++){
    if(n % i == 0 ){
        c++;
    }
}
const msg = c > 2 ? "not prime" : "prime";
console.log(msg);


//stop when number is divisible by 17 using break
for(let i = 100; i<=200; i++){
    if(i % 17 == 0){
        break;
    }
    console.log(i);
}

//prints odd numbers divisible by 5 using continue
for(let i =1; i<=200;i++){
    if(i % 2 == 0 || i % 5 != 0){
        continue;
    }
    console.log(i);
}

//prints sum of first 5 natural numbers using while loop
let sum = 0;
let j = 1;
while (j <= 5) {
    sum += j;
    j++;
}

console.log("Sum is: " + sum);


// do while loop
let num = 5;
do {
    console.log("Current number: " + num);
    num += 3; // 
} while (num <= 10);



