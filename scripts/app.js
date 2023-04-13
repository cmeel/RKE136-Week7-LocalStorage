const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieDate = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favouriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlinStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('date');

if(titleInStorage && imageUrlinStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(56, 56, 126, 0.625),rgba(110, 73, 73, 0.639)), url('${imageUrlinStorage}')`;
    movieDateToDisplay.textContent = dateInStorage;
}

btn.addEventListener('click', ()=> {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('date', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(56, 56, 126, 0.625),rgba(110, 73, 73, 0.639)),  
    url('${posterUrlInput}')`;
    movieDateToDisplay.textContent = movieDateInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});