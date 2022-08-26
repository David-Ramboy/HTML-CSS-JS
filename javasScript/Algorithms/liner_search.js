// const prompt = require('prompt-sync')();

// function linearSearch(array, key){
    /*
        Returns the index position of the target if found, else return -1
    */

    // the array.length represent the constant in runtime called constant time operation
    // this is the base where we move our implementation which called linear cost
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == key){
//             return i;
//         }
//     }
//     return -1
// }

// function verifyLinear(result){
//     if(result != -1){
//         console.log("The target found at index: ", result)
//     }else{
//         console.log("Target are not found in the list");
//     }
// }

// const list = [1,2,3,4,5,6,7,8,9,10]

// let input = prompt("Enter text: ") 

// let result = linearSearch(list, 10)

// verifyLinear(result);

//=============
// function liner_search(list, target){
//     for( let i = 0; i < list.length;i++){
//         if(list[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// let listTwo = [1, 2, 3, 4, 5];

// console.log(linearSearch(listTwo, 3))






// let firstName = prompt("Enter your FirstName:");
// let lastName = prompt("Enter your LastName:");

// console.log("Enter your fullname :",firstName, lastName)


function linearSearch(arr, target){
    for(let i = 0;i < arr.length; i++){
        if(arr[i] == target){
            return i
        }
    }
}

arr = [1,2,3,4,5,6,7,8,9]

console.log(linearSearch(arr,6))
