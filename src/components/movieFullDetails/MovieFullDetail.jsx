import './MovieFullDetails.css';
import { FaStar } from "react-icons/fa";

function MovieFullDetail({movieDetails}) {

  const {title, year, runtime, genre, director, actors, plot, language, country, poster, rated } = movieDetails

  return (
    <div>
      <div className='movie_details_container pb-5 px-5'>
        <div>
          <h4>Movie Details</h4>
          <div className="row d-flex justify-content-center border border-light-subtle pt-5 pb-5">

            <div className="col-auto content">
              
              <div className="d-flex justify-content-center title_block" style={{ width: '250px'}}>
                <span>{title}</span>
              </div>

              {/* Central block of movie details */}
              <div className='d-flex flex-row central_block pt-3 pb-3'>
                <img src={poster} alt='movie_poster' style={{ width: '250px', height:"300px"}}/>
                
                <div className="details_container d-flex flex-column justify-content-between ms-5" style={{textAlign: 'left'}}>
                  <span className="pb-1">Title: {title}</span>
                  <span className="pb-1">Year: {year}</span>
                  <span className="pb-1">Duration: {runtime}</span>
                  <span className="pb-1">Genre: {genre}</span>
                  <span className="pb-1">Director: {director}</span>
                  <span className="pb-1">Actors: {actors}</span>
                  <span className="story_container">
                    <span className="pb-1 story">Plot: {plot}</span>
                  </span>  
                  <span className="pb-1">Language: {language}</span>  
                  <span className="pb-1">Country: {country}</span>  
                  <span className="pb-1 d-flex stars"> Rated: {
                    Array.from({ length: rated }, (_, index) => (
                    <FaStar key={index} />))
                    }
                  </span>
                </div>
              </div>
              
              <div className="d-flex justify-content-center year_block" style={{ width: '250px'}}>
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