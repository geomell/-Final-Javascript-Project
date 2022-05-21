/*jshint esversion: 6 */

// Redirect to youtube website when clicking on the logo

document.querySelector(".nav__logo").onclick = function () {
    location.href = "https://www.youtube.com/";
    //console.log ("hi");
};

// Open and close the menu on the left side

let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container=document.querySelector(".video-container");
let filters=document.querySelector(".filters");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    filters.classList.toggle("large-filters");
};

//Clear the input

let deleteSearch=document.querySelector(".nav__delete");

deleteSearch.addEventListener('click', function (){
    let inputSearch=document.getElementById('input');
    //console.log('delete');
    inputSearch.value="";
});

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.nav__inputButton');
let searchLink = "https://www.youtube.com/results?search_query=";

//Redirecting to the search results through the search-box by pressing the Enter

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        //console.log ("enter");
        location.href = searchLink + searchInput.value;
    }
});

//RRedirecting to the search results through the search-box by pressing the len

searchBtn.addEventListener('click', function()  {
    if(searchInput.value.length){
        //console.log ("len");
        location.href = searchLink + searchInput.value;
    }
});

//Using the API to get the data

const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyD_XLMNIbSppqociJvyilm3uIOam3jgpSk";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'GR'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    });
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
       makeVideoCard(video_data);
    });
};

// Adding the videos in the HTML

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
        <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
            <a href="#"><img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt=""><a>
            <div class="flex-div">
                <img src="${data.channelThumbnail}" class="channel-icon" alt="">
                <div class="vid-info">
                    <a href="#" class="title">${data.snippet.title}</a>
                    <p class="channel-name">${data.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    `;
};
