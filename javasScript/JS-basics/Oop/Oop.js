var car = {
    ferari: "1203w",
    seats: 4
}

car.prototype = {
    "lol":"lol"
}


var objectName = new Object()

var newObjectName = Object.create(car)

console.log(newObjectName)