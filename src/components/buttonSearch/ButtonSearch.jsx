function ButtonSearch({onClick, children}) {
  return (
    <button className="btn" style={{outlineColor: 'blueviolet'}} onClick={onClick}> {children} </button>
  )
}

export default ButtonSearch