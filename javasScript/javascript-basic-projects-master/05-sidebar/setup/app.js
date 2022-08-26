const closebtn = document.querySelector(".close-btn")
const sidebarT = document.querySelector(".sidebar-toggle")
const links = document.querySelector(".sidebar")
console.log()

closebtn.addEventListener("click",function(){
    if(links.classList.contains("show-sidebar")){
        links.classList.remove("show-sidebar")
    }else{
        links.classList.add("show-sidebar")
    }
})

sidebarT.addEventListener("click",function(){
    links.classList.toggle("show-sidebar")
})