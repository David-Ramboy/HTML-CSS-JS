// const alphabet = ['A','B','C','D','E','F']
// const numbers = ['1','2','3','4','5','6']

// const a = alphabet[0]
// const b = alphabet[1]
// ~~~~~~~~ Destructuring

// const [a, ,c, ...rest] = alphabet;

// console.log(a);
// console.log(b);
// console.log(c)
// console.log(rest)

//~~~~~~~~~~~~ Combining using Destructuring in Array 

// const newArray = [...alphabet, ...numbers];
// const newArrayPart2 = alphabet.concat(numbers);

// console.log(newArray)
// console.log(newArrayPart2)

//~~~~~~~~~~ Dealing with function
// function sumAndMultiply(a,b){
//     return [a+b, a*b, a/b]
// }

// const [addi, multy, division = "No Division"] = sumAndMultiply(2,3);
// console.log(addi)
// console.log(multy)
// console.log(division)

// ~~~~~~~~~~~~ in Objects

const personOne = {
    nameIs: 'Sally',
    age: 32,
    address:{
        city:"Somewhere else",
        state:" Another one of these"
    }
}

const personTwo = {
    nameIs: 'Bry',
    age: 22,
    favoriteFood: "Rice",
    address:{
        city:"Rizal",
        state:" Binangonan"
    }
}

const {nameIs, age} = personTwo;
console.log(nameIs, age, personTwo.favoriteFood)

// const personThree = {...personOne, ...personTwo}
// personThree.house = "wide";
// personTwo.age = "";
// console.log(personTwo)
// console.log(personThree)

//~~~~~~~~~~~~ in function
// function printUser({nameIs,age, favoriteFood = "watermelon"}){
//     console.log(`Name is: ${nameIs}. Age is ${age}, Food is ${favoriteFood}`)
// }
// printUser(personTwo)


// const { nameIs: firstName = "jhon", age, favoriteFood = "Rice" } = personTwo;
// const { nameIs: firstName = "jhon", ...rest } = personTwo;
// const { nameIs: firstName = "jhon", address: {city}} = personTwo;

// console.log(firstName);
// console.log(city)

// console.log(rest);

// console.log(age)
// console.log(favoriteFood)
