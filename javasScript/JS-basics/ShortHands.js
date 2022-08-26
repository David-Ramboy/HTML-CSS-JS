//if else shorthand
// if(6 > 5){
//     // console.log('6 is greater than 5')
// }else{
//     // console.log('5 less the 6')
// }
// shorthand
// console.log(6 > 5 ? '6 is greater than 5' : '6 is less than or equal to 5')
//Syntax:
    // condition ? if true : if false

// simple example
// let output = true ? 'true' : 'false'

//outside return of jsx

// const Ternary = () => {
//     if(6 > 5){
//         // return <p>6 is greater than 5</p>
//     } else {
//         // return <p>6 is less than or equal to 5</p>
//     }
// }

//inside of jsx

// const TernaryJsx = () => {
//     return(
//         // <div>
//         //     {6 > 5 ? (<p>6 is greate than 5</p>) : (<p> 6 is less than or equal to 5</p>)}
//         // </div>
//     )
// }

//fetching data still load display
    // function App(){
    //     return(
    //         // <div>
    //         //     {!loading ? (<div><p>Main Content</p></div>) : (<p>Loading...</p>)}
    //         // </div>
    //     )
    // }

// Spread operators
// let numbers = [2,3]
// console.log(...numbers)
// let allNum = [1, ...numbers, 4,5]
// console.log(allNum)

//spread operator in react
// const PersonComponent = (props) => {
//     return(
//         <p>
//             {props.name} is {props.age} years old
//         </p>
//     )
// }

// function App(){
//     const props = { name: 'Max', age: 23}
//     return <PersonComponent {...props}/>
// }

// Spread operator array in use state

// function App(){
//     const [people,addPerson] = useState(['Max', 'Tom'])
//     return(
//         <div>
//             {people.map((number) => (
//                 <li>{number}</li>
//             ))}
//         </div>
//         <button onClick={() =>  addPerson([...people, 'Anna'])}>
//             Add Anna
//         </button>
//     )
// }

//Destructuring
// const Destructuring = () => {
//     const countBad = useState(0)
//     console.log(countBad) // Array: [0,1]
//     return(
//         <div>
//             {countBad[0]}
//             <button onClick={() => countBad[1](5)}>Increase</button>
//         </div>
//     )
// }

let talk = 'ff';
talk && console.log(true)
