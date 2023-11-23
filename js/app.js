// alert('Welcome to my website')
function DisplayMovieData(){
const API_key = 'b6f0e090afd400b899a43baf1fcbc6ce';
const API_acess_token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwZTA5MGFmZDQwMGI4OTlhNDNiYWYxZmNiYzZjZSIsInN1YiI6IjY1NWUzMWViNGMxZDlhMDBhYzc4YTA4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9ifaR3mzsEOrBKnqP_hhh9CS3XVrbgj87dDwTU6XAI'

//algortime
 function DisplayMovieData() {
    const API_Key = "af014cc627e15ec352fdd5b87c73d12a";
    const API_access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwZTA5MGFmZDQwMGI4OTlhNDNiYWYxZmNiYzZjZSIsInN1YiI6IjY1NWUzMWViNGMxZDlhMDBhYzc4YTA4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9ifaR3mzsEOrBKnqP_hhh9CS3XVrbgj87dDwTU6XAI"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_access_token}`
        }
      };
    
      fetch('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwZTA5MGFmZDQwMGI4OTlhNDNiYWYxZmNiYzZjZSIsInN1YiI6IjY1NWUzMWViNGMxZDlhMDBhYzc4YTA4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9ifaR3mzsEOrBKnqP_hhh9CS3XVrbgj87dDwTU6XAI', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

};

    // Get a reference to the "myText" div element
    const myTextDiv = document.getElementById("myText");

    // Iterate over the movies array and update the content of the div
    movies.forEach((movie) => {
    // Use a template literal to create the paragraph element with movie title
    const paragraph = document.createElement("p");
    paragraph.textContent = `Movie Title: ${movie.title}`;

    // Append the paragraph element to the "myText" div
    myTextDiv.appendChild(paragraph);

    <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" class="card-img-top" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
});

