// Print all subarrays
function printSubarrays(nums) {
    for (let i = 0; i < nums.length; i++) {
        let sub = [];
        for (let j = i; j < nums.length; j++) {
            sub.push(nums[j]);
            console.log(sub.join(" "));
        }
    }
}
printSubarrays([3, 6, 9, 2]);

// Print sum of all subarrays
function printSubarraySums(nums) {
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            totalSum += currentSum;
            console.log(currentSum);
        }
    }
    console.log({ totalSum });
}
printSubarraySums([2, 5, 7, 1]);

// Find subarray with target sum
function findTargetSubarray(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let subset = [];
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            subset.push(nums[j]);
            sum += nums[j];
            if (sum === target) {
                return subset;
            }
        }
    }
}
console.log(findTargetSubarray([4, 3, 1, 6, 2], 9));

// Nested arrays 

let matrix2 = [
    [2, 4, 6, 8, 10],
    [12, 14, 16, 18, 20],
    [22, 24, 26, 28, 30]
];
console.log("2D matrix:");
for (let i = 0; i < matrix2.length; i++) {
    let rowStr = "";
    for (let j = 0; j < matrix2[i].length; j++) {
        rowStr += matrix2[i][j] + " ";
    }
    console.log(rowStr);
}

// rowsum
for (let i = 0; i < matrix2.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix2[i].length; j++) {
        rowSum += matrix2[i][j];
    }
    console.log(rowSum);
}

// Print matrix column-wise
for (let i = 0; i < matrix2[0].length; i++) {
    let colStr = "";
    for (let j = 0; j < matrix2.length; j++) {
        colStr += matrix2[j][i] + " ";
    }
    console.log(colStr);
}

// Primary diagonal
let squareMatrix = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
];
let primaryDiag = [];
for (let i = 0; i < squareMatrix.length; i++) {
    primaryDiag.push(squareMatrix[i][i]);
}
console.log("Primary diagonal:", primaryDiag.join(" "));

// Secondary diagonal
let secondaryDiag = [];
let size = squareMatrix.length;
for (let i = 0; i < size; i++) {
    secondaryDiag.push(squareMatrix[i][size - 1 - i]);
}
console.log("Secondary diagonal:", secondaryDiag.join(" "));

// Check if primary diagonal sum is odd or even
let diagSum = 0;
for (let i = 0; i < squareMatrix.length; i++) {
    diagSum += squareMatrix[i][i];
}
console.log(diagSum % 2 === 0 ? true : false);
