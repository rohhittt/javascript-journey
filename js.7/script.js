const movies = ["The Matrix", "Inception", "Interstellar", "The Dark Knight", "Pulp Fiction"];
const movielist = document.getElementById("movielist");
const addMovie = document.getElementById("AddMovie");
const removeMovie = document.getElementById("RemoveMovie");
const removeFirstMovie = document.getElementById("RemoveFirst");
const moviecount = document.getElementById("moviescount");
const movieInput = document.getElementById("movieInput");

function displayMovies() {
    moviecount.textContent = `Total Movies: ${movies.length}`;
    movielist.innerHTML = "";
    for (let i =0; i < movies.length;i++) {
        movielist.innerHTML += `<p>${movies[i]}</p>`;
    }
}

addMovie.addEventListener("click", function () {
    const newMovie = movieInput.value.trim();

    if (newMovie === "") {
        return;
    }

    movies.push(newMovie);
    movieInput.value = "";
    displayMovies();
});

removeMovie.addEventListener("click",function(){
    movies.pop();
    displayMovies();
})

removeFirstMovie.addEventListener("click",function(){
    movies.shift();
    displayMovies();
})

displayMovies();

