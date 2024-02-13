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
    imdbID:"",
  });

  // Boolean values state manager //
  const [isClicked, setIsClicked] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  
  //  Api request for list of movies
  const getMovieRequest = async (searchValue) => {
    
    // Close always movieDetails component 
    setShowMovieDetails(false);
      
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

  // Api request (single movie details)
  const handleSingleMovieDetails = async (imdbCode) => {
    try {

      /* Call API single film details */
      const url = `http://www.omdbapi.com/?i=${imdbCode}&apikey=5d78aa7b`
      const response = await fetch(url);
      const data = await response.json();

      // If showMovieDetails is true and when cover is clicking the imdbCode is the same, close window details
      if (movieDetails.imdbID === imdbCode && showMovieDetails) {
        setShowMovieDetails(false);

      // Else show a new movie details window
      } else {

        /* If data exists, populate movieDetails object state */
        if (data) {
          setMovieDetails({
            title: data.Title,
            year: data.Year,
            runtime: data.Runtime,
            genre: data.Genre,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            language: data.Language,
            country: data.Country,
            imdbID: data.imdbID,
            poster: data.Poster,
            rated: data.imdbRating
          });
          
          // Then set show movie details to the opposite value
          setShowMovieDetails(true);
        }
      }
  
      // Handle Error
      if (!response.ok) {
        throw new Error(`Errore nella risposta del server: ${response.status}`);
      }
      
    } catch (error) {
      console.error("Errore durante la richiesta dei film:", error); 
    }
  };

  // Handle add and remove movies from favourite list
  const handleFavourites = (choosenMovieID, typeButton) => {

    // Get choosen movie by id
    const choosenMovie = movies.find((favMovie) => favMovie.imdbID === choosenMovieID);
    
    if (typeButton === "add") {
      setFavouriteMovies((prev) => [...prev, choosenMovie]);
    } else if (typeButton === "remove") {
      setFavouriteMovies((prev) => [...prev.filter((movie) => movie.imdbID !== choosenMovie.imdbID)]);
    }
  };
  
  return (
    <>
      <header>
        <Navbar onMovieRequest={getMovieRequest}/>
      </header>

      <main>
        {/* If showMovieDetails is true, show MovieFullDetails component */}
        {showMovieDetails ? <MovieFullDetails movieDetails={movieDetails}/> : ""}
        
        <div className='movie_list_container'>
          {movies.length > 0 ?
          <>
            <div className='d-flex flex-column justify-content-center align-content-center'>
              
              {/* MovieList + ButtonFavourite */}
              <MovieList movies={movies} favouriteMovies={favouriteMovies} onFavourite={handleFavourites} 
              setFavouriteMovies={setFavouriteMovies} onMovieDetails={handleSingleMovieDetails}/>
              
              <ButtonFavourite setIsClicked={setIsClicked}>Show\Hide favourites</ButtonFavourite>

              <hr/>
              
              {/* If isClicked is true, show MovieFavourite component */}
              {isClicked ? <MovieFavourite favouriteMovies={favouriteMovies}/> : ""}
            
            </div>
            
          </>
          : <p style={{textAlign:"center"}}> No movie found </p>}

        </div>
      </main>

      <footer className='d-flex flex-wrap justify-content-center align-items-center'>
        <span> Created by ~ Romina Trazzi 2024 ~ </span>
      </footer>
    </>
  );
}

export default App;


