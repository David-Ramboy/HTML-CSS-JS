let recursiveFunction = function(arr, target, start, end){
    // Base Codition
    if(start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end)/2);
    // Compare mid with given key target
    if(arr[mid] === target) return true;

    if(arr[mid] > target){
        return recursiveFunction(arr, target, start, mid - 1)
    }else{
        return recursiveFunction(arr, target, mid + 1, end)
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10];

let target = 10
if(recursiveFunction(arr,target,0,arr.length)){
    console.log("Target is found")
}else{
    console.log("Target not found");
}


