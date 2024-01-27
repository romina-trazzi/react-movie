// Style //
import './App.css';

// Components //
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movieList/MovieList';
import MovieFavourite from './components/movieFavourite/MoviesFavourite';

// Hooks //
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favouriteMovie, setFavouriteMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  //  Api request
  const getMovieRequest = async (searchValue) => {
    let allMovies = [];
    let filteredMovies = [];

    // Fetch 5 pages of movies 
    for (let page = 1; page <= 2; page++) {
      const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&page=${page}&apikey=eb1262b`
      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
        filteredMovies = allMovies.filter(movie => movie.Poster !== "N/A" && movie.Title.toLowerCase().includes(searchValue.toLowerCase()));
      };
    }
    setMovies(filteredMovies);
  };

  // Handler Functions
  function handleSearchValue(event) {
    setSearchValue(event.target.value);
  }

  const handleFavourite = (movie) => {
    setFavouriteMovie((prev) => [...prev, movie]);
  }

  return (
    <>
      <header>
        <Navbar onSearch={handleSearchValue} onMovieRequest={getMovieRequest}/>
      </header>

      <main>
        <div className='movie_list_container'>
          {movies.length > 0 ? <>
            <div className='d-flex flex-direction-column justify-content-center align-content-center'> 
              <MovieList movies={movies} onFavourite={handleFavourite}/> 
            </div>
            <button className="m-5" onClick={()=> setIsClicked((prev)=> !prev)}>Show\Hide favourites</button> 
            {isClicked && <MovieFavourite favouriteMovie={favouriteMovie}/>}
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