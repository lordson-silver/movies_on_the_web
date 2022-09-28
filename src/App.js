import {useState,useEffect} from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6f78e362';
// const API_KEY = '6f78e362';
const query = 'Spiderman';
// const movies = {
//     "Title": "Amazing Spiderman",
//     "Year": "2012",
//     "imdbID": "tt12345",
//     "Type": "movie",
//     "Poster": "N/A"
// }

function App() {

    const [movies, setMovies] = useState([]);
    const [searctText, setSearchText] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies({ query });
    }, []);
    return (
        <div className="app">
            <h1>Movies on the web</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searctText}
                    onChange={(e) => setSearchText(e.target.value) } />
                <img
                src={SearchIcon}
                alt="Search Icon"
                onClick={() => searchMovies(searctText)}
            />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container"> 
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>No movies found</h1>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;