import { useState,useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";


function App() {
  const [movies, setMovies]=useState()
  const movieOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc78779a39mshb82d92679ac254dp10cf89jsn130914269d42',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
}; 
useEffect(()=>{
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', movieOptions)
    .then(res => res.json())
    .then(data => setMovies(data.data))
},[])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies movies={movies}/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
