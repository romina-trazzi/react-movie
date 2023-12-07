const Navbar = () => {


    return (

        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.9)"}}>
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
                        
                        <div class="d-flex align-items-center">
                        <span class="material-symbols-outlined" style={{color: "blueviolet", fontSize:"35px"}}> movie_info </span>
                            <span style={{color:"white", paddingLeft:"10px", paddingTop:"3px", fontWeight:"600"}}> React Bootstrap Api Movie App</span>
                        </div>
                       
                   
                        <form role="search">
                            <div class="d-flex align-items-center input-group">
                                <div class="input-group-text" id="basic-addon1"> 
                                    <span class="material-symbols-outlined"> search </span>
                                </div>
                                <input type="search" class="form-control" placeholder="Search a movie title" aria-label="Search" aria-describedby="basic-addon1"/>
                                <button class="btn btn-outline-light" type="submit">Search</button>
                            </div>
                        </form>

                    </div>

                </div>
            </nav>
        </div>
    )

}

export default Navbar


