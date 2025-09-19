// ============== Continuing arrays =================
let arr = [1,2,3,4,5];
console.log(arr);

console.log(arr.slice(1,4));//slices from index 1 to index 3
console.log(arr.slice(2));//slices from index 2 to end
console.log(arr.slice()); //slices the whole array

// HW: check what happens when we give negative indices

console.log(arr.slice(-3));//slices last 3 elements

// splice function
console.log(arr.splice(1,3));//removes 3 elements from index 1
console.log(arr);//original array is modified

//conacatenation of arrays
let arr2 = [6,7,8,9,10];
let arr_concat = arr.concat(arr2);
console.log({arr_concat});

//=========== types of loops =============
// for loop
for(let i =0;i<arr_concat.length;i++){
    console.log(arr_concat[i]);
}

// for in loop
for(let index in arr_concat){
    console.log(arr_concat[index]);
    //console.log(typeOf(Index)) --> type of index here is string
}

// for of loop
for(let value of arr_concat){ 
    console.log(value); 
}

//write a function which prints the prefix sum of array
// input = [12,4,-8,10]
//output = [12,16,8,18]
let arr3 =[12,4,-8,10];
let arr4 = [];
let sum =0;

for(let value of arr3){
    sum+=value;
    arr4.push(sum);
}
console.log(arr4);


let prefixArr=[];
prefixArr[0] = arr3[0];

for(let i =1;i<arr.length;i++){
    prefixArr[i] =prefixArr[i-1]+arr3[i];
}
console.log(prefixArr);


// swap two variables
let x=10;
let y=20;
let temp = x;
x=y;
y=temp;

console.log(x,y)

//swapping two values of an array
// function swapArrElements(arr,ind1,ind2){
//     let n =arr.length;
//     let temp = arr[ind1];
//     arr[ind1]=arr[ind2];
//     arr[ind2]= temp;
//     console.log({arr});
// }
// swapArrElements(arr,1,4);

// Print elements at odd indices of an array
let arr5 =[1,2,3,4,5,6];
let n =arr5.length;
function printOddElements(arr5){
for(let i=0;i<n;i++){
    if(i%2==1) console.log(arr5[i]);   
}
}
printOddElements(arr5);


//swap alternate elements of an array
//[1,2,3,4,5] --> [2,1,4,3,5]----for odd elngth
//[1,2,3,4,5,6] --> [2,1,4,3,6,5]----for even length

function alternateElements(arr5){
    for(let i = 0;i<n-1;i+=2){
        let temp =arr5[i];
        arr5[i]=arr5[i+1];
        arr5[i+1]=temp;
    }
    console.log(arr5);
}
alternateElements(arr5);


//============ Heterogeneous property of arrays in JS ==============

arr = [1,2,"123",2.344,true,[3,4,"five",[2,5,"printMe"]]];

//how to print printMe from above array

console.log(arr[5][3][2]);

//Hw: given an array of consecutive numbers, but ther is on number thsts missing find it
arr= [1,2,3,5,6,7,8];
n=arr.length+1;
let arrsum1 =0;
let sum1 = (n*(n+1))/2;

for(let value of arr){
    arrsum1+=value;
}
console.log(sum1-arrsum1);

