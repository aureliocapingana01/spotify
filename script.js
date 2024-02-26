const searchInput = document.querySelector('#search-input');
const resultArtisit = document.querySelector('#result-artist');
const resultPlayList = document.querySelector('#result-playlists');

const requestApi = searchTerm => {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}` /* usando o query Params para receber da API o resultado digitado */

    fetch(url)
        .then((res) => res.json())
        .then((result) => displayResult(result)) 
};

const displayResult = result => {
    displayResult.classList.add('hidden');

    const artistName = document.querySelector('#artist-name');
    const artistImage = document.querySelector('#artist-img');

    result.forEach(element => {
        artistName.innerHTML = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtisit.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlayList.classList.add('hidden');
        resultArtisit
        .classList.remove('hidden');
        return;
    }
})