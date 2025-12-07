
function linearSearch(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5,6,7],3));

//find all occurances of an element in an array

let input = [1,2,2,3,7,8,2,10];

function linearSearch(arr,target){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            res.push(i);
        }
    }
    return res;
}
console.log(linearSearch(input,2));


// find minimum number in array
let input1 = [2,2,3,7,0,2,10];

function minElement(input1){
    let min = input1[0];
    for(let i = 0; i < input.length; i++){
        if(input1[i] < min){
            min = input1[i];
        }
    }
    return min;
}
    
console.log(minElement(input1));


//searching a word is present in senctence

let sentence = "I love coading in Javascript ";
function searchWord(sentence,search){
    let words = sentence.split(" ");
    for(let word of words){
        if(word == search){
            return true;
        }
    }
    return false;
}
console.log(searchWord(sentence,"coading"));
    





