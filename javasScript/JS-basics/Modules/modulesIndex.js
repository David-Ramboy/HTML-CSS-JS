// two ways of exporting

export default class User{
    constructor(name, age){
        this.name = name;
        this.age  = age; 
    }
}

export function prntName(user){
    console.log(`User name is ${user.name} `)
}

export function prntAge(user){
    console.log(`User age is ${user.age} `)
}

// export default User;
// export{printName, printAge}
