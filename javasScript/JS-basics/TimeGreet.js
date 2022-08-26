Greeting('David')

function Greeting(name){

let date = new Date()
let time = date.getHours() % 12 || 12
const ampm = (date.getHours() >= 12) ? 'PM' : 'AM'

// let timeofday = time + ampm ;
let response;
if(time >= 4 && time < 12){
    if(ampm === 'AM'){
        response = 'morning'
    }
    
}
if(time >= 12 && time < 5){
    console.log(true)

    if(ampm === 'PM'){
        response = 'Afternoon'
    }

}
if(time >= 5 && time < 8){
    console.log(true)

    if(ampm === 'PM'){
        response ="Evening"
    }

}
if(time >= 8 && time < 12 || time < 4){
    console.log(true)

    if(ampm === 'AM' || ampm === 'PM'){
        response = 'Night'
    }
}

return console.log(`Good ${response} ${name}`)
}


