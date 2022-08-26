var view = { // view is where i updated the ships based in model and controller
    displayMessages: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    //  or player guesses
    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit")
    },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss")
    }
}

var model = { // the model is the behavior of the game which holds all the value of guesses and declare to the method to the view object to display play the corresponds input
    // to keep track ships, hit, and if they sunk
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
    ships : [{locations: ["00","00","00"], hits: ["","",""]},
            {locations: ["00","00","00"], hits: ["","",""]},
            {locations: ["00","00","00"], hits: ["","",""]}],
    // fire: function (drop){
      
    //     for(i = 0; i < this.ships.length; i++){
    //         var shipsShort = this.ships[i];
    //         var shipsLocation = shipsShort.location;
    //         var shipsMark = shipsShort.hits;
    //         if(shipsShort){
    //             if(drop === shipsLocation[i]){
    //                 return true;
    //             } else{
    //                 return false;
    //             }
    //         }   
    //     }
    // }
    fire: function(guess){
        for(i = 0; i < this.numShips; i++ ){
            var ship = this.ships[i];
            var location = ship.locations;
            var index = location.indexOf(guess); // this will compare the guess to locations which is two values with starting to 0
            if(index >= 0 ){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessages("HIT!")
                if(this.isSunk(ship)){
                    view.displayMessages("You sank my Battleship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);   //otherwise this will be missed
        view.displayMessages("You Missed")
        return false;
    },
    isSunk: function(ship){
        for(var i = 0; i < this.shipLength; i++){
            if(ship.hits[i] !== "hit"){
                return false;
            }
        }
        return true;
    },
    generateShipLocations: function(){
        var locations;
        for(var i = 0; i < this.numShips; i++){
            do{
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function(){
        var direction = Math.floor(Math.random() * 2)
        var row, col;

        if(direction === 1){
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for(var i = 0;i < this.shipLength; i++){
            if(direction === 1){
                newShipLocations.push(row + "" + (col + i));
            }else{
                newShipLocations.push((col + i) + "" + col);
            }
        }
        
        return newShipLocations;
    },
    collision: function(locations){
        for(var i = 0; i < this.numShips; i++){
            var ship = model.ships[i];
            for(var j = 0; j < locations.length; j++){
                if(ship.locations.indexOf(locations[j]) >= 0){
                    return true;
                }
            }   
        }
        return false;
    }
    
}; 
var controller = { // controller of how the game end and process// glue all together by getting users input
    guesses : 0,

    processGuess: function(guess){
        var location = parseGuess(guess); //checking the input value
        if(location){
            this.guesses++;
            var hit = model.fire(location);
            if(hit && model.shipSunk === model.numShips){
                view.displayMessages("You sank all battleships, in " + this.guesses + " guesses"); // check if the all guesses are hit to the respective location of ships by connnecting to the model object 
            }
            
        }
    }
  
}
function parseGuess(guess){ // validated
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    // validating this code to make sure there no less then 0 and greater than 2 or null,
    if (guess === null || guess.length !==2 ){
        alert("Oops, please enter a letter and a number on the board.");
    }else{
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar); 
        var column = guess.charAt(1); 

        if(isNaN(row)|| isNaN(column)){
            alert("Oops, that isn't on the board."); // false
        } else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){ // false
            alert("Oops, that's off the board!");
        }else{
            return row + column;
        }
    }
    return null;
}
function init(){
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();

}

function handleKeyPress(e){
    var fireButton = document.getElementById("fireButton");
    console.log(e)
    if (e.keyCode === 13){
        fireButton.click();
        return false;
    }
}

function handleFireButton(){   // there we dynamically create a function to the form
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    console.log(guess)       
    controller.processGuess(guess);
    guessInput.value = "";
}

window.onload = init; //run it when the page is fully loaded;





// console.log(model.generateShip())
// console.log(controller.parseGuess("A0"));
// console.log(controller.parseGuess("B6"));
// console.log(controller.parseGuess("G3"));
// console.log(controller.parseGuess("H0"));
// console.log(controller.parseGuess("A7"));

// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");



























