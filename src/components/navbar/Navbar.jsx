import ButtonSearch from "../buttonSearch/buttonSearch";
import "./Navbar.css";

// Hooks //
import { useRef } from 'react';

const Navbar = ({ onMovieRequest }) => {

  const inputValue = useRef();
  
  // Handler Functions
  const handleSubmit = (event) => {
    event.preventDefault(); 
    onMovieRequest(inputValue.current.value);
    inputValue.current.value = '';
  };

  return (
    <div className='container-fluid p-0'>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary'
        data-bs-theme='dark'
        style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)' }}>
      
        <div className='container-fluid center-container'>
          <div className='my_nav d-grid'>
            <span
              className='nav_icon material-symbols-outlined'
              style={{ color: 'blueviolet', fontSize: '35px' }}
            >
              movie_info
            </span>
            <span className='nav_text h3 m-0'> React Bootstrap Api Movie App</span>
          </div>

          <form role='search' style={{ paddingTop: '3px' }} onSubmit={handleSubmit}>
            <div className='d-flex align-items-center input-group'>
              <div className='input-group-text' id='basic-addon1'>
                <span className='material-symbols-outlined'> search </span>
              </div>

              <input
                type='search'
                className='form-control'
                placeholder='Search a movie title'
                aria-label='Search'
                aria-describedby='basic-addon1'
                ref={inputValue}
              />

              {/* onClick={() => onMovieRequest(searchValue)}*/}
              <ButtonSearch type="submit">Search</ButtonSearch>

            </div>
          </form>
        </div>
      
      </nav>
    </div>
  );
};

export default Navbar;
