function ButtonFavourite({setIsClicked, children}) {
  return (
    <button className="btn btn-secondary m-5" type="button" style={{outlineColor: 'blueviolet', width:"fit-content"}}  onClick={()=> setIsClicked((prev)=> !prev)}>{children}</button>
      
    
  )
}

export default ButtonFavourite




           