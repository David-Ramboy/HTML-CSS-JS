// given = [4,2,-1,-4]
// find the nearest to 0

const unorderedNums = [4,2,-1,-4] 
function sortGiven(array){
    if(array.length === 1){
        return array
    }

    let mid = Math.floor(array.length/2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
    return mergeSort(sortGiven(left),sortGiven(right))
}

function mergeSort(left, right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

let sortedGiven = sortGiven(unorderedNums)
// let givenValue = 0

// let closest = sortedGiven.reduce(function(prev, curr){
//     return (Math.abs(curr - givenValue) < Math.abs(prev - givenValue) ? curr : prev);
// })

// console.log(closest)

/*
Given the array of sorted integers. We need to find the closest value to the given number.
Array may contain duplicate values and negative numbers.

A simple solution is to traverse through the given array and keep track of absolute difference
of current element with every element. Finally return the element that has minimum absolution difference.

An efficient solution is to use Binary Search

*/

let answer = findClosest(sortedGiven, 0)

console.log(answer)

function findClosest(arr, target){
    let n = arr.length

    if(target <= arr[0]){
        return arr[0];
    }
    if(target >= arr[n - 1]){
        return arr[n - 1];
    }

    //Doing binary search
    let i = 0, j = n, mid = 0;
    while (i < j){
        mid = (i + j) / 2;

        if(arr[mid] == target){
            return arr[mid];
        }

        // if target is less than array
        // element, then search in left

        if(target < arr[mid]){
            // If target is greater than previous
            // to mid, return closest of two
            if(mid > 0 && target > arr[mid - 1]){
                return getClosest(arr[mid - 1],arr[mid], target);

            }
            // Repeat for left half
            j = mid;
        }
        
        //If target is greater than mid
        else{
            if(mid < n - 1 && target < arr[mid - 1]){
                return getClosest(arr[mid], arr[mid + 1], target);

            }
            i = mid + 1; // update i

        }
    }

    // Only single element left after search
    return arr[mid];
}

/*Method to compare which one is the more closes
We find the closest by taking the difference
between the target and both values. It assumes
that val1 and target lies between these two.
*/ 

function getClosest(val1, val2, target){
    if(target - val1 >= val2 - target){
        return val2;
    }else{
        return val1;
    }
}

