

function MovieFullDetail({movie}) {
  return (
    <div>
        <span>{movie.Title}</span>
        <span className='pt-3'> {movie.Year}</span>
       <img src={movie.Poster} alt='movie_poster' style={{width: '250px', height:"300px"}}/>
    </div>
  )
}

export default MovieFullDetail