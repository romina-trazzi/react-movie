// Icons 
import { FaHeart } from "react-icons/fa";

function MovieList({ movies, favouriteMovies, onFavourite, onMovieDetails}) {

  return (
    <div className='movie_container d-flex flex-wrap justify-content-center align-items-baseline'>
       
      {movies.map((movie) => {
        const isFavourite = favouriteMovies.some(favMovie => favMovie.imdbID === movie.imdbID);

        const addFavouriteButton = <button className='p-1 mt-3' onClick={()=> onFavourite(movie.imdbID, "add")}> Add to favourites 
                                      <FaHeart style={{marginBottom: '4px', paddingLeft: '5px'}}/> 
                                    </button> 

        const removeFavouriteButton = <button className='p-1 mt-3' onClick={()=> onFavourite(movie.imdbID, "remove")}> Remove from favourites 
                                        <FaHeart style={{color: "red", marginBottom: '4px', paddingLeft: '5px'}}/> 
                                      </button> 
        
        return (
          <div key={movie.imdbID} className='d-flex flex-column align-items-center justify-content-around p-5' style={{width: "20%"}}>
            <span className='pb-4'>{movie.Title}</span>

            <div className="image-container" onClick={()=> onMovieDetails(movie.imdbID)}>
              <img src={movie.Poster} alt='movie_poster' style={{width: '250px', height:"300px"}}/>
              <div className="d-flex align-items-center overlay"> </div>
            </div>
          
            <span className='pt-3'> {movie.Year}</span>
            {isFavourite ? removeFavouriteButton : addFavouriteButton}
          
          </div>
        );
      })}

    </div>
  );
}

export default MovieList;
