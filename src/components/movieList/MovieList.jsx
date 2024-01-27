import './movielist.css';

// Icons 
import { FaHeart } from "react-icons/fa";

function MovieList({ movies, onFavourite }) {

  return (
    <div className='movie_container d-flex flex-wrap justify-content-center align-items-baseline'>
       
      {movies.map((movie, index) => {
        return (
          <div key={index} className='d-flex flex-column align-items-center justify-content-around p-5'
          style={{width: "20%"}}>
            <span className='pb-3'>{movie.Title}</span>
            <img src={movie.Poster} alt='movie_poster' style={{ width: '200px', cursor:'pointer' }}/>
            <span className='pt-3'> {movie.Year}</span>
            <button className='p-1 mt-3' onClick={()=> onFavourite(movie)}> Add to favourites <FaHeart /> </button> 
          </div>
        );
      })}

    </div>
  );
}

export default MovieList;
