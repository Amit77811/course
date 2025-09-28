// Count words in a sentence
let sentence = "hi how was your day";
let wordCount = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        wordCount++;
    }
}
console.log("Word Count:", wordCount + 1);  // Output: 5

// .includes() -> Checks if substring exists
console.log("balloon".includes('oon'));  // true
console.log("balloon".includes('ooN'));  // false (case-sensitive)

// .replace() -> replaces first occurrence
let word1 = "shoes";
console.log(word1.replace("s", "d"));  // dhoes

// .replaceAll() -> replaces all occurrences
console.log(word1.replaceAll("s", "d")); // dhoed

// .trim() -> removes spaces from start and end
let messyString = "    hello world   ";
console.log(messyString.trim());  // "hello world"

// .repeat(count) -> repeats the string
console.log("abc".repeat(3));  

// .charAt(index) -> returns character at index
console.log("abcd".charAt(2));  

// .indexOf(substr, [fromIndex]) -> returns first index of substring
let str = "stringMethodsring";
console.log(str.indexOf("ring"));      
console.log(str.indexOf("ring", 7));    

// .toLowerCase() and .toUpperCase()
console.log("AbDJD".toLowerCase());     
console.log("AbDJD".toUpperCase());   

// .startsWith() and .endsWith()
console.log("hello world".startsWith("hello"));  
console.log("hello world".endsWith("world"));   

// .split() -> splits string into array
let fruits = "apple,banana,orange";
console.log(fruits.split(",")); 

// .concat() -> joins strings
let first = "Hello";
let second = "World";
console.log(first.concat(" ", second));  

let msg = "I am learning JavaScript today.";
console.log(msg.includes("JavaScript")); 


let text = "amit deshmane";
let capitalized = text.charAt(0).toUpperCase()  + text.slice(1);
console.log(capitalized); 
