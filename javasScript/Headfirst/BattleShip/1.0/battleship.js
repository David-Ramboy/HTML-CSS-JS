var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){ //looping
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); // input random numbers 0 - 6
    if (guess < 0 || guess > 6){  // make sure the guess number is equal upto 0 1 2 3 4 5 6 not 0 below and up to 6.
        alert("Please enter a valid cell number! ");
    }else{
        guesses = guesses + 1; //then the will add one
        if( guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            alert("HIT!");
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleships");            
            }
        }else{
            alert("MISS!");
        }
    }

}
var stats = "You took " + guesses + "guesses to sink  the battleship, " + "which means your shooting accuracy was" + (3/guesses);
alert(stats);
