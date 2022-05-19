let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container=document.querySelector(".container");
let filters=document.querySelector(".filters");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    filters.classList.toggle("large-filters");
}

let deleteSearch=document.querySelector(".nav__delete");

deleteSearch.addEventListener('click', function (){
    let inputSearch=document.getElementById('input');
    console.log('delete');
    inputSearch.value="";
})