// =========== linear search ==============

// using array
function findTarget(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            return true;
        }
    }
    return false;
}
let arr = [1,3,6,10];
console.log(findTarget(arr,10))



// using string
function find_target(str,tar){
    for(let i=0;i<str.length;i++){
        if(str[i] === tar){
            return 1;
        }
    }
    return -1;
}
let str = "hello";
console.log(find_target(str,"e"))


// using object

let users = [
    {id : 1 , name: "Ujjwal" , city: "Pune"},
    {id : 2 , name: "Ravi" , city: "Nashik"},
    {id : 3 , name: "Amit" , city: "Selu"},
    {id : 4 , name: "Ravi" , city: "Sambhaji nagar"}
]

function findByUserName(arr,name,id){
    for(let i =0;i<arr.length;i++){
        if(arr[i].name === name && arr[i].id === id){
            return arr[i];
        }
    }
    return null;
}

console.log(findByUserName(users,"Ravi", 4));


//========== Map ===========

let StudentMap = new Map();

StudentMap.set("101", "Jay");
StudentMap.set("102", "chirag");
console.log(StudentMap.get("101"));
console.log(StudentMap.has("103"));

StudentMap.delete("102");
console.log(StudentMap);


//create a map  and calculate the frequency of each element in arr using count
let arr1 = [1,3,6,3,7,8,1,3,6,9,7,8,1];

let freqMap = new Map();
for(let i =0;i<arr1.length;i++){
    freqMap.set(arr1[i], (freqMap.get(arr1[i] ) || 0) + 1);
}
for(let [key,value] of freqMap){
    console.log(key + " : " + value);
}

//Method 2

function frequencyCounter(){
    const freqMap = new Map()

    for(let num of arr){
        if(freqMap.has(num)){
            freqMap.set(num , freqMap.get(num) + 1);
        }
        else{
            freqMap.set(num,1);
        }
    }
    return freqMap;
}
arr = [1,3,6,3,7,8,1,3,6,9,7,8,1];
const result = frequencyCounter(arr);
console.log(result);


/// same using string
function frequencyCounter1(str){
    const freqMap1 = new Map();

    for(let i=0;i<str.length;i++){
        if(freqMap1.has(str[i])){
            freqMap1.set(str[i] , freqMap1.get(str[i]) + 1);
        }
        else{
            freqMap1.set(str[i],1);
        }
    }
    return freqMap1;
}
str = "HHHHHHHHhhhhhhh";
console.log(frequencyCounter1(str));

// Method 2

// let string = "HelloWorld";

// let freqMap1 = new Map();
// for(let i =0;i<string.length;i++){
//     freqMap1.set(string[i], (freqMap1.get(string[i] ) || 0) + 1);
// }
// for(let [key,value] of freqMap1){
//     console.log(key + " : " + value);
// }


// ========== set ===========

let fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");
console.log(fruits);

console.log(fruits.has("Banana"));
fruits.delete("Apple");
console.log(fruits);


// remove duplicates elements from an array and print the array
arr = [1,2,3,2,3,5,1,3,2];
console.log([...new Set(arr)]);

// Anagram  using loops 
function areAnagrams(str1,str2){
    if(str1.length !== str2.length) return false;

    for(let i =0;i<str1.length;i++){
        if(!str2.includes(str1[i])){
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen","silent"));

// Anagram using sort

function areAnagrams1(str1,str2){
    if(str1.length !== str2.length) return false;

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(areAnagrams1("listen","Hello"));


// target = 4 first occrance solve using binary search

 arr = [1,4,4,4,5,6,6,7]; 
function binarySearch(arr,target){
    let l =0;
    let r = arr.length -1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] === target){
            if(arr[mid-1] !== target)
                return mid;
            else
                r = mid-1;
        }
        else if(arr[mid]<target){
            l = mid +1;
        }
        else{
            r = mid -1;
        }
    } 
    return -1;
}
console.log(binarySearch(arr,4));

// target = 4 last occrance solve using binary search in string
let string = "aaabbbccccddddeee";
function binarySearch1(str,target){
    let l =0;
    let r = str.length -1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(str[mid] === target){
            if(str[mid+1] !== target)
                return mid;
            else
                l = mid +1;
        }
        else if(str[mid]<target){
            l = mid +1;
        }
        else{
            r = mid -1;
        }
    }
    return -1;
}
console.log(binarySearch1(string,'d'));



arr1 = ["apple","banana","banana","cherry","date"];
function firstOccurance(arr,target){
    let l =0;
    let r = arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] === target){
            if(arr[mid-1] !== target){
                return mid;
            }
            else{
                r= mid -1;
            }
        }
        else if(arr[mid]<target){
            l = mid+1;
        }
        else{
            r=mid+1;
        }
    }
    return -1;
}

console.log(firstOccurance(arr1,"banana")); // 1
console.log(firstOccurance(arr1,"fig")); // -1


// lower and upper bound

arr = [2, 4, 4, 4, 5, 6, 6, 7]; 
let x = 4;

function lowerBound(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] >= x) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

function upperBound(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] > x) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

console.log("Lower Bound:", lowerBound(arr, x)); 
console.log("Upper Bound:", upperBound(arr, x)); 
