const Navbar = () => {


    return (

        <div className="container-fluid p-0">
            <nav className="navbar  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
                        <div class="d-flex align-items-center">
                            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24"/>
                            <span style={{color:"white", paddingLeft:"10px"}}> React Movie App</span>
                        </div>
                       
                        <form role="search">
                            
                            <div class="d-flex align-items-center input-group">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="search" class="form-control" placeholder="Search a movie title" aria-label="Search" aria-describedby="basic-addon1" style={{width:"500px"}}/>
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


