let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container=document.querySelector(".container");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    
}

let deleteSearch=document.querySelector(".delete");

deleteSearch.addEventListener('click', function (){
    let inputSearch=document.getElementById('input');
    console.log('delete');
    inputSearch.value="";
})