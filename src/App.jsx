// Style //
import './App.css';

// Components //
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movieList/MovieList';
import ButtonFavourite from './components/buttonFavourite/ButtonFavourite';
import MovieFavourite from './components/movieFavourite/MoviesFavourite';
import MovieFullDetails from './components/movieFullDetails/MovieFullDetail';

// Hooks //
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [favouriteMovie, setFavouriteMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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

          // Rules to Filter movies
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

      setMovies(filteredMovies);


    } catch (error) {

      // Stampare dettagli sugli errori nella console
      setError(error.message);
      console.error("Errore durante la richiesta dei film:", error);
    }

  };

  // Handler Functions
  const handleFavourites = (choosenMovie) => {
    if (!favouriteMovie.some((favMovie) => favMovie.Title === choosenMovie.Title)) {
      setFavouriteMovie((prev) => [...prev, choosenMovie]);
    }
  }

  const handleSingleMovieDetails = async (imdbCode) => {
    try {
      const url = `http://www.omdbapi.com/?i=${imdbCode}&apikey=5d78aa7b`
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setIsClicked(true);
      }
    
      // Handle Error
      if (!response.ok) {
        throw new Error(`Errore nella risposta del server: ${response.status}`);
      }

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
        {isClicked && <MovieFullDetails/> }
        <div className='movie_list_container'>
          {movies.length > 0 ?
          <>
            <div className='d-flex flex-column justify-content-center align-content-center'>
              <MovieList movies={movies} onFavourite={handleFavourites} onMovieDetails={handleSingleMovieDetails}/>
              <ButtonFavourite setIsClicked={setIsClicked}>Show\Hide favourites</ButtonFavourite>
              {isClicked && <MovieFavourite favouriteMovie={favouriteMovie}/>}
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