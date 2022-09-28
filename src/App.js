import {useEffect} from "react";
import MovieCard from "./MovieCard";
import './App.css';
// import SearchIcon from './search.svg';

const API_URL = '';
const query = 'Spiderman';
const movie1 = {
    "Title": "Amazing Spiderman",
    "Year": "2012",
    "imdbID": "tt12345",
    "Type": "movie",
    "Poster": "N/A"
}

function App() {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies({ query });
    }, []);
    return (
        <div className="app">
            <h1>Moovies</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={query}
                    onChange={() => { } } />
                {/* <img
                src={SearchIcon}
                alt="Search Icon"
                onClick={() => {}}
            /> */}
            </div>

            <div className="container">
                
               <MovieCard movie1={movie1}/>

            </div>
        </div>
    );
}

export default App;