//callbacks, promises and async await

// const sayName = (name,cb) =>{
//     console.log('running some code');
//     console.log('running some code');
//     console.log('running some code');
//     console.log('running some code');
//     console.log(`My name is ${name}`);
//     cb();
// }

// function callback(){
//     console.log('this ran at the end')
// }

// sayName('Ed', callback);

// Synchronous callback

// console.log('first');

// setTimeout(() => {
//     console.log('from callback')
// }, 2000);

// console.log('last')

// // Asynchronous callback
// let name2 = document.getElementById('kk');
// name2.addEventListener('click', () => {
//     setTimeout(()=>{ console.log("you clcked the buttong")},2000);
// }),

// console.log("Hi!");

// setTimeout(()=>{
//     console.log("Click the button! ");
// },2000);

// console.log("Welcome to loupe");

// Asynce await

async function getData(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('done'), 3000);
    });

    let result = await promise;
    console.log(result);
}

getData();