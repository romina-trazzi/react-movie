import './MovieFullDetails.css';

function MovieFullDetail({movieDetails}) {

  const {title, year,runtime, rated, genre, actors, plot, poster } = movieDetails

  return (
    <div>
      <div className='movie_detail_container pb-5 px-5'>
        <div>
          <h4>Movie Details</h4>
          <div className="row d-flex justify-content-center border border-light-subtle pt-5 pb-5">

            <div className="col-auto">
              
              <div className="d-flex justify-content-center" style={{ width: '250px'}}>
                <span>{title}</span>
              </div>

              {/* Central block of movie details */}
              <div className='d-flex flex-row pt-3 pb-3'>
                <img src={poster} alt='movie_poster' style={{ width: '250px', height:"300px"}}/>
                
                <div className="d-flex flex-column ms-5">
                  <span className="pb-1">Duration: {runtime}</span>
                  <span className="pb-1">Rated: {rated}</span>
                  <span className="pb-1">Genre: {genre}</span>
                  <span className="pb-1">Actors: {actors}</span>
                  <span className="pb-1">Plot: {plot}</span>
                </div>
              
              </div>
              
              <div className="d-flex justify-content-center" style={{ width: '250px'}}>
                <span>{year}</span>
              </div>
                
            </div>

           

          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieFullDetail