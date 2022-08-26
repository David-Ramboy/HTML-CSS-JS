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
    evaluatedAnswer(){
      
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
    checkDigits(number){
       
        const stringNumber = number.toString();
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
        if(value.innerText === "." && this.currentValueOperand.includes('.')) return

        this.currentValueOperand = this.currentValue.innerText.toString() + value.toString()
      
    }

    updateDisplay(){

        this.currentValue.innerText = this.checkDigits(this.currentValueOperand)
      

    }
}



    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operators');
    let equalbutton =  document.querySelector('.equal');
    let clearButton = document.querySelector('.clear')

    let currentOutput = document.querySelector('[data-current-operand]')
    let previousOutput = document.querySelector('[data-previous-operand]')
    let deleteButton = document.querySelector('.delete')

    const calculator = new Operations(currentOutput,previousOutput)

  

    numbers.forEach(button =>button.addEventListener('click',function(){
            calculator.display(button.innerText)
            calculator.updateDisplay()
          
      
    }))

    operators.forEach(item => item.addEventListener('click', function(e){
        
        let target = e.currentTarget.innerText;
        calculator.operations(target)
        previousOutput.innerText = `${calculator.checkDigits(currentOutput.innerText)} ${calculator.checkDigits(target)}`
        currentOutput.innerText = ''       
        console.log(target)
        console.log(calculator.currentValue)

    }))
    equalbutton.addEventListener('click', button => {
        if(currentOutput.innerText == NaN){
            return
        }
        calculator.evaluatedAnswer()
      
    })
    clearButton.addEventListener('click', item => {
        previousOutput.innerText = ''
        currentOutput.innerText = ''
    })
    deleteButton.addEventListener('click', item => {
        currentOutput.innerText = currentOutput.innerText.toString().slice(0,-1)
    })

