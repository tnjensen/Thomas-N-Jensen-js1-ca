const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);
const url = 'https://api.artic.edu/api/v1/artworks';
const queryUrl = url + "/" + id;
const imageUrl = 'https://www.artic.edu/iiif/2/';
const imageFormat = '/full/843,/0/default.jpg';
console.log(queryUrl);
const details = document.querySelector('.details');
const loader = document.querySelector('.loader');

async function getMovie(){
    try{
        const response = await fetch(queryUrl);
        const result = await response.json();
        const artwork = result.data;
        loader.innerHTML = "";
        loader.classList.remove('loading-indicator');
          
        details.innerHTML = `<div class="detail-card"><h3>${artwork.title}</h3>
        <img src=${imageUrl + artwork.image_id + imageFormat}>
        <p style="font-weight:bold">Artist: </p><p> ${artwork.artist_title}</p>
        <p style="font-weight:bold">Department:</p><p> ${artwork.department_title}</p>
        <a href="/">Back</a>
        </div>`;

    }
    catch(error){
        details.innerHTML = message("error", error);
    }
}
getMovie();