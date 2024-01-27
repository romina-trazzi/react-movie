function ButtonSearch({onMovieRequest, children}) {
  return (
    <button onClick={() => getMovieRequest(searchValue)}> {children} </button>
  )
}

export default ButtonSearch