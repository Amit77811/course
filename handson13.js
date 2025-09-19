// ============== Continuing arrays =================
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

console.log(numbers.slice(1, 4)); // slices from index 1 to index 3
console.log(numbers.slice(2));    // slices from index 2 to end
console.log(numbers.slice());     // slices the whole array

// negative index example
console.log(numbers.slice(-2));   // last 2 elements

// splice function
console.log(numbers.splice(2, 2)); // removes 2 elements from index 2
console.log(numbers);              // original array is modified

// concatenation of arrays
let moreNums = [60, 70, 80, 90];
let mergedArr = numbers.concat(moreNums);
console.log({ mergedArr });

//=========== types of loops =============

// for loop
for (let i = 0; i < mergedArr.length; i++) {
    console.log(mergedArr[i]);
}

// for in loop
for (let idx in mergedArr) {
    console.log(mergedArr[idx]);
}

// for of loop
for (let val of mergedArr) {
    console.log(val);
}

// prefix sum of array
let nums1 = [5, 15, -10, 20];
let prefix1 = [];
let total = 0;

for (let val of nums1) {
    total += val;
    prefix1.push(total);
}
console.log(prefix1);

let prefix2 = [];
prefix2[0] = nums1[0];
for (let i = 1; i < nums1.length; i++) {
    prefix2[i] = prefix2[i - 1] + nums1[i];
}
console.log(prefix2);

// swap two variables
let a = 100;
let b = 200;
let tempVar = a;
a = b;
b = tempVar;
console.log(a, b);

// print elements at odd indices
let items = [9, 8, 7, 6, 5, 4];
let size = items.length;
function printOddPositions(arr) {
    for (let i = 0; i < size; i++) {
        if (i % 2 === 1) console.log(arr[i]);
    }
}
printOddPositions(items);

// swap alternate elements of an array
function swapAlternate(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let tempVal = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempVal;
    }
    console.log(arr);
}
swapAlternate(items);

//============ Heterogeneous property of arrays in JS ==============
let mixed = [1, "hello", false, 3.14, [11, 22, "nested", [33, 44, "showMe"]]];
console.log(mixed[4][3][2]);

// find missing number in sequence
let seq = [1, 2, 3, 4, 6, 7, 8];
let n2 = seq.length + 1;
let sumArr = 0;
let expectedSum = (n2 * (n2 + 1)) / 2;

for (let val of seq) {
    sumArr += val;
}
console.log(expectedSum - sumArr);
