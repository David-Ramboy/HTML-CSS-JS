function nameUser(user){
    let lastname = 'Ramboy'
    let result = user ? `${user} ${lastname}` : "stranger"

    console.log('Hello', result)
}

nameUser('david')

//Handling null

const greeting = (person) =>{
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
}

console.log(greeting({ name: "Alice" })) // 'Howdy, Alice'
console.log(greeting(null)) // 'Howdy, stranger'

//Conditional Chains

function example(){
    return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
/*  this equivalent to if, else if, else
    function example(){
        return if(condition1){
            value1
        }else if(condition2){
            value2
        }else if(condition3){
            value3
        }else{
            value4
        }
    }

*/

