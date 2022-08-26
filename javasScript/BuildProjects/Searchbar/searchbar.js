const content = [
    {
        id : 1,
        name : "David Bryan",
        email : "davidbryan@gmail.com" 
    },
    {
        id : 2,
        name : "Carl Jayviel",
        email : "carljayviel@gmail.com" 
    },
    {
        id : 3,
        name : "Gerald Trinidad",
        email : "geraldtrinidad@gmail.com" 
    }
]

let contentDiv = document.getElementById('content') 
for(i = 0; i < content.length; i++){
    contentDiv.innerHTML += `<div class="box">
        <p>Name: ${content[i].name}</p>
        <p>Email: ${content[i].email}</p>   
    </div`
}
let storeDataString;
// split filter map
let showText = document.querySelector('.showtext')
let searchBar = document.getElementById('search-bar')
searchBar.addEventListener('input',(e) => {
    let dataString = e.data
    let searchBarValue = searchBar.value 
    console.log(searchBarValue)
    let searchResult = searchBarValue.replace(' ', '')
    // im splitting input text and store in StoreDataString
    storeDataString = searchResult.split('')
    showText.innerHTML = storeDataString


    let makeItString;

    content.forEach(item => {

        let makeItString = item.name.replace(' ','').toLowerCase().split('')
        let letsMap = makeItString.map(n => {
            
        })     
    })
})
