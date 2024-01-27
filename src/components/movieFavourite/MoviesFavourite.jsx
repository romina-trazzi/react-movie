const MovieFavourite = ({favouriteMovie}) => {
    return (
        <div className="favourite">
            {favouriteMovie.map((movieFav) => {
                return (
                    <div>
                        <h3 key={movieFav.Title}>{movieFav.Title} </h3>
                        <img src={movieFav.Poster}></img>
                        <span>{movieFav.Year}</span>
                    </div>
                )})

            }
          
        </div>
    )
}

export default MovieFavourite




