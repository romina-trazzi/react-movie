// Style //
import './App.css';

// Components //
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movieList/MovieList';
import MovieFavourite from './components/movieFavourite/MoviesFavourite';
import ButtonFavourite from './components/buttonFavourite/ButtonFavourite';
import MovieFullDetails from './components/movieFullDetails/MovieFullDetail';

// Hooks //
import { useState } from 'react';

function App() {

  // Movies lists state manager //
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    year: "",
    runtime: "",
    rated: "",
    genre: "",
    actors: "",
    plot: "",
    poster: "",
  });

  // Boolean values state manager //
  const [isClicked, setIsClicked] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  

  //  Api request
  const getMovieRequest = async (searchValue) => {
    try {
      let allMovies = [];
      let filteredMovies = [];

      // Fetch 2 pages of movies
      for (let page = 1; page <= 2; page++) {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&page=${page}&apikey=5d78aa7b`
        const response = await fetch(url);
        const data = await response.json();

        if (data.Search) {
          allMovies = [...allMovies, ...data.Search];

          // Rules to filter movies
          filteredMovies = allMovies.filter(movie =>
          movie.Title.toLowerCase().includes(searchValue.toLowerCase()) &&
          movie.Title.length < 30 &&
          movie.Poster !== "N/A")
        };

        // Handle Error
        if (!response.ok) {
          throw new Error(`Errore nella risposta del server: ${response.status}`);
        }
      }

      // Set filtered movies
      setMovies(filteredMovies);


    } catch (error) {

      // Print custom error message in console
      setError(error.message);
      console.error("Errore durante la richiesta dei film:", error);
    }

  };

  // Handler Functions
  const handleFavourites = (choosenMovie) => {
    
    /* Returns true if doesn't exist at least one movie which has the same title as the choosen movie
    If so, set a new favourite movie into favouriteMovies array state keeping the previous ones */
    
    if (!favouriteMovies.some((favMovie) => favMovie.Title === choosenMovie.Title)) {
      setFavouriteMovies((prev) => [...prev, choosenMovie]);
    }
  }

  const handleSingleMovieDetails = async (imdbCode) => {
    try {
      const url = `http://www.omdbapi.com/?i=${imdbCode}&apikey=5d78aa7b`
      const response = await fetch(url);
      const data = await response.json();

      /* If data exists, populate movieDetails object state */
      if (data) {
        setMovieDetails({
          title: data.Title,
          year: data.Year,
          runtime: data.Runtime,
          rated: data.Rated,
          genre: data.Genre,
          actors: data.Actors,
          plot: data.Plot,
          poster: data.Poster,
        });

        // Then set show movie details to the opposite value
        setShowMovieDetails(true);
      }
    
      // Handle Error
      if (!response.ok) {
        throw new Error(`Errore nella risposta del server: ${response.status}`);
      }

      return data

    } catch (error) {
      // Stampare dettagli sugli errori nella console
      console.error("Errore durante la richiesta dei film:", error);
    }

  };

  return (
    <>
      <header>
        <Navbar onMovieRequest={getMovieRequest}/>
      </header>

      <main>

        {/* If showMovieDetails is true, show MovieFullDetails component */}
        {showMovieDetails && <MovieFullDetails movieDetails={movieDetails}/>}
        
        <div className='movie_list_container'>
          {movies.length > 0 ?
          <>
            <div className='d-flex flex-column justify-content-center align-content-center'>
              
              {/* MovieList + ButtonFavourite */}
              <MovieList movies={movies} onFavourite={handleFavourites} onMovieDetails={handleSingleMovieDetails}/>
              <ButtonFavourite setIsClicked={setIsClicked}>Show\Hide favourites</ButtonFavourite>
              
              {/* If isClicked is true, show MovieFavourite component */}
              {isClicked && <MovieFavourite favouriteMovies={favouriteMovies}/>}
            
            </div>
          </>
          : <p style={{margin: "0"}}> No movie found </p>}
        </div>
      </main>

      <footer className='d-flex flex-wrap justify-content-center'>
        <span> Created by ~ Romina Trazzi 2024 ~ </span>
      </footer>
    </>
  );
}

export default App;