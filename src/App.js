import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>The theatre</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
























// const Person = (props) => {
//   return(
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.Lastname}</h2>
//     <h3>Age:34</h3>
//     </>
//   )
// }




// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() =>{

//   } )

//   return (
//     <div className="App">


//       <button onClick={() => setCounter((prevCount) => prevCount-1) } >-</button>
//       <h1> {counter} </h1>
//       <button onClick={() => setCounter((prevCount) => prevCount+1) } >+</button>







//      {/* <Person name = {'Gilda'} Lastname = {'Pete'} />
//      <Person Lastname = {'Pete'} />
//      <Person/>
//      <Person/> */}
//     </div>
//   );
// }

export default App;
