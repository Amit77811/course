// let arr =[1,2,3,4,5];
function printSubarrays(arr){
for(let i=0;i<arr.length;i++){
    let subArr=[];
    for(let j=i;j<arr.length;j++){
        subArr.push(arr[j]);
        console.log(subArr.join(" "));

        // Method 2
        // console.log(arr.slice(i,j+1).jjoin(" "));
    }
}
}
printSubarrays([1,4,5,7,3,2]);

//print the sum of all subarrays
let arr =[1,2,3,4,5];

function printSubarrays(arr){
let allSum=0;
for(let i=0;i<arr.length;i++){;
    let sum=0;
    for(let j=i;j<arr.length;j++){
        sum+=arr[j];
        allSum+=sum;
        console.log(sum);
    }
}
console.log({allSum});
}

printSubarrays([1,4,5,7,3,2]);

//function to print subarray with target sum
function findTargetSum(arr,T){
    
    for(let i=0;i<arr.length;i++){
    let subArr=[];
    let sum =0;
    for(let j=i;j<arr.length;j++){
        subArr.push(arr[j]);
        sum+=arr[j];
        if(sum==T){
            return subArr;
        }

        
    }
}
}

console.log(findTargetSum(arr,10));

// ============ Nested Arrays ============

 arr =[[1,2,3], [4,5,6],[7,8,9]];
 console.log(arr[1][2].length);

// 

for(let i=0;i<3;i++){
    let str ="";
    for(let j=1;j<=5;j++) {
        str+=j + 5*i +' ';
    }
    console.log(str);
}


arr =[[1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15]];

console.log("printing 2D arrays");
for(let i=0;i<arr.length;i++){
    let str="";
    for(j=0;j<arr[i].length;j++){
        str+=arr[i][j] + " ";
    }
    console.log(str);
}

for(let i=0;i<arr.length;i++){
    let str="";
    let sum=0;
    for(j=0;j<arr[i].length;j++){
        str+=arr[i][j] + " ";
        sum+=arr[i][j];
    }
    console.log(sum);
}


//sum of product of each even indexed-row
let sum =0;
arr =[[1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15]];
let sumOfProducts = 0;
for(let i=0;i<arr.length;i++){
    if(i%2==0)continue;
    let rowproduct=1;
    for(j=0;j<arr[i].length;j++){
        rowproduct*=arr[i][j];
    }
    sum+=rowproduct;
}
console.log(sum);


//print the matrix col-wise
for(let i=0;i<arr[0].length;i++){
    let str="";
    for(j=0;j<arr.length;j++){
        str+=arr[j][i] + " ";
    }
    console.log(str);
}


//Hw:print the sum of elements in odd indexed column



// function to print all elements of primary diagonal

 arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let diagonal = [];

for (let i = 0; i < arr.length; i++) {
    diagonal.push(arr[i][i]);
}

console.log("Primary diagonal:", diagonal.join(" "));

// function to print all elements of secondary diagonal

let n = arr.length;
let secondaryDiagonal = [];

for (let i = 0; i < n; i++) {
    secondaryDiagonal.push(arr[i][n - 1 - i]);
}

console.log("Secondary diagonal:", secondaryDiagonal.join(" "));

// function to check if primary diagonal sum is odd or even
let sum1=0;
for (let i = 0; i < arr.length; i++) {
    sum1+=arr[i][i];
}
console.log(sum1%2==0 ? true : false);