let movieApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
const imgPath = 'https://image.tmdb.org/t/p/w1280'
const movieSearch = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
showMovies(movieApi);

function showMovies(api){
    fetch(api)
    .then(res => res.json())
    .then(data => {
        if(data.results == ''){
            document.querySelector('.movie-list').innerHTML =  `Not Found`
        }
        console.log(data)
        console.log(data.results)
        data.results.forEach(data => {
            let movieTitle = data.title
            let movieImg = data.poster_path
            document.querySelector('.movie-list').innerHTML += ` 
            <div class="container">
                <img src="${imgPath + movieImg}" alt="img-movie" class="img--movie">
                <h1 class="Title">${movieTitle}</h1>
            </div>`
        });
      
    })
}
let searchBar = document.querySelector('.search-bar')
const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('.movie-list').innerHTML = ``
    if(searchBar.value){
        showMovies(movieSearch + searchBar.value)
        searchBar.value = ''
    }
   
})