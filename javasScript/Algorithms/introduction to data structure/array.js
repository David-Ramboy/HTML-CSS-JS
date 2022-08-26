// creating or accessing Array
let new_list = [1,2,3]
let result = new_list[0];

//searching
// if(new_list.indexOf(0)){
//     console.log(true)
// };

for(n in new_list){
    if(n == 1){
        console.log(true)
    }
}

new_list = new_list.concat([4,5,6,7])

console.log(typeof(new_list))

let myArray = [1,2,[10,3]];
let copyMyArray = myArray;
myArray[0] = 100;

let result1 = myArray[2][0]

console.log(result1)