import U,{prntName as UserName, prntAge as UserAge} from './modulesIndex.js'

const user = new U('david', 22);
console.log(user)
UserName(user)
UserAge(user)