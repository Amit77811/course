let n = 227;
for(let i = 2; i<=Math.floor(Math.sqrt(n)); i++){
    if(n%i==0){
        console.log("Not a prime");
        break;
    }
    if(i>Math.floor(Math.sqrt(n))){
        console.log("Prime");
        break;
    }

}

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // accessible here
}

showGlobal(); 
console.log(globalVar); // accessible here too



function myFunction() {
    let functionVar = "I am inside function";
    console.log(functionVar); // works here
}

myFunction(); 
console.log(functionVar);// Error: functionVar is not defined


if (true) {
    let blockVar = "I am block scoped";
    const blockConst = 123;
    console.log(blockVar);   // works here
    console.log(blockConst); // works here
} nn
console.log(blockVar);   //  Error
console.log(blockConst); //  Error
