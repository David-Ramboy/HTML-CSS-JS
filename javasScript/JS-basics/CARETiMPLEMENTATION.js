let textArea = document.getElementById("textA");
let inputX;
textArea.addEventListener("change", (event)=>{
    const input = event.target.value
    
    getLoc(input)
}) 

function getLoc(){
const input = document.getElementById("textA");
input.focus();
input.setSelectionRange(2,5);
}
document.getElementById("text").addEventListener("change", (event)=>{
})  
function insertBreakAtPoint(e) {
console.log(e, "e")
let range;
let textNode;
let offset;

if (document.caretRangeFromPoint) {
console.log(e.clientX, e.clientY,"client")
range = document.caretRangeFromPoint(e.clientX, e.clientY);
textNode = range.startContainer;
offset = range.startOffset;
console.log(range,"range")
console.log(textNode, "textnode")

console.log(offset, "offset")

let makeString = document.getElementsByTagName("p")[0].textContent;

let storeLeft = [];
let storeRight = [];

for(let i = offset - 1; makeString.length;i--){
console.log(i)
if(makeString[i] === " " || i === -1){
break;
}else{
storeLeft.push(makeString[i])
}
};

for(let i = offset; makeString.length;i++){

if(makeString[i] === " " || i === -1){
break;
}else{
storeRight.push(makeString[i])
}
}

function reverseString(str){
// Check input 
if(!str|| str.length < 0||typeof str !== "string"){
return ' ';
}

// Take empty array revArray
const revArray = [];
const length = str.length - 1;

// looping from the end
for(let i = length; i >= 0; i--){
  revArray.push(str[i]);
}

// Joining the array elements
return  revArray.join('');
}

let leftString = reverseString(storeLeft.join('').toString())
storeLeft = leftString;
storeRight = storeRight.join('').toString();
let wordPick = storeLeft + storeRight

console.log(wordPick)



} else if (document.caretPositionFromPoint) {
range = document.caretPositionFromPoint(e.clientX, e.clientY);
textNode = range.offsetNode;
offset = range.offset;
} else {
document.body.textContent = "[This browser supports neither"
+ " document.caretRangeFromPoint"
+ " nor document.caretPositionFromPoint.]";
return;
}
// Only split TEXT_NODEs

}

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].addEventListener('click', insertBreakAtPoint, false);
