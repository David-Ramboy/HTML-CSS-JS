class Operations{
    constructor(currentValue, previousValue){
        this.currentValue = currentValue;
        this.previousValue = previousValue;
    }
    clear(){
        this.currentValue = ''
        this.previousValue = ''
    }
    checkValue(value){
      
    }
    evaluatedAnswer(cur, pre){
      
        let currentRealNum = parseFloat(this.currentValue.innerText);
        let previousRealNum = parseFloat(this.previousValue.innerText);
        console.log('current', currentRealNum)
        console.log(currentRealNum)
        if(isNaN(currentRealNum) || isNaN(previousRealNum)) return
        let answer;
        switch(this.operation){
            case "+":
                answer = previousRealNum + currentRealNum;
                console.log(answer)
                break;
            case "-":
                answer = previousRealNum - currentRealNum;
                break;
            case "%":
                answer = previousRealNum / currentRealNum;
                break;
            case "*":
                answer = previousRealNum * currentRealNum;
                break;
            default:
                return
        }
        this.currentValue.innerText = answer
        this.previousValue.innerText = ""
     
    }
    operations(operation){
        this.operation = operation;
        if(this.previousValue !== ''){
            this.evaluatedAnswer()
        }
    }
    checkDigits(value){
        // const valueString = value.toString();
        // const integerDigits = parseFloat(valueString.split('.')[0]) 
        // // console.log(typeof(integerDigits))
        // const decimalDigits = valueString.split('.')[1]
        // let integerDisplay;
        // if(isNaN(integerDigits)){
        //     integerDisplay = ""
        // }else{
        //     integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0})

        // }
        // if(decimalDigits != null){
        //     return `${integerDisplay}.${decimalDigits}`
        // }else{
        //     // console.log(integerDisplay)
        //     return integerDisplay;
        // }

        const stringNumber = value.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ""
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay;
        }
       
    }
    display(value){
        this.currentValue.innerText  = this.currentValue.innerText.toString() + value.toString()
        console.log('current',this.currentValue.innerText)
        console.log('value',value)
    }
}

window.onload = function(){

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operators');
    let equalbutton =  document.querySelector('.equal');
    let clearButton = document.querySelector('.clear')

    let currentOutput = document.querySelector('.output')
    let previousOutput = document.querySelector('.previousValue')
    let deleteButton = document.querySelector('.delete')

    const calculator = new Operations(currentOutput,previousOutput)

    numbers.forEach(item => item.addEventListener('click',function(e){
        if(item.innerText === "." && currentOutput.innerText.includes('.')) return
        if(currentOutput.innerText != null){
            let numbers = e.currentTarget.textContent;
            calculator.display(numbers)
            currentOutput.textContent = calculator.checkDigits(currentOutput.textContent)
            // console.log(currentOutput.textContent)
            // console.log('target', numbers)

        }else{
            return
        }
    }))

    operators.forEach(item => item.addEventListener('click', function(e){
        
        let target = e.currentTarget.innerText;
        calculator.operations(target)
        previousOutput.innerText = calculator.checkDigits(currentOutput.innerText) + target
        currentOutput.innerText = ''       
        console.log(target)
        console.log(calculator.currentValue)

    }))
    equalbutton.addEventListener('click', button => {
        if(currentOutput.innerText == NaN){
            return
        }
        calculator.evaluatedAnswer(currentOutput, previousOutput)
      
    })
    clearButton.addEventListener('click', item => {
        previousOutput.innerText = ''
        currentOutput.innerText = ''
    })
    deleteButton.addEventListener('click', item => {
        currentOutput.innerText = currentOutput.innerText.toString().slice(0,-1)
    })

}


let num = 12345;
let stringnum = num.toString()
let integerDigits = num.toLocaleString('en')
console.log(integerDigits)