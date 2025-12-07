let arr = [1,3,4,5,6,17,25,30];
function binarySearch(arr ,target){
    let low=0, high = arr.length - 1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return -1;
}

console.log(binarySearch(arr,1)); 

// square root of a num using binary search
function binarySearch1(arr,target){
    let low=0, high = arr.length - 1;
    let ans = 0;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            ans =mid;
            high =mid-1;
        }
        else if(arr[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return -1;
}

console.log(binarySearch1(121));


//lowerbound
function lowerbound(arr,target){
    let low=0, high = arr.length -1;
    let ans=0;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] >= target){
            ans = mid;
            high = mid-1;
        }
    
        else{
            low = mid+1;
        }
    }
    return ans;
}

console.log(lowerbound([1,2,3,4,4,4,5,5,5,5,5,5,5,5,6,8],5));

//upperbound
function upperbound(arr,target){
    let low=0, high = arr.length -1;
    let ans=0;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] > target){
            ans = mid;
            high = mid-1;
        }
    
        else{
            low = mid+1;
        }
    }
    return ans;
}
console.log(upperbound([1,2,3,4,4,4,5,5,5,5,5,5,5,5,6,8],5));



function countOccurrences(arr, target) {
    const lower = lowerbound(arr, target);
    const upper = upperbound(arr, target);
    return upper - lower; 
}


console.log(countOccurrences([1,2,3,4,4,4,5,5,5,5,5,5,5,5,6,8], 5));