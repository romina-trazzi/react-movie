import "./MoviesFavourite.css"


const MovieFavourite = ({favouriteMovies}) => {

return (
    <div className="favourite d-flex flex-wrap">
            {favouriteMovies.map((movieFav, index) => {
               
                return (
                    <div className="d-flex flex-column align-items-center justify-content-around p-5">
                        <div key={index} className='d-flex flex-column align-items-center justify-content-around p-5'>
                            <span className='pb-3'>{movieFav.Title}</span>
                            <img src={movieFav.Poster} alt='movie_poster' style={{ cursor:'pointer' }}/>
                            <span className='pt-3'> {movieFav.Year}</span>
                        </div>

                    </div>
                )})

            }
          
    </div>
    )
}

export default MovieFavourite


       
      

