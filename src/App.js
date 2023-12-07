// Style //
import './App.css';

// Components //
import Navbar from './components/navbar';
import MovieCard from './components/movieCard';


// Hooks //


// Data //


function App() {

    return (
      <>
         <header>
            <Navbar/>
         </header>

         <main>
            <div class="movie_list_container d-flex flex-wrap justify-content-around">
               <MovieCard/>
               <MovieCard/>
               <MovieCard/>
               <MovieCard/>
            </div>
         </main>

         <footer>

         </footer>
      
      
      </>
    

    
    )
}

export default App