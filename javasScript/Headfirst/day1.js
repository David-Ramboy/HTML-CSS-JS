
// ------------While loop-------------
// var scoops = 5;
// while(scoops > 0){
//     document.write("Another scoops! <br>");
//     scoops += - 1;
// }
// document.write("We dont have scoops!");

// --------------with input--------------
//     function btn(){
//     var i = document.getElementById('scoopS').value;

//     while(i > 0){
//         document.write("Another scoops! <br>");
//         i = i - 1;
//     }
//     document.write("We dont have scoops!");
// }



// -------------------if / else if/ else----------------------
// function btn(){
// var i = document.getElementById('scoopS').value;
// if(i >= 5){
//    alert('eat faster the icecream is going to melt');
// }
// else if(i == 3){
//     alert("Ice cream is running low!");
// }
// else if(i == 2){
//     alert("Going once!");
// }
// else if(i == 1){
//     alert("Going twice!");
// }
// else if(i == 1){
//     alert("Going twice!");
// }
// else if(i == 0){
//     alert("Gone!");
// }
// else{
//     alert("Still lots of ice cream left, come and get it.");
// }
// }
// var i = 0;
// var name = "joe";
// while(i < 2){
//     document.write("Happy Birthday to you.<br>");
//     document.write("Happy Birday to you.<br>");

//     document.write("Happy Birthday dear" + name + ",<br>");

//     i = i + 1;
// }
var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
             { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
             { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];

var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);
