// split()
let str = " mern stack course";
console.log(str.split(" "));

let str2 = "mern stackaaacourse";
console.log(str2.split("aa"));
console.log(str2.split(""));
console.log(str2.split());

//count number of words
let words = "  hi this is rishi and we are learning mern stack";
console.log(words.trim().split().length);

//join()
let arr =[3,2,4,5];
console.log("sum of arr: [", arr.join(" "), "] is :",14);

// questions on string
// 1) given astring , toggle its case using inbuilt functions
// input: HelLo
// output: hELlO

// method 1
function toggleCase(str){
    let toggledStr = "";
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char === char.toUpperCase()){
            toggledStr += char.toLowerCase();
        }else{
            toggledStr += char.toUpperCase();
        }
    }
    return toggledStr;
}

// method 2
// for(let i =0;i<str.length;i++){
//     if(str[i] >= "a" && str[i] <= "z"){
//         toggledStr += char.toLowerCase();
//     }else{
//         toggledStr += char.toUpperCase();
//     }
// }

console.log(toggleCase("HelLo")); // time comple

// write a function to convert camelCase to snake_case
//time complexity: O(n)
// space complexity: O(1)

function camelCaseToSnakeCase(str){
    let snakeCaseStr = "";
    for(let i =0;i<str.length;i++){
        let char = str[i];
        if(char >= "A" && char <= "Z"){
            snakeCaseStr += "_" + char.toLowerCase();
        }
        else{
            snakeCaseStr += char;
        }
    }

    return snakeCaseStr;
}
console.log(camelCaseToSnakeCase("snakeCase"));
        

// write a function to convert snake_case to camelCase
function snakeCaseToCamelCase(str){
    let camelCasestr = "";
    for(let i =0;i<str.length;i++){
        let char = str[i];
        if(char === "_"){
            i++;
            camelCasestr += str[i].toUpperCase();
        }else{
            camelCasestr += char;
        }
}
return camelCasestr;
}
console.log(snakeCaseToCamelCase("camel_case"));

// extrace jungle frombelow string using  string methods
str = "   how_are_you_in Jungle   ";
str = str.trim().split(" ");
console.log(str[str.length -1]);

//method2
// console.log(
//     str
//      .trim()
//      .subarting(str.trim().indexOf("Jungle"), str.trim().indexOf("Jungle") + 6)
//     );


// explore parseInt() & parseFloat functions

// only use replace() & replaceAll method "in" with "on" in below string
// Note: Spain should remain as it is

str = "Hi are you in Spain, which city are you in? How's your pain" 

let temp = str.replace("Spain", "Temp");

temp = temp.replaceAll("in", ("on")); 

console.log(temp.replace("Temp", "Spain"));


// function to reverse a string

function reverse(str){
    let reversedStr = "";
    for(let i = str.length -1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverse("abcde"));

// function to check string is palindrome or not 
function isPalindrome(str){
    let start =0;
    let end =str.length -1;
    while(start < end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(isPalindrome("madam"));


// function to reverse entire sentence
function reverseSentence(str){
    let words = str.trim().split(" ");
    let reversedStr = "";
    for(let i = words.length -1; i>=0; i--){
        reversedStr+= words[i] + " ";
    }
    return reversedStr;
}
console.log(reverseSentence("  hi this is rishi  "));

// function to check string is palindrome or not, ignore cases (upper/lower) & spaces
str = "Nurses run";
let palindrome = str.toLocaleLowerCase().replaceAll(" ","");
console.log(isPalindrome(palindrome));

// H.W find the length of longest Word
// input: str = "Pune is the most loved city for its weather"
// output: 7

function lengthOfLongestWord(str){
    let words = str.trim().split(" ");
    let maxLength = 0;
    for(let i =0;i<words.length;i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
console.log(lengthOfLongestWord("Pune is the most loved city for its weather"));

//  lastIndexOf() method
console.log("stringMethodsring".lastIndexOf("s")); 


//  write a function to find the first non repetive char in string 
// input: "stringMethodsring"
// output: "M"
function firstNonrepetiveChar(str){
    for(let i =0;i<str.length;i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return null;

}
console.log(firstNonrepetiveChar("stringMethodsring"));

//  write a function to count frequency of each character
function frequencyOfEachChar(str){
    let freq = {};
    for(let i=0;i<str.length;i++){
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
    // HW: find a way to print a char and freq in below manner
    // a: 2,
    // c: 3,
    // d: 1
    return freq;
}

console.log(frequencyOfEachChar("stringMethodsring"));

// HW: write a function to find frequency of each word from the given string
// input: "abd ghj abd ghi ghj abc abd"
