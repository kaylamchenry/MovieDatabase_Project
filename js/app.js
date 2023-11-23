// alert('Welcome to my website')

// Define the API key and access token
const API_key = 'af014cc627e15ec352fdd5b87c73d12a';
const API_access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwZTA5MGFmZDQwMGI4OTlhNDNiYWYxZmNiYzZjZSIsInN1YiI6IjY1NWUzMWViNGMxZDlhMDBhYzc4YTA4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9ifaR3mzsEOrBKnqP_hhh9CS3XVrbgj87dDwTU6XAI';

// Get a reference to the "myText" div element
const myTextDiv = document.getElementById("myText");

// Function to display movie data
function displayMovieData() {
    // Replace the fetch URL with the correct API endpoint
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular'; // Replace with your desired endpoint

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_access_token}`
        }
    };

    // Fetch data from the API
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            // Iterate over the results and update the content of the div
            data.results.forEach((movie) => {
                // Use a template literal to create the paragraph element with movie title
                const paragraph = document.createElement("p");
                paragraph.textContent = `Movie Title: ${movie.title}`;

                // Append the paragraph element to the "myText" div
                myTextDiv.appendChild(paragraph);

                // Create a card element for each movie
                const card = document.createElement("div");
                card.className = "card";
                card.style = "width: 18rem;";

                // Create an image element for the movie poster
                const image = document.createElement("img");
                image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                image.className = "card-img-top";
                image.alt = "Movie Poster";

                // Create a card body with title and description
                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                cardBody.innerHTML = `
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                `;

                // Append the image and card body to the card
                card.appendChild(image);
                card.appendChild(cardBody);

                // Append the card element to the "myText" div
                myTextDiv.appendChild(card);
            });
        })
        .catch(err => console.error(err));
}

// Call the function to display movie data
displayMovieData();
