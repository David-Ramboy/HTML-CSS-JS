let message = 'I am a Happy Go lucky guy'
let arr = message.split(' ');
// console.log(arr)
// console.log(arr[0])

var tot_number = 123456.789;
let tot_numberstring = tot_number.toString()
let arrNum = tot_numberstring.split(".");
// console.log(arrNum)
// console.log(arrNum[0])
// console.log(arrNum[1])

let numberTwo = 123;
let numberTwoString = numberTwo.toString();
let integerDigits = numberTwoString.split('.')[0];
let decimalDigits = numberTwoString.split('.')[1];
console.log(numberTwoString)
console.log(integerDigits)
console.log(decimalDigits) 