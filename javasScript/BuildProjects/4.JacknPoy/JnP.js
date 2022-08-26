const handObject = [{
    id: 1,
    name: 'rock',
    image:'JacknPoy/Rock.png'
},{
    id: 2,
    name: 'paper',
    image:'JacknPoy/Paper-1.png'
},{
    id: 3,
    name: 'scissor',
    image:'JacknPoy/Scissor.png'
}]


window.addEventListener('load',()=>{
    const player1Ui = document.querySelector('.p1')
    const player2Ui = document.querySelector('.p2')
    const player1btn = document.querySelector('.p1btn')
    const randombtn = document.querySelector('.randombtn')
    const player2btn = document.querySelector('.p2btn')

    const cbxrock = document.getElementById('rock')
    const cbxpaper = document.getElementById('paper')
    const cbxscissor = document.getElementById('scissor')

    const cbxrock2 = document.getElementById('rock2')
    const cbxpaper2 = document.getElementById('paper2')
    const cbxscissor2 = document.getElementById('scissor2')



    const rock = handObject[0].image
    const paper = handObject[1].image
    const scissor = handObject[2].image
    
console.log(paper)

    const radiobtn = [cbxrock, cbxscissor, cbxpaper]
    const radiobtn2 = [cbxrock2, cbxscissor2, cbxpaper2]

    
    
    let player1current; 
    let player2current; 

    player1Ui.src = rock
    player1current = handObject[0].id
    player2Ui.src = rock 
    player2current = handObject[0].id
    function match(player1,player2, message){
        let both = `${player1}${player2}`
        let rock; //1   1 + 2 = lose rock /1 + 3 = win rock / 1 + 1 = draw
        let paper; //2  2 + 1 = win paper /2 + 3 = lose scissor / 2+2 draw
        let scissor;// 3 3 + 1 = lose rock/ 3 + 2 = wind scissor / 3+3 draw

        let apply = document.querySelector('.result')
        console.log(apply)
        // wins
            if(both == "13" || both == "21" || both == "32"){
                apply.innerHTML = `Result: ${message} wins`
            }
        // lose
            if(both == "12" || both == "23" || both == "31"){
                apply.innerHTML = `Result: ${message} lose`
            }
        //draw
            if(both == "11" || both == "22" || both == "33"){
                apply.innerHTML = `Result: draw`
            }
    }
    function randomWin(player1, player2, message){
        let both = `${player1}${player2}`
        let apply = document.querySelector('.result')

        if(both == "13" || both == "21" || both == "32"){
            apply.innerHTML = `Result: ${message} wins`
        }
        if(both == "11" || both == "22" || both == "33"){
            apply.innerHTML = `Result: draw`
        }
    }

    randombtn.addEventListener('click', () => {
        let randomNumbers = Math.floor(Math.random() * 3)
        let randomNumbers2 = Math.floor(Math.random() * 3)

        const randomHand = handObject[randomNumbers].image
        const randomHand2 = handObject[randomNumbers2].image

        player1Ui.src = randomHand;
        player2Ui.src = randomHand2;

        player1current = handObject[randomNumbers].id
        player2current = handObject[randomNumbers2].id

        if(player1current){
            randomWin(player1current,player2current, "Player1")

        }
        if(player2current){
            randomWin(player2current,player1current, "Player2")
        }
        console.log(randomNumbers)
        console.log(randomNumbers2)
        console.log(player1current)
        console.log(player2current)
        
    })

    player1btn.addEventListener('click',()=>{
        document.querySelector('[data-choices1]').setAttribute('class','show')
        document.querySelector('[data-choices2]').setAttribute('class','hide')

        radiobtn.forEach(item => {
            item.addEventListener('click',(e) => {
                if(item.value == 'Scissor'){
                    player1Ui.src = scissor
                    player1current = handObject[2].id
                }
                if(item.value == 'Paper'){
                    player1Ui.src = paper
                    player1current = handObject[1].id

                    
                }
                if(item.value == 'Rock'){
                    player1Ui.src = rock
                    player1current = handObject[0].id
                }
                match(player1current,player2current, "Player1")
            })     
        })
    }) 
    player2btn.addEventListener('click',()=>{
        document.querySelector('[data-choices2]').setAttribute('class','show2')
        document.querySelector('[data-choices1]').setAttribute('class','hide')
        
        radiobtn2.forEach(item => {
            item.addEventListener('click',(e) => {
                if(item.value == 'Scissor'){
                    player2Ui.src = scissor
                    player2current = handObject[2].id
                    
                }
                if(item.value == 'Paper'){
                    player2Ui.src = paper
                    player2current = handObject[1].id
                }
                if(item.value == 'Rock'){
                    player2Ui.src = rock 
                    player2current = handObject[0].id

                }
                match(player2current,player1current, "Player2")

            })     
        })
    }) 
})