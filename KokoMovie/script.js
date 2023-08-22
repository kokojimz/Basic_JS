//Fetch Refactoring
//Main code
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    }catch(err){
        alert(err);
    }
});

//event binding
document.addEventListener('click', async function(e){
    try{
        if(e.target.classList.contains('modal-detail-button')){
            const imdbid = e.target.dataset.imdbid;
            const detailMovie = await getDetailsMovie(imdbid);
            updateDetail(detailMovie); 
        }
    }catch(err){
        alert(err);
    }
});

//Function
function updateDetail(detailMovie){
    document.querySelector('.modal-body').innerHTML = showMovieDetail(detailMovie);
}

function updateUI(response){
    const movie = response.Search;
    let card = '';
    movie.forEach(element => {
        card+= showCards(element);
    });
    document.querySelector('.movie-container').innerHTML = card;
}

function getDetailsMovie(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=a3ba7855&i=' + imdbid)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(result => result);
}

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=a3ba7855&s=' + keyword)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === "False"){
                throw new Error(response.Error);
            }
            return response;
        });
}

function showCards (element) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src=${element.Poster} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${element.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${element.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" 
                        data-bs-target="#movieDetailModal" data-imdbid="${element.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail (result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src=${result.Poster} class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${result.Title} (${result.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${result.Genre}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${result.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}