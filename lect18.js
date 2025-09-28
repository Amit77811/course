// ============ Strings ===========

//count words
let words ="hi how was your day";
let count =0;
for(let i=0;i<words.length;i++){
    if(words[i] === ' '){
        count++;
    }
}console.log(count+1);

//  methods in strings
console.log("baloon".includes('oon')); // can search for sting of more than or equal to 1 length
console.log("baloon".includes('ooN')); // is case sensetive

//replace()
str= "showes";
console.log(str.replace("s","d")); //returns a new string, doesnt change the original one

//replaceAll()
str = "shoes";
console.log(str.replaceAll("s","d")); // replaces all occurences of the string ,returns a new string, doesnt change the original one

//trim()
console.log("    jdfvjbfvhjb   fvkndfkjcbnvkj kmvklnf     ".trim()) // this method removes spaces from start and end

//substring
console.log("abhishek".substring(2)); // gives substring from index = 2 to last index | (2,n)
console.log("abhishek".substring(2,6)); // gives substring from index = 2 to 5 | (2,5) | (2,6)
console.log("abhishek".substring(-2)); // converts -ve string to 0 ,gives substring from index [0,n)
console.log("abhishek".substring(-2,6)); //[0,6)
console.log("abhishek".substring(5,2)); //[2,5)
console.log("abhishek".substring(5,-2)); //[0,5)

//slice() -> almost same as substring() method, but only differs when the range is negative
console.log("acciojob".slice(2));//[2,n)
console.log("acciojob".slice(-2));// gives  exactly 2 chars from end
console.log("acciojob".slice(4,-2));// stars st 4th index, ends before last 2 chars
console.log("acciojob".slice(-7,-2));// stars from 7th element from end, and ends before 2nd element from end

//repeat()
console.log("abcd".repeat(4));
console.log("abcd".__proto__);// consoles the wrapper object details

//charAt()
console.log("abcd".charAt(2));

//indexOf()
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring",7));

//toLowerCase
console.log("AbDJD".toLocaleLowerCase());

// toLocaleUpperCase
console.log("AbDJD".toLocaleUpperCase());

console.log(+"123");
console.log(+"abc");
console.log(+[]);



