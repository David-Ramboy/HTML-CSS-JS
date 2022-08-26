// const prompt = require('prompt-sync')();

// function binarySearch(list, target){

//     let left = 0;
//     let right =  list.length - 1;

//     while(left <= right){
//         const mid = left + Math.floor((right - left)/ 2)

//         if(list[mid] === target){
//             return mid
//         }
//         if(mid < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return -1;

// }

// const list = [1,2,3,4,5,6,7,8,9,10]


// const result = binarySearch(list, 1);

// console.log(result)

//==================

// function binarySearch(list, target){
//     let left = 0;
//     let right = list.length - 1

//     while (left <= right){
//         let mid = left + Math.floor((right - left)/2);
//         if(list[mid] === target){
//             return mid
//         }
//         if(list[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return -1;
// }

// let list = [1,2,3,4,5];

// console.log(binarySearch(list, 5))


function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1
    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] == target){
            return mid
        }
            if(arr[mid] < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        
    }
}

const arr = [1,2,3,4,5]

console.log(binarySearch(arr, 4))