import "./buttonFavourite.css"


function ButtonFavourite({setIsClicked, children}) {
  return (
    <button 
      className="btn btn-secondary button_fav" 
      type="button" 
      style={{outlineColor: 'blueviolet', width:"fit-content", margin: "2rem"}}  
      onClick={()=> setIsClicked((prev)=> !prev)}>{children}
    </button>
  )
}

export default ButtonFavourite




           