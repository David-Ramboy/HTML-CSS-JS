// Examine the document object//
// console.dir(document); // all property and method
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
//document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// document.all[10].textContent = "hello"
// console.log(document.forms) // all the form in the html
// console.log(document.links)

// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "hello" // textContent not respond to the styling  or getting the original hardcode in the html
// headerTitle.innerText = "Goodbye" // innertext respond to what style or css you put in the html
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = "<h3> hello </h3>"
// headerTitle.style.borderBottom = "black 2px solid"
// var items = document.getElementsByClassName("list-group-item");
// items[1].textContent = "hello"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

// for(i = 0; i < items.length; i++){
//     items[i].style.color = "red"
// }

//getelementbyTagname
// var li = document.getElementsByTagName("li");
// li[1].textContent = "hello"
// li[1].style.fontWeight = "bold"
// li[1].style.backgroundColor = "yellow"

// for(i = 0; i < li.length; i++){
//     li[i].style.color = "red"
// }
// QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 4px #ccc"

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send"

// var item = document.querySelector('.list-group-item');
// item.style.color = "blue"

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "red"

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "yellow"

// //QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent = "hello"
// var even = document.querySelectorAll('li:nth-child(even)')
// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4"
//     even[i].style.backgroundColor = "#ccc"

// }

// TRAVERSING THE DOM //

var itemList = document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode)
// console.log(itemList)

//parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)

// FirstChild
// console.log(itemList.firstChild)

// fIrstELementChild
// console.log(itemList.firstElementChild)
// console.log(itemList.firstElementChild.textContent)

//lastElementCHilde
// console.log(itemList.lastElementChild)

//nextSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)

//create Element
//create a div
// var newDiv = document.createElement('div');
// var ele = document.createElement('p')
// Add class
// newDiv.className = 'hello';

// Add id
// newDiv.id = 'hello1'

//Add attr
// newDiv.setAttribute('title','hello Div')
// newDiv.textContent = "hi"

// create Text Node
// var newDivText = document.createTextNode('hi')

// newDiv.appendChild(newDivText)
// var newEl = newDiv.appendChild(ele)
// console.log(newEl)

// var newEl = newDiv.append(ele)

// console.log(newEl)

// var contE = document.querySelector('header .container')
// var hOne =  document.querySelector("header h1")

// contE.insertBefore(newDiv, hOne)
// console.log()
// var container = document.querySelector('.container')
// console.log(container)

// var title = document.querySelector(".title")
// console.log(title.childNodes)
// console.log(title.children)

// var main = document.querySelector("#main")
// console.log(main.childNodes[3])

// EVENT
// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
//     // document.getElementById('header-title').textContent = 'changed'
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.id)
//     // console.log(e.target.tagName)
//     // console.log(e.target.className)
//     // console.log(e.target.classList)

//     // let output = document.querySelector('.output')
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>'
//     // console.log(e.type)

//     // for the size of the whole page
//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     // only the element
//     // console.log(e.offsetX)
//     // console.log(e.offsetY)
//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)
// }

var button = document.getElementById('button')
var box = document.getElementById('box')
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mousemove', runEvent)

// let number/ = 0;
let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
let select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent)
function runEvent(e){
    e.preventDefault();

    console.log("Event Type: " + e.type)
    // console.log(e.target.value)

    // console.log(e.target.value)

    // number++
    // box.innerHTML = "Event Type :" + number + e.type
    // box.innerHTML = "Event Type :" +  number + e.type

    // box.innerHTML = "<h3>MouseX" +e.offsetX +"</h3><h3>MouseY"+e.offsetY+"</h3>"+ number 
    // box.style.backgroundColor = "rgb( "+e.offsetX +", "+e.offsetY+", 40)"
    // box.innerHTML = "Event Type :" +  number + e.type
    
    // console.log("Event Type :" + e.type)
    // if(e.type == 'mouseleave'){
    //     number = 0
    //     box.innerHTML = "<h3>MouseX" +e.offsetX +"</h3><h3>MouseY"+e.offsetY+"</h3>"+ "0"
    // }
  
}