// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const showLink = document.getElementsByClassName("links")[0]
const button = document.getElementsByClassName("nav-toggle")[0]

// console.log(showLink.classList)
// let toggleSwitch = false

// if(toggleSwitch){
//     showLink.classList.add("show-links")
//     }

// button.addEventListener('click', function(){
   
//     toggleSwitch = true
//     showLink.classList.toggle("show-links")

// })

button.addEventListener('click', function(){

    if(showLink.classList.contains("show-links")){
        showLink.classList.remove("show-links")
    }else{
        showLink.classList.add("show-links")
    }

})


