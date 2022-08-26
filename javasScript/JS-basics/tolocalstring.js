var tot_number = 123456.789;
// let tot_numberstring = tot_number.toString()
let test = tot_number.toLocaleString();

console.log(typeof(test))

// console.log(tot_number.toLocaleString('en-US'))
// console.log(tot_number.toLocaleString('en-IN'))
// console.log(tot_number.toLocaleString('fr-FR'))

//Specifying an Option Parameter
// Finally, the toLocaleString() method has many options that you can set to change the numeric representation.

// console.log(tot_number.toLocaleString('en-US',{style:'currency', currency:'USD'}))
// console.log(tot_number.toLocaleString('en-US',{style:'currency', currency:'INR'}))
// console.log(tot_number.toLocaleString('en-US',{style:'currency', currency:'PHP'}))

// console.log(tot_number.toLocaleString('en-US',{maximumFractionDigits:0}))

// console.log(tot_numberstring.split('.')[1])
