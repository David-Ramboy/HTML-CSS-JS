const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn");
let count = 1;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        console.log(e.currentTarget.classList);
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("reset")){
            count = 0;
        }else if(styles.contains("increase")){
            count++;
        }
        value.textContent = count;
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black"
        }
    })
})

console.log(count)
// value.textContent = count
// decrease.addEventListener("click", function(){
//     count--
//     value.textContent = count;

// })

// reset.addEventListener("click", function(){
//     value.textContent = count = 0;
    
// })

// increase.addEventListener("click",function(){
//    count++

//    value.textContent = count
// })

// var num = 5;
