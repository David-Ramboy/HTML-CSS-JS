
const myRange = document.getElementById('myRange')
const slideVal = document.querySelector('.slider-value')

let currentBoxvalue;

myRange.oninput = function(){
    slideVal.textContent = this.value
    currentBoxvalue = this.value
    if(currentBoxvalue >=2 || currentBoxvalue <= 100){
        addBox(currentBoxvalue)
    }else{
        console.log("error")
    }
}
 
function addBox(currentBoxvalue){
    let clickNum = 1;
    const numTxt = document.querySelector('.num')
    const board = document.querySelector('.draw-board')
        board.innerHTML = "";
    

    function loopBox(){
        const drawBoard = document.querySelector('.draw-board')

        drawBoard.style.gridTemplateColumns = `repeat(${currentBoxvalue}, 1fr)`
        drawBoard.style.gridTemplateRows = `repeat(${currentBoxvalue}, 1fr)`
        let sizebox = currentBoxvalue * currentBoxvalue;
        console.log(sizebox,'sizebox')
            console.log(true)
            for(let i = 0; i < sizebox; i++){
                if(sizebox >= 0 || sizebox <= 256){
                let boxeach = document.createElement('div')
                boxeach.setAttribute('class', 'box')
                // board.insertAdjacentElement("beforeend",boxeach)       
                board.append(boxeach)
                }else{
                    return
                }

            }
        
    }

    loopBox()
    let boxes = document.querySelectorAll('.box')

    function addEvent(event){


        if(numTxt.textContent == "on"){
            boxes.forEach((box)=>{
                box.addEventListener(event, (e) => {
                    if(numTxt.textContent == "off"){
                        // box.removeEventListener()
                        // if(!box.removeEventListener()){
                            mouseover =! mouseover
                        // }
                    }
                    let target = e.currentTarget;
                    target.setAttribute('style','background-color:black;')
                })
            })
        }
    }
    boxes.forEach((box)=>{
        box.addEventListener('click', (e) => {
            let target = e.currentTarget;
            target.setAttribute('style','background-color:black;')
            if(target){
                if(clickNum < 2){
                    numTxt.textContent = "on"
                    clickNum++;
    
                }else if(clickNum == 2){
                    numTxt.textContent = "off"   
                    console.log(numTxt.textContent)            
                    clickNum = 1
                }
                addEvent('mouseover')
               
            }
        })
    })    
    
}
addBox(16)

