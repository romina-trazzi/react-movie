function MovieFullDetail({movieDetails}) {

  const {title, year,runtime, rated, genre, actors, plot, poster } = movieDetails

  return (
    <div>
      <span>{title}</span>
      <span>{year}</span>
      <span>{runtime}</span>
      <span>{rated}</span>
      <span>{genre}</span>
      <span>{actors}</span>
      <span>{plot}</span>
    </div>
  )
}

export default MovieFullDetail