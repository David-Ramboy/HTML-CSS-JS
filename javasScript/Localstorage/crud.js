fetch("products.json")
.then(response => response.json())
.then( data => {
    localStorage.setItem("products", JSON.stringify(data));
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]")
    }
})

// store global variable
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

//adding product to the cart function
function additemCart(productId){
    // looking for a product that matches the arguments
    let product = products.find(product => {return product.id == productId})
    console.log(product)

    if(cart.length == 0){
        cart.push(product)
    }else{
        let res = cart.find(element => element.id == productId)
        if(res === undefined){
            cart.push(product);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
}
additemCart(1)
additemCart(2)
additemCart(3)


//Removing product from the cart
function removeItemFromCart(productId){
    let temp = cart.filter(item => item.id != productId)
    localStorage.setItem("cart", JSON.stringify(temp))
}

// Updating the products quantity.
function updateQuantity(productId,quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}
updateQuantity(2, 199)

function getTotal(){
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    })

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0)

    console.log(sum)
}
getTotal()


