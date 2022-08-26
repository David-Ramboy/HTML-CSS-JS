// There is collision here
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
console.log(colors);
const btn = document.getElementById("btn")
const color = document.querySelector(".color");

let previousIndex = 0;
    
btn.addEventListener("click",function(e){
    let randomNumber = 0;
    
    randomNumber = getRandomNumber(previousIndex, randomNumber);
    
    console.log(previousIndex,randomNumber)

    

    previousIndex = randomNumber;

    // checkCollision(previousIndex,randomNumber)

    // console.log(previousIndex,randomNumber)
    // function checkCollision (previousIndex,randomNumber){
       

    // }


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber(previousIndex, randomNumber){
    if(randomNumber === previousIndex){
        

        console.log("equal stop let me fix" +" " + previousIndex +" "+ randomNumber);
        if(randomNumber > colors.length && randomNumber !== previousIndex){
            randomNumber = getRandomNumber()-1;
        }else if(randomNumber < 0){
            randomNumber = getRandomNumber()+1; 
        }
    
    }

    return Math.floor(Math.random() * colors.length)
}
