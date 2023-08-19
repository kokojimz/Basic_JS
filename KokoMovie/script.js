const showCards = element => {
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
};

const showMovieDetail = result => {
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
};

$('.search-button').on('click',function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=a3ba7855&s=' + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let card = '';
            movies.forEach(element => {
                card += showCards(element);
            });
            $('.movie-container').html(card);
            
    
            //ketika tombol di klik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=a3ba7855&i=' + $(this).data("imdbid"),
                    success: result => {
                        const movieDetail = showMovieDetail(result);     
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});