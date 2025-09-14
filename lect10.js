// optimized cod efor checking if a number is prime or not
let n = 117;
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

          //=============== Scopes =================//


//console.log({numbers})// gives undefined error

let letVariable; // has a global scope as it's not inside any function or block
// console.log({letVariable})// prints undefined

//dfg = 12 // global variable
// console.log({dfg})// prints 12 , can accessed anywhere

//{
// var emptyBlockVariable = "abcd; // var is not block scoped but function scoped
// console.log({emptyBlockVariable})// prints abcd"
//}

// note: for var variables if function scoped cannot access outside function 

console.log({emptyBlockVariable})// gives:  undeclaredVariable is not defined

{
    const emptyBlockVariable= "abcd"; 
    console.log({emptyBlockVariable});
    {
        const emptyBlockVariableChild= "abcde";
        console.log("=== inside block===",{emptyBlockVariable : emptyBlockVariableChild});
    }
}

console.log({varVariable});
var varVariable = 6;









