/* 
Sort a list in ascendin order
returns a new sorted list

Divide: Find  the midpoint of the list and divide into sublists
Congquer: Recursively sort the sublists created in previous step
Combine: Merge the sorted sublists created in previous step
*/

function mSort(array){
    if(array.length === 1){
        return array           // return once we hit an array with  a single item
    }
    const middle = Math.floor(array.length / 2)  // get the middle item of the array rounded down
    const left = array.slice(0, middle)  //items on the left side
    const right = array.slice(middle)   // items on the right side
    return merge(mSort(left), mSort(right))

    // In slice operation takes overall 0(k log n) time
}
//compare the array item by item and return the concatenated result
function merge(left, right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    // takes overall 0(n log n) time
    
}
const list = [4,7,5,9,1,3,8,10]
const sortedList = mSort(list)
// console.log(list.sort((a,b) => a-b))
function verifySorted(sortedList){
    const n = sortedList.length;
    
    if(n == 0 || n == 1){
        return true;
    }

    return sortedList[0] < sortedList[1] && verifySorted(sortedList.slice(1))
}
console.log(verifySorted(sortedList))