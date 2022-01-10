const selectItem = document.getElementById('categories');
const url = 'https://api.artic.edu/api/v1/artworks';
const proxy = 'https://noroffcors.herokuapp.com/';
const corsFix = proxy + url;
const imageUrl = 'https://www.artic.edu/iiif/2/';
const imageFormat = '/full/843,/0/default.jpg';
const resultContainer = document.querySelector('.results');
const loader = document.querySelector('.loader');

async function getAnimals(){
    resultContainer.innerHTML = "";
    try{
        const response = await fetch(corsFix);
        const results = await response.json();
        loader.innerHTML = "";
        loader.classList.remove('loading-indicator');
        const artworks = results.data;
        
        artworks.forEach(function(artwork){
           resultContainer.innerHTML += `<div class="card"><a href=details.html?id=${artwork.id}><h4>${artwork.title}</h4></a>
           <img src=${imageUrl + artwork.image_id + imageFormat}>
           <h3>${artwork.place_of_origin}</h3>
            <p style="font-style:italic"> ${artwork.date_display}</p>
            </div>`;
        });

    }
    catch(error){
        resultContainer.innerHTML = message("error", error);
    }
}
getAnimals();
